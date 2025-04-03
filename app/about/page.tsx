'use client';
import Image from 'next/image';
import LinkButton from '../components/LinkButton';
export default function HeroSection() {
    return (
        <div className="flex justify-center items-center min-h-screen px-4">
            <section className="flex flex-col items-center text-white gap-8 max-w-5xl w-full">

                {/* Avatar + Mô tả */}
                <div className="flex flex-col md:flex-row hover:scale-[1.02] transition ease-in-out duration-300 items-center md:items-start bg-white/10 backdrop-blur-lg shadow-xl rounded-xl p-6 gap-10 w-full">
                    {/* Avatar */}
                    <div className="w-40 h-40 relative rounded-full overflow-hidden shadow-md">
                        <Image
                            src="/anh_nen.jpg"
                            alt="Jimmy"
                            fill
                            className="object-cover"
                        />
                    </div>

                    {/*  */}
                    <div className="text-center md:text-left space-y-4 max-w-2xl">
                        <h1 className="text-3xl md:text-4xl font-bold">
                            Hi, I&apos;m Jimmy <span className="inline-block animate-wave">👋</span>
                        </h1>

                        <p className="text-gray-300 text-sm md:text-base">
                            I&apos;m Thành, also known as Jimmy. I&apos;m currently living and studying in Australia, a place full of opportunities that helps me grow every day. I&apos;m passionate about technology, especially software development and artificial intelligence.
                        </p>

                        <p className="text-gray-300 text-sm md:text-base">
                            My goal is to become a skilled and creative programmer. I’m always learning, practicing, and improving to turn my passion into real-world impact and contribute to meaningful tech solutions.
                        </p>
                    </div>
                </div>

                {/* Personal details */}
                <div className="w-full bg-white/10 backdrop-blur-md rounded-xl p-6 hover:scale-[1.02] transition ease-in-out duration-300 shadow-lg space-y-4">
                    <h2 className="text-xl font-semibold text-white">👤 My details</h2>
                    <ul className="list-disc list-inside text-gray-300 text-sm md:text-base">
                        <li className='custom-li'>Name: Trung Thanh NGUYEN</li>
                        <li className='custom-li'>Age: 20</li>
                        <li className='custom-li'>Country: Viet Nam</li>
                    </ul>
                </div>
                {/* Education */}
                <div className="w-full flex flex-col md:flex-row gap-6">
                    <div className="flex-1 bg-white/10 rounded-xl p-4 hover:scale-[1.02] transition ease-in-out duration-300 shadow-md flex flex-col items-center text-center space-y-3">
                        <Image
                            src="/HUST.png"
                            alt="HUST"
                            width={80}
                            height={80}
                        />
                        <h3 className="text-lg font-bold">Hanoi University of Science and Technology</h3>
                        <p className="text-gray-300 text-sm">Bachelor of Automative</p>
                        <p className="text-gray-300 text-sm">(2022 - 2023)</p>
                    </div>
                    <div className="flex-1 bg-white/10 rounded-xl p-4 hover:scale-[1.02] transition ease-in-out duration-300 shadow-md flex flex-col items-center text-center space-y-3">
                        <Image
                            src="/koi.png"
                            alt="KOI"
                            width={80}
                            height={80}
                        />
                        <h3 className="text-lg font-bold">King&apos;s Own Institute - Sydney</h3>
                        <p className="text-gray-300 text-sm">Bachelor of Information Technology</p>
                        <p className="text-gray-300 text-sm">(2023 - Present)</p>
                    </div>
                </div>
                {/* Achievements */}
                <div className="w-full bg-white/10 backdrop-blur-md rounded-xl p-6 shadow-lg space-y-4">
                    <h2 className="text-xl font-semibold text-white flex items-center gap-2">
                        🎖️ Achievements
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-300 text-sm md:text-base">
                        <div className="bg-white/5 p-4 rounded-lg shadow-inner hover:scale-[1.02] transition ease-in-out duration-300">
                            🥉 3rd Prize in the National High School Mathematics Competition (2023)
                        </div>
                        <div className="bg-white/5 p-4 rounded-lg shadow-inner hover:scale-[1.02] transition ease-in-out duration-300">
                            🎓 Direct admission to HUST – Automotive Engineering major (2023)
                        </div>
                        <div className="bg-white/5 p-4 rounded-lg shadow-inner hover:scale-[1.02] transition ease-in-out duration-300">
                            💼 Academic Excellence Scholarships for 3 semesters at King&apos;s Own Institute
                        </div>
                        <div className="bg-white/5 p-4 rounded-lg shadow-inner hover:scale-[1.02] transition ease-in-out duration-300">
                            📜 Completed multiple certifications on Coursera (tech & programming)
                        </div>
                    </div>
                </div>

                {/* Hobbies */}
                <div className="w-full bg-white/10 backdrop-blur-md rounded-xl p-6 shadow-lg space-y-4">
                    <h2 className="text-xl font-semibold text-white">🎯 My hobbies</h2>
                    <ul className="list-disc list-inside text-gray-300 text-sm md:text-base">
                        <li className='custom-li'>Playing video games</li>
                        <li className='custom-li'>Watching movies</li>
                        <li className='custom-li'>Playing sports: especially swimming and badminton</li>
                    </ul>
                </div>
                <LinkButton items={[
                    { href: '/', label: 'Home' },
                    { href: '/skills', label: 'Skills' },
                ]} />
            </section>
        </div>
    );
}
