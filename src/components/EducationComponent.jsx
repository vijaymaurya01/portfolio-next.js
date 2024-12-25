import React, { useEffect, useState } from 'react';
import { GraduationCap, Calendar, MapPin, Award, FileCode, Brain } from 'lucide-react';

const educationData = [
    {
        degree: "Master of Computer Applications (MCA)",
        institution: "Chandigarh University",
        location: "Chandigarh, India",
        period: "2021 - 2023",
        description: "Graduated with a CGPA of 8.1. Focused on software development, AI, and cloud computing.",
        skills: ["Software Development", "AI", "Cloud Computing"],
        icon: Brain
    },
    {
        degree: "Bachelor of Computer Applications (BCA)",
        institution: "MCRP University",
        location: "Bhopal, India",
        period: "2018 - 2021",
        description: "Graduated with a CGPA of 8.21. Emphasized on programming languages, database management, and web development.",
        skills: ["Programming", "Database Management", "Web Development"],
        icon: FileCode
    },
];

const EducationComponent = ({ theme = 'light' }) => {
    const [visibleCards, setVisibleCards] = useState([]);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        setVisibleCards(prev => [...prev, entry.target.dataset.index]);
                    }
                });
            },
            { threshold: 0.2 }
        );

        document.querySelectorAll('.education-card').forEach(card => {
            observer.observe(card);
        });

        return () => observer.disconnect();
    }, []);

    const isDark = theme === 'dark';

    return (
        <section className={`py-16 ${isDark ? 'bg-gray-900' : 'bg-gray-50'}`}>
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <div className="inline-block mb-4">
                        <GraduationCap 
                            size={48} 
                            className={`${isDark ? 'text-green-400' : 'text-green-600'} animate-bounce`}
                        />
                    </div>
                    <h2 className={`text-4xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>
                        Educational Journey
                    </h2>
                    <div className={`mt-4 h-1 w-24 mx-auto rounded ${isDark ? 'bg-pink-500' : 'bg-green-500'}`} />
                </div>

                <div className="space-y-8">
                    {educationData.map((edu, index) => {
                        const Icon = edu.icon;
                        return (
                            <div
                                key={index}
                                data-index={index}
                                className={`education-card relative ${
                                    visibleCards.includes(index.toString()) ? 'animate-slide-in' : 'opacity-0 translate-y-10'
                                }`}
                            >
                                <div className={`
                                    p-6 rounded-xl shadow-lg backdrop-blur-sm
                                    ${isDark ? 'bg-gray-800/90' : 'bg-white'}
                                    border-2 ${isDark ? 'border-pink-500/20' : 'border-green-500/20'}
                                    hover:border-opacity-100 transition-all duration-300
                                `}>
                                    <div className="grid md:grid-cols-[1fr,2fr] gap-6">
                                        <div className={`
                                            p-4 rounded-lg text-center
                                            ${isDark ? 'bg-gray-900/50' : 'bg-gray-50'}
                                        `}>
                                            <Icon 
                                                size={40} 
                                                className={`mx-auto mb-4 ${isDark ? 'text-pink-400' : 'text-green-500'}`} 
                                            />
                                            <span className={`
                                                inline-block px-4 py-1 rounded-full text-sm font-medium
                                                ${isDark ? 'bg-pink-500/20 text-pink-300' : 'bg-green-500/20 text-green-700'}
                                            `}>
                                                {edu.period}
                                            </span>
                                        </div>
                                        
                                        <div className="space-y-4">
                                            <h3 className={`text-xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>
                                                {edu.degree}
                                            </h3>
                                            
                                            <div className="flex flex-wrap gap-4">
                                                <div className="flex items-center">
                                                    <Award className={`mr-2 ${isDark ? 'text-pink-400' : 'text-green-500'}`} size={18} />
                                                    <p className={`${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                                                        {edu.institution}
                                                    </p>
                                                </div>
                                                
                                                <div className="flex items-center">
                                                    <MapPin className={`mr-2 ${isDark ? 'text-pink-400' : 'text-green-500'}`} size={18} />
                                                    <p className={`${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                                                        {edu.location}
                                                    </p>
                                                </div>
                                            </div>

                                            <p className={`${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                                                {edu.description}
                                            </p>

                                            <div className="flex flex-wrap gap-2">
                                                {edu.skills.map((skill, idx) => (
                                                    <span
                                                        key={idx}
                                                        className={`
                                                            px-3 py-1 rounded-full text-sm
                                                            ${isDark ? 
                                                                'bg-gray-700 text-pink-300' : 
                                                                'bg-green-100 text-green-700'}
                                                        `}
                                                    >
                                                        {skill}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>

            <style jsx>{`
                @keyframes slide-in {
                    0% {
                        opacity: 0;
                        transform: translateY(20px);
                    }
                    100% {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
                .animate-slide-in {
                    animation: slide-in 0.6s ease-out forwards;
                }
            `}</style>
        </section>
    );
};

export default EducationComponent;