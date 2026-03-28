import { motion } from "motion/react";

interface VillaProps {
  title: string;
  location: string;
  price: number;
  rating: number;
  category: string;
  image: string;
  icon: string;
}

export default function VillaCard({ title, location, price, rating, category, image, icon }: VillaProps) {
  return (
    <motion.div 
      layout // This handles smooth layout changes if the grid changes
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -10 }} // Lifts the card up slightly on hover
      className="text-left group cursor-pointer"
    >
      <div className="relative h-80 rounded-2xl overflow-hidden mb-4">
        <motion.img 
          src={image} 
          whileHover={{ scale: 1.1 }} // Smooth zoom on image
          transition={{ duration: 0.6, ease: [0.33, 1, 0.68, 1] }}
          className="w-full h-full object-cover" 
          alt={title} 
        />
        
        {/* Floating Category Badge */}
        <div className="absolute top-4 left-4 bg-white/20 backdrop-blur-md text-white text-[10px] px-3 py-1 rounded-full uppercase tracking-widest">
          <i className={`fa-solid ${icon} mr-1`}></i> {category}
        </div>
        
        {/* Rating Badge */}
        <div className="absolute bottom-4 left-4 bg-white/80 text-black text-[10px] px-2 py-1 rounded-md font-bold">
          ★ {rating}
        </div>
      </div>

      <h3 className="text-xl mb-1 italic font-serif">{title}</h3>
      <p className="text-xs text-gray-400 mb-4">{location}</p>
      
      <div className="flex items-center justify-between">
        <span className="text-sm font-light">
          From <span className="font-bold">${price}</span> / night
        </span>
        <motion.button 
          whileTap={{ scale: 0.95 }}
          className="text-[10px] uppercase tracking-widest border border-gray-200 px-4 py-2 rounded-md hover:bg-black hover:text-white transition-colors duration-300"
        >
          View Villa →
        </motion.button>
      </div>
    </motion.div>
  );
}
