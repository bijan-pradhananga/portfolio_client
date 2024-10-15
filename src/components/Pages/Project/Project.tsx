import React from 'react'
import ProjectCollection from './ProjectCollection'

const Project = () => {
  return (
    <section className="max-w-screen-xl mt-4 px-6">
      <ProjectHeader />
      <ProjectCollection/>
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


export default Project