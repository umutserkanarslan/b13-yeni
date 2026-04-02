import { motion } from "framer-motion";
import csrImg from "../../assets/images/csr.jpg";
import bCaresImg from "../../assets/images/b-cares.jpg";

export default function CSR() {
    return (
        <section id="csr" className="py-24 px-6 bg-slate-50">
            <div className="container mx-auto max-w-5xl">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="flex flex-col items-center text-center space-y-12"
                >
                    <div className="space-y-4">
                        <h2 className="text-4xl md:text-5xl font-sans font-bold text-gray-900">CSR</h2>
                        <div className="h-1 w-12 bg-blue-900 mx-auto" />
                    </div>

                    <p className="text-xl text-gray-600 leading-relaxed font-light">
                        One of B13 events objectives is to increase the idea of CSR and its awareness to reach international standards in Turkey, which is already adopted by foundations, associations, and guild culture. Our mission is to help create memorable and worthwhile CSR projects which will strengthen the bond of communication or teambuilding within yourself and having a sustainable and pleasing outcome.
                    </p>

                    <img src={bCaresImg} alt="B-Cares" className="h-40 object-contain mix-blend-multiply" />

                    <img
                        src={csrImg}
                        alt="CSR Activity"
                        className="w-full rounded-2xl shadow-xl transition-all duration-500"
                    />
                </motion.div>
            </div>
        </section>
    );
}
