import React from 'react';
import { motion } from 'motion/react';
import { DESTINATIONS } from '../constants';
import { MapPin } from 'lucide-react';

export default function Destinations() {
  return (
    <section id="destinations" className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <span className="text-luxury-gold font-medium tracking-widest uppercase text-xs mb-3 block">
              Curated Collections
            </span>
            <h2 className="text-4xl md:text-5xl font-serif text-luxury-dark mb-4">
              Popular Destinations
            </h2>
            <p className="text-gray-500 font-light leading-relaxed">
              Explore our handpicked selection of the world's most breathtaking locations, from serene islands to vibrant cultural hubs.
            </p>
          </div>
          <button className="text-sm font-semibold uppercase tracking-widest text-luxury-dark border-b-2 border-luxury-gold pb-1 hover:text-luxury-gold transition-colors">
            View All
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {DESTINATIONS.map((dest, index) => (
            <motion.div
              key={dest.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="relative aspect-[3/4] overflow-hidden rounded-2xl mb-4 luxury-shadow">
                <img
                  src={dest.image}
                  alt={dest.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-6 left-6 right-6 text-white translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <p className="text-xs uppercase tracking-widest mb-1 opacity-80">{dest.category}</p>
                  <h3 className="text-xl font-serif">{dest.name}</h3>
                </div>
              </div>
              <div className="flex items-center gap-1 text-gray-400 mb-1">
                <MapPin className="w-3 h-3" />
                <span className="text-xs uppercase tracking-wider">{dest.country}</span>
              </div>
              <h3 className="text-lg font-serif text-luxury-dark group-hover:text-luxury-gold transition-colors">
                {dest.name}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
