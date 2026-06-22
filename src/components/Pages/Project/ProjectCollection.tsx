'use client'
import { useEffect, useState, useCallback, useRef } from "react";
import { ProjectApiResponse, ProjectType } from "./ProjectInfo";
import Image from "next/image";
import Link from "next/link";
import API from "@/app/config/config";
import { motion, AnimatePresence } from "framer-motion";
import projectsData from "./myPortfolio.projects.json";

const ITEMS_PER_PAGE = 9;

const ProjectCollection = () => {
    const [projects, setProjects] = useState<ProjectType[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState<string>('All');
    const [currentPage, setCurrentPage] = useState(1);
    const sectionRef = useRef<HTMLDivElement>(null);

    const categories = ['All', 'Fullstack', 'App', 'Frontend']; // Include 'All' option
    const API_TIMEOUT = 5000; // 5 seconds timeout

    // Category ID to name mapping
    const categoryMapping: { [key: string]: string } = {
        '671315ffa43001594b20f5cb': 'App',
        '671315f9a43001594b20f5c9': 'Fullstack',
        '67131603a43001594b20f5cd': 'Frontend',
    };

    const fetchProjects = useCallback(async (category: string = '') => {
        setIsLoading(true);
        setError(false);
        try {
            const url = category && category !== 'All' ? `/project?category=${category}` : '/project';

            // Create a timeout promise
            const timeoutPromise = new Promise<never>((_, reject) =>
                setTimeout(() => reject(new Error('API timeout')), API_TIMEOUT)
            );

            // Race between API call and timeout
            const { data }: { data: ProjectApiResponse } = await Promise.race([
                API.get(url),
                timeoutPromise
            ]);

            setIsLoading(false);
      
            // Sort by latest first
            const sortedProjects = data.projects.sort((a: ProjectType, b: ProjectType) => {
                const dateA = new Date(a.createdAt).getTime();
                const dateB = new Date(b.createdAt).getTime();
                return dateB - dateA;
            });
            setProjects(sortedProjects);
        } catch (error) {
            // If API fails or times out, use fallback data from JSON
            console.error('Error fetching projects, using fallback data:', error);
            setIsLoading(false);

            // Filter projects from JSON based on category
            let filteredProjects = (projectsData as ProjectType[]).map(project => ({
                ...project,
                category: project.category
            }));

            if (category && category !== 'All') {
                filteredProjects = filteredProjects.filter(
                    (project) => categoryMapping[project.category as string] === category
                );
            }

            // Sort by latest first
            const sortedProjects = filteredProjects.sort((a: ProjectType, b: ProjectType) => {
                const dateA = new Date(a.createdAt).getTime();
                const dateB = new Date(b.createdAt).getTime();
                return dateB - dateA;
            });

            setProjects(sortedProjects);
        }
    }, []);

    const handleCategoryChange = (category: string) => {
        setSelectedCategory(category);
        setCurrentPage(1);
        fetchProjects(category);
    };

    const totalPages = Math.ceil(projects.length / ITEMS_PER_PAGE);
    const paginatedProjects = projects.slice(
        (currentPage - 1) * ITEMS_PER_PAGE,
        currentPage * ITEMS_PER_PAGE
    );

    useEffect(() => {
        fetchProjects();
    }, [fetchProjects]);

    useEffect(() => {
        if (sectionRef.current) {
            const top = sectionRef.current.getBoundingClientRect().top + window.scrollY - 80;
            window.scrollTo({ top, behavior: 'smooth' });
        }
    }, [currentPage]);

    if (error) {
        return <p>Error fetching projects. Please try again later.</p>;
    }

    return (
        <div ref={sectionRef}>
            <div className="flex gap-2 mb-3">
                {categories.map((category) => (
                    <motion.button
                        key={category}
                        onClick={() => handleCategoryChange(category)}
                        whileHover={{ y: -1 }}
                        whileTap={{ scale: 0.98 }}
                        className={`px-3 py-1 rounded-xl shadow-md transition-colors duration-500 ease-in ${category === selectedCategory ? 'border border-black dark:border-white' : ''}`}
                    >
                        {category}
                    </motion.button>
                ))}
            </div>
            <AnimatePresence mode="wait">
                <motion.main
                    key={`${selectedCategory}-${currentPage}`}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -16 }}
                    transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                    className='grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3'
                >
                    {isLoading &&
                        <> <ProjectLoader /> <ProjectLoader /> <ProjectLoader /></>
                    }
                    {!isLoading && !error && paginatedProjects.map((project, index) => (
                        <ProjectComponent project={project} key={index} />
                    ))}
                </motion.main>
            </AnimatePresence>
            {!isLoading && totalPages > 1 && (
                <div className="flex items-center justify-center gap-2 mt-6">
                    <motion.button
                        onClick={() => setCurrentPage(p => Math.max(p - 1, 1))}
                        disabled={currentPage === 1}
                        whileHover={{ y: -1 }}
                        whileTap={{ scale: 0.98 }}
                        className="px-3 py-1 rounded-xl shadow-md disabled:opacity-40 disabled:cursor-not-allowed transition-colors duration-300"
                    >
                        ←
                    </motion.button>
                    {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
                        <motion.button
                            key={page}
                            onClick={() => setCurrentPage(page)}
                            whileHover={{ y: -1 }}
                            whileTap={{ scale: 0.98 }}
                            className={`px-3 py-1 rounded-xl shadow-md transition-colors duration-300 ${page === currentPage ? 'border border-black dark:border-white' : ''}`}
                        >
                            {page}
                        </motion.button>
                    ))}
                    <motion.button
                        onClick={() => setCurrentPage(p => Math.min(p + 1, totalPages))}
                        disabled={currentPage === totalPages}
                        whileHover={{ y: -1 }}
                        whileTap={{ scale: 0.98 }}
                        className="px-3 py-1 rounded-xl shadow-md disabled:opacity-40 disabled:cursor-not-allowed transition-colors duration-300"
                    >
                        →
                    </motion.button>
                </div>
            )}
        </div>

    );
};


