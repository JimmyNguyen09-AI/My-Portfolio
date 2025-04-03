'use client';

import { ChevronLeft, ChevronRight } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

interface Item {
    label: string;
    href: string;
}

interface LinkButtonProps {
    items: Item[];
}

const LinkButton: React.FC<LinkButtonProps> = ({ items }) => {
    return (
        <div className="flex justify-between gap-15 w-full">
            <Link href={items[0].href}>
                <button className="mt-8 inline-flex items-center px-4 py-2 text-white bg-black/20 hover:bg-black/50 rounded-full transition duration-300 ease-in-out bounce-up-left cursor-pointer text-xl">
                    <ChevronLeft className="mr-2 h-5 w-5" />
                    {items[0].label}
                </button>
            </Link>

            <Link href={items[1].href}>
                <button className="mt-8 inline-flex items-center px-4 py-2 text-white bg-black/20 hover:bg-black/50 rounded-full transition duration-300 ease-in-out bounce-up-right cursor-pointer text-xl">
                    {items[1].label}
                    <ChevronRight className="ml-2 h-5 w-5" />
                </button>
            </Link>
        </div>
    );
};

export default LinkButton;
