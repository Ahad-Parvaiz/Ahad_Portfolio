
import React, { useRef } from 'react';
import Section from './shared/Section';
import TiltCard from './shared/TiltCard';
import { CERTIFICATIONS } from '../constants';
import useOnScreen from '../hooks/useOnScreen';

const CertificationCard: React.FC<{ cert: typeof CERTIFICATIONS[0], index: number }> = ({ cert, index }) => {
    const ref = useRef<HTMLDivElement>(null);
    const isVisible = useOnScreen(ref);
    const duration = 500 + index * 100;

    return (
        <div ref={ref}>
            <TiltCard
                as="a"
                href={cert.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`block p-4 bg-gray-900/50 border border-gray-800 rounded-lg transition-all duration-300 hover:border-green-400 hover:shadow-[0_0_20px_rgba(74,222,128,0.4)] transform-gpu ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                style={{ transitionDuration: `${duration}ms` }}
            >
                <h3 className="font-fira text-green-400 text-lg">{cert.name}</h3>
                <p className="text-sm text-gray-500 mt-2">Click to verify credential</p>
            </TiltCard>
        </div>
    );
};

const Certifications: React.FC = () => {
    return (
        <Section title="Certifications">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {CERTIFICATIONS.map((cert, index) => (
                    <CertificationCard key={cert.name} cert={cert} index={index} />
                ))}
            </div>
        </Section>
    );
};

export default Certifications;