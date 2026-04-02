import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import b13Giris from "../assets/images/b13 giris.png";

export default function Hero() {
    return (
        <section className="relative h-screen flex items-center justify-center overflow-hidden bg-black">
            {/* Background with Overlay */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-black/60 z-10" />
                <img
                    src={b13Giris}
                    alt="Event Background"
                    className="w-full h-full object-cover"
                />
            </div>

            {/* Content */}
            <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-5xl md:text-7xl font-serif font-bold text-white mb-6 leading-tight"
                >
                    Creating <span className="text-accent italic">Memorable</span> Moments
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                    className="text-gray-300 text-lg md:text-xl tracking-wide font-light"
                >
                    Experiences that linger long after the lights go out.
                </motion.p>
            </div>

            {/* Scroll Down Indicator */}
            <motion.div
                className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10 flex flex-col items-center cursor-pointer opacity-80 hover:opacity-100 transition-opacity"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
            >
                <span className="text-xs uppercase tracking-[0.2em] text-gray-400 mb-2">Scroll to Explore</span>
                <ArrowDown className="text-accent animate-bounce w-6 h-6" />
            </motion.div>
        </section>
    );
}
