"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Play, X } from "lucide-react";

// Gallery images
const galleryImages = [
  { id: 1, type: "image", src: "https://res.cloudinary.com/dk8ybkspk/image/upload/v1762080782/photo_1_i3ypmv.jpg", alt: "Activity moment" },
  { id: 2, type: "image", src: "https://res.cloudinary.com/dk8ybkspk/image/upload/v1762080878/photo_3_m2khun.jpg", alt: "Yoga session" },
  { id: 3, type: "video", src: "https://res.cloudinary.com/dk8ybkspk/video/upload/v1762097847/vedio_2_rnfp0o.mp4", alt: "Meditation activity" },
  { id: 4, type: "image", src: "https://res.cloudinary.com/dk8ybkspk/image/upload/v1762083192/image_1_zrulco.jpg", alt: "Team sports" },
  { id: 5, type: "image", src: "https://res.cloudinary.com/dk8ybkspk/image/upload/v1762080891/photo_4_uqqa5j.jpg", alt: "Group activities" },
  { id: 6, type: "video", src: "https://res.cloudinary.com/dk8ybkspk/video/upload/v1762083918/video_scfopj.mp4", alt: "Happy children" },
]

export default function Gallery() { 
  const [selectedItem, setSelectedItem] = useState<number | null>(null);

  return (
    <section id="gallery" className="py-24 bg-gradient-to-b from-mint-light to-cloud">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-heading mb-4">
            <span className="text-forest">
              Moments of Joy
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-sunset mx-auto rounded-full"></div>
          <p className="text-xl text-charcoal mt-6 max-w-2xl mx-auto font-medium">
            Real smiles, real connections, real memories.
          </p>
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="relative group overflow-hidden rounded-2xl cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-300 aspect-square"
              onClick={() => setSelectedItem(item.id)}
            >
              {/* Fallback gradient background for broken images */}
              <div className="absolute inset-0 bg-gradient-to-br from-sky-light via-mint-light to-cloud flex items-center justify-center z-0">
                <span className="text-6xl">📸</span>
              </div>
              
              {/* Actual image or video thumbnail */}
              {item.type === "image" ? (
                <img
                  src={item.src}
                  alt={item.alt || "Gallery image"}
                  className="absolute inset-0 w-full h-full object-cover z-[1]"
                />
              ) : (
                <video
                  src={item.src}
                  className="absolute inset-0 w-full h-full object-cover z-[1]"
                  muted
                />
              )}

              {/* Play button overlay for videos */}
              {item.type === "video" && (
                <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/30 transition-all duration-300 z-[2]">
                  <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Play className="w-8 h-8 text-forest ml-1" fill="currentColor" />
                  </div>
                </div>
              )}

              {/* Hover overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-[2]" />
            </motion.div>
          ))}
        </div>

        {/* Video Modal */}
        {selectedItem !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
            onClick={() => setSelectedItem(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="relative max-w-4xl w-full bg-white rounded-2xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close button */}
              <button
                onClick={() => setSelectedItem(null)}
                className="absolute top-4 right-4 z-10 w-10 h-10 bg-white/90 hover:bg-white rounded-full flex items-center justify-center shadow-lg transition-all duration-200"
              >
                <X className="w-5 h-5 text-gray-800" />
              </button>

              {/* Video or image display */}
              {galleryImages.find(img => img.id === selectedItem)?.type === "video" ? (
                <div className="aspect-video bg-black">
                  <video
                    src={galleryImages.find(img => img.id === selectedItem)?.src || ""}
                    controls
                    className="w-full h-full object-contain"
                    autoPlay
                  >
                    Your browser does not support the video tag.
                  </video>
                </div>
              ) : (
                <img
                  src={galleryImages.find(img => img.id === selectedItem)?.src || ""}
                  alt={galleryImages.find(img => img.id === selectedItem)?.alt || "Gallery image"}
                  className="w-full h-auto max-h-[80vh] object-contain"
                />
              )}
            </motion.div>
          </motion.div>
        )}
      </div>
    </section>
  );
}



