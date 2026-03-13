import React from 'react';
import { motion } from 'motion/react';
import { PACKAGES } from '../constants';
import { Star, Clock, Users } from 'lucide-react';

export default function Packages() {
  return (
    <section id="packages" className="py-24 px-6 bg-luxury-cream">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-luxury-gold font-medium tracking-widest uppercase text-xs mb-3 block">
            Exclusive Offers
          </span>
          <h2 className="text-4xl md:text-5xl font-serif text-luxury-dark mb-4">
            Tour Packages
          </h2>
          <div className="w-24 h-1 bg-luxury-gold mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {PACKAGES.map((pkg, index) => (
            <motion.div
              key={pkg.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-3xl overflow-hidden luxury-shadow group"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={pkg.image}
                  alt={pkg.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 left-4 flex gap-2">
                  {pkg.tags.map(tag => (
                    <span key={tag} className="bg-white/90 backdrop-blur-sm text-luxury-dark text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="absolute bottom-4 right-4 bg-luxury-gold text-white px-4 py-1 rounded-full text-sm font-bold">
                  ${pkg.price}
                </div>
              </div>

              <div className="p-8">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-1 text-yellow-500">
                    <Star className="w-4 h-4 fill-current" />
                    <span className="text-sm font-bold text-luxury-dark">{pkg.rating}</span>
                  </div>
                  <div className="flex items-center gap-1 text-gray-400">
                    <Clock className="w-4 h-4" />
                    <span className="text-xs uppercase tracking-wider">{pkg.duration}</span>
                  </div>
                </div>
                <h3 className="text-2xl font-serif text-luxury-dark mb-4 group-hover:text-luxury-gold transition-colors">
                  {pkg.title}
                </h3>
                <p className="text-gray-500 text-sm font-light mb-6 line-clamp-2">
                  Experience the ultimate {pkg.location} getaway with our meticulously planned luxury package.
                </p>
                <div className="flex items-center justify-between pt-6 border-t border-gray-100">
                  <div className="flex items-center gap-2 text-gray-400">
                    <Users className="w-4 h-4" />
                    <span className="text-xs uppercase tracking-wider">2 Persons</span>
                  </div>
                  <button className="text-sm font-bold uppercase tracking-widest text-luxury-gold hover:text-luxury-dark transition-colors">
                    Details
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