const ProjectComponent = ({ project }: { project: ProjectType }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{ y: -4 }}
            className='flex flex-col gap-2 shadow-lg px-5 py-8 rounded-lg dark:bg-gray-800'
        >
            <div className='w-full bg-gray-300 aspect-video rounded-lg'>
                <Image src={project.image} width={400} height={10} alt={project.name} className='w-full rounded shadow-lg object-cover dark:filter dark:brightness-90' />
            </div>
            <h2 className='text-xl font-semibold text-gray-600 mt-2 dark:text-gray-400'>{project.name}</h2>
            {project.description && (
                <p className='text-sm text-gray-500 dark:text-gray-400 line-clamp-3'>{project.description}</p>
            )}
            <Link href={project.link} target="_blank" className='text-gray-500 font-semibold'>Demo →</Link>
        </motion.div>

    )
}

const ProjectLoader = () => {
    return (
        <div className='flex flex-col gap-2 shadow-lg px-5 py-8 rounded-lg dark:bg-gray-800'>
            <div className='w-full skeleton dark:bg-gray-600 aspect-video rounded-lg mb-2'></div>
            <div className="skeleton h-6 w-24 rounded dark:bg-gray-600"></div>
            <div className="skeleton h-5 w-20 rounded dark:bg-gray-600"></div>
        </div>
    )
}

// const CategoryLoader = () => {
//     return (
//         <>
//             <div className='px-6 py-4 skeleton bg-gray-200 dark:bg-gray-600' ></div>
//             <div className='px-12 py-4 skeleton bg-gray-200 dark:bg-gray-600' ></div>
//             <div className='px-6 py-4 skeleton bg-gray-200 dark:bg-gray-600' ></div>
//             <div className='px-8 py-4 skeleton bg-gray-200 dark:bg-gray-600' ></div>
//         </>

//     )
// }

export default ProjectCollection