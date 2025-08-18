"use client";
import { motion } from "motion/react";

interface Service {
  title: string;
  description: string;
  features: string[];
  icon: string;
  gradient: string;
}

const services: Service[] = [
  {
    title: "Web Development",
    description: "Modern, responsive websites and web applications built with cutting-edge technologies.",
    features: ["React & Next.js", "TypeScript", "Responsive Design", "Performance Optimization"],
    icon: "🌐",
    gradient: "from-blue-500 to-purple-600"
  },
  {
    title: "Mobile Development", 
    description: "Cross-platform mobile applications that deliver native-like experiences.",
    features: ["React Native", "Flutter", "iOS & Android", "App Store Deployment"],
    icon: "📱",
    gradient: "from-green-500 to-teal-600"
  },
  {
    title: "Game Development",
    description: "Engaging games and interactive experiences across multiple platforms.",
    features: ["Unity", "Unreal Engine", "2D & 3D Games", "Multi-platform"],
    icon: "🎮",
    gradient: "from-purple-500 to-pink-600"
  },
  {
    title: "AI & Machine Learning",
    description: "Intelligent solutions powered by artificial intelligence and machine learning.",
    features: ["Python & TensorFlow", "Data Analysis", "Predictive Models", "Automation"],
    icon: "🤖",
    gradient: "from-orange-500 to-red-600"
  }
];

export default function Services() {
  return (
    <section id="services" className="py-20 max-w-6xl mx-auto w-full">
      <div className="text-center mb-16">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold mb-4"
        >
          Services I Offer
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-slate-400 max-w-2xl mx-auto"
        >
          Comprehensive solutions to bring your digital ideas to life
        </motion.p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {services.map((service, index) => (
          <motion.div
            key={service.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            whileHover={{ y: -5 }}
            className="group relative overflow-hidden"
          >
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/8 transition-all duration-300 h-full">
              {/* Gradient Background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
              
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-6">
                  <div className="text-4xl group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-blue-400 transition-all duration-300">
                    {service.title}
                  </h3>
                </div>
                
                <p className="text-slate-400 mb-6 leading-relaxed">
                  {service.description}
                </p>
                
                <ul className="space-y-3">
                  {service.features.map((feature, featureIndex) => (
                    <motion.li
                      key={feature}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: (index * 0.1) + (featureIndex * 0.05) }}
                      className="flex items-center gap-3 text-slate-300"
                    >
                      <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex-shrink-0" />
                      {feature}
                    </motion.li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}