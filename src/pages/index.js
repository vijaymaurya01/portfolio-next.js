'use client'

import { useState, useEffect } from 'react'
import Navbar from '@/components/Navbar'
import BannerComponent from '@/components/BannerComponent'
import BlogCard from '@/components/BlogCard'
import ProjectCard from '@/components/ProjectCard'
import EducationComponent from '@/components/EducationComponent'
import SkillsComponent from '@/components/SkillsComponent'
import ExperienceComponent from '@/components/ExperienceComponent'

const blogPosts = [
  { title: 'Getting Started with React', excerpt: 'Learn the basics of React and start building your first app.', date: 'May 1, 2023', imageUrl: '/placeholder.svg?height=200&width=400' },
  { title: 'Advanced Next.js Techniques', excerpt: 'Dive deep into Next.js and learn advanced concepts.', date: 'June 15, 2023', imageUrl: '/placeholder.svg?height=200&width=400' },
  { title: 'Mastering CSS Grid', excerpt: 'Unlock the power of CSS Grid for complex layouts.', date: 'July 3, 2023', imageUrl: '/placeholder.svg?height=200&width=400' },
  { title: 'The Future of JavaScript', excerpt: 'Explore upcoming features in JavaScript and how they will change web development.', date: 'August 20, 2023', imageUrl: '/placeholder.svg?height=200&width=400' },
]

const projects = [
  { title: 'E-commerce Platform', description: 'A full-featured online store built with Next.js and Stripe.', imageUrl: '/placeholder.svg?height=200&width=400', technologies: ['Next.js', 'React', 'Stripe'] },
  { title: 'Task Management App', description: 'A productivity app for teams, featuring real-time updates.', imageUrl: '/placeholder.svg?height=200&width=400', technologies: ['React', 'Firebase', 'Tailwind CSS'] },
  { title: 'Weather Dashboard', description: 'A responsive weather app with location-based forecasts.', imageUrl: '/placeholder.svg?height=200&width=400', technologies: ['Vue.js', 'OpenWeatherMap API'] },
  { title: 'Social Media Analytics Tool', description: 'Track and analyze social media performance across platforms.', imageUrl: '/placeholder.svg?height=200&width=400', technologies: ['React', 'D3.js', 'Node.js'] },
]

export default function Home() {
  const [theme, setTheme] = useState('light')
  const [blogIndex, setBlogIndex] = useState(0)
  const [projectIndex, setProjectIndex] = useState(0)

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'light'
    setTheme(savedTheme)
    document.documentElement.classList.toggle('dark', savedTheme === 'dark')
  }, [])

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light'
    setTheme(newTheme)
    localStorage.setItem('theme', newTheme)
    document.documentElement.classList.toggle('dark', newTheme === 'dark')
  }

  const slideBlog = (direction) => {
    setBlogIndex((prevIndex) => {
      const newIndex = prevIndex + direction
      if (newIndex < 0) return blogPosts.length - 1
      if (newIndex >= blogPosts.length) return 0
      return newIndex
    })
  }

  const slideProject = (direction) => {
    setProjectIndex((prevIndex) => {
      const newIndex = prevIndex + direction
      if (newIndex < 0) return projects.length - 1
      if (newIndex >= projects.length) return 0
      return newIndex
    })
  }

  return (
    <div className={`min-h-screen ${theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-900'}`}>
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <main className="pt-16">
        <section id="about">
        <BannerComponent theme={theme}  />
        </section>
        <SkillsComponent theme={theme} />
        <ExperienceComponent theme={theme} />
        

        <EducationComponent theme={theme} />

        <section id="blogs" className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <BlogCard/>
          </div>
        </section>

        <section id="projects" className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-8 text-center">Featured Projects</h2>
            <div className="relative">
              <div className="flex overflow-hidden">
                <ProjectCard {...projects[projectIndex]} theme={theme} />
              </div>
              <button
                onClick={() => slideProject(-1)}
                className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full"
              >
                &#8592;
              </button>
              <button
                onClick={() => slideProject(1)}
                className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full"
              >
                &#8594;
              </button>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

