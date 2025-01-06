import React, { useEffect, useState } from 'react';
import { MapPin, Phone, Mail, MessageCircle } from 'lucide-react';

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
    const [status, setStatus] = useState('idle'); // idle, submitting, success
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
                        entry.target.classList.add('animate-slide-in');
                    }
                });
            },
            { threshold: 0.2 }
        );

        document.querySelectorAll('.contact-card').forEach((card) => observer.observe(card));

        return () => observer.disconnect();
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('submitting');

        // Simulate API call
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
        <section className={`py-16 ${isDark ? 'bg-gray-900' : 'bg-gray-50'}`}>
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <div className="inline-block mb-4">
                        <MessageCircle
                            size={48}
                            className={`${isDark ? 'text-green-400' : 'text-green-600'} animate-bounce`}
                        />
                    </div>
                    <h2 className={`text-4xl mb-4 font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>
                        Get in Touch
                    </h2>
                    <p>We'd love to hear from you! Whether you have a question, feedback, or just want to say hello, feel free to reach out to us.</p>
                    <div
                        className={`mt-4 h-1 w-24 mx-auto rounded ${isDark ? 'bg-pink-500' : 'bg-green-500'}`}
                    />
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Contact Information */}
                    <div className="space-y-8">
                        {contactDetails.map((detail, index) => {
                            const Icon = detail.icon;
                            return (
                                <div
                                    key={index}
                                    className={`contact-card p-6 rounded-xl shadow-lg backdrop-blur-sm
                                    ${isDark ? 'bg-gray-800/90 border-pink-500/20' : 'bg-white border-green-500/20'}
                                    hover:border-opacity-100 transition-all duration-300 border-2 animate-opacity`}
                                >
                                    <div className="flex items-center space-x-4">
                                        <Icon
                                            size={32}
                                            className={`${isDark ? 'text-pink-400' : 'text-green-500'}`}
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

                    {/* Contact Form */}
                    <form onSubmit={handleSubmit} className="space-y-6 ml-auto">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            {['firstName', 'lastName'].map((field) => (
                                <div
                                    key={field}
                                    className={`transform transition-all duration-300 ${focusedField === field ? 'scale-[1.02]' : ''
                                        }`}
                                >
                                    <input
                                        type="text"
                                        name={field}
                                        value={formData[field]}
                                        onChange={handleChange}
                                        placeholder={field === 'firstName' ? 'First Name' : 'Last Name'}
                                        required
                                        onFocus={() => setFocusedField(field)}
                                        onBlur={() => setFocusedField(null)}
                                        className={`${isDark ? 'bg-slate-600 border-pink-500/20' : 'bg-white border-green-300'} selection:w-full px-4 py-3 rounded-lg border  focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition-all duration-300`}
                                    />
                                </div>
                            ))}
                        </div>

                        {['email', 'phone'].map((field) => (
                            <div
                                key={field}
                                className={`transform transition-all duration-300 ${focusedField === field ? 'scale-[1.02]' : ''
                                    }`}
                            >
                                <input
                                    type={field === 'email' ? 'email' : 'tel'}
                                    name={field}
                                    value={formData[field]}
                                    onChange={handleChange}
                                    placeholder={field === 'email' ? 'Email' : 'Phone number'}
                                    required={field === 'email'}
                                    onFocus={() => setFocusedField(field)}
                                    onBlur={() => setFocusedField(null)}
                                    className={`${isDark ? 'bg-slate-600 border-pink-500/20' : 'bg-white border-green-300'} w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition-all duration-300`}
                                />
                            </div>
                        ))}

                        <div
                            className={`transform transition-all duration-300 ${focusedField === 'message' ? 'scale-[1.02]' : ''
                                }`}
                        >
                            <textarea
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                placeholder="Your Message"
                                required
                                onFocus={() => setFocusedField('message')}
                                onBlur={() => setFocusedField(null)}
                                className={`${isDark ? 'bg-slate-600 border-pink-500/20' : 'bg-white border-green-300'} w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition-all duration-300 min-h-[120px]`}
                            />
                        </div>

                        <button
                            type="submit"
                            disabled={status === 'submitting'}
                            className={`w-full py-3 px-6 rounded-lg font-semibold  transition-all duration-300
                                ${status === 'submitting'
                                    ? 'bg-green-400 cursor-not-allowed'
                                    : 'bg-green-600 hover:bg-green-700 active:scale-95'
                                }
                            `}
                        >
                            {status === 'submitting' ? 'Sending...' : 'Send Message'}
                        </button>

                        {status === 'success' && (
                            <div className=" border-l-4 border-green-500 p-4 animate-fade-in">
                                <p className="text-green-700">Thank you! Your message has been sent successfully.</p>
                            </div>
                        )}
                    </form>
                </div>
            </div>

            <style jsx>{`
                @keyframes slide-in {
                    0% {
                        opacity: 0;
                        transform: translateY(20px);
                    }
                    100% {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
                .animate-slide-in {
                    animation: slide-in 0.6s ease-out forwards;
                }
            `}</style>
        </section>
    );
};

export default ContactUsComponent;
