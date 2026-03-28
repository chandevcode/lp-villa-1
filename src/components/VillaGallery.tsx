"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

const images = [
  { id: 1, src: "https://images.unsplash.com/photo-1540541338287-41700207dee6?q=80&w=800" },
  { id: 2, src: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=800" },
  { id: 3, src: "https://images.unsplash.com/photo-1600607687940-c52af04657b3?q=80&w=800" },
  { id: 4, src: "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?q=80&w=800" },
];

export default function VillaGallery() {
  const [selectedId, setSelectedId] = useState<number | null>(null);

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {images.map((item) => (
          <motion.div
            key={item.id}
            layoutId={`card-${item.id}`}
            onClick={() => setSelectedId(item.id)}
            className="cursor-zoom-in rounded-xl overflow-hidden h-64 shadow-sm"
          >
            <motion.img 
              src={item.src} 
              className="w-full h-full object-cover" 
              alt="Villa Detail"
            />
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {selectedId && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-20">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedId(null)}
              className="absolute inset-0 bg-black/90 backdrop-blur-sm cursor-zoom-out"
            />

            <motion.div
              layoutId={`card-${selectedId}`}
              className="relative w-full max-w-5xl aspect-video rounded-2xl overflow-hidden shadow-2xl"
            >
              <motion.img
                src={images.find((img) => img.id === selectedId)?.src}
                className="w-full h-full object-cover"
              />
              <button 
                onClick={() => setSelectedId(null)}
                className="absolute top-6 right-6 text-white text-2xl hover:scale-110 transition"
              >
                <i class="fa-solid fa-xmark"></i>
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
