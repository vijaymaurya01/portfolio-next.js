import React, { useEffect, useState } from 'react';
import { Briefcase, Calendar, ChevronDown, Code, Globe, Server, Shield, ExternalLink } from 'lucide-react';

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

const ExperienceComponent = ({ theme }) => {
    const [activeProject, setActiveProject] = useState(null);
    const [visible, setVisible] = useState(false);
    const [hoveredProject, setHoveredProject] = useState(null);

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

    const isDarkMode = theme === 'dark';

    return (
        <section className={`experience-section py-16 relative overflow-hidden ${isDarkMode ? 'dark' : ''}`}>
            {/* Animated background gradient */}
            <div className={`absolute inset-0 bg-gradient-to-br ${isDarkMode ? 'from-gray-900 to-gray-800' : 'from-gray-50 to-gray-100'}`} />

            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
                {/* Header Section with enhanced animation */}
                <div className={`text-center mb-16 transform transition-all duration-1000 ease-out
                    ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
                    <div className="inline-flex items-center justify-center w-20 h-20 rounded-full
                        bg-gradient-to-r from-green-500 to-emerald-500 mb-6
                        transform hover:scale-110 transition-transform duration-300">
                        <Briefcase className="w-10 h-10 text-white animate-pulse" />
                    </div>
                    <h2 className={`text-4xl font-bold bg-gradient-to-r ${isDarkMode ? 'from-green-400 to-emerald-400' : 'from-green-600 to-emerald-600'}
                        bg-clip-text text-transparent`}>
                        Professional Journey
                    </h2>
                    <div className="mt-4 h-1 w-24 mx-auto bg-gradient-to-r from-green-500 to-emerald-500
                        rounded hover:w-32 transition-all duration-300" />
                </div>

                {/* Experience Timeline */}
                <div className="space-y-12">
                    {experiences.map((exp, index) => (
                        <div
                            key={index}
                            className={`transform transition-all duration-1000 delay-300
                                ${visible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'}`}
                        >
                            {/* Experience Header */}
                            <div className="mb-8 flex items-center group">
                                <div className="flex items-center space-x-4">
                                    <div className="flex-shrink-0 transform group-hover:scale-110 transition-transform duration-300">
                                        <div className="w-14 h-14 rounded-xl bg-gradient-to-r from-green-500 to-emerald-500
                                            flex items-center justify-center shadow-lg">
                                            <exp.icon className="w-7 h-7 text-white" />
                                        </div>
                                    </div>
                                    <div>
                                        <h3 className={`text-2xl font-bold ${isDarkMode ? 'text-white group-hover:text-green-400' : 'text-gray-800 group-hover:text-green-600'}
                                            transition-colors duration-300`}>
                                            {exp.title}
                                        </h3>
                                        <div className={`flex items-center mt-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                                            <Calendar className="w-4 h-4 mr-2" />
                                            <span className="font-medium">{exp.period}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Project Cards Container */}
                            <div className="ml-8 space-y-6">
                                <p className={` mb-8 text-lg`}>{exp.description}</p>

                                {/* Project Cards */}
                                <div className="grid gap-6 relative">
                                    {exp.projects.map((project, pIndex) => (
                                        <div
                                            key={pIndex}
                                            className={`transform transition-all duration-500 ease-out
                                                ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
                                                ${hoveredProject === pIndex ? 'scale-[1.02]' : 'scale-100'}`}
                                            style={{ transitionDelay: `${pIndex * 150}ms` }}
                                            onMouseEnter={() => setHoveredProject(pIndex)}
                                            onMouseLeave={() => setHoveredProject(null)}
                                        >
                                            <div className={`bg-gradient-to-r ${project.color} p-[1px] rounded-xl
                                                shadow-lg hover:shadow-2xl transition-all duration-300`}>
                                                <div className={` ${isDarkMode ? 'bg-gray-800' : 'bg-white'} rounded-xl p-6`}>
                                                    <div className="flex items-start justify-between cursor-pointer"
                                                        onClick={() => setActiveProject(activeProject === pIndex ? null : pIndex)}>
                                                        <div className="flex items-center space-x-3">
                                                            <project.icon className={`w-6 h-6 transition-colors duration-300
                                                                ${hoveredProject === pIndex ? 'text-green-500' : `${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}`} />
                                                            <h4 className={`text-xl font-semibold ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>
                                                                {project.name}
                                                            </h4>
                                                        </div>
                                                        <ChevronDown
                                                            className={`w-5 h-5 transform transition-transform duration-300
                                                                ${activeProject === pIndex ? 'rotate-180' : ''}
                                                                ${hoveredProject === pIndex ? 'text-green-500' : `${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}`}
                                                        />
                                                    </div>

                                                    <div className={`transition-all duration-500 ease-in-out
                                                        ${activeProject === pIndex ? 'max-h-96 opacity-100 mt-4' : 'max-h-0 opacity-0 overflow-hidden'}`}>
                                                        <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'} mb-4`}>
                                                            {project.description}
                                                        </p>
                                                        <div className="flex flex-wrap gap-2">
                                                            {project.technologies.map((tech, tIndex) => (
                                                                <span
                                                                    key={tIndex}
                                                                    className={`px-3 py-1 text-sm font-medium ${isDarkMode ? 'bg-green-100 b text-green-900 dark:hover:bg-green-900' : 'bg-green-200 b text-green-900 dark:hover:bg-green-900'}
                                                                        rounded-full transition-colors duration-300`}
                                                                >
                                                                    {tech}
                                                                </span>
                                                            ))}
                                                        </div>
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
