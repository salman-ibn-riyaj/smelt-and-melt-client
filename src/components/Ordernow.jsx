'use client';

import { FaWhatsapp } from 'react-icons/fa';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function OrderNow() {
  const whatsappNumber = '+8801628007097';
  const whatsappMessage = 'Hello! I would like to order from Steam & Melt.';
  const whatsappLink = `https://wa.me/${whatsappNumber.replace(/[+\s-]/g, '')}?text=${encodeURIComponent(whatsappMessage)}`;

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5 },
    },
  };

  const logoVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.7, delay: 0.2 },
    },
    hover: {
      scale: 1.1,
      transition: { duration: 0.3 },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.6 },
    },
    hover: {
      scale: 1.05,
      transition: { duration: 0.3 },
    },
  };

  const buttonVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, delay: 0.4 },
    },
    hover: {
      scale: 1.05,
      boxShadow: '0 0 30px rgba(37, 211, 102, 0.5)',
      transition: { duration: 0.3 },
    },
    tap: { scale: 0.95 },
  };

  return (
    <motion.div
      className="w-full py-16 md:py-24 bg-black relative overflow-hidden"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      {/* Background gradient effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-orange-900/10 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        {/* Section Title */}
        <motion.div
          className="text-center mb-12 md:mb-16"
          variants={itemVariants}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Ready to Order?
          </h2>
          <p className="text-gray-300 text-lg md:text-xl">
            Connect with us on WhatsApp for quick and easy ordering
          </p>
        </motion.div>

        {/* Main Content */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12 lg:gap-16">
          {/* Left Momos Image */}
          <motion.div
            className="w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 relative rounded-lg overflow-hidden shadow-2xl"
            variants={imageVariants}
            whileHover="hover"
          >
            <Image
              src="/momos_2.jpeg"
              alt="Steamed Momos"
              fill
              className="object-cover"
              quality={85}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
          </motion.div>

          {/* Center WhatsApp Logo and Button */}
          <motion.div
            className="flex flex-col items-center gap-8"
            variants={containerVariants}
          >
            {/* WhatsApp Logo */}
            <motion.div
              className="relative"
              variants={logoVariants}
              whileHover="hover"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-green-400 via-emerald-400 to-green-500 rounded-full blur-2xl opacity-40 animate-pulse" />
              <div className="relative bg-gradient-to-br from-green-400 to-emerald-500 p-8 md:p-10 rounded-full shadow-2xl">
                <FaWhatsapp className="text-white text-7xl md:text-8xl lg:text-9xl" />
              </div>
            </motion.div>

            {/* WhatsApp Now Button */}
            <motion.a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="relative px-8 md:px-10 py-3 md:py-4 bg-gradient-to-r from-green-400 to-emerald-500 text-white font-bold text-lg md:text-xl rounded-full cursor-pointer shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center gap-3 group"
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
            >
              <FaWhatsapp className="text-2xl group-hover:scale-110 transition-transform" />
              <span>WhatsApp Now</span>
              <motion.span
                className="absolute top-1/2 right-4 transform -translate-y-1/2"
                animate={{ x: [0, 8, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                →
              </motion.span>
            </motion.a>

            {/* Contact Number Display */}
            <motion.p
              className="text-gray-400 text-sm md:text-base flex items-center gap-2"
              variants={itemVariants}
            >
              <span className="text-green-400 font-semibold">📱</span>
              <span>{whatsappNumber}</span>
            </motion.p>
          </motion.div>

          {/* Right Momos Image */}
          <motion.div
            className="w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 relative rounded-lg overflow-hidden shadow-2xl"
            variants={imageVariants}
            whileHover="hover"
          >
            <Image
              src="/momos_2.jpeg"
              alt="Delicious Momos"
              fill
              className="object-cover"
              quality={85}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
          </motion.div>
        </div>

        {/* Bottom Info Text */}
        <motion.div
          className="text-center mt-12 md:mt-16"
          variants={itemVariants}
        >
          <p className="text-gray-400 text-base md:text-lg">
            ✨ Fast Response • Fresh Delivery • Authentic Taste ✨
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
}