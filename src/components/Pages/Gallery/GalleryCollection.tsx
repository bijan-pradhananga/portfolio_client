'use client';

import { useCallback, useEffect, useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import API from '@/app/config/config';
import type { GalleryApiResponse, GalleryCategory, GalleryItem } from './GalleryInfo';
import galleryData from './gallery.json';

type CategoryOption = { key: 'All' | GalleryCategory; label: string };

const API_TIMEOUT = 10000;

const GalleryCollection = () => {
    const [gallery, setGallery] = useState<GalleryItem[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [selectedCategory, setSelectedCategory] = useState<CategoryOption['key']>('All');

    const categories: CategoryOption[] = useMemo(
        () => [
            { key: 'All', label: 'All' },
            { key: 'video', label: 'Video' },
            { key: 'coding', label: 'Coding' },
            { key: 'travel', label: 'Travel' },
            { key: 'others', label: 'Others' },
        ],
        []
    );

    const fetchGallery = useCallback(async (category: CategoryOption['key'] = 'All') => {
        setIsLoading(true);

        try {
            const url = category !== 'All' ? `/gallery?category=${category}` : '/gallery';

            const timeoutPromise = new Promise<never>((_, reject) =>
                setTimeout(() => reject(new Error('API timeout')), API_TIMEOUT)
            );

            const { data }: { data: GalleryApiResponse } = await Promise.race([
                API.get(url),
                timeoutPromise,
            ]);

            setGallery(data.gallery);
        } catch (e) {
            // If API fails or times out, use fallback data from JSON
            console.error('Error fetching gallery, using fallback data:', e);

            let filteredGallery = (galleryData as GalleryApiResponse).gallery.map(item => ({
                ...item,
                category: item.category
            }));

            if (category && category !== 'All') {
                filteredGallery = filteredGallery.filter(
                    (item) => item.category === category
                );
            }

            setGallery(filteredGallery);
        } finally {
            setIsLoading(false);
        }
    }, []);

    const handleCategoryChange = (category: CategoryOption['key']) => {
        setSelectedCategory(category);
        fetchGallery(category);
    };

    useEffect(() => {
        fetchGallery('All');
    }, [fetchGallery]);

    return (
        <>
            <div className="flex flex-wrap gap-2 mb-6">
                {categories.map((category) => (
                    <motion.button
                        key={category.key}
                        onClick={() => handleCategoryChange(category.key)}
                        whileHover={{ y: -1 }}
                        whileTap={{ scale: 0.98 }}
                        className={`px-3 py-1 rounded-xl shadow-md transition-colors duration-500 ease-in dark:bg-gray-800 ${
                            category.key === selectedCategory ? 'border border-black dark:border-white' : ''
                        }`}
                        type="button"
                    >
                        {category.label}
                    </motion.button>
                ))}
            </div>

            <main className="columns-1 md:columns-2 xl:columns-3 [column-gap:1rem]">
                {isLoading ? (
                    <>
                        <GalleryLoader heightClass="h-56" />
                        <GalleryLoader heightClass="h-72" />
                        <GalleryLoader heightClass="h-80" />
                        <GalleryLoader heightClass="h-64" />
                        <GalleryLoader heightClass="h-72" />
                        <GalleryLoader heightClass="h-56" />
                    </>
                ) : (
                    gallery.map((item) => <GalleryItemCard key={item._id} item={item} />)
                )}
            </main>
        </>
    );
};

const GalleryItemCard = ({ item }: { item: GalleryItem }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{ y: -3 }}
            className="mb-4 break-inside-avoid overflow-hidden bg-gray-200 dark:bg-gray-800"
        >
            {item.resourceType === 'video' ? (
                <video
                    className="w-full h-auto"
                    src={item.url}
                    controls
                    preload="metadata"
                    playsInline
                />
            ) : (
                // Using <img> here to preserve natural aspect ratio for masonry layout.
                // eslint-disable-next-line @next/next/no-img-element
                <img
                    src={item.url}
                    alt={item.publicId || 'gallery image'}
                    className="w-full h-auto object-cover"
                    loading="lazy"
                />
            )}
        </motion.div>
    );
};

const GalleryLoader = ({ heightClass }: { heightClass: string }) => {
    return (
        <div className={`mb-4 break-inside-avoid rounded-lg overflow-hidden skeleton dark:bg-gray-600 ${heightClass}`} />
    );
};

export default GalleryCollection;
