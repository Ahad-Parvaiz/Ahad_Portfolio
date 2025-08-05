
import React, { useState, useEffect } from 'react';
import { AVATAR_URL } from '../constants';

const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Education', href: '#education' },
    { name: 'Experience', href: '#experience' },
    { name: 'Certifications', href: '#certifications' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
];

const Header: React.FC = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > window.innerHeight - 100) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', toggleVisibility);

        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    const scrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        e.preventDefault();
        document.querySelector(href)?.scrollIntoView({
            behavior: 'smooth'
        });
    };

    return (
        <header className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${isVisible ? 'translate-y-0' : '-translate-y-full'}`}>
            <div className="container mx-auto px-4 py-2 bg-black/50 backdrop-blur-lg border-b border-green-500/20">
                <nav className="flex justify-between items-center">
                    <a href="#hero" onClick={(e) => scrollTo(e, '#hero')} className="transition-all duration-300">
                        <img 
                            src={AVATAR_URL} 
                            alt="Ahad Parvaiz Logo" 
                            className="h-12 w-12 rounded-full border-2 border-green-500/50 object-cover hover:border-green-400 hover:shadow-[0_0_15px_theme(colors.green.400)] transition-all duration-300"
                        />
                    </a>
                    <ul className="hidden md:flex space-x-6 font-fira">
                        {navLinks.map((link) => (
                            <li key={link.name}>
                                <a 
                                    href={link.href} 
                                    onClick={(e) => scrollTo(e, link.href)} 
                                    className="text-gray-300 hover:text-green-400 transition-all duration-300 transform hover:-translate-y-px relative after:content-[''] after:absolute after:w-0 after:h-[2px] after:block after:bg-green-400 after:transition-all after:duration-300 hover:after:w-full after:left-0 after:bottom-[-4px]"
                                >
                                    //{link.name}
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;