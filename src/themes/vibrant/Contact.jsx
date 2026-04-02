import { Mail } from "lucide-react";

export default function Contact() {
    return (
        <section id="contact" className="py-24 px-6 text-center">
            <div className="container mx-auto max-w-2xl">
                <div className="bg-white/60 backdrop-blur-xl border border-white/50 rounded-[3rem] p-12 shadow-2xl hover:shadow-purple-500/20 transition-all duration-500">
                    <h2 className="text-4xl font-black text-slate-900 mb-8 tracking-tight">Contact</h2>

                    <div className="space-y-6 text-slate-700 font-medium text-lg">
                        <div>
                            <p className="text-purple-600 font-bold uppercase tracking-wider text-sm mb-2">Istanbul Office</p>
                            <p>Atatürk Mah. Vedat Günyol Cad. Sedef Sitesi 46F D: 16 Ataşehir / Istanbul</p>
                        </div>

                        <a
                            href="mailto:b13@b13.com.tr"
                            className="inline-flex items-center gap-3 text-purple-600 font-bold text-xl hover:scale-105 transition-transform bg-purple-50 px-6 py-3 rounded-full"
                        >
                            <Mail size={24} />
                            b13@b13.com.tr
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
