import '@/app/globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
    title: 'Vijay Kumar Maurya - Software Developer',
    description: 'Professional Software Developer Portfolio',
}

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <head>
                <meta name="color-scheme" content="light dark" />
            </head>
            <body className={inter.className}>{children}</body>
        </html>
    )
}

