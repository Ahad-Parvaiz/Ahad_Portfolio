
import React, { useRef } from 'react';
import useOnScreen from '../../hooks/useOnScreen';

interface SectionProps {
    title: string;
    children: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({ title, children }) => {
    const ref = useRef<HTMLDivElement>(null);
    const isVisible = useOnScreen(ref, '-100px');

    return (
        <section
            ref={ref}
            className={`container mx-auto px-4 sm:px-6 lg:px-8 py-16 transition-all duration-1000 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
        >
            <h2 className="text-4xl font-bold font-fira mb-12 text-center">
                <span className="text-green-400">&gt; </span>
                <span className="glitch" data-text={title}>
                    {title}
                </span>
            </h2>
            {children}
        </section>
    );
};

export default Section;
