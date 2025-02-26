"use client";

import Image from "next/image";
import { motion } from "framer-motion";

// Import images using index files
import * as corporateImages from "@/app/assets/corporate-events";
import * as marriageImages from "@/app/assets/Marriage";
import * as bdayImages from "@/app/assets/bday";
import * as specialOccasionImages from "@/app/assets/special-occasion";

// Convert images into an array
const images = [
  // Corporate Events
  ...Object.values(corporateImages).map((src, index) => ({
    id: index + 1,
    src, // This should now be a valid image module import
    alt: `Corporate Event ${index + 1}`,
  })),

  // Marriage Events
  ...Object.values(marriageImages).map((src, index) => ({
    id: index + 13,
    src,
    alt: `Marriage Event ${index + 1}`,
  })),

  // Birthday Events
  ...Object.values(bdayImages).map((src, index) => ({
    id: index + 47,
    src,
    alt: `Birthday Event ${index + 1}`,
  })),

  // Special Occasion Events
  ...Object.values(specialOccasionImages).map((src, index) => ({
    id: index + 75, // Changed to avoid duplicate IDs
    src,
    alt: `Special Occasion Event ${index + 1}`,
  })),
];

export default function ImageGallery() {
  return (
    <motion.div
      className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      {images.map((image) => (
        <motion.div
          key={image.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          whileHover={{ scale: 1.1 }}
          transition={{
            duration: 0.4,
            delay: image.id * 0.02,
          }}
          className="relative group aspect-square overflow-hidden rounded-lg"
        >
          <Image
            src={image.src}
            alt={image.alt}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-110"
            sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
          />
          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </motion.div>
      ))}
    </motion.div>
  );
}
