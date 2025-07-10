"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { HiOutlinePhone, HiOutlineCalendar, HiOutlineUsers, HiOutlineShieldCheck } from "react-icons/hi2";
import PortalModal from "./PortalModal";

const CTASection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [isModalOpen, setIsModalOpen] = useState(false);

  const benefits = [
    {
      icon: <HiOutlineUsers className="w-6 h-6" />,
      title: "Easy Implementation",
      description: "Get your school up and running in just 48 hours"
    },
    {
      icon: <HiOutlineShieldCheck className="w-6 h-6" />,
      title: "Data Security",
      description: "Bank-level security with GDPR compliance"
    },
    {
      icon: <HiOutlinePhone className="w-6 h-6" />,
      title: "24/7 Support",
      description: "Dedicated support team available around the clock"
    }
  ];

  return (
    <>
      <section className="py-20 bg-gradient-to-br from-blue-700 to-blue-900 relative overflow-hidden" ref={ref}>
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-blue-300 rounded-full -translate-x-48 -translate-y-48"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-300 rounded-full translate-x-48 translate-y-48"></div>
        </div>
        
        {/* Additional overlay for better text contrast */}
        <div className="absolute inset-0 bg-blue-800/20"></div>

        <div className="max-w-6xl mx-auto px-4 relative z-10">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-[35px] md:text-[50px] font-bold text-white mb-6 leading-tight drop-shadow-lg">
              Ready to Transform Your <br />
              <span className="text-yellow-400 drop-shadow-md">Educational Institution?</span>
            </h2>
            <p className="text-xl text-blue-50 max-w-3xl mx-auto mb-8 leading-relaxed drop-shadow-md">
              Join hundreds of schools worldwide that have revolutionized their education management with Talim. Experience the power of transparent, data-driven education today.
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                className="bg-white/95 backdrop-blur-sm border border-white/30 rounded-2xl p-6 text-center hover:bg-white transition-all duration-300 shadow-xl hover:shadow-2xl"
                whileHover={{ scale: 1.05 }}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ delay: 0.4 + index * 0.1, duration: 0.5 }}
              >
                <div className="bg-blue-700 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-white shadow-lg">
                  {benefit.icon}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {benefit.title}
                </h3>
                <p className="text-gray-700 text-sm font-medium">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ delay: 0.8, duration: 0.6 }}
          >
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-lg mx-auto">
              <motion.button
                onClick={() => setIsModalOpen(true)}
                className="bg-white text-blue-800 px-8 py-4 rounded-full font-bold text-lg flex items-center gap-3 hover:bg-blue-50 transition-all duration-300 shadow-xl hover:shadow-2xl group w-full sm:w-auto justify-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <HiOutlineCalendar className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                Schedule a Demo
              </motion.button>
              
              <motion.button
                className="border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-blue-800 transition-all duration-300 w-full sm:w-auto shadow-lg hover:shadow-xl"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Call Sales Team
              </motion.button>
            </div>
            
            <p className="text-blue-50 mt-6 text-sm font-medium drop-shadow-md">
              Free 30-day trial • No credit card required • Setup in 48 hours
            </p>
          </motion.div>
        </div>
      </section>

      <PortalModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </>
  );
};

export default CTASection;
