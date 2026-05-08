export type GalleryCategory = 'video' | 'coding' | 'travel' | 'others' | 'music';

export type GalleryItem = {
    _id: string;
    url: string;
    publicId: string;
    resourceType: 'image' | 'video';
    category: GalleryCategory;
    createdAt: string;
    updatedAt: string;
};

export type GalleryApiResponse = {
    gallery: GalleryItem[];
};

export const galleryInfo = {
    title: 'Gallery',
    description: '',
};
