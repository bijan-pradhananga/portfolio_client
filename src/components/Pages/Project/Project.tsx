import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { projects, projectType } from './ProjectInfo'

const Project = () => {
  return (
    <section className="max-w-screen-xl mt-4 px-6">
      <ProjectHeader />
      <ProjectsContainer />
    </section>
  )
}

const ProjectHeader = () => {
  return (
    <div id="projectContainer" className='mb-6'>
      <h1 className="font-bold text-3xl lg:text-4xl mb-2">Projects</h1>
    </div>
  )
}

const ProjectsContainer = () => {
  return (
    <main className='grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3'>
      {projects.map((project,index)=>(
        <ProjectComponent project={project} key={index}/>
      ))}
    </main >
  )
}

const ProjectComponent = ({project}:{project:projectType}) => {
  return (
    <div className='flex flex-col gap-2 shadow-lg px-5 py-8 rounded-lg dark:bg-gray-800'>
      <Image src={project.image} alt="img" width={400} height={200} className='w-full rounded-lg shadow-md'/>
      <h2 className='text-xl font-semibold text-gray-600 mt-2 dark:text-gray-400'>{project.name}</h2>
      <Link href={project.link} className='text-gray-500 font-semibold'>Demo →</Link>
    </div>
  )
}


export default Project