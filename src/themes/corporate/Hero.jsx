import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import heroImg from "../../assets/images/b13 giris.png";

export default function Hero() {
    const scrollToServices = () => {
        document.getElementById("what-we-do")?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <img
                    src={heroImg}
                    alt="B13 Entrance"
                    className="w-full h-full object-cover"
                />
                {/* Overlay to ensure text readability */}
                <div className="absolute inset-0 bg-black/40" />
            </div>

            <div className="container mx-auto px-6 h-full flex flex-col justify-center relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    className="max-w-3xl space-y-8"
                >
                    <h1 className="text-6xl md:text-8xl font-sans font-extrabold text-white leading-tight tracking-tight drop-shadow-lg">
                        Creating <br />
                        <span className="text-blue-200">Memorable</span> <br />
                        Moments
                    </h1>

                    <button
                        onClick={scrollToServices}
                        className="group flex items-center gap-4 text-lg font-medium text-white hover:text-blue-200 transition-colors"
                    >
                        <span className="border-b-2 border-white group-hover:border-blue-200 pb-1">Our Services</span>
                        <ArrowRight size={20} className="transform group-hover:translate-x-2 transition-transform" />
                    </button>
                </motion.div>
            </div>
        </section>
    );
}
