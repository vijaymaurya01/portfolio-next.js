'use client'

import { useState, useEffect } from 'react'
import { Home, UserCircle, BriefcaseBusiness, Brain, Backpack, FileText, Layers, Menu, X, Sun, Moon, Mail } from 'lucide-react'
import { gsap } from 'gsap'
import { cn } from '@/lib/utils'

const navItems = [
    { label: 'About', icon: <UserCircle size={18} />, href: '#about' },
    { label: 'Skills', icon: <Brain size={18} />, href: '#skills' },
    { label: 'Experience', icon: <BriefcaseBusiness size={18} />, href: '#experience' },
    { label: 'Education', icon: <Backpack size={18} />, href: '#education' },
    { label: 'Blogs', icon: <FileText size={18} />, href: '#blogs' },
    { label: 'Projects', icon: <Layers size={18} />, href: '#projects' }
]

export default function Navbar({ theme, toggleTheme }) {
    const [isOpen, setIsOpen] = useState(false)
    const [activeSection, setActiveSection] = useState('')

    // Detecting which section is currently visible on scroll
    useEffect(() => {
        const handleScroll = () => {
            const sections = navItems.map(item => item.href.slice(1))
            const currentSection = sections.find(section => {
                const element = document.getElementById(section)
                if (element) {
                    const rect = element.getBoundingClientRect()
                    return rect.top <= 100 && rect.bottom >= 100
                }
                return false
            })
            setActiveSection(currentSection || '')
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    // GSAP animation for navigation items
    useEffect(() => {
        gsap.fromTo(
            '.nav-item',
            { opacity: 0, x: -50 },
            { opacity: 1, x: 0, duration: 0.5, stagger: 0.1 }
        )
    }, [])

    const handleItemClick = (href) => {
        setIsOpen(false)
        const element = document.querySelector(href)
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' })
        }
    }

    return (
        <nav className={`fixed top-0 left-0 right-0 ${theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-white text-gray-800'} shadow-md z-50`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center">
                        <a href="#" className="text-xl font-bold">Vijay</a>
                    </div>
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-4">
                            {navItems.map((item) => (
                                <a
                                    key={item.href}
                                    href={item.href}
                                    onClick={(e) => {
                                        e.preventDefault()
                                        handleItemClick(item.href)
                                    }}
                                    className={cn(
                                        "nav-item flex items-center px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ease-in-out",
                                        activeSection === item.href.slice(1)
                                            ? theme === 'dark' ? "bg-green-500 text-black" : "bg-green-400 text-gray-900"
                                            : theme === 'dark' ? "text-gray-300 hover:bg-gray-700 hover:text-white" : "text-gray-600 hover:bg-gray-100 hover:text-gray-900"
                                    )}
                                >
                                    {item.icon}
                                    <span className="ml-2">{item.label}</span>
                                </a>
                            ))}
                            {/* Contact button with animation */}
                            <a
                                href="#contact"
                                className={cn(
                                    "nav-item flex items-center px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ease-in-out",
                                    theme === 'dark' ? "text-gray-300 hover:bg-gray-700 hover:text-white" : "text-gray-600 hover:bg-gray-100 hover:text-gray-900"
                                )}
                                onClick={(e) => {
                                    e.preventDefault()
                                    handleItemClick('#contact')
                                }}
                            >
                                <Mail size={18} />
                                <span className="ml-2">Contact</span>
                            </a>
                        </div>
                    </div>
                    <div className="flex items-center">
                        <button
                            onClick={toggleTheme}
                            className={`p-2 rounded-md ${theme === 'dark' ? 'text-yellow-400 hover:bg-gray-700' : 'text-gray-600 hover:bg-gray-100'}`}
                            aria-label="Toggle theme"
                        >
                            {theme === 'dark' ? <Sun size={24} /> : <Moon size={24} />}
                        </button>
                        <div className="md:hidden ml-2">
                            <button
                                onClick={() => setIsOpen(!isOpen)}
                                className={`inline-flex items-center justify-center p-2 rounded-md ${theme === 'dark' ? 'text-gray-400 hover:text-white hover:bg-gray-700' : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'} focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white`}
                                aria-expanded={isOpen}
                            >
                                <span className="sr-only">Open main menu</span>
                                {isOpen ? <X size={24} /> : <Menu size={24} />}
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Mobile menu, show/hide based on menu state */}
            <div className={`${isOpen ? 'block' : 'hidden'} md:hidden`}>
                <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                    {navItems.map((item) => (
                        <a
                            key={item.href}
                            href={item.href}
                            onClick={(e) => {
                                e.preventDefault()
                                handleItemClick(item.href)
                            }}
                            className={cn(
                                "nav-item flex items-center px-3 py-2 rounded-md text-base font-medium",
                                activeSection === item.href.slice(1)
                                    ? theme === 'dark' ? "bg-gray-700 text-white" : "bg-gray-200 text-gray-900"
                                    : theme === 'dark' ? "text-gray-300 hover:bg-gray-700 hover:text-white" : "text-gray-600 hover:bg-gray-100 hover:text-gray-900"
                            )}
                        >
                            {item.icon}
                            <span className="ml-2">{item.label}</span>
                        </a>
                    ))}
                    {/* Mobile Contact Button */}
                    <a
                        href="#contact"
                        className={cn(
                            "nav-item flex items-center px-3 py-2 rounded-md text-base font-medium",
                            theme === 'dark' ? "text-gray-300 hover:bg-gray-700 hover:text-white" : "text-gray-600 hover:bg-gray-100 hover:text-gray-900"
                        )}
                        onClick={(e) => {
                            e.preventDefault()
                            handleItemClick('#contact')
                        }}
                    >
                        <Mail size={18} />
                        <span className="ml-2">Contact</span>
                    </a>
                </div>
            </div>
        </nav>
    )
}
