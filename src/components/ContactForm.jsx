import React, { useEffect, useState } from 'react';
import { MapPin, Phone, Mail, MessageCircle, Send } from 'lucide-react';

const contactDetails = [
    {
        label: "Address",
        value: "545 Mavis Island, Chicago, IL 99191",
        icon: MapPin,
    },
    {
        label: "Phone",
        value: "+1 (555) 234-5678",
        icon: Phone,
    },
    {
        label: "Email",
        value: "hello@example.com",
        icon: Mail,
    },
];

const ContactUsComponent = ({ theme = 'light' }) => {
    const [focusedField, setFocusedField] = useState(null);
    const [status, setStatus] = useState('idle');
    const [isVisible, setIsVisible] = useState(false);
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        message: '',
    });

    const isDark = theme === 'dark';

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setIsVisible(true);
                    }
                });
            },
            { threshold: 0.1 }
        );

        const section = document.querySelector('.contact-section');
        if (section) observer.observe(section);

        return () => observer.disconnect();
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('submitting');
        await new Promise((resolve) => setTimeout(resolve, 1500));
        setStatus('success');
        setTimeout(() => setStatus('idle'), 3000);
        setFormData({
            firstName: '',
            lastName: '',
            email: '',
            phone: '',
            message: '',
        });
    };

    return (
        <section 
            className={`contact-section p-4 sm:p-8 md:p-16 ${isDark ? 'bg-gray-900' : 'bg-gray-50'} 
                transition-all duration-500 ease-in-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="text-center mb-8 md:mb-16 animate-fade-in">
                    <div className="inline-block mb-4 transform hover:scale-110 transition-transform duration-300">
                        <MessageCircle
                            size={48}
                            className={`${isDark ? 'text-green-400' : 'text-green-600'} hover:rotate-12 transition-all duration-300`}
                        />
                    </div>
                    <h2 className={`text-3xl md:text-4xl mb-4 font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>
                        Get in Touch
                    </h2>
                    <p className={`max-w-2xl mx-auto ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                        We'd love to hear from you! Whether you have a question, feedback, or just want to say hello.
                    </p>
                    <div className={`mt-4 h-1 w-24 mx-auto rounded transition-all duration-300 hover:w-32 
                        ${isDark ? 'bg-pink-500' : 'bg-green-500'}`} 
                    />
                </div>

                {/* Content Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
                    {/* Contact Cards */}
                    <div className="space-y-6">
                        {contactDetails.map((detail, index) => {
                            const Icon = detail.icon;
                            return (
                                <div
                                    key={index}
                                    className={`group p-6 rounded-xl shadow-lg backdrop-blur-sm
                                        ${isDark ? 'bg-gray-800/90' : 'bg-white'} 
                                        hover:scale-105 transition-all duration-300
                                        border-2 ${isDark ? 'border-pink-500/20' : 'border-green-500/20'}
                                        hover:border-opacity-100`}
                                    style={{
                                        animationDelay: `${index * 200}ms`,
                                        animation: 'slideIn 0.6s ease-out forwards'
                                    }}
                                >
                                    <div className="flex items-center space-x-4">
                                        <Icon
                                            size={32}
                                            className={`${isDark ? 'text-pink-400' : 'text-green-500'} 
                                                group-hover:rotate-12 transition-transform duration-300`}
                                        />
                                        <div>
                                            <p className={`text-lg font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}>
                                                {detail.label}
                                            </p>
                                            <p className={`${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                                                {detail.value}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                    {/* Form */}
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                            {['firstName', 'lastName'].map((field) => (
                                <div key={field} className="transform transition-all duration-300">
                                    <input
                                        type="text"
                                        name={field}
                                        value={formData[field]}
                                        onChange={handleChange}
                                        placeholder={field === 'firstName' ? 'First Name' : 'Last Name'}
                                        required
                                        onFocus={() => setFocusedField(field)}
                                        onBlur={() => setFocusedField(null)}
                                        className={`w-full px-4 py-3 rounded-lg transition-all duration-300
                                            ${isDark ? 'bg-gray-800 text-white' : 'bg-white text-gray-900'}
                                            border-2 ${isDark ? 'border-pink-500/20' : 'border-green-500/20'}
                                            focus:ring-2 focus:ring-offset-2 
                                            ${isDark ? 'focus:ring-pink-500' : 'focus:ring-green-500'}
                                            ${focusedField === field ? 'scale-105' : ''}`}
                                    />
                                </div>
                            ))}
                        </div>

                        {['email', 'phone'].map((field) => (
                            <input
                                key={field}
                                type={field === 'email' ? 'email' : 'tel'}
                                name={field}
                                value={formData[field]}
                                onChange={handleChange}
                                placeholder={field === 'email' ? 'Email' : 'Phone number'}
                                required={field === 'email'}
                                className={`w-full px-4 py-3 rounded-lg transition-all duration-300
                                    ${isDark ? 'bg-gray-800 text-white' : 'bg-white text-gray-900'}
                                    border-2 ${isDark ? 'border-pink-500/20' : 'border-green-500/20'}
                                    focus:ring-2 focus:ring-offset-2
                                    ${isDark ? 'focus:ring-pink-500' : 'focus:ring-green-500'}`}
                            />
                        ))}

                        <textarea
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            placeholder="Your Message"
                            required
                            className={`w-full px-4 py-3 rounded-lg min-h-[120px] transition-all duration-300
                                ${isDark ? 'bg-gray-800 text-white' : 'bg-white text-gray-900'}
                                border-2 ${isDark ? 'border-pink-500/20' : 'border-green-500/20'}
                                focus:ring-2 focus:ring-offset-2
                                ${isDark ? 'focus:ring-pink-500' : 'focus:ring-green-500'}`}
                        />

                        <button
                            type="submit"
                            disabled={status === 'submitting'}
                            className={`w-full py-3 px-6 rounded-lg font-semibold text-white
                                flex items-center justify-center space-x-2
                                transition-all duration-300 transform hover:scale-105
                                ${status === 'submitting'
                                    ? 'bg-gray-400 cursor-not-allowed'
                                    : `${isDark ? 'bg-pink-600 hover:bg-pink-700' : 'bg-green-600 hover:bg-green-700'}`
                                } active:scale-95`}
                        >
                            <span>{status === 'submitting' ? 'Sending...' : 'Send Message'}</span>
                            <Send size={20} className={`ml-2 ${status === 'submitting' ? 'animate-bounce' : 'animate-none'}`} />
                        </button>

                        {status === 'success' && (
                            <div className="border-l-4 border-green-500 p-4 bg-green-50 text-green-700 rounded animate-fade-in">
                                Thank you! Your message has been sent successfully.
                            </div>
                        )}
                    </form>
                </div>
            </div>
        </section>
    );
};

export default ContactUsComponent;