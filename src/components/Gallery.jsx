import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import img1 from "../assets/images/b13 our story.png";
import img2 from "../assets/images/b13 what we do.jpg";
import img3 from "../assets/images/csr.jpg";

// Mock Data for Events (Albums)
const events = [
    {
        id: 1,
        date: "March 2018",
        location: "Bodrum / Turkey",
        guests: "120 guests",
        cover: img1,
        images: [img1, img2, img3],
    },
    {
        id: 2,
        date: "February 2018",
        location: "Antalya - Turkey",
        guests: "250 guests",
        cover: img2,
        images: [img2, img3, img1],
    },
    {
        id: 3,
        date: "February 2020",
        location: "Kartalkaya / Turkey",
        guests: "90 guests",
        cover: img3,
        images: [img3, img1, img2],
    },
    {
        id: 4,
        date: "May 2019",
        location: "Istanbul / Turkey",
        guests: "350 guests",
        cover: img1,
        images: [img1, img2, img3],
    },
    {
        id: 5,
        date: "May 2019",
        location: "Istanbul / Turkey",
        guests: "350 guests",
        cover: img2,
        images: [img2, img3, img1],
    },
    {
        id: 6,
        date: "February 2018",
        location: "Antalya / Turkey",
        guests: "300 guests",
        cover: img3,
        images: [img3, img1, img2],
    },
    {
        id: 7,
        date: "March 2018",
        location: "Istanbul / Turkey",
        guests: "120 guests",
        cover: img1,
        images: [img1, img2, img3],
    },
    {
        id: 8,
        date: "October 2019",
        location: "Cappadocia - Turkey",
        guests: "120 guests",
        cover: img2,
        images: [img2, img3, img1],
    },
    {
        id: 9,
        date: "October 2019",
        location: "Istanbul / Turkey",
        guests: "120 guests",
        cover: img3,
        images: [img3, img1, img2],
    },
    {
        id: 10,
        date: "October 2019",
        location: "Izmir / Turkey",
        guests: "80 guests",
        cover: img1,
        images: [img1, img3, img2],
    },
    {
        id: 11,
        date: "January 2020",
        location: "Istanbul / Turkey",
        guests: "90 guests",
        cover: img2,
        images: [img2, img1, img3],
    },
    {
        id: 12,
        date: "January 2020",
        location: "Istanbul / Turkey",
        guests: "90 guests",
        cover: img3,
        images: [img3, img2, img1],
    },
];

export default function Gallery() {
    const [selectedEvent, setSelectedEvent] = useState(null);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const openGallery = (event) => {
        setSelectedEvent(event);
        setCurrentImageIndex(0);
    };

    const closeGallery = () => {
        setSelectedEvent(null);
    };

    const nextImage = (e) => {
        e.stopPropagation();
        if (selectedEvent) {
            setCurrentImageIndex((prev) => (prev + 1) % selectedEvent.images.length);
        }
    };

    const prevImage = (e) => {
        e.stopPropagation();
        if (selectedEvent) {
            setCurrentImageIndex((prev) =>
                prev === 0 ? selectedEvent.images.length - 1 : prev - 1
            );
        }
    };

    return (
        <section id="gallery" className="py-24 px-6 bg-neutral-900 border-t border-white/5">
            <div className="container mx-auto space-y-16">
                {/* Simple Header */}
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-4xl md:text-5xl font-serif font-bold text-white text-center uppercase tracking-widest"
                >
                    Image Group <span className="text-accent">Gallery</span>
                </motion.h2>

                {/* Event Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {events.map((event, index) => (
                        <motion.div
                            key={event.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.05, duration: 0.5 }}
                            className="group cursor-pointer flex flex-col items-center text-center space-y-4"
                            onClick={() => openGallery(event)}
                        >
                            <div className="relative w-full aspect-[4/3] overflow-hidden rounded-sm border-2 border-transparent group-hover:border-accent/50 transition-colors duration-300">
                                <img
                                    src={event.cover}
                                    alt={event.location}
                                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                                />
                            </div>

                            <div className="space-y-1">
                                <p className="text-gray-300 font-medium text-sm uppercase tracking-wide">{event.date}</p>
                                <div className="h-px w-8 bg-accent/50 mx-auto" />
                                <p className="text-white font-bold text-base md:text-lg">{event.location}</p>
                                <p className="text-gray-500 text-xs">{event.guests}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Lightbox */}
            <AnimatePresence>
                {selectedEvent && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[80] bg-black/95 backdrop-blur-xl flex items-center justify-center p-4"
                        onClick={closeGallery}
                    >
                        {/* Close Button */}
                        <button
                            className="absolute top-8 right-8 text-white/50 hover:text-white transition-colors z-[90]"
                            onClick={closeGallery}
                        >
                            <X size={48} />
                        </button>

                        {/* Navigation Buttons */}
                        <button
                            className="absolute left-2 md:left-8 text-white/50 hover:text-white transition-colors p-4 z-[90] hover:bg-white/5 rounded-full"
                            onClick={prevImage}
                        >
                            <ChevronLeft size={48} />
                        </button>
                        <button
                            className="absolute right-2 md:right-8 text-white/50 hover:text-white transition-colors p-4 z-[90] hover:bg-white/5 rounded-full"
                            onClick={nextImage}
                        >
                            <ChevronRight size={48} />
                        </button>

                        {/* Main Image */}
                        <div className="relative w-full max-w-6xl max-h-[85vh] flex flex-col items-center gap-4" onClick={(e) => e.stopPropagation()}>
                            <motion.img
                                key={currentImageIndex}
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.95 }}
                                transition={{ duration: 0.3 }}
                                src={selectedEvent.images[currentImageIndex]}
                                alt="Gallery View"
                                className="max-h-[75vh] w-auto object-contain rounded-sm shadow-2xl border border-white/10"
                            />
                            <div className="text-center text-white/80 space-y-1 mt-4">
                                <h3 className="text-2xl font-serif text-white">{selectedEvent.location}</h3>
                                <p className="text-sm font-light text-accent">{selectedEvent.date}</p>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}
