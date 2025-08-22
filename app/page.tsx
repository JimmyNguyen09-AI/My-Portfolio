'use client';
import HeroSection from './components/HeroSection';
import { ChevronRight } from 'lucide-react';
import Link from 'next/link';
import { motion } from "framer-motion";
export default function Home() {
  return (<>
    <main className="min-h-screen flex flex-col">
      <HeroSection />

      <div className="flex-grow  ">
        <section className="bg-gray-700/20   py-16 px-6 text-center">
          <div className="max-w-4xl mx-auto text-gray-700">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true, amount: 0.2 }}
            >
              {/* Heading */}
              <h2 className="text-4xl font-bold text-white  mb-8">
                Welcome to My Portfolio
              </h2>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true, amount: 0.2 }}
            >
              {/* Intro */}
              <p className="text-2xl text-white mb-8 leading-relaxed">
                Hi! I&apos;m <strong>Thanh (Jimmy)</strong> — an IT student based in Australia with Vietnamese roots 🇻🇳.
                I&apos;m passionate about technology, especially in the fields of
                <strong> Artificial Intelligence</strong>,
                <strong> Computer Vision</strong>,
                <strong> Generative AI</strong>, and
                <strong> Full-Stack Web Development</strong>.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true, amount: 0.2 }}
            >
              <ul className="text-left text-white text-2xl sm:text-lg space-y-4 px-4 sm:px-12 list-disc list-inside">
                <li className='custom-li'> Building image and face recognition systems using <strong>OpenCV</strong> and <strong>PyTorch</strong></li>
                <li className='custom-li'> Developing modern web apps with <strong>Next.js</strong>, <strong>Tailwind CSS</strong>, and <strong>TypeScript</strong></li>
                <li className='custom-li'> Studying and implementing Generative AI models like <strong>LLMs</strong> and <strong>Diffusion Models</strong></li>
              </ul>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true, amount: 0.2 }}
            >
              {/* Goal */}
              <p className="text-2xl mt-10 sm:text-lg text-white text-center  max-w-3xl mx-auto">
                🎯 My goal is to become a <strong>GenAI Engineer</strong> and a versatile <strong>Full-Stack Developer</strong> who can build smart, user-friendly apps powered by AI.
              </p>
            </motion.div>
          </div>


        </section>


      </div>





    </main>
  </>
  );
}
