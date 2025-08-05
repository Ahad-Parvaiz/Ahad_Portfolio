
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Education from './components/Education';
import Experience from './components/Experience';
import Certifications from './components/Certifications';
import Projects from './components/Projects';
import Contact from './components/Contact';

const CustomCursor = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const onMouseMove = (e: MouseEvent) => {
            setPosition({ x: e.clientX, y: e.clientY });
        };
        document.addEventListener('mousemove', onMouseMove);
        return () => {
            document.removeEventListener('mousemove', onMouseMove);
        };
    }, []);

    return (
        <div className="hacker-crosshair" style={{ left: `${position.x}px`, top: `${position.y}px` }}>
            <div className="relative flex items-center justify-center w-8 h-8">
                <div className="hacker-crosshair-h absolute"></div>
                <div className="hacker-crosshair-v absolute"></div>
            </div>
        </div>
    );
};


export default function App(): React.ReactNode {
    return (
        <div className="bg-[#0a0a0a] text-gray-300">
            <CustomCursor />
            <div className="scanline"></div>
            <Header />
            <main>
                <Hero />
                <div id="about" className="pt-20"><About /></div>
                <div id="education" className="pt-20"><Education /></div>
                <div id="experience" className="pt-20"><Experience /></div>
                <div id="certifications" className="pt-20"><Certifications /></div>
                <div id="projects" className="pt-20"><Projects /></div>
                <div id="contact" className="pt-20"><Contact /></div>
            </main>
            <footer className="text-center p-8 font-fira text-sm text-gray-500">
                <p>Made with ❤️ by Ahad Parvaiz</p>
                <p>Hacking is my skill | Defense is my will</p>
            </footer>
        </div>
    );
}