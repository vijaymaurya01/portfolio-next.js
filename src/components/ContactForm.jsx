import React, { useState } from 'react';
import * as XLSX from 'xlsx';

const ContactForm = () => {
    // Define state to hold form data
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        message: ''
    });

    // Show success message on form submission
    const [showSuccess, setShowSuccess] = useState(false);

    // Handle form input changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };

    // Handle form submission and create an Excel file
    const handleSubmit = (e) => {
        e.preventDefault();

        // Create a new row of data
        const newData = [
            {
                "First Name": formData.firstName,
                "Last Name": formData.lastName,
                "Email": formData.email,
                "Phone": formData.phone,
                "Message": formData.message
            }
        ];

        // Create Excel file
        const ws = XLSX.utils.json_to_sheet(newData);
        const wb = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(wb, ws, "Contacts");

        // Export file to user
        XLSX.writeFile(wb, 'contact_data.xlsx');

        // Show success message for 3 seconds
        setShowSuccess(true);
        setTimeout(() => setShowSuccess(false), 3000); // Hide after 3 seconds
    };

    return (
        <div className="max-w-7xl mx-auto px-6 py-8">
            <div className="flex flex-col lg:flex-row justify-center">
                {/* Left Column with Information */}
                <div className="lg:w-1/2 pr-16 space-y-5 ">
                    <h2 className="text-3xl font-bold">Get in Touch</h2>
                    <p>We’d love to hear from you! Whether you have a question, feedback, or just want to say hello, feel free to reach out to us. Here’s how you can get in touch:</p>
                    <div>
                        <p><strong>Address:</strong> 545 Mavis Island, Chicago, IL 99191</p>
                        <p><strong>Phone:</strong> +1 (555) 234-5678</p>
                        <p><strong>Email:</strong> hello@example.com</p>
                    </div>
                </div>

                {/* Right Column with Contact Form */}
                <div className="lg:w-1/2 space-y-4">
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <input
                                type="text"
                                name="firstName"
                                value={formData.firstName}
                                onChange={handleChange}
                                placeholder="First Name"
                                required
                                className="input"
                            />
                            <input
                                type="text"
                                name="lastName"
                                value={formData.lastName}
                                onChange={handleChange}
                                placeholder="Last Name"
                                required
                                className="input"
                            />
                        </div>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Email"
                            required
                            className="input"
                        />
                        <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            placeholder="Phone number"
                            className="input"
                        />
                        <textarea
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            placeholder="Your Message"
                            required
                            className="input"
                        />
                        <button type="submit" className="btn-submit bg-green-600">Send Message</button>
                    </form>

                    {/* Success Message */}
                    {showSuccess && (
                        <div className="success-message">
                            <p>Form submitted successfully!</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ContactForm;
