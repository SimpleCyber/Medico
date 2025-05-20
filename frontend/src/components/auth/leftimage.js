import React from 'react';
import { motion } from 'framer-motion';
import leftImage from '../../images/leftimage.webp';
import { HeartPulse } from 'lucide-react';

const LeftImage = () => {
  // Animation variants for the pulsing heart
  const pulseVariants = {
    pulse: {
      scale: [1, 1.2, 1],
      opacity: [0.7, 1, 0.7],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <div className="hidden md:flex w-1/3 h-screen relative">
      <img
        src={leftImage}
        alt="Left background"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gray-900 bg-opacity-50 flex flex-col justify-center items-center text-white text-center p-8">
        <div className='-mt-80'>
        {/* Logo and Brand */}
        <div className="flex items-center mb-4 mr-80">
          <motion.div
            variants={pulseVariants}
            animate="pulse"
            className="mr-5"
          >
            <HeartPulse size={60} color="#ffffff" />
          </motion.div>
          <h1 className="text-4xl font-bold tracking-wide">Medico</h1>
        </div>
        
        {/* Main Heading */}
        <motion.h2 
          className="text-4xl font-bold mb-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          Hospital Management Platform
        </motion.h2>
        </div>
        
        {/* Tagline */}
        <motion.p 
          className="text-lg italic font-light"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          Hospital Appointment made easy
        </motion.p>
        
        {/* Footer Text */}
        <p className="mt-auto text-sm absolute bottom-8 opacity-60 tracking-wider">
          TRUSTED BY THE BEST HOSPITALS AND DOCTORS
        </p>
      </div>
    </div>
  );
};

export default LeftImage;