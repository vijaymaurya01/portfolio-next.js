import React, { useEffect, useRef, useState } from 'react';

const posts = [
    {
        title: "What is SaaS? Software as a Service Explained",
        desc: "Going into this journey, I had a standard therapy regimen, based on looking at the research literature. After I saw the movie, I started to ask other people.",
        img: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        date: "Jan 4 2022",
        href: "javascript:void(0)",
        category: "Technology"
    },
    {
        title: "A Quick Guide to WordPress Hosting",
        desc: "According to him, 'I'm still surprised that this has happened. But we are surprised because we are so surprised.' More revelations.",
        img: "https://images.unsplash.com/photo-1566207474742-de921626ad0c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        date: "Jan 4 2022",
        href: "javascript:void(0)",
        category: "Web Development"
    },
    {
        title: "7 Promising VS Code Extensions Introduced in 2022",
        desc: "I hope I remembered all the stuff that they needed to know. They're like, 'okay,' and write it in their little reading notebooks.",
        img: "https://images.unsplash.com/photo-1534972195531-d756b9bfa9f2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        date: "Jan 4 2022",
        href: "javascript:void(0)",
        category: "Tools"
    },
    {
        title: "How to Use Root C++ Interpreter Shell",
        desc: "The powerful gravity waves resulting from the impact of the planets' moons — four in total — were finally resolved in 2015.",
        img: "https://images.unsplash.com/photo-1648393847044-0f31992a9ea2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        date: "Jan 4 2022",
        href: "javascript:void(0)",
        category: "Programming"
    },
    {
        title: "The Future of AI in Healthcare",
        desc: "Exploring how AI is revolutionizing healthcare diagnostics, treatment plans, and patient care. A comprehensive look at current applications.",
        img: "https://images.unsplash.com/photo-1694903089438-bf28d4697d9a?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        date: "Jan 5 2022",
        href: "javascript:void(0)",
        category: "AI & Healthcare"
    },
    {
        title: "Understanding Blockchain Technology",
        desc: "Deep dive into blockchain technology's potential applications in supply chain, voting systems, and digital identity verification.",
        img: "https://images.unsplash.com/photo-1639825988283-39e5408b75e8?q=80&w=2105&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        date: "Jan 6 2022",
        href: "javascript:void(0)",
        category: "Blockchain"
    }
];

export default function BlogCard() {
    const [visibleCards, setVisibleCards] = useState(new Set());
    const observerRef = useRef(null);

    useEffect(() => {
        observerRef.current = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        setVisibleCards(prev => new Set([...prev, entry.target.dataset.index]));
                    }
                });
            },
            {
                threshold: 0.1,
                rootMargin: '50px'
            }
        );

        const cards = document.querySelectorAll('.blog-card');
        cards.forEach(card => observerRef.current.observe(card));

        return () => {
            if (observerRef.current) {
                observerRef.current.disconnect();
            }
        };
    }, []);

    return (
        <section className="py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center space-y-6 max-w-2xl mx-auto mb-12">
                    <h1 className="text-4xl font-bold tracking-tight  sm:text-5xl">
                        Latest blog posts
                    </h1>
                    <p className="text-lg  ">
                        Blogs that are loved by the community. Updated every hour.
                    </p>
                </div>

                <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {posts.map((post, index) => (
                        <div
                            key={index}
                            data-index={index}
                            className={`
                                blog-card rounded-xl overflow-hidden shadow-lg 
                                transform transition-all duration-500 ease-out
                                hover:shadow-xl dark:shadow-gray-700/30
                                ${visibleCards.has(index.toString()) ? 
                                    'opacity-100 translate-y-0' : 
                                    'opacity-0 translate-y-16'
                                }
                            `}
                        >
                            <a href={post.href} className="block group h-full">
                                <div className="relative overflow-hidden aspect-video">
                                    <img
                                        src={post.img}
                                        alt={post.title}
                                        className="object-cover w-full h-full transition-transform duration-300 ease-out group-hover:scale-105"
                                        loading="lazy"
                                    />
                                </div>
                                <div className="p-6 flex flex-col flex-grow">
                                    <div className="flex items-center gap-2 mb-4">
                                        <span className="px-3 py-1 text-xs bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-100 rounded-full">
                                            {post.category}
                                        </span>
                                        <span className="text-xs ">
                                            {post.date}
                                        </span>
                                    </div>
                                    <h3 className="text-lg font-semibold mb-2   group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors duration-200">
                                        {post.title}
                                    </h3>
                                    <p className="text-sm  line-clamp-2">
                                        {post.desc}
                                    </p>
                                </div>
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}