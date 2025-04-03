'use client';

import React from 'react';
import Link from 'next/link';
import { Facebook, Linkedin, Github, Mail, Phone, ChevronRight, ChevronLeft } from 'lucide-react';

export default function ContactPage() {
    return (
        <div className="flex flex-col items-center gap-10 px-4 py-20 max-w-4xl mx-auto text-white min-h-screen">
            <h1 className="text-4xl font-bold text-center mb-6">📬 Contact Me</h1>
            <p className="text-white/80 text-center max-w-xl">
                Whether you have a question, a collaboration idea, or are looking to hire a passionate developer for your project — feel free to reach out! I'm always open to discussing tech, side projects, or potential career opportunities.
            </p>
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 shadow-xl border border-white/20 w-full">
                <div className="flex flex-wrap justify-center gap-6 text-white/90 text-lg">
                    <Link href="https://www.facebook.com/willump.thankbestnunu" target="_blank" className="flex items-center gap-2 hover:text-blue-400">
                        <Facebook /> Facebook
                    </Link>
                    <Link href="https://www.linkedin.com/in/trung-thanh-nguyen-5aab6b332/" target="_blank" className="flex items-center gap-2 hover:text-blue-400">
                        <Linkedin /> LinkedIn
                    </Link>
                    <Link href="https://github.com/JimmyNguyen09-AI" target="_blank" className="flex items-center gap-2 hover:text-green-400">
                        <Github /> GitHub
                    </Link>
                    <Link href="mailto:ng.trungthanh04@gmail.com" className="flex items-center gap-2 hover:text-red-400">
                        <Mail /> ng.trungthanh04@gmail.com
                    </Link>
                    <Link href="tel:+84123456789" className="flex items-center gap-2 hover:text-yellow-300">
                        <Phone /> +61 432 047 700
                    </Link>
                </div>

            </div>
            <div>
                <Link href="/projects">
                    <button className="mt-8 inline-flex items-center px-4 py-2 text-white   bg-black/20 hover:bg-black/50 rounded-full transition duration-300 ease-in-out bounce-up-left cursor-pointer text-xl">
                        <ChevronLeft className="ml-2 h-5 w-5" />
                        Back
                    </button>
                </Link>
            </div>
        </div>
    );
}