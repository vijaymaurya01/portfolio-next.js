'use client'

import React from 'react'
import { Github, Linkedin, Facebook, Twitter, Mail, FileText } from 'lucide-react'
import { TypewriterText } from './TypewriterText'

const BannerComponent = ({ theme }) => {
    const coder = {
        name: 'Vijay Kumar Maurya',
        skills: ['React', 'NextJS', 'Redux', 'Express',
            'NextJS', 'MySQL', 'MongoDB', 'Docker', 'AWS'],
        hardWorker: true,
        quickLearner: true,
        problemSolver: true,
        hireable: function() {
            return (
                this.hardWorker &&
                this.problemSolver &&
                this.skills.length >= 5
            );
        },
    };

    return (
        <section className="min-h-screen bg-gradient-to-br ">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 min-h-screen flex items-center">
                <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                        <div className="flex justify-between items-center">
                            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold">
                                Hello,<br />
                                This is <span className="text-pink-600 dark:text-[#FF26B9]">{coder.name}</span>,<br />
                                I&apos;m a Professional{' '}
                                <span className="text-green-600 dark:text-[#00FF9D]">
                                    <TypewriterText text="Software Developer." />
                                </span>
                            </h1>
                        </div>
                        <div className="flex gap-4">
                            <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-green-600 dark:hover:text-[#00FF9D] transition-colors">
                                <Github size={24} />
                            </a>
                            <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-green-600 dark:hover:text-[#00FF9D] transition-colors">
                                <Linkedin size={24} />
                            </a>
                            <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-green-600 dark:hover:text-[#00FF9D] transition-colors">
                                <Facebook size={24} />
                            </a>
                            <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-green-600 dark:hover:text-[#00FF9D] transition-colors">
                                <Twitter size={24} />
                            </a>
                        </div>
                        <div className="flex gap-4 pt-4">
                            <button className="px-6 py-2 bg-transparent border border-green-600 dark:border-[#00FF9D] text-green-600 dark:text-[#00FF9D] hover:bg-green-600 dark:hover:bg-[#00FF9D] hover:text-white dark:hover:text-black transition-colors rounded flex items-center">
                                <Mail className="mr-2" size={18} /> CONTACT ME
                            </button>
                            <button className="px-6 py-2 bg-pink-600 dark:bg-[#FF26B9] hover:bg-pink-700 dark:hover:bg-[#FF26B9]/90 text-white transition-colors rounded flex items-center">
                                <FileText className="mr-2" size={18} /> GET RESUME
                            </button>
                        </div>
                    </div>
                    <div className="w-full">
                        <pre className="p-4 rounded-lg text-green-600 dark:text-[#00FF9D] font-mono text-sm sm:text-base overflow-x-auto shadow-md break-words whitespace-pre-wrap">
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
