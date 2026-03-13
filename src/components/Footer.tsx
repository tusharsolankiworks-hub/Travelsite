import React from 'react';
import { Compass, Instagram, Facebook, Twitter, Youtube } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-luxury-dark text-white pt-24 pb-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <Compass className="w-8 h-8 text-luxury-gold" />
              <span className="text-2xl font-serif font-bold tracking-tight">WanderNest</span>
            </div>
            <p className="text-gray-400 font-light leading-relaxed text-sm">
              Crafting unforgettable luxury travel experiences since 2010. Your journey begins with a single nest.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-luxury-gold hover:border-luxury-gold transition-all">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-luxury-gold hover:border-luxury-gold transition-all">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-luxury-gold hover:border-luxury-gold transition-all">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-luxury-gold hover:border-luxury-gold transition-all">
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-serif text-xl mb-6">Quick Links</h4>
            <ul className="space-y-4 text-sm text-gray-400 font-light">
              <li><a href="#" className="hover:text-luxury-gold transition-colors">Destinations</a></li>
              <li><a href="#" className="hover:text-luxury-gold transition-colors">Tour Packages</a></li>
              <li><a href="#" className="hover:text-luxury-gold transition-colors">Travel Insurance</a></li>
              <li><a href="#" className="hover:text-luxury-gold transition-colors">Privacy Policy</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-xl mb-6">Destinations</h4>
            <ul className="space-y-4 text-sm text-gray-400 font-light">
              <li><a href="#" className="hover:text-luxury-gold transition-colors">Santorini, Greece</a></li>
              <li><a href="#" className="hover:text-luxury-gold transition-colors">Kyoto, Japan</a></li>
              <li><a href="#" className="hover:text-luxury-gold transition-colors">Swiss Alps</a></li>
              <li><a href="#" className="hover:text-luxury-gold transition-colors">Amalfi Coast, Italy</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-xl mb-6">Newsletter</h4>
            <p className="text-sm text-gray-400 font-light mb-6">
              Subscribe to receive travel inspiration and exclusive offers.
            </p>
            <form className="flex gap-2">
              <input
                type="email"
                placeholder="Your email"
                className="bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-sm outline-none focus:border-luxury-gold w-full transition-colors"
              />
              <button className="bg-luxury-gold text-white px-4 py-2 rounded-lg text-sm font-bold uppercase tracking-wider hover:bg-opacity-90 transition-all">
                Join
              </button>
            </form>
          </div>
        </div>

        <div className="pt-12 border-t border-white/10 text-center text-xs text-gray-500 uppercase tracking-[0.2em]">
          &copy; {new Date().getFullYear()} WanderNest Travels. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
