import React, { useState } from 'react';
import Section from './shared/Section';
import { SOCIALS } from '../constants';
import { GithubIcon, LinkedinIcon, MailIcon, PhoneIcon } from './Icons';
import emailjs from 'emailjs-com'; // ✅ Make sure this is installed

const Contact: React.FC = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [loading, setLoading] = useState(false);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        emailjs.send(
            'service_hpnwnqr',         // ✅ Service ID
            'template_5sm2vh4',        // ✅ Template ID
            {
                from_name: formData.name,
                from_email: formData.email,
                message: formData.message,
            },
            'erCXsKPFCDx6QUO0V'         // ✅ Public Key
        )
        .then(() => {
            alert('Message sent successfully!');
            setFormData({ name: '', email: '', message: '' });
        })
        .catch((error) => {
            console.error('EmailJS error:', error);
            alert('Failed to send message. Please try again later.');
        })
        .finally(() => {
            setLoading(false);
        });
    };

    return (
        <Section title="Contact">
            <div className="flex flex-col lg:flex-row gap-12">
                <div className="lg:w-1/2">
                    <h3 className="font-fira text-2xl text-green-400 mb-4">// Get In Touch</h3>
                    <p className="text-gray-400 mb-8">
                        I'm always open to discussing new projects, creative ideas, or opportunities to be part of an amazing team. Feel free to reach out.
                    </p>
                    <div className="space-y-4">
                        <a href={`mailto:${SOCIALS.email}`} className="flex items-center gap-4 group">
                            <MailIcon className="w-6 h-6 text-green-400" />
                            <span className="text-gray-300 group-hover:text-green-400 transition-colors">{SOCIALS.email}</span>
                        </a>
                        <a href={`tel:${SOCIALS.phone}`} className="flex items-center gap-4 group">
                            <PhoneIcon className="w-6 h-6 text-green-400" />
                            <span className="text-gray-300 group-hover:text-green-400 transition-colors">{SOCIALS.phone}</span>
                        </a>
                        <a href={SOCIALS.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group">
                            <LinkedinIcon className="w-6 h-6 text-green-400" />
                            <span className="text-gray-300 group-hover:text-green-400 transition-colors">LinkedIn</span>
                        </a>
                        <a href={SOCIALS.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group">
                            <GithubIcon className="w-6 h-6 text-green-400" />
                            <span className="text-gray-300 group-hover:text-green-400 transition-colors">GitHub</span>
                        </a>
                    </div>
                </div>
                <div className="lg:w-1/2">
                    <form onSubmit={handleSubmit} className="space-y-4 font-fira p-6 bg-gray-900/50 border border-gray-800 rounded-lg">
                        <div>
                            <label htmlFor="name" className="block text-green-400 mb-1">C:\Users\Guest&gt; NAME</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleInputChange}
                                required
                                className="w-full bg-gray-900 border-2 border-gray-700 focus:border-green-400 text-gray-300 p-2 outline-none"
                            />
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-green-400 mb-1">C:\Users\Guest&gt; EMAIL</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleInputChange}
                                required
                                className="w-full bg-gray-900 border-2 border-gray-700 focus:border-green-400 text-gray-300 p-2 outline-none"
                            />
                        </div>
                        <div>
                            <label htmlFor="message" className="block text-green-400 mb-1">C:\Users\Guest&gt; MESSAGE</label>
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleInputChange}
                                required
                                rows={5}
                                className="w-full bg-gray-900 border-2 border-gray-700 focus:border-green-400 text-gray-300 p-2 outline-none resize-none"
                            ></textarea>
                        </div>
                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full font-fira text-lg text-green-400 border-2 border-green-400 px-6 py-2 hover:bg-green-400 hover:text-black transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-green-300 shadow-[0_0_10px_theme(colors.green.500)] hover:shadow-[0_0_20px_theme(colors.green.400)]"
                        >
                            {loading ? 'SENDING...' : 'EXECUTE SEND'}
                        </button>
                    </form>
                </div>
            </div>
        </Section>
    );
};

export default Contact;
