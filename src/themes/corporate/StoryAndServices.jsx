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
    img: whatWeDoImg,
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
        <section className="py-24 px-6 bg-white">
            <div className="container mx-auto space-y-32">
                {/* OUR STORY */}
                <div className="space-y-16">
                    <div id={ourStory.id} className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            className="space-y-6"
                        >
                            <h6 className="text-blue-900 font-bold uppercase tracking-widest text-sm">About Us</h6>
                            <h2 className="text-4xl md:text-5xl font-sans font-bold text-gray-900">{ourStory.title}</h2>
                            <div className="h-1 w-20 bg-blue-900" />
                            <p className="text-gray-600 text-lg leading-relaxed whitespace-pre-line">
                                {ourStory.text}
                            </p>
                        </motion.div>

                        <div className="relative">
                            <img src={ourStory.img} alt="Our Story" className="w-full rounded-sm shadow-xl" />
                        </div>
                    </div>

                    {/* CERTIFICATES SECTION - Refactored */}
                    <div className="flex flex-col items-center gap-8 pt-8">
                        <h3 className="text-2xl font-bold text-gray-900 uppercase tracking-widest border-b-2 border-blue-900 pb-2">Certificates</h3>
                        <div className="flex flex-wrap justify-center gap-12">
                            {certificates.map((cert, i) => (
                                <div key={i} className="flex flex-col items-center gap-2 group cursor-pointer" onClick={() => setSelectedCert(cert.img)}>
                                    <img
                                        src={cert.img}
                                        alt={cert.label}
                                        className="h-32 md:h-40 w-auto object-contain transition-all duration-300 hover:scale-105"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* WHAT WE DO */}
                <div id={whatWeDo.id} className="space-y-16">
                    <div className="text-center max-w-3xl mx-auto space-y-4">
                        <h2 className="text-4xl md:text-5xl font-sans font-bold text-gray-900">{whatWeDo.title}</h2>
                        <p className="text-xl text-gray-500">{whatWeDo.intro}</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {whatWeDo.services.map((service, i) => (
                            <div key={i} className="bg-gray-50 p-8 rounded-xl border border-gray-100 hover:shadow-lg transition-shadow">
                                <h3 className="text-xl font-bold text-blue-900 mb-4">{service.title}</h3>
                                <p className="text-gray-600 text-sm leading-relaxed">{service.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Lightbox */}
            <AnimatePresence>
                {selectedCert && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[70] bg-white/95 flex items-center justify-center p-4"
                        onClick={() => setSelectedCert(null)}
                    >
                        <button
                            className="absolute top-8 right-8 text-gray-500 hover:text-black transition-colors"
                            onClick={() => setSelectedCert(null)}
                        >
                            <X size={48} />
                        </button>
                        <img
                            src={selectedCert}
                            alt="Certificate"
                            className="max-w-full max-h-[90vh] object-contain shadow-2xl"
                        />
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}
