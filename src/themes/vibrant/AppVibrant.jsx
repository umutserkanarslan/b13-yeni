import Navbar from "./Navbar";
import Hero from "./Hero";
import StoryAndServices from "./StoryAndServices";
import CSR from "./CSR";
import Gallery from "./Gallery";
import References from "./References";
import Team from "./Team";
import Contact from "./Contact";

function AppVibrant() {
    return (
        <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-purple-500 selection:text-white overflow-hidden">
            {/* Animated Mesh Gradient Background (Fixed) */}
            <div className="fixed inset-0 z-0 opacity-40 mix-blend-multiply pointer-events-none">
                <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-purple-400 rounded-full mix-blend-multiply filter blur-[120px] animate-blob" />
                <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] bg-yellow-400 rounded-full mix-blend-multiply filter blur-[120px] animate-blob animation-delay-2000" />
                <div className="absolute bottom-[-10%] left-[20%] w-[50%] h-[50%] bg-pink-400 rounded-full mix-blend-multiply filter blur-[120px] animate-blob animation-delay-4000" />
            </div>

            <div className="relative z-10">
                <Navbar />
                <Hero />
                <StoryAndServices />
                <CSR />
                <Gallery />
                <References />
                <Team />
                <Contact />

                <footer className="py-8 text-center text-slate-500 text-sm bg-white/50 backdrop-blur-sm border-t border-white/20">
                    <p>&copy; {new Date().getFullYear()} B13 Organization. All rights reserved.</p>
                </footer>
            </div>
        </div>
    );
}

export default AppVibrant;
