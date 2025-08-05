
import React, { useRef } from 'react';
import Section from './shared/Section';
import TiltCard from './shared/TiltCard';
import { PROJECTS } from '../constants';
import type { Project } from '../types';
import { GithubIcon, LinkIcon } from './Icons';
import useOnScreen from '../hooks/useOnScreen';

const ProjectCard: React.FC<{ project: Project, index: number }> = ({ project, index }) => {
    const ref = useRef<HTMLDivElement>(null);
    const isVisible = useOnScreen(ref);
    const duration = 500 + index * 100;

    return (
        <TiltCard 
            ref={ref}
            className={`flex flex-col p-6 bg-gray-900/50 border border-gray-800 rounded-lg transition-all duration-300 hover:border-green-400 hover:shadow-[0_0_20px_rgba(74,222,128,0.4)] transform-gpu ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
            style={{ transitionDuration: `${duration}ms` }}
        >
            <h3 className="font-fira text-xl text-green-400 mb-3">{project.name}</h3>
            <p className="text-gray-400 flex-grow">{project.description}</p>
            <div className="flex items-center space-x-4 mt-6">
                {project.github && (
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-green-400 transition-colors">
                        <GithubIcon className="w-6 h-6" />
                    </a>
                )}
                {project.live && (
                    <a href={project.live} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-green-400 transition-colors">
                        <LinkIcon className="w-6 h-6" />
                    </a>
                )}
            </div>
        </TiltCard>
    );
};

const Projects: React.FC = () => {
    return (
        <Section title="Projects">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {PROJECTS.map((project, index) => (
                    <ProjectCard key={project.name} project={project} index={index} />
                ))}
            </div>
        </Section>
    );
};

export default Projects;