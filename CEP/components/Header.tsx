"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";

interface HeaderProps {
  onContactClick: () => void;
}

export default function Header({ onContactClick }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const smoothScrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-cloud/90 backdrop-blur-lg shadow-md" : "bg-transparent"
      }`}
    >
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center space-x-3 cursor-pointer"
            onClick={() => smoothScrollTo("home")}
          >
            <div className="w-10 h-10 bg-sunset rounded-full flex items-center justify-center shadow-lg">
              <span className="text-white font-bold text-xl">🌱</span>
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-bold font-heading text-forest">
                Screen Free Sundays
              </span>
              <span className="block text-base font-semibold text-sunset" style={{letterSpacing: '0.5px'}}>
                sponsored by Antariksh
              </span>
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {["About", "Activities", "Gallery"].map((item) => (
              <button
                key={item}
                onClick={() => smoothScrollTo(item.toLowerCase())}
                className="text-charcoal hover:text-sunset font-medium transition-colors duration-200"
              >
                {item}
              </button>
            ))}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={onContactClick}
              className="px-6 py-2 bg-sunset hover:bg-sunset-dark text-white rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Contact Us
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-charcoal hover:text-sunset transition-colors"
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden py-4 space-y-4 bg-cloud/95 backdrop-blur-lg rounded-b-2xl shadow-lg"
          >
            {["About", "Activities", "Gallery"].map((item) => (
              <button
                key={item}
                onClick={() => smoothScrollTo(item.toLowerCase())}
                className="block w-full text-left px-4 py-2 text-charcoal hover:text-sunset hover:bg-mint/30 rounded-lg transition-all duration-200 font-medium"
              >
                {item}
              </button>
            ))}
            <button
              onClick={onContactClick}
              className="w-full mx-4 px-6 py-3 bg-sunset hover:bg-sunset-dark text-white rounded-full font-semibold shadow-lg transition-all duration-300"
            >
              Contact Us
            </button>
          </motion.div>
        )}
      </nav>
    </motion.header>
  );
}



