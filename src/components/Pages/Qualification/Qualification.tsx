'use client'

import { useState } from "react"
import { FaGraduationCap } from "react-icons/fa6"
import { MdWork } from "react-icons/md"
import { qualificationData } from "./QualificationInfo"
import { AnimatePresence, motion } from "framer-motion"
import Reveal from "@/components/UI/Reveal"

const Qualification = () => {
    const [activeTab, setActiveTab] = useState<'education' | 'experience'>('education')
    const filteredData = qualificationData.filter(item => item.type === activeTab)

    const listVariants = {
        hidden: { opacity: 1 },
        show: {
            opacity: 1,
            transition: { staggerChildren: 0.08, delayChildren: 0.05 },
        },
    }

    const itemVariants = {
        hidden: { opacity: 0, y: 12 },
        show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: [0.16, 1, 0.3, 1] as const } },
    }

    return (
        <section className='max-w-screen-xl mt-4 px-4'>
            <Reveal>
                <div>
                    <h1 className="font-bold text-3xl lg:text-4xl mb-8">Qualification</h1>
                    <div className="flex justify-center gap-5 text-lg md:text-2xl text-gray-600 font-bold mb-3">
                        <button
                            onClick={() => setActiveTab('education')}
                            className={`flex items-center gap-1 cursor-pointer transition-colors duration-100 ease ${activeTab === 'education'
                                    ? 'text-blue-600 dark:text-blue-400'
                                    : 'hover:text-gray-700 dark:text-gray-300 dark:hover:text-gray-500'
                                }`}>
                            <FaGraduationCap className="text-2xl" />
                            <span>Education</span>
                        </button>
                        <button
                            onClick={() => setActiveTab('experience')}
                            className={`flex items-center gap-1 cursor-pointer transition-colors duration-100 ease ${activeTab === 'experience'
                                    ? 'text-blue-600 dark:text-blue-400'
                                    : 'hover:text-gray-700 dark:text-gray-300 dark:hover:text-gray-500'
                                }`}>
                            <MdWork className="text-2xl" />
                            <span>Experience</span>
                        </button>
                    </div>
                </div>
            </Reveal>

            <AnimatePresence mode="wait">
                <motion.ul
                    key={activeTab}
                    className="timeline timeline-vertical mt- w-full px-2 md:px-0"
                    variants={listVariants}
                    initial="hidden"
                    animate="show"
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.25 }}
                >
                    {filteredData.map((item, index) => (
                        <motion.li key={item.id} variants={itemVariants}>
                            {index !== 0 && <hr />}

                            <div className="timeline-middle">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                    className="h-4 w-4 md:h-5 md:w-5"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            </div>

                            {/* Force alternating sides at ALL screen sizes */}
                            <div
                                className={`
            mb-6 md:mb-10
            ${index % 2 === 0
                                        ? "timeline-start text-right"
                                        : "timeline-end text-left"
                                    }
          `}
                            >
                                <time className="font-mono text-xs italic text-slate-500 dark:text-slate-400 md:text-sm">
                                    {item.period}
                                </time>
                                <div className="mt-1 text-sm font-black leading-snug text-slate-900 dark:text-slate-100 sm:text-base md:text-lg">
                                    {item.title}
                                </div>
                                <p className="mt-1 text-xs text-slate-600 dark:text-slate-400 sm:text-sm md:text-base">
                                    {item.institution}
                                </p>
                            </div>

                            {index !== filteredData.length - 1 && <hr />}
                        </motion.li>
                    ))}
                </motion.ul>
            </AnimatePresence>
        </section>

    )
}

export default Qualification