# **Portfolio Project**

This is a modern and responsive portfolio website built with **Next.js** and animated with **GSAP**. It showcases sections like banners, blogs, skills, education, experience, and projects.

<img width="1470" alt="image" src="https://github.com/user-attachments/assets/264bc1ce-1c3d-4d7d-9720-9371ba057627" />

---

## **Table of Contents**

- [**Portfolio Project**](#portfolio-project)
  - [**Table of Contents**](#table-of-contents)
  - [**Overview**](#overview)
  - [**Features**](#features)
  - [**Technologies Used**](#technologies-used)
  - [**Folder Structure**](#folder-structure)
  - [**Getting Started**](#getting-started)

---

## **Overview**

This portfolio website helps showcase your projects, skills, and experience interactively. It includes various components like a blog card, contact form, typewriter animation, and dark/light theme support.

---

## **Features**

- **Modern UI/UX**: Clean and responsive design.  
- **Light and Dark Mode**: Theme toggle for user preference.  
- **GSAP Animations**: Smooth entrance animations for better interactivity.  
- **Reusable Components**: Modular and clean code structure.  
- **Blog Cards**: Interactive cards for the latest blog posts.  
- **Contact Form**: Basic form for communication.  

---

## **Technologies Used**

- **Next.js** - React framework for server-side rendering.  
- **Tailwind CSS** - For styling and responsive design.  
- **GSAP** - For animations.  
- **Firebase** - For backend services and hosting.  

---

## **Folder Structure**

Here is the project directory structure:
```
test-app/
│
├── .next/                 # Next.js build output
├── node_modules/          # Dependencies
├── public/                # Static files
├── src/
│   ├── components/        # Reusable components
│   │   ├── BannerComponent.jsx
│   │   ├── BlogCard.jsx
│   │   ├── ContactForm.jsx
│   │   ├── EducationComponent.jsx
│   │   ├── ExperienceComponent.jsx
│   │   ├── Footer.jsx
│   │   ├── Navbar.jsx
│   │   ├── ProjectCard.jsx
│   │   ├── SkillsComponent.jsx
│   │   ├── TypewriterText.jsx
│   │
│   ├── lib/               # Utility files
│   ├── pages/             # Next.js routing
│   │   ├── api/           # API routes
│   │   ├── _app.js        # Main app component
│   │   ├── _document.js   # Custom document file
│   │   └── index.js       # Homepage
│   │
│   ├── styles/            # CSS or Tailwind styles
│
├── .gitignore             # Files to ignore in version control
├── firebase.json          # Firebase configuration
├── .firebaserc            # Firebase project configuration
└── README.md              # Project documentation

```

---

## **Getting Started**

Follow these steps to set up the project locally:

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/portfolio-project.git
    ```
2. Navigate to the Project Directory

```bash
cd test-app
```

3. Install Dependencies

```bash
npm install
```

4. How to Run
Run the development server:

```bash
npm run dev
```

The project will be available at:
http://localhost:3000

## **Contributing**

Contributions are welcome! Please fork this repository and create a pull request with your changes.
