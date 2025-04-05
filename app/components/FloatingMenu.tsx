'use client';
import { Facebook, Github, Linkedin } from 'lucide-react';
import { useState } from 'react';
import Image from 'next/image';
export default function FloatingMenu() {
    const [open, setOpen] = useState(false);

    const toggleMenu = () => setOpen(!open);

    return (
        <div className="fixed bottom-6 right-6 z-50">
            {/* Menu buttons */}
            <div className="relative w-14 h-14">
                {/* GitHub */}
                <a
                    href="https://github.com/yourusername"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`absolute transition-all duration-300 ease-in-out bg-gray-600 text-white p-3 rounded-full shadow-md ${open ? 'bottom-[90px] right-0 opacity-100' : 'bottom-0 right-0 opacity-0 pointer-events-none'
                        }`}
                >
                    <Github className="w-5 h-5" />
                </a>

                {/* LinkedIn */}
                <a
                    href="https://linkedin.com/in/yourlinkedin"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`absolute transition-all duration-300 ease-in-out bg-gray-600 text-white p-3 rounded-full shadow-md ${open ? 'bottom-[55px] right-[60px] opacity-100' : 'bottom-0 right-0 opacity-0 pointer-events-none'
                        }`}
                >
                    <Linkedin className="w-5 h-5" />
                </a>

                {/* Facebook */}
                <a
                    href="https://facebook.com/yourfacebook"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`absolute transition-all duration-300 ease-in-out bg-gray-600 text-white p-3 rounded-full shadow-md ${open ? 'bottom-0 right-[70px] opacity-100' : 'bottom-0 right-0 opacity-0 pointer-events-none'
                        }`}
                >
                    <Facebook className="w-5 h-5" />
                </a>

                {/* Main toggle button */}
                <button
                    onClick={toggleMenu}
                    className="absolute bottom-5 right-0 w-14 h-14 rounded-full bg-white/70 backdrop-blur-md text-white shadow-xl flex items-center justify-center hover:bg-white/30 transition"
                    aria-label="Toggle Contact Menu"
                >
                    <Image src="/logo-JN.png" width={40} height={40} alt="logo" />
                </button>
            </div>
        </div>
    );
}
