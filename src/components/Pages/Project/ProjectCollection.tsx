'use client'
import { useEffect, useState } from "react";
import { ProjectApiResponse, projectType } from "./ProjectInfo";
import Image from "next/image";
import Link from "next/link";

const ProjectCollection = () => {
    const [projects, setProjects] = useState<projectType[]>([]);
    const fetchProjects = async () => {
        try {
            const res = await fetch('https://portfolio-server-qjh8.onrender.com/project', {
                cache: 'no-store'
            });
            if (!res.ok) {
                throw new Error('Failed to fetch projects');
            }
            const projectData: ProjectApiResponse = await res.json();
            setProjects(projectData.projects); // Update state with latest projects
        } catch (error) {
            console.error('Error fetching projects:', error);
        }
    };
    useEffect(() => {
        fetchProjects();
    }, []); 

    return (
        <main className='grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3'>
            {projects.map((project, index) => (
                <ProjectComponent project={project} key={index} />
            ))}
        </main >
    )
}

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

export default ProjectCollection