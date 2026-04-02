import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import img1 from "../../assets/images/b13 our story.png";
import img2 from "../../assets/images/b13 what we do.jpg";
import img3 from "../../assets/images/csr.jpg";

// Mock Data
const events = [
    { id: 1, date: "March 2018", location: "Bodrum Summit", cover: img1, images: [img1, img2] },
    { id: 2, date: "Feb 2018", location: "Antalya Gala", cover: img2, images: [img2, img3] },
    { id: 3, date: "Feb 2020", location: "Ski Resort", cover: img3, images: [img3, img1] },
    { id: 4, date: "May 2019", location: "Istanbul Conf", cover: img1, images: [img1, img2] },
    { id: 5, date: "May 2019", location: "Istanbul Dinner", cover: img2, images: [img2, img3] },
    { id: 6, date: "Feb 2018", location: "Antalya Meet", cover: img3, images: [img3, img1] },
    { id: 7, date: "March 2018", location: "Istanbul Party", cover: img1, images: [img1, img2] },
    { id: 8, date: "Oct 2019", location: "Cappadocia", cover: img2, images: [img2, img3] },
];

export default function Gallery() {
    const [selectedEvent, setSelectedEvent] = useState(null);

    return (
        <section id="gallery" className="py-24 px-6 bg-white">
            <div className="container mx-auto space-y-16">
                <div className="text-center">
                    <h2 className="text-4xl md:text-5xl font-sans font-bold text-gray-900 mb-4">Gallery</h2>
                    <p className="text-gray-500">Selected Works</p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {events.map((event) => (
                        <div
                            key={event.id}
                            onClick={() => setSelectedEvent(event)}
                            className="group relative aspect-square cursor-pointer overflow-hidden bg-gray-100"
                        >
                            <img
                                src={event.cover}
                                alt={event.location}
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-blue-900/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center text-white p-4 text-center">
                                <span className="font-bold text-lg">{event.location}</span>
                                <span className="text-sm opacity-80">{event.date}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Lightbox (Simplified) */}
            <AnimatePresence>
                {selectedEvent && (
                    <div className="fixed inset-0 z-[80] bg-white/95 flex items-center justify-center p-4">
                        <button onClick={() => setSelectedEvent(null)} className="absolute top-8 right-8 text-black">
                            <X size={48} />
                        </button>
                        <img src={selectedEvent.cover} className="max-h-[80vh] shadow-2xl" />
                    </div>
                )}
            </AnimatePresence>
        </section>
    );
}
