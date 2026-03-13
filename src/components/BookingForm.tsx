import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Send, Calendar, MapPin, Users } from 'lucide-react';

export default function BookingForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    destination: '',
    date: '',
    guests: '2',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Booking Request:', formData);
    alert('Thank you! Your travel request has been received. We will contact you shortly.');
  };

  return (
    <section id="contact" className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-luxury-gold font-medium tracking-widest uppercase text-xs mb-3 block">
              Plan Your Journey
            </span>
            <h2 className="text-4xl md:text-6xl font-serif text-luxury-dark mb-6 leading-tight">
              Ready to Start Your <br />
              <span className="italic">Dream Vacation?</span>
            </h2>
            <p className="text-gray-500 font-light leading-relaxed mb-10 max-w-md">
              Fill out the form and our travel experts will curate a personalized itinerary tailored to your preferences and desires.
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-luxury-cream flex items-center justify-center text-luxury-gold">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-serif text-lg text-luxury-dark">Visit Us</h4>
                  <p className="text-sm text-gray-400">123 Luxury Lane, Travel City, TC 90210</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-luxury-cream flex items-center justify-center text-luxury-gold">
                  <Calendar className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-serif text-lg text-luxury-dark">Working Hours</h4>
                  <p className="text-sm text-gray-400">Mon - Sat: 09:00 AM - 06:00 PM</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-luxury-cream p-8 md:p-12 rounded-[2rem] luxury-shadow"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest font-bold text-gray-400 ml-1">Full Name</label>
                  <input
                    type="text"
                    required
                    className="w-full bg-white border-none rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-luxury-gold outline-none transition-all"
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest font-bold text-gray-400 ml-1">Email Address</label>
                  <input
                    type="email"
                    required
                    className="w-full bg-white border-none rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-luxury-gold outline-none transition-all"
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest font-bold text-gray-400 ml-1">Destination</label>
                  <div className="relative">
                    <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-300" />
                    <input
                      type="text"
                      className="w-full bg-white border-none rounded-xl pl-12 pr-4 py-3 text-sm focus:ring-2 focus:ring-luxury-gold outline-none transition-all"
                      placeholder="e.g. Santorini"
                      value={formData.destination}
                      onChange={(e) => setFormData({...formData, destination: e.target.value})}
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest font-bold text-gray-400 ml-1">Travel Date</label>
                  <div className="relative">
                    <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-300" />
                    <input
                      type="date"
                      className="w-full bg-white border-none rounded-xl pl-12 pr-4 py-3 text-sm focus:ring-2 focus:ring-luxury-gold outline-none transition-all"
                      value={formData.date}
                      onChange={(e) => setFormData({...formData, date: e.target.value})}
                    />
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest font-bold text-gray-400 ml-1">Number of Guests</label>
                <div className="relative">
                  <Users className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-300" />
                  <select
                    className="w-full bg-white border-none rounded-xl pl-12 pr-4 py-3 text-sm focus:ring-2 focus:ring-luxury-gold outline-none transition-all appearance-none"
                    value={formData.guests}
                    onChange={(e) => setFormData({...formData, guests: e.target.value})}
                  >
                    <option value="1">1 Person</option>
                    <option value="2">2 Persons</option>
                    <option value="3">3 Persons</option>
                    <option value="4+">4+ Persons</option>
                  </select>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest font-bold text-gray-400 ml-1">Message</label>
                <textarea
                  rows={4}
                  className="w-full bg-white border-none rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-luxury-gold outline-none transition-all resize-none"
                  placeholder="Tell us about your dream trip..."
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                />
              </div>

              <button
                type="submit"
                className="w-full bg-luxury-dark text-white py-4 rounded-xl text-sm font-bold uppercase tracking-widest hover:bg-luxury-gold transition-all duration-300 flex items-center justify-center gap-2"
              >
                Send Request
                <Send className="w-4 h-4" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
