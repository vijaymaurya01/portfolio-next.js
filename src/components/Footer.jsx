import React from 'react';
import { Home, User, Mail } from 'lucide-react';

const Footer = ({ theme }) => {
    return (
        <footer className={`py-8 ${theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-gray-100 text-gray-900'} shadow-lg z-0`}>
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 ">
                <div className="flex justify-between items-center">
                    <div className="text-lg font-semibold">
                        <a href="/" className="text-2xl font-bold">Vijay Kumar Maurya</a>
                    </div>
                    <div className='flex items-end space-x-4'>

                        <a href="#home" className="flex items-le space-x-2 hover:text-gray-500">
                            <Home size={20} />
                            <span>Home</span>
                        </a>
                        <a href="#about" className="flex items-center space-x-2 hover:text-gray-500">
                            <User size={20} />
                            <span>About</span>
                        </a>
                        <a href="#contact" className="flex items-center space-x-2 hover:text-gray-500">
                            <Mail size={20} />
                            <span>Contact</span>
                        </a>

                    </div>
                </div>
                <div className="mt-6 text-center text-sm">
                    <p>&copy; {new Date().getFullYear()} Vijay Kumar Maurya. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
