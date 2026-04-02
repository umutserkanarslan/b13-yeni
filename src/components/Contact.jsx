import { motion } from "framer-motion";
import { MapPin, Mail } from "lucide-react";

export default function Contact() {
    return (
        <section id="contact" className="py-24 px-6 bg-black border-t border-white/5">
            <div className="container mx-auto max-w-4xl text-center space-y-16">
                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-4xl md:text-5xl font-serif font-bold text-white uppercase tracking-widest"
                >
                    Contact <span className="text-accent">Us</span>
                </motion.h2>

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="flex flex-col md:flex-row justify-center gap-12 md:gap-24 items-start md:items-center"
                >
                    {/* Address */}
                    <div className="flex flex-col items-center gap-4 text-center md:flex-1">
                        <div className="p-4 bg-white/5 rounded-full text-accent shadow-lg border border-white/10">
                            <MapPin size={32} />
                        </div>
                        <h3 className="text-xl font-serif text-white uppercase tracking-wide">Istanbul Office</h3>
                        <p className="text-gray-400 font-light leading-relaxed max-w-xs">
                            Atatürk Mah. Vedat Günyol Cad. <br />
                            Sedef Sitesi 46F D: 16 <br />
                            Ataşehir / Istanbul - Turkey
                        </p>
                    </div>

                    {/* Divider generic element for desktop */}
                    <div className="hidden md:block w-px h-32 bg-white/10" />

                    {/* Email */}
                    <div className="flex flex-col items-center gap-4 text-center md:flex-1">
                        <div className="p-4 bg-white/5 rounded-full text-accent shadow-lg border border-white/10">
                            <Mail size={32} />
                        </div>
                        <h3 className="text-xl font-serif text-white uppercase tracking-wide">Email Us</h3>
                        <a
                            href="mailto:b13@b13.com.tr"
                            className="text-gray-400 hover:text-accent transition-colors font-light text-lg"
                        >
                            b13@b13.com.tr
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
