import { motion } from "framer-motion";
import csrImg from "../../assets/images/csr.jpg";
import bCaresImg from "../../assets/images/b-cares.jpg";

export default function CSR() {
    return (
        <section id="csr" className="py-24 px-6 bg-black border-y border-white/5">
            <div className="container mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="flex flex-col items-center space-y-12"
                >
                    {/* 1. Header */}
                    <h2 className="text-4xl md:text-5xl font-serif font-bold text-white uppercase tracking-widest text-center">
                        CSR
                    </h2>

                    {/* 2. Text */}
                    <p className="text-xl md:text-2xl text-gray-300 leading-relaxed font-light text-center max-w-5xl">
                        One of B13 events objectives is to increase the idea of CSR and its awareness to reach international standards in Turkey, which is already adopted by foundations, associations, and guild culture. Our mission is to help create memorable and worthwhile CSR projects which will strengthen the bond of communication or teambuilding within yourself and having a sustainable and pleasing outcome.
                    </p>

                    {/* 3. B-Cares Logo (Centered on White Card) */}
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.3 }}
                        className="bg-white p-6 rounded-lg shadow-xl"
                    >
                        <img
                            src={bCaresImg}
                            alt="B-Cares"
                            className="h-40 md:h-52 object-contain"
                        />
                    </motion.div>

                    {/* 4. CSR Activities Image (Centered below B-Cares) */}
                    <div className="w-full max-w-6xl">
                        <motion.img
                            src={csrImg}
                            alt="CSR Activities"
                            className="w-full h-auto object-contain rounded-lg shadow-2xl"
                            whileHover={{ opacity: 0.95 }}
                            transition={{ duration: 0.3 }}
                        />
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
