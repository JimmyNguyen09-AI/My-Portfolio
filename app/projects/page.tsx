'use client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import LinkButton from '../components/LinkButton';

const projects = [
    {
        title: 'Quick, Draw! - Google',
        description: 'Basic game using AI/Deep-Learning Neuro Network to predict human hand-drawn sketches',
        image: '/quickdraw.gif',
        github: 'https://github.com/JimmyNguyen09-AI/QuickDrawGoogle-CNN'
    },
    {
        title: 'AI Assistant WebApp',
        description: 'AI Assistant WebApp using AI Agents, RAG, Flask and LangChain for smart responses.',
        image: '/chatbot.jpg',
        github: 'https://github.com/JimmyNguyen09-AI/AI-Assistant-RAG-LangChain-'
    },
    {
        title: 'Face-Generator',
        description: 'Face Generator using DCGANs to generate realistic, high-quality synthetic faces for AI applications and research',
        image: '/face_gene.jpg',
        github: 'https://github.com/JimmyNguyen09-AI/DCGANs-FaceGenerate'
    },
    {
        title: 'Photomosaic Generator',
        description: 'Photomosaic Generator transforms multiple images into a mosaic by matching colors, delivering visually captivating results.',
        image: '/phomosaic.jpg',
        github: 'https://github.com/JimmyNguyen09-AI/Photomosaic-Generator'
    },
    {
        title: 'VOC Object Detection',
        description: 'Detect objects in images/videos using Faster R-CNN (Pretrained) and VOC dataset.',
        image: '/fasterRCNN.jpg',
        github: 'https://github.com/JimmyNguyen09-AI/FasterRCNN-VOC?tab=readme-ov-file'
    },
];

export default function ProjectsPage() {
    return (
        <div className="min-h-screen text-white py-20 px-4 max-w-6xl mx-auto">
            <h1 className="text-4xl font-bold text-center mb-12  ">🚀 My Projects</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pb-20">
                {projects.map((project, index) => (
                    <div key={index} className="bg-white/20 backdrop-blur-md rounded-xl overflow-hidden shadow-lg hover:shadow-2xl hover:scale-102 duration-300 ease-in-out transition">
                        <Image
                            src={project.image}
                            alt={project.title}
                            width={600}
                            height={400}
                            className="w-full h-56 object-cover"
                        />
                        <div className="p-5 space-y-2">
                            <h2 className="text-xl font-bold text-white">{project.title}</h2>
                            <p className="text-sm text-white/80">{project.description}</p>
                            <Link href={project.github} target="_blank">
                                <button className="mt-2 px-4 py-2 bg-black/20 text-white  cursor-pointer rounded-md font-medium hover:bg-black/40">
                                    VIEW ON GITHUB
                                </button>
                            </Link>
                        </div>
                    </div>
                ))}

            </div>
            <LinkButton items={[
                { href: '/skills', label: 'Skills' },
                { href: '/contact', label: 'Contact' },
            ]} />

        </div>
    );
}
