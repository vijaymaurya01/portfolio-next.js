'use client'

import React, { useEffect, useState } from 'react'
import { gsap } from 'gsap'
import { Briefcase, Calendar, ExternalLink, ChevronDown } from 'lucide-react'

const experiences = [
    {
        title: "Software Development & Testing Engineer (SDTE)",
        company: "Xenonstack Pvt Ltd",
        period: "2022 - Present",
        description: "Working as a Software Developer and Tester, contributing to both development and quality assurance for AI-driven solutions.",
        projects: [
            {
                name: "TYP",
                description: "A platform similar to Ekart with advanced inventory and order management systems. Focused on optimizing the user experience and ensuring end-to-end testing.",
                technologies: ["React", "Node.js", "MongoDB", "AWS"],
            },
            {
                name: "Computer Vision (AI Agent)",
                description: "Developed an AI-based monitoring system to detect theft and abnormal activity in stores. Worked on both development and rigorous testing to ensure reliability.",
                technologies: ["Python", "OpenCV", "TensorFlow", "AWS"],
            },
            {
                name: "AWS News Recommendation",
                description: "An AI-powered news recommendation engine that delivers personalized news based on user interests. Contributed to system architecture and testing.",
                technologies: ["Python", "AWS SageMaker", "React", "MongoDB"],
            },
        ],
    },
]

const ExperienceComponent = () => {
    const [activeProject, setActiveProject] = useState(null)

    useEffect(() => {
        gsap.fromTo(
            '.experience-card',
            { opacity: 0, y: 50 },
            { opacity: 1, y: 0, duration: 0.8, stagger: 0.3, ease: 'power3.out' }
        )
    }, [])

    const toggleProject = (projectName) => {
        setActiveProject(activeProject === projectName ? null : projectName)
    }

    return (
        <section id="experience" className="py-16 ">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-bold mb-12 text-center text-gray-900 ">Professional Experience</h2>
                <div className="space-y-8">
                    {experiences.map((exp, index) => (
                        <div key={index} className="experience-card  rounded-lg shadow-lg overflow-hidden">
                            <div className="p-6">
                                <div className="flex items-center justify-between mb-4">
                                    <div className="flex items-center space-x-2">
                                        <Briefcase className="text-green-600 " size={24} />
                                        <h3 className="text-xl font-semibold ">{exp.title}</h3>
                                    </div>
                                    <span className="px-3 py-1 text-sm font-medium bg-blue-100 text-green-800 dark:bg-green-900 dark:text-blue-200 rounded-full">
                                        {exp.company}
                                    </span>
                                </div>
                                <div className="flex items-center mb-4 text-pink-600 ">
                                    <Calendar className="mr-2" size={18} />
                                    <span>{exp.period}</span>
                                </div>
                                <p className="mb-6 ">{exp.description}</p>
                                <div className="space-y-4">
                                    <button
                                        onClick={() => toggleProject('all')}
                                        className="flex items-center justify-between w-full px-4 py-2 text-left   rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                                    >
                                        <span className="font-medium">Key Projects</span>
                                        <ChevronDown
                                            className={`transform transition-transform ${activeProject === 'all' ? 'rotate-180' : ''
                                                }`}
                                            size={20}
                                        />
                                    </button>
                                    {activeProject === 'all' && (
                                        <div className="mt-4 space-y-4">
                                            {exp.projects.map((project, pIndex) => (
                                                <div key={pIndex} className=" rounded-lg p-4">
                                                    <h4 className="text-lg font-medium mb-2 flex items-center ">
                                                        <ExternalLink className="mr-2 text-green-600 dark:text-blue-400" size={16} />
                                                        {project.name}
                                                    </h4>
                                                    <p className="text-sm  mb-3">{project.description}</p>
                                                    <div className="flex flex-wrap gap-2">
                                                        {project.technologies.map((tech, tIndex) => (
                                                            <span
                                                                key={tIndex}
                                                                className="px-2 py-1 text-xs font-medium  rounded"
                                                            >
                                                                {tech}
                                                            </span>
                                                        ))}
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default ExperienceComponent

