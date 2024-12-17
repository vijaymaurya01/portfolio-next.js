import Image from 'next/image'

export default function ProjectCard({ title, description, imageUrl, technologies, theme }) {
    return (
        <div className={`max-w-sm rounded overflow-hidden shadow-lg ${theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-white'}`}>
            <Image src={imageUrl} alt={title} width={400} height={200} className="w-full" />
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{title}</div>
                <p className={`text-base ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                    {description}
                </p>
            </div>
            <div className="px-6 pt-4 pb-2">
                {technologies.map((tech, index) => (
                    <span key={index} className={`inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold ${theme === 'dark' ? 'text-gray-700' : 'text-gray-700'} mr-2 mb-2`}>
                        {tech}
                    </span>
                ))}
            </div>
        </div>
    )
}

