'use client'
import { useEffect, useState } from "react";
import { ProjectApiResponse, projectType } from "./ProjectInfo";
import Image from "next/image";
import Link from "next/link";

const ProjectCollection = () => {
    const [projects, setProjects] = useState<projectType[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(false);

    const fetchProjects = async () => {
        setIsLoading(true);
        setError(false); // Reset error state before new request
        try {
            const res = await fetch('https://portfolio-server-qjh8.onrender.com/project', {
                cache: 'no-store',
            });
            if (!res.ok) {
                throw new Error('Failed to fetch projects');
            }
            const projectData: ProjectApiResponse = await res.json();
            setIsLoading(false);
            setProjects(projectData.projects); // Update state with latest projects
        } catch (error) {
            setIsLoading(false);
            setError(true);
            console.error('Error fetching projects:', error);
        }
    };

    useEffect(() => {
        fetchProjects();
    }, []);

    if (error) {
        return <p>Error fetching projects. Please try again later.</p>;
    }

    return (
        <main className='grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3'>
           {isLoading &&
             <> <ProjectLoader /> <ProjectLoader /> <ProjectLoader /></>
           }
            {!isLoading && !error && projects.map((project, index) => (
                <ProjectComponent project={project} key={index} />
            ))}
        </main>
    );
};


const ProjectComponent = ({ project }: { project: projectType }) => {
    return (
        <div className='flex flex-col gap-2 shadow-lg px-5 py-8 rounded-lg dark:bg-gray-800'>
            <div className='w-full bg-gray-300 aspect-video rounded-lg'>
                <Image src={project.image} width={400} height={10} alt={project.name} className='w-full rounded shadow-lg object-cover dark:filter dark:brightness-90 dark:border' />
            </div>
            <h2 className='text-xl font-semibold text-gray-600 mt-2 dark:text-gray-400'>{project.name}</h2>
            <Link href={project.link} className='text-gray-500 font-semibold'>Demo →</Link>
        </div>

    )
}

const ProjectLoader = () => {
    return (
        <div className='flex flex-col gap-2 shadow-lg px-5 py-8 rounded-lg dark:bg-gray-800'>
            <div className='w-full skeleton dark:bg-gray-600 aspect-video rounded-lg mb-2'>

            </div>
            <div className="skeleton h-6 w-24 rounded dark:bg-gray-600"></div>
            <div className="skeleton h-5 w-20 rounded dark:bg-gray-600"></div>
        </div>
    )

}

export default ProjectCollection