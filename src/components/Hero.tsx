import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Play } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1920&q=80"
          alt="Luxury Travel"
          className="w-full h-full object-cover scale-105 animate-pulse-slow"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center text-white">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <span className="inline-block text-luxury-gold font-medium tracking-[0.3em] uppercase mb-4 text-sm md:text-base">
            Escape to Paradise
          </span>
          <h1 className="text-5xl md:text-8xl font-serif mb-6 leading-tight text-balance">
            Discover Your Next <br />
            <span className="italic">Great Adventure</span>
          </h1>
          <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto mb-10 font-light leading-relaxed">
            Experience luxury travel curated just for you. From pristine beaches to majestic mountains, WanderNest takes you there in style.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6"
        >
          <button className="group bg-white text-luxury-dark px-8 py-4 rounded-full text-sm font-semibold uppercase tracking-widest hover:bg-luxury-gold hover:text-white transition-all duration-300 flex items-center gap-2">
            Explore Destinations
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
          <button className="flex items-center gap-3 text-white hover:text-luxury-gold transition-colors group">
            <div className="w-12 h-12 rounded-full border border-white/30 flex items-center justify-center group-hover:border-luxury-gold transition-colors">
              <Play className="w-4 h-4 fill-current" />
            </div>
            <span className="text-sm font-semibold uppercase tracking-widest">Watch Story</span>
          </button>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] uppercase tracking-[0.2em] text-white/50">Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-white/50 to-transparent" />
      </motion.div>
    </section>
  );
}
