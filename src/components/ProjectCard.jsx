import React, { useEffect } from 'react';
import Image from 'next/image';
import { gsap } from 'gsap';

const projects = [
    {
        title: 'TecTracks',
        description: 'A blog website where users can post and read blogs. Built with Next.js for the frontend, Firebase for authentication, database, and hosting.',
        imageUrl: '/tectracks-image.jpg', // Replace with actual image path
        technologies: ['Next.js', 'Firebase', 'Express' , 'GCP'],
    },
    {
        title: 'TYP',
        description: 'A platform similar to Ekart with advanced inventory and order management systems. Focused on optimizing user experience and end-to-end testing.',
        imageUrl: '/tectracks-image.jpg', // Replace with actual image path
        technologies: ['Next.js', 'GO', 'Postgress', 'AWS', 'Cloudwatch'],
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
        technologies: ['Next.js', 'Postgress', 'GO', 'AWS', 'OpenAI'],
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
        <section>
{/*  className={`py-16 ${theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-900'}`} */}
            <div className="project-card max-w-sm rounded overflow-hidden shadow-lg d">
                <Image src={imageUrl} alt={title} width={400} height={200} className="w-full" />
                <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2">{title}</div>
                    <p className="text-base text-gray-500">{description}</p>
                </div>
                <div className="px-6 pt-4 pb-2">
                    {technologies.map((tech, index) => (
                        <span key={index} className="inline-block bg-green-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                            {tech}
                        </span>
                    ))}
                </div>
            </div>
        </section>
        );
};

const ProjectsSection = () => (
    <section id="projects" className="py-4 ">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
           
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project, index) => (
                    <ProjectCard
                        key={index}
                        title={project.title}
                        description={project.description}
                        imageUrl={project.imageUrl}
                        technologies={project.technologies}
                    />
                ))}
            </div>
        </div>
    </section>
);

export default ProjectsSection;
