import React from 'react';
import { motion } from 'motion/react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Destinations from './components/Destinations';
import Packages from './components/Packages';
import Testimonials from './components/Testimonials';
import BookingForm from './components/BookingForm';
import Footer from './components/Footer';

export default function App() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen"
    >
      <Navbar />
      
      <main>
        <Hero />
        
        <Destinations />
        
        {/* About Section / Brand Story */}
        <section id="about" className="py-24 px-6 bg-white overflow-hidden">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="aspect-square rounded-[3rem] overflow-hidden luxury-shadow">
                  <img
                    src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=800&q=80"
                    alt="Travel Lifestyle"
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="absolute -bottom-10 -right-10 w-64 h-64 rounded-[2rem] overflow-hidden border-8 border-white luxury-shadow hidden md:block">
                  <img
                    src="https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=400&q=80"
                    alt="Scenic View"
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <span className="text-luxury-gold font-medium tracking-widest uppercase text-xs mb-3 block">
                  Our Story
                </span>
                <h2 className="text-4xl md:text-5xl font-serif text-luxury-dark mb-6 leading-tight">
                  Crafting Memories That <br />
                  <span className="italic">Last a Lifetime</span>
                </h2>
                <p className="text-gray-500 font-light leading-relaxed mb-6">
                  At WanderNest, we believe that travel is more than just visiting a place—it's about the stories you bring back and the person you become along the way.
                </p>
                <p className="text-gray-500 font-light leading-relaxed mb-8">
                  Our team of dedicated travel experts works tirelessly to curate exclusive experiences that go beyond the ordinary. We handle every detail, so you can focus on what truly matters: the journey.
                </p>
                
                <div className="grid grid-cols-2 gap-8 mb-10">
                  <div>
                    <h4 className="text-3xl font-serif text-luxury-gold mb-1">12+</h4>
                    <p className="text-[10px] uppercase tracking-widest font-bold text-gray-400">Years Experience</p>
                  </div>
                  <div>
                    <h4 className="text-3xl font-serif text-luxury-gold mb-1">500+</h4>
                    <p className="text-[10px] uppercase tracking-widest font-bold text-gray-400">Destinations</p>
                  </div>
                </div>
                
                <button className="bg-luxury-dark text-white px-8 py-4 rounded-full text-sm font-semibold uppercase tracking-widest hover:bg-luxury-gold transition-all duration-300">
                  Learn More
                </button>
              </motion.div>
            </div>
          </div>
        </section>

        <Packages />
        
        <Testimonials />
        
        <BookingForm />
      </main>

      <Footer />
    </motion.div>
  );
}
