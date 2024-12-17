import React from 'react';
import { GraduationCap, Calendar, MapPin } from 'lucide-react';

const educationData = [
    {
        degree: "Master of Science in Computer Science",
        institution: "Stanford University",
        location: "Stanford, CA",
        period: "2018 - 2020",
        description: "Specialized in Artificial Intelligence and Machine Learning. Thesis on 'Deep Learning Approaches for Natural Language Processing'."
    },
    {
        degree: "Bachelor of Technology in Information Technology",
        institution: "Indian Institute of Technology, Delhi",
        location: "New Delhi, India",
        period: "2014 - 2018",
        description: "Graduated with honors. Focused on software engineering and data structures. Completed several projects including a campus-wide social networking application."
    }
];

const EducationComponent = ({ theme }) => {
    return (
        <section id="education" className={`py-16 ${theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-900'}`}>
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-bold mb-8 text-center">Education</h2>
                <div className="space-y-12">
                    {educationData.map((edu, index) => (
                        <div key={index} className={`p-6 rounded-lg shadow-lg ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'}`}>
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
