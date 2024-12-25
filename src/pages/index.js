'use client'

import { useState, useEffect } from 'react'
import Navbar from '@/components/Navbar'
import BannerComponent from '@/components/BannerComponent'
import BlogCard from '@/components/BlogCard'
import ProjectCard from '@/components/ProjectCard'
import EducationComponent from '@/components/EducationComponent'
import SkillsComponent from '@/components/SkillsComponent'
import ExperienceComponent from '@/components/ExperienceComponent'
import Footer from '@/components/Footer'
import ContactForm from '@/components/ContactForm'



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
      <main className="">
        <section id="about">
          <BannerComponent theme={theme} />
        </section>
        <section id="skills">
          <SkillsComponent theme={theme} />
        </section>
        <section id="experience" >

          <ExperienceComponent theme={theme} />
        </section>

        <section id="education">

        <EducationComponent theme={theme} />
        </section>

        <section id="blogs" className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <BlogCard />
          </div>
        </section>

        <section id="projects" className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold mb-8 text-center">Projects</h2>
            <div className="relative">
              <div className="flex overflow-hidden">
                <ProjectCard theme={theme} />
              </div>
            </div>
          </div>
        </section>
        <section id="contact">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           
            <div className="relative">
              <div className="flex overflow-hidden">
                <ContactForm theme={theme} />
              </div>
            </div>
          </div>
        </section>

      </main>
      <footer>
        <Footer theme={theme} />
      </footer>
    </div>
  )
}

