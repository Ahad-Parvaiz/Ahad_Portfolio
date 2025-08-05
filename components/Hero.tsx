
import React from 'react';
import MatrixRain from './MatrixRain';
import { AVATAR_URL } from '../constants';

const Typewriter: React.FC<{ lines: string[], delay: number }> = ({ lines, delay }) => {
    const [currentLineIndex, setCurrentLineIndex] = React.useState(0);
    const [currentText, setCurrentText] = React.useState('');
    const [isDeleting, setIsDeleting] = React.useState(false);

    React.useEffect(() => {
        const handleTyping = () => {
            const fullText = lines[currentLineIndex];

            if (isDeleting) {
                setCurrentText(prev => prev.substring(0, prev.length - 1));
            } else {
                setCurrentText(prev => fullText.substring(0, prev.length + 1));
            }

            if (!isDeleting && currentText === fullText) {
                setTimeout(() => setIsDeleting(true), delay);
            } else if (isDeleting && currentText === '') {
                setIsDeleting(false);
                setCurrentLineIndex(prev => (prev + 1) % lines.length);
            }
        };

        const typingSpeed = isDeleting ? 50 : 100;
        const timer = setTimeout(handleTyping, typingSpeed);

        return () => clearTimeout(timer);
    }, [currentText, currentLineIndex, isDeleting, lines, delay]);

    return (
        <span className="border-r-2 border-green-400 animate-pulse">{currentText}</span>
    );
};

const Hero: React.FC = () => {
    const scrollToAbout = () => {
        document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section id="hero" className="relative h-screen w-full flex flex-col items-center justify-center text-center overflow-hidden">
            <MatrixRain />
            <div className="absolute inset-0 bg-black/70"></div>
            <div className="relative z-10 flex flex-col items-center">
                <div 
                    className="w-48 h-48 mb-6 rounded-full overflow-hidden border-4 border-green-400/50 shadow-[0_0_30px_theme(colors.green.500),0_0_60px_theme(colors.green.600)]"
                    style={{ animation: 'float 6s ease-in-out infinite' }}
                >
                    <img src={AVATAR_URL} alt="Hacker Avatar" className="w-full h-full object-cover"/>
                </div>
                <div className="font-fira text-left p-4 md:p-6 bg-black/50 border border-gray-700 rounded-lg max-w-xl w-full shadow-lg">
                    <p className="text-green-400 text-lg">&gt; Welcome to the Cyber World of Ahad Parvaiz</p>
                    <div className="text-gray-300 h-8 mt-2 text-lg">
                        &gt; <Typewriter lines={['Green Hat Hacker', 'Cybersecurity Enthusiast', 'BSCS Student']} delay={2000} />
                    </div>
                </div>
                <button 
                    onClick={scrollToAbout}
                    className="mt-8 font-fira text-lg text-green-400 border-2 border-green-400 px-6 py-2 rounded-sm hover:bg-green-400 hover:text-black transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-green-300 shadow-[0_0_15px_theme(colors.green.500)] hover:shadow-[0_0_25px_theme(colors.green.400)]"
                >
                    Enter the Portfolio [▶]
                </button>
            </div>
        </section>
    );
};

export default Hero;