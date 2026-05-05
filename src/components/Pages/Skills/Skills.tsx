"use client";

import {skills, SkillCategory } from "./SkillInfo"
import { motion } from "framer-motion"
import Reveal from "@/components/UI/Reveal"
const Skills = () => {
    return (
        <section className="px-4 flex flex-col gap-5">
            <Reveal>
                <SkillsHeader />
            </Reveal>
            <SkillSet />
        </section>

    )
}

const SkillsHeader = () => {
    return (
        <div id="skillContainer" className="text-center">
            <div className="mt-2">
                <h1 className="font-bold text-3xl mb-2">Skills</h1>
                <h3 className="font-semibold text-gray-500">My Technical Level</h3>
            </div>
        </div>
    )
}

const SkillSet = () => {
    return (
<main className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 p-2 md:p-6">
    {skills.map((category: SkillCategory, index: number) => (
        <Reveal key={index} delay={index * 0.06} className={index === 2 ? 'md:translate-x-1/2' : ''}>
            <section
                className={`bg-gray-50 dark:bg-inherit dark:outline outline-1 lg:aspect-square flex flex-col py-10 rounded-md lg:translate-x-0 shadow-md`} 
            >
                <h2 className="text-xl font-bold mb-6 lg:mb-12 text-center">{category.title}</h2>
                <ul className="flex flex-wrap justify-center gap-3 p-2 lg:px-4">
                    {category.skills.map((skill, skillIndex) => (
                        <motion.div
                            key={skillIndex}
                            whileHover={{ y: -2, scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className="flex items-center text-gray-800 dark:text-gray-400 gap-1 justify-center border px-1 lg:px-4 py-2 rounded font-semibold shadow-md"
                        >
                            <skill.icon className="text-xl" />
                            <span className="text-sm">{skill.name}</span>
                        </motion.div>
                    ))}
                </ul>
            </section>
        </Reveal>
    ))}
</main>

    );
}

export default Skills