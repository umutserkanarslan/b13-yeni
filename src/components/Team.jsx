import { motion } from "framer-motion";
import basarImg from "../assets/images/Basar.jpg";
import burcinImg from "../assets/images/Burcin.jpg";
import burcuImg from "../assets/images/Burcu.jpg";
import cagatayImg from "../assets/images/Cagatay.jpg";
import donayImg from "../assets/images/Donay.jpg";
import duyguImg from "../assets/images/Duygu.jpg";
import recepImg from "../assets/images/Recep.jpg";
import tolgaImg from "../assets/images/Tolga.jpg";
import yunusImg from "../assets/images/Yunus.jpg";

const teamMembers = [
    {
        name: "Basar Oztorun",
        email: "basar@B13.com.tr",
        motto: "Bcool",
        bio: "Founder of B13, the big boss of the B’s. Graduated from Fine Arts University, that's why each event is an art. Big fan of Besiktas Football Club. Creator of long tables.",
        img: basarImg,
    },
    {
        name: "Burcin Tenc",
        email: "burcin@B13.com.tr",
        motto: "Bsmile",
        bio: "Loves cooking and posting them on social media. Uses her skills in creativity to find interesting games for her son. Favorite color is pink. Always Bsmile.",
        img: burcinImg,
    },
    {
        name: "Burcu Contepe",
        email: "burcu@B13.com.tr",
        motto: "Bhappy",
        bio: "Born in one of the major touristic destinations of Turkey; Bodrum. Graduated from Bilkent University’s Tourism Management department in 1999. Began her journey in the tourism sector following her graduation. Loves; to be in nature with a book and her dog. Happy; when out for road tripping. Enjoys; cycling by the Bosphorus..",
        img: burcuImg,
    },
    {
        name: "Donay Tapanyigit",
        email: "donay@B13.com.tr",
        motto: "Bdifferent",
        bio: "...",
        img: donayImg,
    },
    {
        name: "Cagatay Karagulle",
        email: "cagatay@B13.com.tr",
        motto: "Benjoyable",
        bio: "...",
        img: cagatayImg,
    },
    {
        name: "Yunus Emre Yilmaz",
        email: "yunus@B13.com.tr",
        motto: "Bsmart",
        bio: "...",
        img: yunusImg,
    },
    {
        name: "Duygu",
        email: "tasarim@B13.com.tr",
        motto: "Bcreative",
        bio: "...",
        img: duyguImg,
    },
    {
        name: "Recep",
        email: "...@B13.com.tr",
        motto: "Bsafe",
        bio: "...",
        img: recepImg,
    },
    {
        name: "Tolga Onal",
        email: "finans@B13.com.tr",
        motto: "Bcounting",
        bio: "Born in Istanbul. Always been good at math which leads to him becoming an accountant. Due to his job lacked action and adventure, he went searching for them in his spare time. He did ski, scuba diving, bungee jumping, and even entered races with his bike. His motto is ‘you are who you are with the places you have seen and with the fun you have.’",
        img: tolgaImg,
    },
];

export default function Team() {
    return (
        <section id="team" className="py-24 px-6 bg-neutral-900 border-t border-white/5">
            <div className="container mx-auto space-y-16">
                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-4xl md:text-5xl font-serif font-bold text-white text-center uppercase tracking-widest"
                >
                    Meet the <span className="text-accent">Team</span>
                </motion.h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                    {teamMembers.map((member, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            className="flex flex-col items-center text-center space-y-4 group"
                        >
                            {/* Image with grayscale effect */}
                            <div className="relative w-48 h-48 rounded-full overflow-hidden border-4 border-white/10 group-hover:border-accent transition-colors duration-500">
                                <img
                                    src={member.img}
                                    alt={member.name}
                                    className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-700"
                                />
                            </div>

                            {/* Info */}
                            <div className="space-y-2 max-w-sm">
                                <h3 className="text-2xl font-serif font-bold text-white uppercase">{member.name}</h3>
                                <a href={`mailto:${member.email}`} className="text-accent hover:text-white transition-colors text-sm font-medium tracking-wide block pb-2">
                                    {member.email}
                                </a>
                                <p className="text-xl font-serif italic text-white/90">{member.motto}</p>
                                <p className="text-gray-400 font-light text-sm leading-relaxed whitespace-pre-line">{member.bio}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
