'use client';

import React from 'react';
import { Laptop, Bot } from 'lucide-react';
import LinkButton from '../components/LinkButton';

export default function SkillsSection() {
    const devFrameworks = ['Next.js', 'React', 'Tailwind CSS'];
    const aiFrameworks = ['PyTorch', 'Langchain', 'SKlearn', 'Flask', 'OpenCV', 'NLTK'];
    const programmingLanguages = ['Python (Most used)', 'TypeScript (Most used)', 'JavaScript', 'HTML/CSS (Most used)', 'C++', 'Java', 'SQL'];
    const frameWorks = ['Next.js', 'React', 'Tailwind CSS', 'PyTorch', 'Langchain', 'SKlearn', 'Flask', 'OpenCV', 'NLTK'];
    const getProgramingLanguages = () => {
        return (<>
            {programmingLanguages.map((item, i) => (
                <li key={i} className="bg-black/40 hover:scale-[1.02] transition ease-in-out duration-300 rounded-md text-center px-3 py-2">{item}</li>
            ))}
        </>
        )
    };
    return (
        <div className="flex flex-col items-center gap-16 px-4 py-20 max-w-7xl mx-auto text-white bg-cover bg-center min-h-screen" style={{ backgroundImage: "url('/image.png')" }}>
            {/* Diagram Section */}
            <div className="w-full flex flex-col md:flex-row justify-center items-center gap-40 relative">
                {/* Software Dev Diagram */}
                <div className="relative w-72 h-72">
                    <div className="absolute w-full h-full border border-dashed border-white rounded-full"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-2xl font-bold text-white">TypeScript</span>
                    </div>
                    {devFrameworks.map((item, i) => (
                        <div
                            key={item}
                            className="absolute w-20 h-20 bg-black/50 rounded-full text-xs text-center text-white flex items-center justify-center font-semibold shadow-lg hover:scale-105 transition ease-in-out duration-300"
                            style={{
                                top: `${50 + 45 * Math.sin((i / devFrameworks.length) * 2 * Math.PI)}%`,
                                left: `${50 + 45 * Math.cos((i / devFrameworks.length) * 2 * Math.PI)}%`,
                                transform: 'translate(-50%, -50%)'
                            }}
                        >
                            {item}
                        </div>
                    ))}
                    <div className="absolute -top-16 left-1/2 -translate-x-1/2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-2xl flex items-center gap-2 shadow-md">
                        <Laptop size={18} />
                        <span className="font-semibold">Software</span>
                    </div>
                </div>

                {/* AI Diagram */}
                <div className="relative w-72 h-72">
                    <div className="absolute w-full h-full border border-dashed border-white rounded-full"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-2xl font-bold text-white">Python</span>
                    </div>
                    {aiFrameworks.map((item, i) => (
                        <div
                            key={item}
                            className="absolute w-20 h-20 bg-black/50 rounded-full text-xs text-center text-white flex items-center justify-center font-semibold shadow-lg hover:scale-105 transition ease-in-out duration-300"
                            style={{
                                top: `${50 + 45 * Math.sin((i / aiFrameworks.length) * 2 * Math.PI)}%`,
                                left: `${50 + 45 * Math.cos((i / aiFrameworks.length) * 2 * Math.PI)}%`,
                                transform: 'translate(-50%, -50%)'
                            }}
                        >
                            {item}
                        </div>
                    ))}
                    <div className="absolute -top-16 left-1/2 -translate-x-1/2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-2xl flex items-center gap-2 shadow-md">
                        <Bot size={18} />
                        <span className="font-semibold">AI</span>
                    </div>
                </div>
            </div>

            {/* Language List */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
                <div className="bg-gradient-to-br from-white/10 to-white/5 p-6 rounded-2xl shadow-xl border border-white/20 hover:shadow-2xl transition duration-300">
                    <h2 className="text-2xl font-bold mb-6 text-center text-white/90">💻 Programming Languages</h2>
                    <ul className="grid grid-cols-2 gap-3 text-sm text-white/80">
                        {getProgramingLanguages()}
                    </ul>
                </div>

                <div className="bg-gradient-to-br from-white/10 to-white/5 p-6 rounded-2xl shadow-xl border border-white/20 hover:shadow-2xl transition duration-300">
                    <h2 className="text-2xl font-bold mb-6 text-center text-white/90">🧠 Frameworks & Libraries</h2>
                    <ul className="grid grid-cols-2 gap-3 text-sm text-white/80">
                        {frameWorks.map((item, i) => (
                            <li key={i} className="bg-black/40 hover:scale-[1.02] transition ease-in-out duration-300 rounded-md text-center px-3 py-2">{item}</li>
                        ))}
                    </ul>
                </div>

            </div>
            <div className="w-full bg-white/10 backdrop-blur-md rounded-2xl p-6 mt-10 shadow-xl border border-white/20">
                <h2 className="text-2xl font-bold mb-4 text-center text-white/90">🌍 Languages Spoken</h2>
                <ul className="flex flex-row justify-center gap-20 list-disc list-inside text-white/80 text-sm md:text-base space-y-2">
                    <li className='custom-li'>English – Equivalent to IELTS 6.5</li>
                    <li className='custom-li'>Vietnamese – Native speaker</li>
                </ul>
            </div>
            <LinkButton items={[
                { href: '/about', label: 'About' },
                { href: '/projects', label: 'Projects' },
            ]} />
        </div>
    );
}
