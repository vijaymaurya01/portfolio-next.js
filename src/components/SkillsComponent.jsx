'use client';

import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { Code, Database, Server, Globe, Cpu, PenTool, Cloud } from 'lucide-react';

const skills = [
    { name: 'React', icon: <Code size={24} /> },
    { name: 'Node.js', icon: <Server size={24} /> },
    { name: 'MongoDB', icon: <Database size={24} /> },
    { name: 'Express', icon: <Globe size={24} /> },
    { name: 'Python', icon: <Cpu size={24} /> },
    { name: 'Figma', icon: <PenTool size={24} /> },
    { name: 'GraphQL', icon: <Database size={24} /> },
    { name: 'Docker', icon: <Server size={24} /> },
    { name: 'AWS', icon: <Cloud size={24} /> },
    { name: 'TypeScript', icon: <Code size={24} /> },
];

const SkillsComponent = ({ theme }) => {
    const scrollRef = useRef(null);

    useEffect(() => {
        // GSAP animation for the skills items
        gsap.fromTo(
            '.skill-card',
            { opacity: 0, y: 20 },
            {
                opacity: 1,
                y: 0,
                duration: 0.8,
                stagger: 0.1,
                ease: 'power3.out',
            }
        );
    }, []);

    useEffect(() => {
        // Auto-scroll effect
        const scrollContainer = scrollRef.current;
        if (scrollContainer) {
            let scrollDirection = 1;
            let animationFrameId;

            const scroll = () => {
                if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth - scrollContainer.clientWidth) {
                    scrollDirection = -1;
                } else if (scrollContainer.scrollLeft <= 0) {
                    scrollDirection = 1;
                }
                scrollContainer.scrollLeft += scrollDirection;
                animationFrameId = requestAnimationFrame(scroll);
            };

            animationFrameId = requestAnimationFrame(scroll);

            return () => cancelAnimationFrame(animationFrameId);
        }
    }, []);

    return (
        <section id="skills" className={`py-16 ${theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-gray-200 text-gray-900'}`}>
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-bold mb-8 text-center">Skills & Tools</h2>
                <div ref={scrollRef} className="overflow-hidden">
                    <div className="flex space-x-8">
                        {[...skills, ...skills].map((skill, index) => (
                            <div
                                key={index}
                                className={`skill-card flex flex-col items-center justify-center p-4 rounded-lg transition-transform transform hover:scale-110 ${
                                    theme === 'dark' ? 'bg-gray-700' : 'bg-white'
                                } shadow-md min-w-[120px]`}
                            >
                                <div
                                    className={`mb-2 ${
                                        theme === 'dark' ? 'text-[#00FF9D]' : 'text-green-600'
                                    }`}
                                >
                                    {skill.icon}
                                </div>
                                <span className="text-sm font-medium">{skill.name}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SkillsComponent;
