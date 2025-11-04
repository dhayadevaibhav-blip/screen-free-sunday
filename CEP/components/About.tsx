"use client";

import { motion } from "framer-motion";
import { Heart, MapPin, Users, Leaf } from "lucide-react";

export default function About() {
  const features = [
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Our Mission",
      description: "To create a safe, nurturing environment where children and teens can break free from digital dependency and rediscover the joy of real-world connections.",
      color: "text-red-500",
    },
    {
      icon: <MapPin className="w-8 h-8" />,
      title: "Location",
      description: "Based in Chawni, Chh. Sambhajinagar. Join us every Sunday for a day of connection, growth, and fun in the heart of our community.",
      color: "text-blue-500",
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Our Community",
      description: "A growing movement of families committed to balanced living, mental wellness, and authentic human experiences.",
      color: "text-green-500",
    },
    {
      icon: <Leaf className="w-8 h-8" />,
      title: "Our Promise",
      description: "Every activity is designed to inspire, empower, and connect. No screens, just presence, laughter, and growth.",
      color: "text-emerald-500",
    },
  ];

  return (
    <section id="about" className="py-24 bg-cloud">
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
              About Us
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-sunset mx-auto rounded-full"></div>
        </motion.div>

        {/* Intro Paragraph */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-3xl mx-auto text-center mb-20"
        >
          <p className="text-xl text-charcoal leading-relaxed font-medium">
            In a world dominated by screens and notifications, <strong className="text-forest">Screen Free Sundays</strong> offers a sanctuary
            of calm and connection. We believe that genuine happiness comes from real experiences, face-to-face conversations,
            and the simple joys of being present in the moment.
          </p>
        </motion.div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-mint/30"
            >
              <div className={`${feature.color} mb-4`}>{feature.icon}</div>
              <h3 className="text-2xl font-bold font-heading text-forest mb-3">{feature.title}</h3>
              <p className="text-charcoal leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Activities Preview */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-20 gradient-hero rounded-3xl p-8 md:p-12 text-white shadow-2xl"
        >
          <h3 className="text-3xl font-bold font-heading mb-6 text-center">What We Do</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-4xl mb-3">🧘</div>
              <p className="font-semibold text-lg">Yoga & Meditation</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-3">🎮</div>
              <p className="font-semibold text-lg">Team Sports & Games</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-3">📚</div>
              <p className="font-semibold text-lg">Storytelling & Creativity</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}



