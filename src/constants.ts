import { Destination, Package, Testimonial } from './types';

export const DESTINATIONS: Destination[] = [
  {
    id: '1',
    name: 'Santorini',
    country: 'Greece',
    image: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=800&q=80',
    description: 'Iconic white-washed buildings overlooking the azure Aegean Sea.',
    category: 'Beach'
  },
  {
    id: '2',
    name: 'Kyoto',
    country: 'Japan',
    image: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=800&q=80',
    description: 'Serene temples and traditional tea houses amidst cherry blossoms.',
    category: 'Cultural'
  },
  {
    id: '3',
    name: 'Swiss Alps',
    country: 'Switzerland',
    image: 'https://images.unsplash.com/photo-1531310197839-ccf54634509e?auto=format&fit=crop&w=800&q=80',
    description: 'Majestic snow-capped peaks and pristine alpine meadows.',
    category: 'Mountain'
  },
  {
    id: '4',
    name: 'Amalfi Coast',
    country: 'Italy',
    image: 'https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=800&q=80',
    description: 'Dramatic cliffs and colorful villages perched above the sea.',
    category: 'Beach'
  }
];

export const PACKAGES: Package[] = [
  {
    id: '1',
    title: 'Luxury Maldives Escape',
    location: 'Maldives',
    duration: '7 Days, 6 Nights',
    price: 2499,
    image: 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&w=800&q=80',
    rating: 4.9,
    tags: ['Luxury', 'Beach', 'Honeymoon']
  },
  {
    id: '2',
    title: 'Swiss Alpine Adventure',
    location: 'Zermatt, Switzerland',
    duration: '5 Days, 4 Nights',
    price: 1850,
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=800&q=80',
    rating: 4.8,
    tags: ['Adventure', 'Mountain', 'Skiing']
  },
  {
    id: '3',
    title: 'Cultural Wonders of Kyoto',
    location: 'Kyoto, Japan',
    duration: '6 Days, 5 Nights',
    price: 1600,
    image: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=800&q=80',
    rating: 4.7,
    tags: ['Culture', 'City', 'History']
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Sarah Jenkins',
    role: 'Luxury Traveler',
    content: 'WanderNest curated the most incredible trip to Greece for us. Every detail was handled with such care and professionalism.',
    avatar: 'https://i.pravatar.cc/150?u=sarah'
  },
  {
    id: '2',
    name: 'Marcus Thorne',
    role: 'Adventure Enthusiast',
    content: 'The Swiss Alps package was beyond my expectations. The guides were knowledgeable and the accommodations were top-notch.',
    avatar: 'https://i.pravatar.cc/150?u=marcus'
  },
  {
    id: '3',
    name: 'Elena Rodriguez',
    role: 'Cultural Explorer',
    content: 'Japan has always been on my bucket list, and WanderNest made it a reality with a perfectly balanced itinerary.',
    avatar: 'https://i.pravatar.cc/150?u=elena'
  }
];
