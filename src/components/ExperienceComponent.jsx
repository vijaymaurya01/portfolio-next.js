import React, { useEffect, useState } from 'react';
import { Briefcase, Calendar,   rnalLink, ChevronDown, Code, Globe, Server, Shield } from 'lucide-react';

const experiences = [
    {
        title: "Software Development & Testing Engineer (SDTE)",
        company: "Xenonstack Pvt Ltd",
        period: "2022 - Present",
        description: "Working as a Software Developer and Tester, contributing to both development and quality assurance for AI-driven solutions.",
        icon: Code,
        projects: [
            {
                name: "TYP",
                icon: Globe,
                description: "A platform similar to Ekart with advanced inventory and order management systems. Focused on optimizing the user experience and ensuring end-to-end testing.",
                technologies: ["React", "Node.js", "MongoDB", "AWS"],
                color: "from-blue-500 to-cyan-500"
            },
            {
                name: "Computer Vision (AI Agent)",
                icon: Shield,
                description: "Developed an AI-based monitoring system to detect theft and abnormal activity in stores. Worked on both development and rigorous testing to ensure reliability.",
                technologies: ["Python", "OpenCV", "TensorFlow", "AWS"],
                color: "from-purple-500 to-pink-500"
            },
            {
                name: "AWS News Recommendation",
                icon: Server,
                description: "An AI-powered news recommendation engine that delivers personalized news based on user interests. Contributed to system architecture and testing.",
                technologies: ["Python", "AWS SageMaker", "React", "MongoDB"],
                color: "from-green-500 to-emerald-500"
            },
        ],
    },
];

const ExperienceComponent = () => {
    const [activeProject, setActiveProject] = useState(null);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setVisible(true);
                }
            },
            { threshold: 0.1 }
        );

        const section = document.querySelector('.experience-section');
        if (section) observer.observe(section);

        return () => observer.disconnect();
    }, []);

    return (
        <section className="experience-section py-16 bg-gradient-to-b ">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className={`text-center mb-16 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-green-500 to-emerald-500 mb-6">
                        <Briefcase className="w-8 h-8 " />
                    </div>
                    <h2 className="text-4xl font-bold">Professional Journey</h2>
                    <div className="mt-4 h-1 w-24 mx-auto bg-gradient-to-r from-green-500 to-emerald-500 rounded" />
                </div>

                <div className="space-y-8">
                    {experiences.map((exp, index) => (
                        <div
                            key={index}
                            className={`transition-all duration-700 delay-300 ${
                                visible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
                            }`}
                        >
                            <div className="mb-6 flex items-center">
                                <div className="flex items-center space-x-4">
                                    <div className="flex-shrink-0">
                                        <div className="w-12 h-12 rounded-full bg-gradient-to-r from-green-500 to-emerald-500 flex items-center justify-center">
                                            <exp.icon className="w-6 h-6 " />
                                        </div>
                                    </div>
                                    <div>
                                        <h3 className="text-2xl font-bold ">{exp.title}</h3>
                                        <div className="flex items-center mt-2 ">
                                            <Calendar className="w-4 h-4 mr-2" />
                                            <span>{exp.period}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className=" rounded-2xl shadow-xl p-6 ml-6 relative">
                                <div className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-green-500 to-emerald-500 rounded-l-2xl" />
                                
                                <p className=" mb-8">{exp.description}</p>

                                <div className="space-y-6">
                                    {exp.projects.map((project, pIndex) => (
                                        <div
                                            key={pIndex}
                                            className={`bg-gradient-to-r ${project.color} p-[1px] rounded-xl transition-transform duration-300 hover:scale-[1.02] cursor-pointer`}
                                            onClick={() => setActiveProject(activeProject === pIndex ? null : pIndex)}
                                        >
                                            <div className=" rounded-xl p-6">
                                                <div className="flex items-start justify-between">
                                                    <div className="flex items-center space-x-3">
                                                        <project.icon className="w-6 h-6 " />
                                                        <h4 className="text-lg font-semibold ">
                                                            {project.name}
                                                        </h4>
                                                    </div>
                                                    <ChevronDown
                                                        className={`w-5 h-5 transform transition-transform ${
                                                            activeProject === pIndex ? 'rotate-180' : ''
                                                        }`}
                                                    />
                                                </div>

                                                <div className={`mt-4 transition-all duration-300 ${
                                                    activeProject === pIndex ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
                                                }`}>
                                                    <p className=" mb-4">
                                                        {project.description}
                                                    </p>
                                                    <div className="flex flex-wrap gap-2">
                                                        {project.technologies.map((tech, tIndex) => (
                                                            <span
                                                                key={tIndex}
                                                                className="px-3 py-1 text-sm font-medium bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-full"
                                                            >
                                                                {tech}
                                                            </span>
                                                        ))}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ExperienceComponent;