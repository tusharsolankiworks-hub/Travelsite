export interface Destination {
  id: string;
  name: string;
  country: string;
  image: string;
  description: string;
  category: 'Beach' | 'Mountain' | 'City' | 'Cultural';
}

export interface Package {
  id: string;
  title: string;
  location: string;
  duration: string;
  price: number;
  image: string;
  rating: number;
  tags: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  avatar: string;
}
