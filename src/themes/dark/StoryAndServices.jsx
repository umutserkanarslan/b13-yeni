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
    reverse: false,
};

const whatWeDo = {
    id: "what-we-do",
    title: "WHAT WE DO",
    intro: `We would like to help you create exciting, bright and memorable experiences. We combine our events experience with creative and happy productions. We provide a diversity of solutions for your events, taking your specific requirements into consideration. We also value the characteristics of the people we work with to be “boutique” for each specific person.

Our job is our passion and our goal is to create the most qualified services for each event. What is important to you is a priority for us – your timelines are our guidelines. We have the talent, knowledge and a great network of suppliers in order to create perfect solutions and ideas for your events and projects. Based on our past experiences, we can predict the details –be it big or small- and manage them for you ahead of time, so that you can focus on the most important parts of your projects.

We look for the “perfect” and “most suitable” instead of the “good”.`,
    img: whatWeDoImg,
    services: [
        {
            title: "MEETINGS & CONFERENCES",
            desc: "10 guests, a 1000 or more...you wish and we will make it happen. Stage desing & production, appropriate audio – visual suggestions and set-up, seating arrangements, meet & greet and more...",
        },
        {
            title: "EVENTS",
            desc: "Boutique events, product launches, special evenings & parties... We are there for you with innovative, different and “cool” ideas. Selection of venues, design menus, stage performances and more...",
        },
        {
            title: "LEISURE & INCENTIVES",
            desc: "We have an average of 20-years operating experience also in incentives and FIT travels and we know our destination by our heart. We have worked with European (especially Portugal, UK and Germany) & American markets very closely over the past years which helps us anticipate the needs and requirements of leaisure and incentive travellers from these parts of the world.",
            list: [
                "Set itineraries for leisure travels or tailor-made if required",
                "Design unique programmes for incentives based on the purpose of each specific trip",
                "24 hours on-site management for incentives",
                "No unexpected costs",
                "Be it a breakfast in an ancient underground water cistern in Istanbul or a dinner at the illustrious “fairy chimneys” in Cappadocia, we are there for you.",
            ],
        },
        {
            title: "TEAM ACTIVITIES",
            desc: "From entertainment to competition, rivalry to team spirit, creativity to knowledge; we design team activities for your specific needs and purposes, energizing activities in between meetings and more...",
        },
    ],
};

const certificates = [
    { img: iso9001, label: "ISO 9001: Quality Management" },
    { img: iso14001, label: "ISO 14001: Environmental Management" },
    { img: iso45001, label: "ISO 45001: Occupational Health & Safety" },
];

export default function StoryAndServices() {
    const [selectedCert, setSelectedCert] = useState(null);

    return (
        <section className="py-20 px-6 bg-background relative z-20">
            <div className="container mx-auto space-y-32">
                {/* OUR STORY SECTION */}
                <div id={ourStory.id}>
                    <div className="flex flex-col md:flex-row items-center gap-12">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.8 }}
                            className="flex-1 space-y-6"
                        >
                            <h2 className="text-4xl md:text-5xl font-serif font-bold text-accent uppercase">
                                {ourStory.title}
                            </h2>
                            <p className="text-gray-300 text-lg leading-relaxed font-light whitespace-pre-line">
                                {ourStory.text}
                            </p>
                            <div className="w-20 h-1 bg-accent/30 rounded-full" />
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.8 }}
                            className="flex-1 w-full"
                        >
                            <div className="relative group overflow-hidden rounded-2xl shadow-2xl shadow-black border border-white/5">
                                <div className="absolute inset-0 bg-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
                                <img
                                    src={ourStory.img}
                                    alt={ourStory.title}
                                    className="w-full h-[400px] object-cover transform group-hover:scale-105 transition-transform duration-700"
                                />
                            </div>
                        </motion.div>
                    </div>

                    {/* Certificates */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="mt-20 flex flex-col items-center gap-8 border-t border-b border-white/5 py-12 bg-white/5 rounded-xl"
                    >
                        <h3 className="text-3xl font-serif font-bold text-white uppercase tracking-wider">
                            Certificates
                        </h3>
                        <div className="flex flex-wrap justify-center gap-12 md:gap-20">
                            {certificates.map((cert, i) => (
                                <div
                                    key={i}
                                    className="flex flex-col items-center gap-4 group cursor-pointer"
                                    onClick={() => setSelectedCert(cert.img)}
                                >
                                    <div className="p-4 bg-white rounded-lg shadow-lg transform group-hover:scale-105 transition-transform duration-300">
                                        <img
                                            src={cert.img}
                                            alt={cert.label}
                                            className="h-40 md:h-52 object-contain"
                                        />
                                    </div>
                                    <span className="text-gray-400 text-sm font-medium group-hover:text-accent transition-colors">
                                        {cert.label}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>

                {/* WHAT WE DO SECTION */}
                <div id={whatWeDo.id} className="space-y-16">
                    {/* Centered Intro */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="max-w-4xl mx-auto text-center space-y-8"
                    >
                        <h2 className="text-4xl md:text-5xl font-serif font-bold text-accent uppercase">
                            {whatWeDo.title}
                        </h2>
                        <p className="text-gray-300 text-lg leading-relaxed font-light whitespace-pre-line">
                            {whatWeDo.intro}
                        </p>
                        <div className="w-24 h-1 bg-accent/30 rounded-full mx-auto" />
                    </motion.div>

                    {/* Image + Content Split */}
                    <div className="flex flex-col lg:flex-row gap-12 items-start">
                        {/* Image (Left) */}
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="lg:w-1/2 w-full lg:sticky lg:top-32"
                        >
                            <div className="relative group overflow-hidden rounded-2xl shadow-2xl shadow-black border border-white/5 h-[600px]">
                                <div className="absolute inset-0 bg-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
                                <img
                                    src={whatWeDo.img}
                                    alt="What We Do"
                                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                                />
                            </div>
                        </motion.div>

                        {/* Detailed Services (Right) */}
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="lg:w-1/2 w-full space-y-12"
                        >
                            {whatWeDo.services.map((service, index) => (
                                <div key={index} className="space-y-3">
                                    <h3 className="text-2xl font-serif font-bold text-white uppercase border-l-4 border-accent pl-4">
                                        {service.title}
                                    </h3>
                                    <p className="text-gray-400 font-light leading-relaxed pl-5">
                                        {service.desc}
                                    </p>
                                    {service.list && (
                                        <ul className="list-disc list-inside space-y-2 text-gray-400 font-light pl-5 pt-2">
                                            {service.list.map((item, idx) => (
                                                <li key={idx} className="marker:text-accent">
                                                    {item}
                                                </li>
                                            ))}
                                        </ul>
                                    )}
                                </div>
                            ))}
                        </motion.div>
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
                        className="fixed inset-0 z-[70] bg-black/95 flex items-center justify-center p-4 backdrop-blur-lg"
                        onClick={() => setSelectedCert(null)}
                    >
                        <button
                            className="absolute top-8 right-8 text-white/50 hover:text-white transition-colors"
                            onClick={() => setSelectedCert(null)}
                        >
                            <X size={48} />
                        </button>
                        <motion.img
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            src={selectedCert}
                            alt="Certificate Fullscreen"
                            className="max-w-full max-h-[90vh] object-contain rounded-md shadow-2xl bg-white p-2"
                        />
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}
