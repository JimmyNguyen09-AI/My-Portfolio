import { Download } from "lucide-react";
import TypingTitle from "./Typer";
export default function Hero() {

    return (
        <section className="  relative w-full h-[200px] flex items-center justify-center text-center pb-2  bg-white/10">
            {/* Nội dung */}
            <div className="max-w-2xl text-white px-4">
                <h1 className="text-2xl font-bold mb-4 text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.6)] animate-fade-in">
                    Hello 👋, I'm Jimmy Nguyen
                </h1>

                <TypingTitle words={["Web Developer", "Full Stack Developer", "GenAI Engineer", "Computer Vision Engineer"]} />
                <a href="/JimmyNguyenCV.pdf" download className="px-8 mb-1 py-3 cursor-pointer bg-black/20 hover:bg-black/50 text-white font-semibold rounded-full shadow-lg transition duration-300">
                    Dowload my CV
                    <Download className="inline-block ml-2" />
                </a>
            </div>
        </section>
    );
}
