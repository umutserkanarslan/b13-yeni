import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import storyImg from "../../assets/images/b13 our story.png";
import whatWeDoImg from "../../assets/images/b13 what we do.jpg";
import iso9001 from "../../assets/images/ISO9001.jpg";
import iso14001 from "../../assets/images/ISO14001.jpg";
import iso45001 from "../../assets/images/ISO45001.jpg";

const ourStory = {
    id: "our-story",
    title: "Our Story",
    text: `B13 stepped into the world of events as an innovative establishment in May 2017, targeting to offer boutique services to any kind of request and become a solid solution partner to the clients.

We provide full services for corporate events, conferences, meetings and incentives, as well as for unforgettable weddings and private parties.

We, as B13 team would like to share our experience and our passion for events with our clients, with pleasure.`,
    img: storyImg,
};

const whatWeDo = {
    id: "what-we-do",
    title: "What We Do",
    intro: `We would like to help you create exciting, bright and memorable experiences. We combine our events experience with creative and happy productions.`,
    services: [
        {
            title: "MEETINGS & CONFERENCES",
            desc: "10 guests, a 1000 or more...you wish and we will make it happen. Stage desing & production, appropriate audio – visual suggestions and set-up.",
        },
        {
            title: "EVENTS",
            desc: "Boutique events, product launches, special evenings & parties... We are there for you with innovative, different and “cool” ideas.",
        },
        {
            title: "LEISURE & INCENTIVES",
            desc: "We have an average of 20-years operating experience also in incentives and FIT travels and we know our destination by our heart.",
        },
        {
            title: "TEAM ACTIVITIES",
            desc: "From entertainment to competition, rivalry to team spirit, creativity to knowledge; we design team activities for your specific needs.",
        },
    ],
};

const certificates = [
    { img: iso9001, label: "ISO 9001" },
    { img: iso14001, label: "ISO 14001" },
    { img: iso45001, label: "ISO 45001" },
];

export default function StoryAndServices() {
    const [selectedCert, setSelectedCert] = useState(null);

    return (
        <section className="py-24 px-6">
            <div className="container mx-auto space-y-32">

                {/* OUR STORY */}
                <div className="space-y-16">
                    <div id={ourStory.id} className="relative bg-white/40 backdrop-blur-md border border-white/50 rounded-[3rem] p-8 md:p-16 overflow-hidden shadow-xl">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
                            <div className="space-y-6">
                                <span className="text-purple-600 font-bold uppercase tracking-wider">Since 2017</span>
                                <h2 className="text-5xl font-sans font-black text-slate-900">{ourStory.title}</h2>
                                <div className="h-1 w-20 bg-purple-600 rounded-full" />
                                <p className="text-slate-700 text-lg leading-relaxed font-medium whitespace-pre-line">
                                    {ourStory.text}
                                </p>
                            </div>
                            <div className="rounded-[2.5rem] overflow-hidden shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-500">
                                <img src={ourStory.img} className="w-full object-cover" />
                            </div>
                        </div>
                    </div>

                    {/* CERTIFICATES - Centered, Vibrant */}
                    <div className="flex flex-col items-center gap-8">
                        <h3 className="text-3xl font-black text-slate-900 uppercase tracking-widest border-b-4 border-purple-500 pb-2">Certificates</h3>
                        <div className="flex flex-wrap justify-center gap-12">
                            {certificates.map((cert, i) => (
                                <motion.div
                                    whileHover={{ scale: 1.1, rotate: 2 }}
                                    key={i}
                                    onClick={() => setSelectedCert(cert.img)}
                                    className="bg-white/60 p-4 rounded-3xl border border-white/50 shadow-lg cursor-pointer"
                                >
                                    <img
                                        src={cert.img}
                                        alt={cert.label}
                                        className="h-32 md:h-40 w-auto object-contain"
                                    />
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* WHAT WE DO */}
                <div id={whatWeDo.id} className="space-y-16">
                    <div className="text-center max-w-4xl mx-auto space-y-4">
                        <h2 className="text-5xl font-sans font-black text-slate-900">{whatWeDo.title}</h2>
                        <p className="text-xl text-slate-600 font-medium">{whatWeDo.intro}</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {whatWeDo.services.map((s, i) => (
                            <motion.div
                                whileHover={{ y: -10 }}
                                key={i}
                                className="bg-white/60 backdrop-blur-lg border border-white/60 p-8 rounded-[2rem] shadow-lg flex flex-col h-full hover:shadow-purple-200 transition-shadow"
                            >
                                <div className="w-12 h-12 bg-gradient-to-tr from-purple-500 to-pink-500 rounded-2xl mb-6 shadow-inner" />
                                <h3 className="text-2xl font-bold text-slate-900 mb-4">{s.title}</h3>
                                <p className="text-slate-600 font-medium leading-relaxed">{s.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>

            </div>

            {/* Lightbox */}
            <AnimatePresence>
                {selectedCert && (
                    <div className="fixed inset-0 z-[100] bg-black/60 backdrop-blur-xl flex items-center justify-center p-8" onClick={() => setSelectedCert(null)}>
                        <button
                            className="absolute top-8 right-8 text-white/50 hover:text-white transition-colors"
                            onClick={() => setSelectedCert(null)}
                        >
                            <X size={48} />
                        </button>
                        <img src={selectedCert} className="max-h-[90vh] max-w-full rounded-3xl shadow-2xl border-4 border-white/20" />
                    </div>
                )}
            </AnimatePresence>
        </section>
    );
}
