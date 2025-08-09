import React, { useEffect, useRef } from 'react';
import Section from './shared/Section';
import TiltCard from './shared/TiltCard';
import { SKILLS, ABOUT_ME_PARAGRAPHS, ABOUT_ME_GOALS } from '../constants';
import type { Skill } from '../types';
import { CheckCircleIcon } from './Icons';

declare const d3: any;

const RadarChart: React.FC<{ data: Skill[] }> = ({ data }) => {
    const ref = useRef<SVGSVGElement>(null);
    const size = 300;
    const margin = 50;
    const radius = (size - margin * 2) / 2;

    useEffect(() => {
        if (!data || data.length === 0 || !ref.current) return;
        
        const svg = d3.select(ref.current);
        svg.selectAll("*").remove(); // Clear previous chart

        const g = svg.append("g").attr("transform", `translate(${size / 2}, ${size / 2})`);

        const angleSlice = (Math.PI * 2) / data.length;
        const rScale = d3.scaleLinear().range([0, radius]).domain([0, 1]);

        // Grid lines
        const gridLevels = 5;
        g.selectAll(".grid-circle")
            .data(d3.range(1, gridLevels + 1).reverse())
            .enter()
            .append("path")
            .attr("d", (d: number) => {
                return d3.lineRadial()
                    .angle((_d: any, i: number) => i * angleSlice)
                    .radius(radius * (d / gridLevels))
                    .curve(d3.curveLinearClosed)
                    (data as any);
            })
            .style("fill", "#1f2937")
            .style("stroke", "#374151")
            .style("stroke-width", "1px");

        // Axes
        const axis = g.selectAll(".axis")
            .data(data)
            .enter().append("g")
            .attr("class", "axis");

        axis.append("line")
            .attr("x1", 0)
            .attr("y1", 0)
            .attr("x2", (_d: any, i: number) => rScale(1.1) * Math.cos(angleSlice * i - Math.PI / 2))
            .attr("y2", (_d: any, i: number) => rScale(1.1) * Math.sin(angleSlice * i - Math.PI / 2))
            .attr("class", "line")
            .style("stroke", "#4b5563")
            .style("stroke-width", "1px");

        axis.append("text")
            .attr("class", "legend")
            .style("font-size", "12px")
            .attr("text-anchor", "middle")
            .attr("dy", "0.35em")
            .attr("x", (_d: any, i: number) => rScale(1.25) * Math.cos(angleSlice * i - Math.PI / 2))
            .attr("y", (_d: any, i: number) => rScale(1.25) * Math.sin(angleSlice * i - Math.PI / 2))
            .text((d: any) => d.axis)
            .style("fill", "#9ca3af");

        // Data polygon
        const radarLine = d3.lineRadial()
            .angle((d: any, i: number) => i * angleSlice)
            .radius((d: any) => rScale(d.value))
            .curve(d3.curveLinearClosed);

        g.append("path")
            .datum(data)
            .attr("d", radarLine)
            .style("fill", "rgba(74, 222, 128, 0.4)")
            .style("stroke", "#4ade80")
            .style("stroke-width", "2px");
        
    }, [data, radius, size]);

    return <svg ref={ref} width={size} height={size} />;
};

const About: React.FC = () => {
    return (
        <Section title="About Me">
            <div className="flex flex-col md:flex-row items-start gap-12">
                <div className="md:w-2/3 text-lg space-y-4 text-gray-300">
                    <p><span className="text-green-400 font-fira">root@ahad:~$</span> whoami</p>
                    
                    {ABOUT_ME_PARAGRAPHS.map((p, i) => (
                        <p key={i} className="pl-4 text-gray-400 leading-relaxed">{p}</p>
                    ))}

                    <div className="pl-4 mt-6">
                        <h3 className="font-fira text-xl text-green-400 mb-3">// My Goals</h3>
                        <ul className="space-y-2">
                            {ABOUT_ME_GOALS.map((goal, i) => (
                                <li key={i} className="flex items-start">
                                    <CheckCircleIcon className="w-6 h-6 text-green-400 mr-3 mt-1 flex-shrink-0" />
                                    <span className="text-gray-400">{goal}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                    
                   <a 
                        href="https://drive.google.com/file/d/18sXKAllubBSDLod2zby-OXtKJtxl8rJS/view?usp=sharing" target="_blank" rel="noopener noreferrer"
                        download
                        className="inline-block mt-6 ml-4 font-fira text-green-400 border border-green-400 px-4 py-2 hover:bg-green-400 hover:text-black transition-colors"
                    >
                        Download Resume
                    </a>
                </div>
                <div className="md:w-1/3 flex justify-center items-center pt-8 md:pt-0">
                    <TiltCard className="p-4 bg-gray-900/50 border border-gray-700 rounded-lg">
                        <h3 className="text-center font-fira text-xl mb-2 text-green-400">Skills Matrix</h3>
                        <RadarChart data={SKILLS} />
                    </TiltCard>
                </div>
            </div>
        </Section>
    );
};

export default About;
