import React, { useState, useEffect, useRef, useCallback } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    type: 'image',
    quote: '"They understood exactly what I was looking for."',
    name: 'Rohit Sharma',
    location: 'HOME BUYER, NALASOPARA EAST',
    image: 'https://images.unsplash.com/photo-1558159065-6c3f0d9d1c05?w=800&h=900&fit=crop',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop'
  },
  {
    id: 2,
    type: 'text',
    quote: '"Buying my first home felt easy and stress-free."',
    body: '"As a first-time homebuyer, I had many doubts about pricing, documentation, and the location. The team patiently explained everything, showed me genuine options in Nalasopara East, and never pressured me to decide. I felt confident at every step."',
    name: 'Anjali Deshmukh',
    location: 'FIRST-TIME BUYER, PALGHAR',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop'
  },
  {
    id: 3,
    type: 'image',
    quote: '"Transparent process and honest advice throughout."',
    name: 'Amit Verma',
    location: 'PROPERTY INVESTOR, MUMBAI',
    image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&h=900&fit=crop',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop'
  },
  {
    id: 4,
    type: 'text',
    quote: '"Everything was handled professionally."',
    body: '"From site visits to registration, the entire process was smooth and well-managed. The team kept me informed, handled the paperwork, and ensured there were no hidden surprises. I truly appreciated their professionalism."',
    name: 'Suresh Patil',
    location: 'HOME OWNER, VASAI',
    avatar: 'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=100&h=100&fit=crop'
  },
  {
    id: 5,
    type: 'image',
    quote: '"Best decision for my family’s future."',
    name: 'Neha Kulkarni',
    location: 'HOME BUYER, NALASOPARA',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=800&h=900&fit=crop',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop'
  },
  {
    id: 6,
    type: 'text',
    quote: '"Highly recommend for anyone buying property."',
    body: '"They didn’t just show properties—they helped me understand the locality, future growth, and resale value. Their local market knowledge of Palghar district made a huge difference in my decision."',
    name: 'Kunal Mehta',
    location: 'REAL ESTATE INVESTOR, PALGHAR',
    avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop'
  }
];

const TestimonialsCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const containerRef = useRef(null);
  const autoPlayRef = useRef(null);

  const AUTOPLAY_INTERVAL = 4500;

  const startAutoPlay = useCallback(() => {
    if (autoPlayRef.current) clearInterval(autoPlayRef.current);
    autoPlayRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, AUTOPLAY_INTERVAL);
  }, []);

  const stopAutoPlay = () => {
    if (autoPlayRef.current) clearInterval(autoPlayRef.current);
  };

  useEffect(() => {
    if (!isDragging && !isHovered) startAutoPlay();
    return () => stopAutoPlay();
  }, [isDragging, isHovered, startAutoPlay]);

  useEffect(() => {
    if (containerRef.current && !isDragging) {
      const container = containerRef.current;
      const cardWidth = container.offsetWidth * 0.85;
      const gap = 24;
      container.scrollTo({
        left: currentIndex * (cardWidth + gap),
        behavior: 'smooth',
      });
    }
  }, [currentIndex, isDragging]);

  const ImageCard = ({ testimonial }) => (
    <div className="relative flex-shrink-0 w-[85vw] md:w-[42vw] lg:w-[25vw] h-[475px] rounded-xl overflow-hidden">
      <img src={testimonial.image} alt={testimonial.name} className="w-full h-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
        <p className="text-xl md:text-lg font-light mb-6">{testimonial.quote}</p>
        <p className="font-medium">{testimonial.name}</p>
        <p className="text-xs text-white/80">{testimonial.location}</p>
      </div>
    </div>
  );

  const TextCard = ({ testimonial }) => (
    <div className="flex-shrink-0 w-[85vw] md:w-[42vw] lg:w-[25vw] h-[475px] bg-[#FFFBF5] rounded-2xl p-5 flex flex-col justify-between">
      <div>
        <p className="text-sm md:text-lg font-medium mb-6 bg-black/10 w-64">{testimonial.quote}</p>
        <p className="text-sm text-gray-700 leading-relaxed">{testimonial.body}</p>
      </div>
      <div className="flex items-center gap-3">
        <img src={testimonial.avatar} alt={testimonial.name} className="w-12 h-12 rounded-lg" />
        <div>
          <p className="font-medium">{testimonial.name}</p>
          <p className="text-xs text-gray-600">{testimonial.location}</p>
        </div>
      </div>
    </div>
  );

  return (
    <section className="bg-[#F5F1E9] py-20 md:py-28 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="border-t border-black/10 mb-8"></div>
        <h2 className="text-3xl md:text-4xl lg:text-[48px] font-medium text-black mb-10">
          What our clients say
          <br />—real experiences, real trust
        </h2>

        <div ref={containerRef} className="flex gap-6 overflow-x-auto scrollbar-hide">
          {testimonials.map((t) =>
            t.type === 'image' ? (
              <ImageCard key={t.id} testimonial={t} />
            ) : (
              <TextCard key={t.id} testimonial={t} />
            )
          )}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsCarousel;
