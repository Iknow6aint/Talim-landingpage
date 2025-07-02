"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const StatsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const stats = [
    {
      number: "500+",
      label: "Schools Worldwide",
      description: "Educational institutions trust Talim globally"
    },
    {
      number: "50K+",
      label: "Active Students",
      description: "Students learning through our platform daily"
    },
    {
      number: "98%",
      label: "Parent Satisfaction",
      description: "Parents rate our communication tools excellent"
    },
    {
      number: "40%",
      label: "Time Saved",
      description: "Average administrative time reduction for schools"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.4, 0.0, 0.2, 1] as const
      }
    }
  };

  return (
    <section className="py-16 bg-gradient-to-br from-blue-50 to-green-50" ref={ref}>
      <div className="max-w-6xl mx-auto px-4">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-[35px] md:text-[45px] font-semibold text-gray-900 mb-4">
            Trusted by Education Leaders <span className="text-blue-600">Worldwide</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Join thousands of educational institutions that have transformed their operations with Talim's comprehensive learning management system.
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="text-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100"
            >
              <motion.div
                className="text-4xl md:text-5xl font-bold text-blue-600 mb-2"
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : { scale: 0 }}
                transition={{ delay: index * 0.2 + 0.5, type: "spring", stiffness: 200 }}
              >
                {stat.number}
              </motion.div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {stat.label}
              </h3>
              <p className="text-gray-600 text-sm">
                {stat.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Testimonial Quote */}
        <motion.div 
          className="mt-16 text-center max-w-4xl mx-auto"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          <blockquote className="text-xl md:text-2xl text-gray-700 italic mb-6 leading-relaxed">
            "Talim has transformed how we manage our school operations. The transparency and communication between teachers, parents, and administration has never been better."
          </blockquote>
          <div className="flex items-center justify-center gap-4">
            <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-green-500 rounded-full flex items-center justify-center text-white font-semibold">
              DR
            </div>
            <div className="text-left">
              <p className="font-semibold text-gray-900">Dr. Sarah Mitchell</p>
              <p className="text-gray-600">Principal, International Academy</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default StatsSection;
