import Navbar from "./Navbar";
import Hero from "./Hero";
import StoryAndServices from "./StoryAndServices";
import CSR from "./CSR";
import Gallery from "./Gallery";
import References from "./References";
import Team from "./Team";
import Contact from "./Contact";

function AppDark() {
    return (
        <div className="min-h-screen bg-black text-white font-sans selection:bg-accent selection:text-black">
            <Navbar />
            <Hero />
            <StoryAndServices />
            <CSR />
            <Gallery />
            <References />
            <Team />
            <Contact />

            {/* Footer (Simplified) */}
            <footer className="py-8 text-center text-gray-600 text-sm border-t border-white/5 bg-black">
                <p>&copy; {new Date().getFullYear()} B13 Organization. All rights reserved.</p>
            </footer>
        </div>
    );
}

export default AppDark;
