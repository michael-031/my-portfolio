import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import logo from './assets/logo1.png';

export default function SplashScreen({ onFinish }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Lock body scroll while splash screen is active
    document.body.style.overflow = 'hidden';

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        // Random increment for organic loading feel
        const next = prev + Math.floor(Math.random() * 12) + 4;
        return next > 100 ? 100 : next;
      });
    }, 80);

    const timer = setTimeout(() => {
      document.body.style.overflow = 'unset';
      if (onFinish) onFinish();
    }, 2400);

    return () => {
      clearInterval(interval);
      clearTimeout(timer);
      document.body.style.overflow = 'unset';
    };
  }, [onFinish]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{
        y: "-100%",
        transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] }
      }}
      className="fixed inset-0 z-[9999] bg-[#141a15] text-[#eef3ee] flex flex-col items-center justify-between py-12 px-6 font-sans select-none overflow-hidden"
    >
      {/* Top Bar Header */}
      <div className="w-full max-w-6xl flex justify-between items-center text-xs font-mono text-[#9BB193]/70 uppercase tracking-widest">
        <span>Portfolio 2026</span>
        <span>Michael Inoc</span>
      </div>

      {/* Center Hero Logo & Progress */}
      <div className="flex flex-col items-center justify-center text-center">
        {/* Glow Ring behind logo */}
        <div className="relative mb-8 flex items-center justify-center">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: [0.95, 1.05, 0.95], opacity: [0.4, 0.7, 0.4] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="absolute w-40 h-40 rounded-full bg-[#3d5945]/40 blur-2xl pointer-events-none"
          />
          <motion.img
            initial={{ scale: 0.85, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            src={logo}
            alt="Michael Inoc Portfolio"
            className="h-16 md:h-20 object-contain relative z-10 filter drop-shadow-[0_4px_12px_rgba(61,89,69,0.5)]"
          />
        </div>

        {/* Title / Subtitle */}
        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-2xl md:text-4xl font-extrabold text-[#eef3ee] mb-2 tracking-tight"
          style={{ fontFamily: "Century Gothic, sans-serif" }}
        >
          Full-Stack & Automation Specialist
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="text-xs md:text-sm font-mono text-[#9BB193] tracking-wider mb-8"
        >
          Crafting Web Applications & Google Apps Script Automations
        </motion.p>

        {/* Animated Progress Bar */}
        <div className="w-64 md:w-80 h-1.5 bg-white/10 rounded-full overflow-hidden relative mb-4 border border-white/5">
          <motion.div
            className="h-full bg-gradient-to-r from-[#3d5945] via-[#556b4f] to-[#9BB193] rounded-full"
            style={{ width: `${progress}%` }}
            transition={{ ease: "easeOut" }}
          />
        </div>

        {/* Counter Percentage */}
        <span className="font-mono text-sm font-bold text-[#9BB193] tracking-widest">
          {progress}%
        </span>
      </div>

      {/* Bottom Footer Status */}
      <div className="w-full max-w-6xl flex justify-between items-center text-xs font-mono text-gray-500 border-t border-[#3d5945]/20 pt-4">
        <span>Initializing Environment</span>
        <span className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#9BB193] animate-pulse"></span>
          Ready
        </span>
      </div>
    </motion.div>
  );
}
