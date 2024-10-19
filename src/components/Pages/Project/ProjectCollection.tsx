'use client'
import { useEffect, useState } from "react";
import { ProjectApiResponse, ProjectType } from "./ProjectInfo";
import Image from "next/image";
import Link from "next/link";
import API from "@/app/config/config";

const ProjectCollection = () => {
    const [projects, setProjects] = useState<ProjectType[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState<string>('All'); // Default to 'All'

    const categories = ['All', 'Fullstack', 'App', 'Design']; // Include 'All' option

    const fetchProjects = async (category: string = '') => {
        setIsLoading(true);
        setError(false);
        try {
            // If category is 'All', fetch all projects
            const url = category && category !== 'All' ? `/project?category=${category}` : '/project'; // Only use the endpoint since baseURL is set in API

            // Using axios to make the GET request
            const { data }: { data: ProjectApiResponse } = await API.get(url);

            setIsLoading(false);
            setProjects(data.projects); // Update state with latest projects
        } catch (error) {
            setIsLoading(false);
            setError(true);
            console.error('Error fetching projects:', error);
        }
    };

    const handleCategoryChange = (category: string) => {
        setSelectedCategory(category);
        fetchProjects(category); // Fetch projects based on selected category
    };

    useEffect(() => {
        fetchProjects(); // Fetch all projects by default on initial load
    }, []);

    if (error) {
        return <p>Error fetching projects. Please try again later.</p>;
    }

    return (
        <>
            <div className="flex gap-2 mb-3">
                {categories.map((category) => (
                    <button
                        key={category}
                        onClick={() => handleCategoryChange(category)}
                        className={`px-3 py-1 rounded-xl shadow-md transition-colors duration-500 ease-in ${category === selectedCategory ? 'border border-black dark:border-white' : ''}`}
                    >
                        {category}
                    </button>
                ))}
            </div>
            <main className='grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3'>
                {isLoading &&
                    <> <ProjectLoader /> <ProjectLoader /> <ProjectLoader /></>
                }
                {!isLoading && !error && projects.map((project, index) => (
                    <ProjectComponent project={project} key={index} />
                ))}
            </main>
        </>

    );
};


const ProjectComponent = ({ project }: { project: ProjectType }) => {
    return (
        <div className='flex flex-col gap-2 shadow-lg px-5 py-8 rounded-lg dark:bg-gray-800'>
            <div className='w-full bg-gray-300 aspect-video rounded-lg'>
                <Image src={project.image} width={400} height={10} alt={project.name} className='w-full rounded shadow-lg object-cover dark:filter dark:brightness-90' />
            </div>
            <h2 className='text-xl font-semibold text-gray-600 mt-2 dark:text-gray-400'>{project.name}</h2>
            <Link href={project.link} target="_blank" className='text-gray-500 font-semibold'>Demo →</Link>
        </div>

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