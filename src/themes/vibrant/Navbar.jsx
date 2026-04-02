import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "../../lib/utils";

const navLinks = [
    { name: "Story", href: "#our-story" },
    { name: "Services", href: "#what-we-do" },
    { name: "CSR", href: "#csr" },
    { name: "Gallery", href: "#gallery" },
    { name: "References", href: "#references" },
    { name: "Team", href: "#team" },
    { name: "Contact", href: "#contact" },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4">
            <nav
                className={cn(
                    "bg-white/70 backdrop-blur-xl border border-white/40 rounded-full px-8 py-4 shadow-lg transition-all duration-300",
                    scrolled ? "w-full max-w-5xl" : "w-full max-w-6xl py-6"
                )}
            >
                <div className="flex justify-between items-center">
                    {/* Logo */}
                    <div className="text-2xl font-black bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent tracking-tighter">
                        B13
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="text-slate-600 hover:text-purple-600 font-semibold text-sm transition-colors"
                            >
                                {link.name}
                            </a>
                        ))}
                    </div>

                    {/* Mobile Toggle */}
                    <button
                        className="md:hidden text-slate-900"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>

                    {/* Mobile Menu */}
                    <AnimatePresence>
                        {isOpen && (
                            <motion.div
                                initial={{ opacity: 0, scale: 0.95, y: -20 }}
                                animate={{ opacity: 1, scale: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.95, y: -20 }}
                                className="absolute top-full left-0 right-0 mt-4 bg-white/90 backdrop-blur-xl rounded-3xl p-8 border border-white/20 shadow-2xl flex flex-col items-center gap-6"
                            >
                                {navLinks.map((link) => (
                                    <a
                                        key={link.name}
                                        href={link.href}
                                        className="text-lg font-bold text-slate-800"
                                        onClick={() => setIsOpen(false)}
                                    >
                                        {link.name}
                                    </a>
                                ))}
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </nav>
        </div>
    );
}
