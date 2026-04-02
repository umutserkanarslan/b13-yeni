import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import img1 from "../../assets/images/b13 our story.png";
import img2 from "../../assets/images/b13 what we do.jpg";
import img3 from "../../assets/images/csr.jpg";

// Mock Data for Events (Albums) - Synced with other themes
const events = [
    { id: 1, date: "March 2018", location: "Bodrum / Turkey", guests: "120 guests", cover: img1, images: [img1, img2, img3] },
    { id: 2, date: "February 2018", location: "Antalya - Turkey", guests: "250 guests", cover: img2, images: [img2, img3, img1] },
    { id: 3, date: "February 2020", location: "Kartalkaya / Turkey", guests: "90 guests", cover: img3, images: [img3, img1, img2] },
    { id: 4, date: "May 2019", location: "Istanbul / Turkey", guests: "350 guests", cover: img1, images: [img1, img2, img3] },
    { id: 5, date: "May 2019", location: "Istanbul / Turkey", guests: "350 guests", cover: img2, images: [img2, img3, img1] },
    { id: 6, date: "February 2018", location: "Antalya / Turkey", guests: "300 guests", cover: img3, images: [img3, img1, img2] },
    { id: 7, date: "March 2018", location: "Istanbul / Turkey", guests: "120 guests", cover: img1, images: [img1, img2, img3] },
    { id: 8, date: "October 2019", location: "Cappadocia - Turkey", guests: "120 guests", cover: img2, images: [img2, img3, img1] },
    { id: 9, date: "October 2019", location: "Istanbul / Turkey", guests: "120 guests", cover: img3, images: [img3, img1, img2] },
    { id: 10, date: "October 2019", location: "Izmir / Turkey", guests: "80 guests", cover: img1, images: [img1, img3, img2] },
    { id: 11, date: "January 2020", location: "Istanbul / Turkey", guests: "90 guests", cover: img2, images: [img2, img1, img3] },
    { id: 12, date: "January 2020", location: "Istanbul / Turkey", guests: "90 guests", cover: img3, images: [img3, img2, img1] },
];

export default function Gallery() {
    const [selectedEvent, setSelectedEvent] = useState(null);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const openGallery = (event) => {
        setSelectedEvent(event);
        setCurrentImageIndex(0);
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
            setCurrentImageIndex((prev) => prev === 0 ? selectedEvent.images.length - 1 : prev - 1);
        }
    };

    return (
        <section id="gallery" className="py-24 px-6">
            <div className="container mx-auto space-y-16">
                <div className="text-center space-y-4">
                    <h2 className="text-5xl font-black text-slate-900 tracking-tight">Gallery</h2>
                    <p className="text-xl text-slate-600 font-medium">Captured Moments</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {events.map((event, index) => (
                        <motion.div
                            key={event.id}
                            whileHover={{ y: -10 }}
                            transition={{ duration: 0.3 }}
                            onClick={() => openGallery(event)}
                            className="group cursor-pointer bg-white/60 backdrop-blur-md rounded-[2rem] p-4 shadow-lg border border-white/50 hover:shadow-purple-200/50"
                        >
                            <div className="aspect-[4/3] rounded-[1.5rem] overflow-hidden mb-4 relative">
                                <img src={event.cover} className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                                    <span className="text-white font-bold">View Album</span>
                                </div>
                            </div>
                            <div className="text-center space-y-1">
                                <p className="text-xs font-bold text-purple-600 uppercase tracking-widest">{event.date}</p>
                                <h3 className="text-lg font-bold text-slate-800 leading-tight">{event.location}</h3>
                                <p className="text-slate-500 text-xs">{event.guests}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Lightbox */}
            <AnimatePresence>
                {selectedEvent && (
                    <motion.div
                        initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[100] bg-slate-900/90 backdrop-blur-xl flex items-center justify-center p-4"
                        onClick={() => setSelectedEvent(null)}
                    >
                        {/* Controls */}
                        <button className="absolute top-8 right-8 text-white/50 hover:text-white transition-colors z-[110]" onClick={() => setSelectedEvent(null)}>
                            <X size={48} />
                        </button>
                        <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex justify-between px-4 md:px-12 pointer-events-none">
                            <button className="pointer-events-auto p-4 bg-white/10 hover:bg-white/20 rounded-full backdrop-blur-md text-white transition-all" onClick={prevImage}><ChevronLeft size={32} /></button>
                            <button className="pointer-events-auto p-4 bg-white/10 hover:bg-white/20 rounded-full backdrop-blur-md text-white transition-all" onClick={nextImage}><ChevronRight size={32} /></button>
                        </div>

                        {/* Image */}
                        <div className="relative w-full max-w-5xl flex flex-col items-center gap-6" onClick={(e) => e.stopPropagation()}>
                            <motion.img
                                key={currentImageIndex}
                                initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}
                                src={selectedEvent.images[currentImageIndex]}
                                className="max-h-[75vh] w-auto rounded-3xl shadow-2xl border-4 border-white/10"
                            />
                            <div className="text-center text-white">
                                <h3 className="text-3xl font-bold">{selectedEvent.location}</h3>
                                <p className="text-purple-300 font-medium">{selectedEvent.date}</p>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}
