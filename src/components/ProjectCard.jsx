import React, { useEffect } from 'react';
import Image from 'next/image';
import { gsap } from 'gsap';

const projects = [
    {
        title: 'TecTracks',
        description: 'A blog website where users can post and read blogs. Built with Next.js for the frontend, Firebase for authentication, database, and hosting.',
        imageUrl: '/tectracks-image.png', // Replace with actual image path
        technologies: ['Next.js', 'Firebase', 'Express', 'GCP'],
    },
    {
        title: 'TYP',
        description: 'A platform similar to Ekart with advanced inventory and order management systems. Focused on optimizing user experience and end-to-end testing.',
        imageUrl: '/typ.png', // Replace with actual image path
        technologies: ['Next.js', 'GO', 'Postgres', 'AWS', 'Cloudwatch'],
    },
    {
        title: 'Computer Vision (AI Agent)',
        description: 'Developed an AI-based monitoring system to detect theft and abnormal activity in stores. Worked on both development and rigorous testing to ensure reliability.',
        imageUrl: '/computer-vision-image.png', // Replace with actual image path
        technologies: ['React.js', 'OpenCV', 'TensorFlow', 'OpenAI', 'GO', 'Python'],
    },
    {
        title: 'AWS News Recommendation',
        description: 'An AI-powered news recommendation engine that delivers personalized news based on user interests. Contributed to system architecture and testing.',
        imageUrl: '/aws-news-image.png', // Replace with actual image path
        technologies: ['Next.js', 'Postgres', 'GO', 'AWS', 'OpenAI'],
    },
];

const ProjectCard = ({ title, description, imageUrl, technologies, theme }) => {
    useEffect(() => {
        gsap.fromTo(
            '.project-card',
            { opacity: 0, y: 50 },
            { opacity: 1, y: 0, duration: 0.8, stagger: 0.3, ease: 'power3.out' }
        );
    }, []);

    return (
        <div
            className={`project-card max-w-sm rounded-lg overflow-hidden shadow-lg transform transition-transform duration-300 hover:scale-105 ${
                theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-gray-100 text-gray-900'
            }`}
        >
            <Image
                src={imageUrl}
                alt={title}
                width={400}
                height={200}
                className="w-full object-cover rounded-t-lg"
            />
            <div className="px-6 py-4">
                <h3 className="font-bold text-xl mb-2">{title}</h3>
                <p className="text-sm text-gray-500 dark:text-gray-300">{description}</p>
            </div>
            <div className="px-6 pt-4 pb-2">
                {technologies.map((tech, index) => (
                    <span
                        key={index}
                        className="inline-block bg-green-200 dark:bg-green-700 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 dark:text-gray-200 mr-2 mb-2"
                    >
                        {tech}
                    </span>
                ))}
            </div>
        </div>
    );
};

const ProjectsSection = ({ theme = 'light' }) => {
    useEffect(() => {
        gsap.fromTo(
            '.projects-section',
            { opacity: 0 },
            { opacity: 1, duration: 1, ease: 'power3.out' }
        );
    }, []);

    return (
        <section
            id="projects"
            className={`projects-section py-16 ${
                theme === 'dark' ? 'bg-gray-900' : 'bg-gray-100'
            }`}
        >
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
               
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <ProjectCard
                            key={index}
                            title={project.title}
                            description={project.description}
                            imageUrl={project.imageUrl}
                            technologies={project.technologies}
                            theme={theme}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProjectsSection;
