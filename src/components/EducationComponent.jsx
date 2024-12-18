import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { GraduationCap, Calendar, MapPin } from 'lucide-react';

const educationData = [
    {
        degree: "Master of Computer Applications (MCA)",
        institution: "Chandigarh University",
        location: "Chandigarh, India",
        period: "2021 - 2023",
        description: "Graduated with a CGPA of 8.1. Focused on software development, AI, and cloud computing.",
    },
    {
        degree: "Bachelor of Computer Applications (BCA)",
        institution: "MCRP University",
        location: "Bhopal, India",
        period: "2018 - 2021",
        description: "Graduated with a CGPA of 8.21. Emphasized on programming languages, database management, and web development.",
    },
];

const EducationComponent = ({ theme }) => {
    useEffect(() => {
        gsap.fromTo(
            '.education-card',
            { opacity: 0, y: 50 },
            { opacity: 1, y: 0, duration: 0.8, stagger: 0.3, ease: 'power3.out', repeat: -1, yoyo: true }
        );
    }, []);

    return (
        <section id="education" className={`py-16 ${theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-900'}`}>
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-bold mb-8 text-center">Education</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    {educationData.map((edu, index) => (
                        <div key={index} className={`education-card p-6 rounded-lg shadow-lg ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'} hover:scale-105 transform transition-transform`}>
                            <div className="flex items-center mb-4">
                                <GraduationCap className={`mr-2 ${theme === 'dark' ? 'text-[#00FF9D]' : 'text-green-600'}`} size={24} />
                                <h3 className="text-xl font-semibold">{edu.degree}</h3>
                            </div>
                            <p className={`text-lg mb-2 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>{edu.institution}</p>
                            <div className="flex items-center mb-2">
                                <MapPin className={`mr-2 ${theme === 'dark' ? 'text-[#FF26B9]' : 'text-pink-600'}`} size={18} />
                                <p className={`${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>{edu.location}</p>
                            </div>
                            <div className="flex items-center mb-4">
                                <Calendar className={`mr-2 ${theme === 'dark' ? 'text-[#FF26B9]' : 'text-pink-600'}`} size={18} />
                                <p className={`${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>{edu.period}</p>
                            </div>
                            <p className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>{edu.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default EducationComponent;
