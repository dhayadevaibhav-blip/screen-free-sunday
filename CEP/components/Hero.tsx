"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

export default function Hero() {
  const scrollToAbout = () => {
    const element = document.getElementById("about");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background - Nature gradient */}
      <div className="absolute inset-0 gradient-hero opacity-100"></div>
      
      {/* Floating shapes - Nature elements */}
      <motion.div
        animate={{ y: [0, -20, 0], x: [0, 10, 0] }}
        transition={{ duration: 6, repeat: Infinity }}
        className="absolute top-20 left-10 w-72 h-72 bg-sky-light rounded-full blur-3xl opacity-40"
      />
      <motion.div
        animate={{ y: [0, 20, 0], x: [0, -15, 0] }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute bottom-20 right-10 w-96 h-96 bg-mint-light rounded-full blur-3xl opacity-40"
      />
      
      {/* Floating sun */}
      <motion.div
        animate={{ y: [0, -15, 0] }}
        transition={{ duration: 4, repeat: Infinity }}
        className="absolute top-32 right-32 text-6xl opacity-20"
      >
        ☀️
      </motion.div>
      
      {/* Floating leaf */}
      <motion.div
        animate={{ rotate: [0, 10, -10, 0], y: [0, 15, 0] }}
        transition={{ duration: 5, repeat: Infinity }}
        className="absolute bottom-32 left-32 text-5xl opacity-20"
      >
        🍃
      </motion.div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-4xl"
      >
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-5xl md:text-7xl font-bold font-heading mb-6 leading-tight"
        >
          <span className="text-forest">
            Rediscover Life
          </span>
          <br />
          <span className="text-sunset">Beyond the Screen</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-xl md:text-2xl text-charcoal mb-12 max-w-2xl mx-auto leading-relaxed font-medium"
        >
          A safe space for teenagers to disconnect from phones and reconnect with themselves, nature, and others.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={scrollToAbout}
            className="px-14 py-4 bg-sunset hover:bg-sunset-dark text-white rounded-full font-semibold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center gap-2"
          >
            Learn More
            <ChevronDown className="w-5 h-5 animate-bounce" />
          </motion.button>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-8 h-8 border-4 border-forest rounded-full flex items-center justify-center bg-cloud/50 backdrop-blur-sm"
        >
          <ChevronDown className="w-4 h-4 text-forest" />
        </motion.div>
      </motion.div>
    </section>
  );
}



