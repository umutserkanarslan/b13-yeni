import Navbar from "./Navbar";
import Hero from "./Hero";
import StoryAndServices from "./StoryAndServices";
import CSR from "./CSR";
import Gallery from "./Gallery";
import References from "./References";
import Team from "./Team";
import Contact from "./Contact";

function AppCorporate() {
    return (
        <div className="min-h-screen bg-white text-gray-900 font-sans selection:bg-blue-900 selection:text-white">
            <Navbar />
            <Hero />
            <StoryAndServices />
            <CSR />
            <Gallery />
            <References />
            <Team />
            <Contact />

            {/* Footer (Simplified) */}
            <footer className="py-8 text-center text-gray-500 text-sm border-t border-gray-100 bg-white">
                <p>&copy; {new Date().getFullYear()} B13 Organization. All rights reserved.</p>
            </footer>
        </div>
    );
}

export default AppCorporate;
