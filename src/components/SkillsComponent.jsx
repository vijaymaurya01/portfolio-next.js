'use client';

import React, { useEffect, useRef, useState } from 'react';
import { Code, Database, Server, Globe, Cpu, PenTool, Cloud, Laptop, Wifi, BrainCircuit } from 'lucide-react';

const skills = [
    { name: 'React', icon: <Code size={24} />, color: '#61DAFB' },
    { name: 'Node.js', icon: <Server size={24} />, color: '#339933' },
    { name: 'MongoDB', icon: <Database size={24} />, color: '#47A248' },
    { name: 'Express', icon: <Globe size={24} />, color: '#000000' },
    { name: 'Python', icon: <Cpu size={24} />, color: '#3776AB' },
    { name: 'Figma', icon: <PenTool size={24} />, color: '#F24E1E' },
    { name: 'GraphQL', icon: <Database size={24} />, color: '#E10098' },
    { name: 'Docker', icon: <Server size={24} />, color: '#2496ED' },
    { name: 'AWS', icon: <Cloud size={24} />, color: '#FF9900' },
    { name: 'TypeScript', icon: <Code size={24} />, color: '#3178C6' },
    { name: 'Next.js', icon: <Laptop size={24} />, color: '#000000' },
    { name: 'AI/ML', icon: <BrainCircuit size={24} />, color: '#FF4081' },
];

const SkillsComponent = ({ theme }) => {
    const containerRef = useRef(null);
    const [isClient, setIsClient] = useState(false);
    const cardsRef = useRef([]);
    const [gsap, setGsap] = useState(null);

    // Initialize GSAP on client side only
    useEffect(() => {
        setIsClient(true);
        const initGSAP = async () => {
            const gsapWithPlugins = await import('gsap');
            const { ScrollTrigger } = await import('gsap/ScrollTrigger');
            gsapWithPlugins.gsap.registerPlugin(ScrollTrigger);
            setGsap(gsapWithPlugins.gsap);
        };
        initGSAP();
    }, []);

    // Apply animations once GSAP is loaded
    useEffect(() => {
        if (!gsap || !isClient) return;

        // Title animation
        gsap.fromTo(
            '.skills-title',
            { 
                opacity: 0,
                y: -50 
            },
            {
                opacity: 1,
                y: 0,
                duration: 1,
                scrollTrigger: {
                    trigger: '.skills-title',
                    start: 'top 80%',
                    toggleActions: 'play none none reverse'
                }
            }
        );

        // Cards animation
        gsap.fromTo(
            '.skill-card',
            { 
                opacity: 0,
                scale: 0.8,
                y: 50
            },
            {
                opacity: 1,
                scale: 1,
                y: 0,
                duration: 0.8,
                stagger: {
                    each: 0.1,
                    from: 'random'
                },
                ease: 'back.out(1.2)',
                scrollTrigger: {
                    trigger: '.skills-grid',
                    start: 'top 80%',
                    toggleActions: 'play none none reverse'
                }
            }
        );

        // Floating animation
        cardsRef.current.forEach((card, index) => {
            if (card) {
                gsap.to(card, {
                    y: '10',
                    duration: 2,
                    repeat: -1,
                    yoyo: true,
                    ease: 'power1.inOut',
                    delay: index * 0.2
                });
            }
        });

        // Cleanup
        return () => {
            const triggers = ScrollTrigger.getAll();
            triggers.forEach(trigger => trigger.kill());
        };
    }, [gsap, isClient]);

    const handleCardHover = (index, isEnter) => {
        if (!gsap || !isClient) return;
        
        gsap.to(cardsRef.current[index], {
            scale: isEnter ? 1.1 : 1,
            duration: 0.3,
            ease: 'power2.out',
            zIndex: isEnter ? 1 : 0
        });
    };

    return (
        <section 
            ref={containerRef}
            className={`py-20 relative overflow-hidden ${
                theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-900'
            }`}
        >
            {/* Background gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-transparent via-primary/5 to-transparent" />
            
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
                <h2 className="skills-title text-4xl font-bold mb-12 text-center">
                    Skills & Expertise
                </h2>

                <div className="skills-grid grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {skills.map((skill, index) => (
                        <div
                            key={index}
                            ref={el => cardsRef.current[index] = el}
                            className={`skill-card relative ${
                                theme === 'dark' ? 'bg-gray-800' : 'bg-white'
                            } rounded-xl p-6 shadow-lg backdrop-blur-sm 
                            border border-transparent hover:border-primary/20
                            transition-all duration-300
                            transform hover:scale-105 hover:-translate-y-1`}
                            onMouseEnter={() => handleCardHover(index, true)}
                            onMouseLeave={() => handleCardHover(index, false)}
                        >
                            {/* Glow effect */}
                            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent rounded-xl opacity-0 transition-opacity duration-300 hover:opacity-100" />
                            
                            <div className="relative z-10 flex flex-col items-center justify-center space-y-3">
                                <div 
                                    className="p-3 rounded-lg bg-gradient-to-br from-primary/10 to-transparent"
                                    style={{ color: skill.color }}
                                >
                                    {skill.icon}
                                </div>
                                <span className="font-medium text-center">{skill.name}</span>
                                
                                {/* Progress bar */}
                                <div className="w-full h-1 bg-gray-200 rounded-full overflow-hidden">
                                    <div 
                                        className="h-full bg-primary rounded-full transition-all duration-1000 ease-out"
                                        style={{ 
                                            width: '85%',
                                            boxShadow: '0 0 10px rgba(0,255,157,0.5)' 
                                        }}
                                    />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute top-0 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
        </section>
    );
};

export default SkillsComponent;