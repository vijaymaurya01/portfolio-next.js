import React from 'react';
import { Home, User, Mail, Github, Linkedin, Twitter } from 'lucide-react';

const Footer = ({ theme }) => {
    const baseColor = theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-gray-100 text-gray-900';

    return (
        <footer className={`py-8 ${baseColor}`}>
            <div className="max-w-6xl mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-8">
                    {/* Brand Section - Left */}
                    <div className="flex flex-col space-y-2">
                        <a
                            href="/"
                            className="text-3xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent inline-block transform hover:scale-105 transition-transform duration-200"
                        >
                            Vijay Kumar Maurya
                        </a>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                            Building amazing digital experiences
                        </p>
                    </div>

                    {/* Navigation - Center */}
                    <nav className="flex items-center space-x-8">
                        {[
                            { icon: Home, label: 'Home', href: '#home' },
                            { icon: User, label: 'About', href: '#about' },
                            { icon: Mail, label: 'Contact', href: '#contact' }
                        ].map((item) => (
                            <a
                                key={item.label}
                                href={item.href}
                                className="flex items-center space-x-2 group hover:-translate-y-1 transition-all duration-200"
                            >
                                <item.icon
                                    size={20}
                                    className="group-hover:text-blue-500 transition-colors duration-200"
                                />
                                <span className="font-medium">{item.label}</span>
                            </a>
                        ))}
                    </nav>

                    {/* Social Links - Right */}
                    <div className="flex items-center space-x-4">
                        {[
                            { icon: Github, href: '#', label: 'GitHub' },
                            { icon: Linkedin, href: '#', label: 'LinkedIn' },
                            { icon: Twitter, href: '#', label: 'Twitter' }
                        ].map((social) => (
                            <a
                                key={social.label}
                                href={social.href}
                                className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 
                                         transition-all duration-200 group"
                                aria-label={social.label}
                            >
                                <social.icon
                                    size={24}
                                    className="group-hover:scale-110 group-hover:text-blue-500 
                                             transition-all duration-200"
                                />
                            </a>
                        ))}
                    </div>
                </div>

                {/* Divider */}
                <div className="w-full h-px bg-gray-200 dark:bg-gray-700 mb-8"></div>

                {/* Copyright */}
                <div className="text-center text-sm text-gray-500 dark:text-gray-400">
                    <p>&copy; {new Date().getFullYear()} Vijay Kumar Maurya. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;