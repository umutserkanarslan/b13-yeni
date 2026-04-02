import { motion } from "framer-motion";
import ref1 from "../assets/images/ref1.png";
import ref2 from "../assets/images/ref2.png";
import ref3 from "../assets/images/ref3.png";
import ref4 from "../assets/images/ref4.png";
import ref5 from "../assets/images/ref5.png";

const logos = [
    ref1, ref2, ref3, ref4, ref5,
    ref1, ref2, ref3 // Repeated for filler to ensure smooth marquee
];

export default function References() {
    return (
        <section id="references" className="py-20 bg-background overflow-hidden relative border-y border-white/5">
            <div className="container mx-auto px-6 mb-12 text-center">
                <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-4">
                    Trusted by <span className="text-accent">Industry Leaders</span>
                </h2>
            </div>

            <div className="relative flex overflow-x-hidden group">
                <div className="animate-infinite-scroll flex whitespace-nowrap gap-16 py-12">
                    {logos.map((logo, index) => (
                        <div key={index} className="flex-shrink-0 w-32 h-16 flex items-center justify-center"> {/* Container for consistency */}
                            <img
                                src={logo}
                                alt={`Reference ${index}`}
                                className="max-h-full max-w-full grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-300 transform hover:scale-110 cursor-pointer object-contain"
                            />
                        </div>
                    ))}
                    {/* Duplicate for seamless loop */}
                    {logos.map((logo, index) => (
                        <div key={`dup-${index}`} className="flex-shrink-0 w-32 h-16 flex items-center justify-center">
                            <img
                                src={logo}
                                alt={`Reference ${index}`}
                                className="max-h-full max-w-full grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-300 transform hover:scale-110 cursor-pointer object-contain"
                            />
                        </div>
                    ))}
                    {logos.map((logo, index) => (
                        <div key={`dup-2-${index}`} className="flex-shrink-0 w-32 h-16 flex items-center justify-center">
                            <img
                                src={logo}
                                alt={`Reference ${index}`}
                                className="max-h-full max-w-full grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-300 transform hover:scale-110 cursor-pointer object-contain"
                            />
                        </div>
                    ))}
                </div>

                {/* Gradient Fade Edges */}
                <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-background to-transparent z-10" />
                <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-background to-transparent z-10" />
            </div>
        </section>
    );
}
