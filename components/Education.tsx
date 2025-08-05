
import React from 'react';
import Section from './shared/Section';
import TiltCard from './shared/TiltCard';
import { EDUCATION } from '../constants';
import { UniversityIcon } from './Icons';

const Education: React.FC = () => {
    return (
        <Section title="Education">
            <div className="max-w-3xl mx-auto">
                <div className="relative border-l-2 border-green-400/30 ml-4 md:ml-0 pl-10">
                    {EDUCATION.map((edu, index) => (
                        <div key={index} className="mb-12 last:mb-0 relative">
                            <div className="absolute -left-5 top-0 h-10 w-10 rounded-full bg-green-500 shadow-[0_0_15px_theme(colors.green.400)] flex items-center justify-center ring-8 ring-[#0a0a0a] z-10">
                                <UniversityIcon className="w-6 h-6 text-gray-900" />
                            </div>
                            <TiltCard className="p-6 bg-gray-900/50 border border-gray-800 rounded-lg transform-gpu transition-all duration-300 hover:border-green-400 hover:shadow-[0_0_20px_rgba(74,222,128,0.4)]">
                                <p className="text-gray-400 font-fira text-sm tracking-wider">{edu.period}</p>
                                <h3 className="font-fira text-xl text-green-400 mt-2">{edu.institution}</h3>
                                <h4 className="text-lg text-gray-200 mt-1">{edu.degree}</h4>
                                <p className="text-gray-400 mt-3">{edu.description}</p>
                            </TiltCard>
                        </div>
                    ))}
                </div>
            </div>
        </Section>
    );
};

export default Education;