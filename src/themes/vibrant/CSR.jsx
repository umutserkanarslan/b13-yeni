import { motion } from "framer-motion";
import csrImg from "../../assets/images/csr.jpg";
import bCaresImg from "../../assets/images/b-cares.jpg";

export default function CSR() {
    return (
        <section id="csr" className="py-24 px-6">
            <div className="container mx-auto">
                <div className="bg-gradient-to-br from-indigo-900 via-purple-900 to-slate-900 rounded-[3rem] p-8 md:p-24 text-white relative overflow-hidden shadow-2xl border-4 border-white/10">
                    {/* Abstract Background Elements */}
                    <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-purple-500/30 rounded-full blur-[100px]" />
                    <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-500/20 rounded-full blur-[80px]" />

                    <div className="relative z-10 flex flex-col md:flex-row gap-16 items-center">
                        <div className="flex-1 space-y-8 text-center md:text-left">
                            <h2 className="text-5xl font-black tracking-tight">CSR</h2>
                            <div className="h-1 w-20 bg-purple-500 rounded-full mx-auto md:mx-0" />
                            <p className="text-indigo-100 text-xl leading-relaxed font-light opacity-90">
                                One of B13 events objectives is to increase the idea of CSR and its awareness to reach international standards in Turkey, which is already adopted by foundations, associations, and guild culture. Our mission is to help create memorable and worthwhile CSR projects which will strengthen the bond of communication or teambuilding within yourself and having a sustainable and pleasing outcome.
                            </p>

                            <motion.div
                                whileHover={{ scale: 1.05 }}
                                className="p-8 bg-white rounded-3xl shadow-xl inline-block"
                            >
                                <img src={bCaresImg} className="h-40 object-contain" />
                            </motion.div>
                        </div>

                        <div className="flex-1 w-full">
                            <motion.img
                                src={csrImg}
                                className="w-full rounded-[2.5rem] shadow-2xl rotate-1 hover:rotate-3 transition-transform duration-500 border-8 border-white/10"
                                whileHover={{ scale: 1.02 }}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
