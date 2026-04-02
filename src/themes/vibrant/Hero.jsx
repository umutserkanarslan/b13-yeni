import { motion } from "framer-motion";
import heroImg from "../../assets/images/b13 giris.png";

export default function Hero() {
    const scrollToServices = () => {
        document.getElementById("what-we-do")?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <img src={heroImg} className="w-full h-full object-cover" alt="Background" />
                <div className="absolute inset-0 bg-white/30" />
            </div>

            <div className="container mx-auto px-6 text-center z-10">
                <motion.h1
                    initial={{ opacity: 0, y: 50, scale: 0.9 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ duration: 1.2, ease: "easeOut" }}
                    className="text-6xl md:text-9xl font-sans font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 tracking-tighter drop-shadow-2xl"
                >
                    Creating <br />
                    Memorable <br />
                    Moments
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1, duration: 1 }}
                    className="mt-8 text-2xl text-indigo-950 font-extrabold tracking-wide drop-shadow-md bg-white/40 px-8 py-3 rounded-full backdrop-blur-md inline-block"
                >
                    Innovative events for modern times.
                </motion.p>
            </div>
        </section>
    );
}
