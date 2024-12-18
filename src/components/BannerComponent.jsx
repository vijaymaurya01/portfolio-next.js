'use client';

import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { Github, Linkedin, Facebook, Twitter, Mail, FileText } from 'lucide-react';
import { TypewriterText } from './TypewriterText';

const BannerComponent = ({ theme }) => {
    const coder = {
        name: 'Vijay Kumar Maurya',
        skills: ['React', 'NextJS', 'Redux', 'Express', 'MySQL', 'MongoDB', 'Docker', 'AWS'],
        hardWorker: true,
        quickLearner: true,
        problemSolver: true,
        hireable: function() {
            return this.hardWorker && this.problemSolver && this.skills.length >= 5;
        },
    };

    useEffect(() => {
        // GSAP Animations
        gsap.from(".heading", { duration: 1, y: -50, opacity: 0, ease: "power3.out" });
        gsap.from(".social-icon", { duration: 1, y: 20, opacity: 0, stagger: 0.2, delay: 0.5 });
        gsap.from(".button", { duration: 1, scale: 0.8, opacity: 0, stagger: 0.2, delay: 1 });
        gsap.from(".code-block", { duration: 1, opacity: 0, x: 50, delay: 1.2 });
    }, []);

    // Conditional Classes Based on Theme
    const isDarkTheme = theme === 'dark';
    const backgroundClass = isDarkTheme ? 'bg-gray-900 text-gray-200' : 'bg-white text-gray-800';
    const headingClass = isDarkTheme ? 'text-white' : 'text-black';
    const codeBlockClass = isDarkTheme ? 'text-yellow-400' : 'text-green-600';

    return (
        <section className={`min-h-screen ${backgroundClass}`}>
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 min-h-screen flex items-center">
                <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                        <div className="flex justify-between items-center">
                            <h1 className={`heading text-4xl sm:text-5xl lg:text-6xl font-bold ${headingClass}`}>
                                Hello,<br />
                                This is <span className="text-pink-600 dark:text-[#FF26B9]">{coder.name}</span>,<br />
                                I&apos;m a Professional{' '}
                                <span className="text-green-600 dark:text-[#00FF9D]">
                                    <TypewriterText text="Software Developer." />
                                </span>
                            </h1>
                        </div>
                        <div className="flex gap-4">
                            <a href="#" className="social-icon hover:text-green-600 dark:hover:text-[#00FF9D] transition-colors">
                                <Github size={24} />
                            </a>
                            <a href="#" className="social-icon hover:text-green-600 dark:hover:text-[#00FF9D] transition-colors">
                                <Linkedin size={24} />
                            </a>
                            <a href="#" className="social-icon hover:text-green-600 dark:hover:text-[#00FF9D] transition-colors">
                                <Facebook size={24} />
                            </a>
                            <a href="#" className="social-icon hover:text-green-600 dark:hover:text-[#00FF9D] transition-colors">
                                <Twitter size={24} />
                            </a>
                        </div>
                        <div className="flex gap-4 pt-4">
                            <button
                                className={`button px-6 py-2 border text-green-600 hover:bg-green-600 hover:text-white transition-colors rounded flex items-center ${
                                    isDarkTheme ? 'dark:border-[#00FF9D] dark:text-[#00FF9D] dark:hover:bg-[#00FF9D] dark:hover:text-black' : 'border-green-600'
                                }`}
                            >
                                <Mail className="mr-2" size={18} /> CONTACT ME
                            </button>
                            <button
                                className={`button px-6 py-2 bg-pink-600 hover:bg-pink-700 text-white transition-colors rounded flex items-center ${
                                    isDarkTheme ? 'dark:bg-[#FF26B9] dark:hover:bg-[#FF26B9]/90' : ''
                                }`}
                            >
                                <FileText className="mr-2" size={18} /> GET RESUME
                            </button>
                        </div>
                    </div>
                    <div className="w-full">
                        <pre className={`code-block p-4 rounded-lg font-mono text-sm sm:text-base overflow-x-auto shadow-md break-words whitespace-pre-wrap ${codeBlockClass}`}>
                            {`const coder = {
  name: '${coder.name}',
  skills: [${coder.skills.map((skill) => `'${skill}'`).join(', ')}],
  hardWorker: ${coder.hardWorker},
  quickLearner: ${coder.quickLearner},
  problemSolver: ${coder.problemSolver},
  hireable: ${coder.hireable.toString()}
}`}
                        </pre>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BannerComponent;
