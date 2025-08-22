'use client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from "framer-motion";

const projects = [
    {
        title: 'Quick, Draw! - Google',
        description: 'Recreated Google’s Quick, Draw! game using real-time finger tracking via webcam instead of mouse input  Implemented gesture recognition and digit classification using OpenCV and a custom CNN model',
        image: '/quickdraw.gif',
        link: 'https://github.com/JimmyNguyen09-AI/QuickDrawGoogle-CNN'
    },
    {
        title: 'JN ZORA-AI Chatbot',
        description: 'A scalable AI chat system using a microservices architecture. Integrated RAG forcontext-aware responses and real-time message streaming with secure user authentication',
        image: '/jnzora.jpg',
        link: 'https://www.jnzora.com/'
    },
    {
        title: 'Face-Generator',
        description: 'Implemented a Deep Convolutional GAN to synthesize realistic human faces from noise vectors.Focused on training stability, visual quality, and generator&discriminator balance.',
        image: '/face_gene.jpg',
        link: 'https://github.com/JimmyNguyen09-AI/DCGANs-FaceGenerate'
    },
    {
        title: 'Photomosaic Generator',
        description: 'Photomosaic Generator transforms multiple images into a mosaic by matching colors, delivering visually captivating results.',
        image: '/phomosaic.jpg',
        link: 'https://github.com/JimmyNguyen09-AI/Photomosaic-Generator'
    },
    {
        title: 'Staff Tracking YOLO',
        description: 'Applied a pretrained YOLO model to detect and track staff in video streams. Focused on real time staff detection, automatically marking seats as “empty” when staff leave, andlogging the duration of absence, along with bounding box visualization and easy deployment from videoinput to tracked output.',
        image: '/output.gif',
        link: 'https://github.com/JimmyNguyen09-AI/Staff-Tracking'
    },
    {
        title: 'VOC Object Detection',
        description: 'Applied a pretrained Faster R-CNN model to detect and classify objects in images using the Pascal VOCdataset. Focused on evaluation, bounding box visualization, and dataset integration',
        image: '/fasterRCNN.jpg',
        link: 'https://github.com/JimmyNguyen09-AI/FasterRCNN-VOC?tab=readme-ov-file'
    },
];

export default function ProjectsPage() {
    return (
        <div className="min-h-screen text-white py-20 px-4 max-w-6xl mx-auto">
            <h1 className="text-4xl font-bold text-center mb-12">🚀 My Projects</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pb-20">
                {projects.map((project, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                        viewport={{ once: true, amount: 0.2 }}
                        className="bg-white/20 backdrop-blur-md rounded-xl overflow-hidden shadow-lg hover:shadow-2xl hover:scale-[1.02] duration-300 ease-in-out transition"
                    >
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
                            <Link href={project.link} target="_blank">
                                <button className="mt-2 px-4 py-2 bg-black/20 text-white cursor-pointer rounded-md font-medium hover:bg-black/40">
                                    VIEW PROJECT
                                </button>
                            </Link>
                        </div>
                    </motion.div>
                ))}
            </div>


        </div>
    );
}
