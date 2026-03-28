"use client";
import { motion, useMotionValue, useSpring } from "motion/react";
import { useRef, useEffect, useState } from "react";
import VillaCard from "./VillaCard"; // Reuse your existing card

export default function VillaSlider({ villas }: { villas: any[] }) {
  const [width, setWidth] = useState(0);
  const carousel = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Calculate how far the slider can actually scroll
    if (carousel.current) {
      setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
    }
  }, []);

  return (
    <div className="overflow-hidden cursor-grab active:cursor-grabbing px-4">
      <motion.div
        ref={carousel}
        drag="x"
        dragConstraints={{ right: 0, left: -width }}
        whileTap={{ cursor: "grabbing" }}
        transition={{ type: "spring", stiffness: 150, damping: 20 }}
        className="flex gap-8"
      >
        {villas.map((villa, index) => (
          <motion.div 
            key={index} 
            className="min-w-[300px] md:min-w-[400px]"
          >
            <VillaCard {...villa} />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
