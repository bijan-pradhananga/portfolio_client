'use client'

import { useState } from "react"
import { FaGraduationCap } from "react-icons/fa6"
import { MdWork } from "react-icons/md"
import { qualificationData } from "./QualificationInfo"

const Qualification = () => {
    const [activeTab, setActiveTab] = useState<'education' | 'experience'>('education')
    const filteredData = qualificationData.filter(item => item.type === activeTab)

    return (
        <section className='max-w-screen-xl mt-4 px-6'>
            <div>
                <h1 className="font-bold text-3xl lg:text-4xl mb-5">Qualification</h1>
                <div className="flex justify-center gap-5 text-lg md:text-2xl text-gray-600 font-bold mb-3">
                    <button
                        onClick={() => setActiveTab('education')}
                        className={`flex items-center gap-1 cursor-pointer transition-colors duration-100 ease ${
                            activeTab === 'education'
                                ? 'text-blue-600 dark:text-blue-400'
                                : 'hover:text-gray-700 dark:text-gray-300 dark:hover:text-gray-500'
                        }`}>
                        <FaGraduationCap className="text-2xl" />
                        <span>Education</span>
                    </button>
                    <button
                        onClick={() => setActiveTab('experience')}
                        className={`flex items-center gap-1 cursor-pointer transition-colors duration-100 ease ${
                            activeTab === 'experience'
                                ? 'text-blue-600 dark:text-blue-400'
                                : 'hover:text-gray-700 dark:text-gray-300 dark:hover:text-gray-500'
                        }`}>
                        <MdWork className="text-2xl" />
                        <span>Experience</span>
                    </button>
                </div>
            </div>
            <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical mt-8">
                {filteredData.map((item, index) => (
                    <li key={item.id}>
                        {index !== 0 && <hr />}
                        <div className="timeline-middle">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                                className="h-5 w-5">
                                <path
                                    fillRule="evenodd"
                                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                                    clipRule="evenodd" />
                            </svg>
                        </div>
                        <div className={`${index % 2 === 0 ? 'timeline-start mb-10 md:text-end' : 'timeline-end mb-10'}`}>
                            <time className="font-mono italic">{item.period}</time>
                            <div className="text-lg font-black">{item.title}</div>
                            {item.institution}
                        </div>
                        {index !== filteredData.length - 1 && <hr />}
                    </li>
                ))}
            </ul>
        </section>

    )
}

export default Qualification