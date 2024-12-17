import React from 'react';
import { Briefcase, Calendar, ExternalLink } from 'lucide-react';

const experiences = [
    {
        title: "Senior Full Stack Developer",
        company: "E-commerce Solutions Inc.",
        period: "2020 - Present",
        description: "Led the development of a high-performance e-commerce platform serving over 1 million users. Implemented microservices architecture and optimized database queries, resulting in a 40% improvement in page load times.",
        projects: [
            {
                name: "EKart",
                description: "A full-featured online marketplace with real-time inventory management and personalized product recommendations.",
                technologies: ["React", "Node.js", "MongoDB", "Redis", "AWS"]
            }
        ]
    },
    {
        title: "Computer Vision Engineer",
        company: "AI Innovations Ltd.",
        period: "2018 - 2020",
        description: "Developed and deployed computer vision algorithms for autonomous vehicles, focusing on object detection and scene understanding. Collaborated with cross-functional teams to integrate CV systems with vehicle control modules.",
        projects: [
            {
                name: "AutoVision",
                description: "An advanced computer vision system for autonomous vehicles, capable of real-time object detection and tracking in various weather conditions.",
                technologies: ["Python", "TensorFlow", "OpenCV", "CUDA", "ROS"]
            }
        ]
    },
    {
        title: "Full Stack Developer",
        company: "CRM Solutions Co.",
        period: "2016 - 2018",
        description: "Designed and implemented custom CRM solutions for small to medium-sized businesses. Focused on creating intuitive user interfaces and robust backend systems to streamline customer management processes.",
        projects: [
            {
                name: "SmartCRM",
                description: "A customizable CRM platform with advanced analytics and automation features, improving client engagement rates by 25%.",
                technologies: ["Angular", "Express.js", "PostgreSQL", "Docker", "Azure"]
            }
        ]
    }
];

const ExperienceComponent = ({ theme }) => {
    return (
        <section id="experience" className={`py-16 ${theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-900'}`}>
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-bold mb-8 text-center">Professional Experience</h2>
                <div className="space-y-12">
                    {experiences.map((exp, index) => (
                        <div key={index} className={`p-6 rounded-lg shadow-lg ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'}`}>
                            <div className="flex items-center mb-4">
                                <Briefcase className={`mr-2 ${theme === 'dark' ? 'text-[#00FF9D]' : 'text-green-600'}`} size={24} />
                                <h3 className="text-xl font-semibold">{exp.title}</h3>
                            </div>
                            <p className={`text-lg mb-2 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>{exp.company}</p>
                            <div className="flex items-center mb-4">
                                <Calendar className={`mr-2 ${theme === 'dark' ? 'text-[#FF26B9]' : 'text-pink-600'}`} size={18} />
                                <p className={`${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>{exp.period}</p>
                            </div>
                            <p className={`mb-4 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>{exp.description}</p>
                            <div className="mt-4">
                                <h4 className="text-lg font-semibold mb-2">Key Projects:</h4>
                                {exp.projects.map((project, pIndex) => (
                                    <div key={pIndex} className={`mt-2 p-4 rounded ${theme === 'dark' ? 'bg-gray-700' : 'bg-gray-100'}`}>
                                        <h5 className="text-md font-semibold flex items-center">
                                            <ExternalLink className={`mr-2 ${theme === 'dark' ? 'text-[#00FF9D]' : 'text-green-600'}`} size={16} />
                                            {project.name}
                                        </h5>
                                        <p className={`mt-1 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>{project.description}</p>
                                        <div className="mt-2 flex flex-wrap gap-2">
                                            {project.technologies.map((tech, tIndex) => (
                                                <span key={tIndex} className={`text-xs px-2 py-1 rounded ${theme === 'dark' ? 'bg-gray-600 text-gray-300' : 'bg-gray-200 text-gray-700'}`}>
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ExperienceComponent;
