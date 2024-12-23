import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import { gsap } from 'gsap';

const projects = [
    {
        title: 'TecTracks',
        description: 'A blog website where users can post and read blogs. Built with Next.js for the frontend, Firebase for authentication, database, and hosting.',
        imageUrl: '/tectracks-image.png',
        technologies: ['Next.js', 'Firebase', 'Express', 'GCP'],
    },
    {
        title: 'TYP',
        description: 'A platform similar to Ekart with advanced inventory and order management systems. Focused on optimizing user experience and end-to-end testing.',
        imageUrl: '/typ.png',
        technologies: ['Next.js', 'GO', 'Postgres', 'AWS', 'Cloudwatch'],
    },
    {
        title: 'Computer Vision (AI Agent)',
        description: 'Developed an AI-based monitoring system to detect theft and abnormal activity in stores. Worked on both development and rigorous testing to ensure reliability.',
        imageUrl: '/computer-vision-image.png',
        technologies: ['React.js', 'OpenCV', 'TensorFlow', 'OpenAI', 'GO', 'Python'],
    },
    {
        title: 'AWS News Recommendation',
        description: 'An AI-powered news recommendation engine that delivers personalized news based on user interests. Contributed to system architecture and testing.',
        imageUrl: '/aws-news-image.png',
        technologies: ['Next.js', 'Postgres', 'GO', 'AWS', 'OpenAI'],
    },
];

const ProjectCard = ({ title, description, imageUrl, technologies, theme }) => {
    const cardRef = useRef(null);
    const contentRef = useRef(null);
    const imageRef = useRef(null);

    useEffect(() => {
        const card = cardRef.current;
        const content = contentRef.current;
        const image = imageRef.current;

        const timeline = gsap.timeline({ paused: true });
        
        timeline
            .to(image, {
                scale: 1.1,
                duration: 0.4,
                ease: 'power2.out'
            })
            .to(content, {
                y: -10,
                duration: 0.3,
                ease: 'power2.out'
            }, 0)
            .to(card, {
                boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
                duration: 0.3,
                ease: 'power2.out'
            }, 0);

        card.addEventListener('mouseenter', () => timeline.play());
        card.addEventListener('mouseleave', () => timeline.reverse());

        return () => {
            card.removeEventListener('mouseenter', () => timeline.play());
            card.removeEventListener('mouseleave', () => timeline.reverse());
        };
    }, []);

    return (
        <div
            ref={cardRef}
            className={`relative overflow-hidden rounded-xl ${
                theme === 'dark' ? 'bg-gray-800' : 'bg-white'
            } shadow-lg transition-all duration-300`}
        >
            <div className="relative h-48 overflow-hidden">
                <div ref={imageRef} className="transform-gpu">
                    <Image
                        src={imageUrl}
                        alt={title}
                        width={400}
                        height={200}
                        className="w-full h-48 object-cover"
                    />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            </div>
            
            <div ref={contentRef} className="relative p-6">
                <div className="absolute -top-8 left-6 right-6">
                    <h3 className={`text-xl font-bold mb-2 ${
                        theme === 'dark' ? 'text-white' : 'text-white'
                    }`}>
                        {title}
                    </h3>
                </div>
                
                <div className="mt-4">
                    <p className={`text-sm mb-4 ${
                        theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                    }`}>
                        {description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2">
                        {technologies.map((tech, index) => (
                            <span
                                key={index}
                                className={`text-xs px-3 py-1 rounded-full ${
                                    theme === 'dark' 
                                        ? 'bg-green-900/50 text-green-400' 
                                        : 'bg-green-100 text-green-800'
                                }`}
                            >
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

const ProjectsSection = ({ theme = 'light' }) => {
    const sectionRef = useRef(null);

    useEffect(() => {
        gsap.fromTo(
            '.project-card',
            {
                opacity: 0,
                y: 50,
            },
            {
                opacity: 1,
                y: 0,
                duration: 0.8,
                stagger: 0.2,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: 'top center+=100',
                    end: 'bottom center',
                }
            }
        );
    }, []);

    return (
        <section
            ref={sectionRef}
            id="projects"
            className={`py-20 ${
                theme === 'dark' ? 'bg-gray-900' : 'bg-gray-50'
            }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <ProjectCard
                            key={index}
                            {...project}
                            theme={theme}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProjectsSection;