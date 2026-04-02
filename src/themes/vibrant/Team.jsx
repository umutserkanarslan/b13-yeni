import basarImg from "../../assets/images/Basar.jpg";
import burcinImg from "../../assets/images/Burcin.jpg";
import burcuImg from "../../assets/images/Burcu.jpg";
import cagatayImg from "../../assets/images/Cagatay.jpg";
import donayImg from "../../assets/images/Donay.jpg";
import duyguImg from "../../assets/images/Duygu.jpg";
import recepImg from "../../assets/images/Recep.jpg";
import tolgaImg from "../../assets/images/Tolga.jpg";
import yunusImg from "../../assets/images/Yunus.jpg";

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
        <section id="team" className="py-24 px-6">
            <div className="container mx-auto">
                <h2 className="text-5xl font-black text-center mb-16 text-slate-900 tracking-tight">The Squad</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {teamMembers.map((member, i) => (
                        <div key={i} className="group relative bg-white/60 backdrop-blur-md border border-white/50 p-8 rounded-[3rem] shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                            <div className="flex flex-col items-center text-center space-y-4">
                                {/* Avatar */}
                                <div className="w-40 h-40 rounded-full p-2 bg-white shadow-lg">
                                    <div className="w-full h-full rounded-full overflow-hidden">
                                        <img src={member.img} className="w-full h-full object-cover" />
                                    </div>
                                </div>

                                {/* Details */}
                                <div>
                                    <h3 className="text-xl font-black text-slate-800">{member.name}</h3>
                                    <a href={`mailto:${member.email}`} className="text-purple-600 font-bold text-sm block mb-1">{member.email}</a>
                                    <p className="text-lg font-serif italic text-slate-500 mb-4">"{member.motto}"</p>
                                    <p className="text-slate-600 text-sm leading-relaxed">{member.bio}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
