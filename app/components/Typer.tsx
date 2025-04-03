'use client';

import { Typewriter } from 'react-simple-typewriter';
interface TypingWord {
    words: string[];
}
const wordsArray: TypingWord = {
    words: ['FullStack Developer', 'genAI Engineer', 'Computer Vision Engineer'],
}
export default function TypingTitle({ words }: TypingWord = wordsArray) {
    return (
        <h2 className="text-center text-xl md:text-2xl font-semibold text-white mb-5">
            A fresher{' '}
            <span className="text-blue-300">
                <Typewriter
                    words={words}
                    loop={0}
                    cursor
                    cursorStyle="|"
                    typeSpeed={70}
                    deleteSpeed={50}
                    delaySpeed={1500}
                />
            </span>
        </h2>
    );
}
