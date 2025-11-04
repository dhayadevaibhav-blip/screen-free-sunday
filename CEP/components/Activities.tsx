"use client";

import { motion } from "framer-motion";
import { Smartphone, Heart, Users } from "lucide-react";

const activities = [
  {
    icon: <Smartphone className="w-12 h-12" />,
    title: "Digital Detox Workshops",
    description: "Learn practical strategies to reduce screen time, manage digital habits, and build healthier relationships with technology.",
    gradient: "from-purple-500 to-pink-500",
    bgColor: "bg-purple-50",
  },
  {
    icon: <Heart className="w-12 h-12" />,
    title: "Mindfulness & Yoga",
    description: "Connect with your inner self through guided meditation, yoga sessions, and breathing exercises that promote calm and clarity.",
    gradient: "from-blue-500 to-cyan-500",
    bgColor: "bg-blue-50",
  },
  {
    icon: <Users className="w-12 h-12" />,
    title: "Team Sports & Games",
    description: "Build friendships, teamwork, and physical fitness through fun outdoor activities, group games, and friendly competitions.",
    gradient: "from-green-500 to-emerald-500",
    bgColor: "bg-green-50",
  },
];

export default function Activities() {
  return (
    <section id="activities" className="py-24 bg-white">
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
              Our Activities
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-sunset mx-auto rounded-full"></div>
          <p className="text-xl text-charcoal mt-6 max-w-2xl mx-auto font-medium">
            Each activity is carefully designed to inspire, empower, and connect.
          </p>
        </motion.div>

        {/* Activity Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {activities.map((activity, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              whileHover={{ scale: 1.03, y: -10 }}
              className="group relative"
            >
              <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 h-full">
                {/* Icon with gradient background */}
                <div className={`w-20 h-20 bg-gradient-to-br ${activity.gradient} rounded-2xl flex items-center justify-center mb-6 text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  {activity.icon}
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold font-heading text-forest mb-4">{activity.title}</h3>
                <p className="text-charcoal leading-relaxed">{activity.description}</p>

                {/* Decorative element */}
                <div className={`absolute -z-10 inset-0 ${activity.bgColor} rounded-3xl opacity-0 group-hover:opacity-50 transition-opacity duration-300 blur-2xl`}></div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="inline-block bg-gradient-to-r from-mint-light to-cloud rounded-2xl p-8 border border-mint">
            <p className="text-lg text-forest mb-4 font-semibold">
              Ready to join the movement?
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-sunset hover:bg-sunset-dark text-white rounded-full font-semibold shadow-lg transition-all duration-300"
              onClick={() => {
                const element = document.getElementById("contact");
                if (element) {
                  element.scrollIntoView({ behavior: "smooth" });
                }
              }}
            >
              Get in Touch
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}



