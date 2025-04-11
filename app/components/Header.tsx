'use client';
import { Menu, X, } from 'lucide-react';

import Link from 'next/link';
import { useState } from 'react';
// import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
interface NavItem {
    label: string;
    href: string;
}
const navItems: NavItem[] = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Skill', href: '/skills' },
    { label: 'Projects', href: '/projects' },
    { label: 'Contact', href: '/contact' },

];
const GetNav = () => {
    return (
        <>
            {navItems.map((item, index) => (
                <div
                    key={index}
                    className="flex items-center space-x-2 hover:text-white"
                >
                    <Link
                        href={item.href}
                        className="border-b-2 pr-1 text-xl border-transparent hover:border-white pb-1 transition"
                    >
                        {item.label}
                    </Link>
                    {index < navItems.length - 1 && (
                        <span className="text-white/25 text-lg">|</span>
                    )}
                </div>
            ))}
        </>
    );
};

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <header className=" w-[70%] mx-auto md:bg-black/30 rounded-full sticky md:backdrop-blur-md top-0 left-0 z-50  ">
                <nav className="container mx-auto px-3 py-1 flex items-center justify-between">
                    <div className="text-xl flex-shrink-0 mr-5 w-[50px] md:block hidden h-[50px] font-bold  hover:drop-shadow-[0_5px_15px_rgba(0,0,0,1)]  ">
                        <Link href="/" className='scroll-smooth flex items-center '>
                            <img src="/logo-JN.png" alt="" />
                        </Link>
                    </div>

                    {/* Desktop menu */}
                    <div className="hidden md:flex space-x-6 text-gray-400 font-medium  ">
                        <GetNav />
                    </div>

                    {/* Mobile icon */}

                    <div className='flex gap-5 mx-auto md:hidden backdrop-blur-md bg-black/40 rounded-full px-6  max-w-[10rem] '>
                        <div className="text-xl w-[50px]  h-[50px] font-bold hover:drop-shadow-[0_5px_15px_rgba(0,0,0,1)]  ">
                            <Link href="/" className='scroll-smooth  flex items-center '>
                                <img src="/logo-JN.png" alt="" />

                            </Link>
                        </div>
                        <button onClick={() => setIsOpen(true)} aria-label="Open Menu">
                            <Menu className="h-6 w-6 text-white" />
                        </button>


                    </div>
                </nav>

            </header>

            {/* Overlay */}
            {isOpen && (
                <div
                    className="fixed inset-0 bg-black opacity-25 z-40"
                    onClick={() => setIsOpen(false)}
                />
            )}

            {/* Side Drawer Menu */}
            {/* Side Drawer Menu */}
            <div
                className={`fixed top-0 right-0 h-full w-40 z-50 transform transition-transform duration-300 ease-in-out
    ${isOpen ? 'translate-x-0' : 'translate-x-full'}
  `}
            >
                <div className="bg-white/20  backdrop-blur-xl shadow-2xl h-full p-6 rounded-l-xl">
                    <div className="flex items-center justify-between mb-6">
                        <h2 className="text-lg font-semibold text-white">📌 Menu</h2>
                        <button onClick={() => setIsOpen(false)} aria-label="Close Menu">
                            <X className="h-6 w-6 text-white" />
                        </button>
                    </div>

                    <nav className="flex flex-col space-y-3 text-white text-base font-medium">
                        {navItems.map((item, index) => (
                            <Link
                                key={index}
                                href={item.href}
                                onClick={() => setIsOpen(false)}
                                className={`px-4 py-2 rounded hover:bg-white/20 transition-all ${index < navItems.length - 1 ? 'border-b border-white/20' : ''}`}
                            >
                                {item.label}
                            </Link>
                        ))}
                    </nav>
                    <div className="flex justify-center items-center pt-16">
                        <img
                            src="/logo-JN.png"
                            alt="Logo"
                            className="w-16 h-auto opacity-80 hover:opacity-100 transition duration-300"
                        />
                    </div>

                </div>

            </div>

        </>
    );
}
