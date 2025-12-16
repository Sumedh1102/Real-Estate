import React, { useState, useEffect, useRef, useCallback } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    type: 'image',
    quote: '"I recommend them to everyone — even my picky cousin."',
    name: 'Mark T',
    location: 'HOME OWNER, CHICAGO',
    image: 'https://images.unsplash.com/photo-1558159065-6c3f0d9d1c05?w=800&h=900&fit=crop',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop'
  },
  {
    id: 2,
    type: 'text',
    quote: '"Found my dream home without losing my sanity!"',
    body: '"I had dealt with agents before who only pushed properties they wanted to sell, not what I needed. This was totally different. They asked the right questions, showed me homes that matched my lifestyle, and never rushed me to decide. By the end, I felt like they knew my taste better than I did."',
    name: 'Malcolm Reeves',
    location: 'MIAMI',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop'
  },
  {
    id: 3,
    type: 'image',
    quote: '"They made me feel like my time actually mattered."',
    name: 'Evander Cruz',
    location: 'DALLAS',
    image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&h=900&fit=crop',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop'
  },
  {
    id: 4,
    type: 'text',
    quote: '"...working with this team changed everything..."',
    body: '"I thought the buying process would be overwhelming, but working with this team changed everything. From the first call, they made me feel like I was in safe hands. They answered all my late-night questions every step, and even reminded me of things I forgot along the way."',
    name: 'Donovan Price',
    location: 'HOME OWNER, NY',
    avatar: 'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=100&h=100&fit=crop'
  },
  {
    id: 5,
    type: 'image',
    quote: '"Within hours, I was looking at my dream home. That kind of service is unmatched."',
    name: 'Sarah Chen',
    location: 'HOME OWNER, SEATTLE',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=800&h=900&fit=crop',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop'
  },
  {
    id: 6,
    type: 'text',
    quote: '"Best decision I ever made!"',
    body: '"They didn\'t just find me a house — they found me a home. Every detail was considered, from the morning light in the kitchen to how quiet the street was at night. I couldn\'t be happier with where I ended up."',
    name: 'James Mitchell',
    location: 'PORTLAND',
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
  const TRANSITION_DURATION = 800;

  // Auto-slide functionality
  const startAutoPlay = useCallback(() => {
    if (autoPlayRef.current) {
      clearInterval(autoPlayRef.current);
    }
    autoPlayRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, AUTOPLAY_INTERVAL);
  }, []);

  const stopAutoPlay = () => {
    if (autoPlayRef.current) {
      clearInterval(autoPlayRef.current);
    }
  };

  // Initialize autoplay
  useEffect(() => {
    if (!isDragging && !isHovered) {
      startAutoPlay();
    }
    return () => stopAutoPlay();
  }, [isDragging, isHovered, startAutoPlay]);

  // Scroll to current index
  useEffect(() => {
    if (containerRef.current && !isDragging) {
      const container = containerRef.current;
      const cardWidth = container.offsetWidth * 0.85;
      const gap = 24;
      const scrollPosition = currentIndex * (cardWidth + gap);
      
      container.scrollTo({
        left: scrollPosition,
        behavior: 'smooth'
      });
    }
  }, [currentIndex, isDragging]);

  // Mouse drag handlers
  const handleMouseDown = (e) => {
    setIsDragging(true);
    stopAutoPlay();
    setStartX(e.pageX - containerRef.current.offsetLeft);
    setScrollLeft(containerRef.current.scrollLeft);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - containerRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    containerRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleMouseUp = () => {
    if (isDragging) {
      setIsDragging(false);
      // Snap to nearest card
      const container = containerRef.current;
      const cardWidth = container.offsetWidth * 0.85;
      const gap = 24;
      const newIndex = Math.round(container.scrollLeft / (cardWidth + gap));
      setCurrentIndex(Math.min(Math.max(0, newIndex), testimonials.length - 1));
      startAutoPlay();
    }
  };

  // Touch handlers
  const handleTouchStart = (e) => {
    setIsDragging(true);
    stopAutoPlay();
    setStartX(e.touches[0].pageX - containerRef.current.offsetLeft);
    setScrollLeft(containerRef.current.scrollLeft);
  };

  const handleTouchMove = (e) => {
    if (!isDragging) return;
    const x = e.touches[0].pageX - containerRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    containerRef.current.scrollLeft = scrollLeft - walk;
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowLeft') {
        stopAutoPlay();
        setCurrentIndex((prev) => Math.max(0, prev - 1));
        setTimeout(startAutoPlay, 2000);
      } else if (e.key === 'ArrowRight') {
        stopAutoPlay();
        setCurrentIndex((prev) => Math.min(testimonials.length - 1, prev + 1));
        setTimeout(startAutoPlay, 2000);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [startAutoPlay]);

  const ImageCard = ({ testimonial }) => (
    <div className="relative flex-shrink-0 w-[85vw] md:w-[42vw] lg:w-[25vw] h-[475px] rounded-xl overflow-hidden group cursor-grab active:cursor-grabbing">
      <img 
        src={testimonial.image} 
        alt={testimonial.name}
        className="w-full h-full object-cover transition-transform duration-700 "
        draggable="false"
      />
      {/* Fade + blur layer */}
<div
  className="absolute bottom-0 left-0 right-0 h-44 backdrop-blur-md"
  style={{
    WebkitMaskImage:
      "linear-gradient(to top, black 0%, black 45%, transparent 100%)",
    maskImage:
      "linear-gradient(to top, black 0%, black 45%, transparent 100%)",
    background: "rgba(0,0,0,0.25)",
  }}
/>

{/* Soft dark gradient for contrast */}
<div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
        <p className="text-xl md:text-lg font-light mb-6 leading-relaxed">
          {testimonial.quote}
        </p>
        <div className="flex items-center gap-3">
          <div>
            <p className="font-medium text-base">{testimonial.name}</p>
            <p className="text-xs text-white/80 tracking-wide">{testimonial.location}</p>
          </div>
        </div>
      </div>
    </div>
  );

  const TextCard = ({ testimonial }) => (
    <div className="flex-shrink-0 w-[85vw] md:w-[42vw] lg:w-[25vw] h-[475px] bg-[#FFFBF5] rounded-2xl p-5 flex flex-col justify-between transition-all duration-500 cursor-grab active:cursor-grabbing">
      <div>
        <p className="text-sm md:text-lg font-medium mb-6 text-gray-900 bg-black/10 w-60">
          {testimonial.quote}
        </p>
        <p className="text-sm leading-relaxed font-medium text-gray-700">
          {testimonial.body}
        </p>
      </div>
      <div className="flex items-center gap-3 mt-6">
        <img 
          src={testimonial.avatar} 
          alt={testimonial.name}
          className="w-12 h-12 rounded-lg object-cover"
          draggable="false"
        />
        <div>
          <p className="font-medium text-base text-gray-900">{testimonial.name}</p>
          <p className="text-xs text-gray-600 tracking-wide">{testimonial.location}</p>
        </div>
      </div>
    </div>
  );

  return (
    <section className="bg-[#F5F1E9] py-20 md:py-28 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        {/* Section Header */}
          <div className="border border-black/10 mb-3"></div>
          <div className="mb-10">
            <div className="flex items-center gap-2 mb-4">
              <span className="w-3 h-3 rounded-sm bg-[#1a1a1a] mb-16" />
              <span className="text-[11px] uppercase tracking-widest text-[#1a1a1a] font-medium pb-16">Reviews</span>
            <h2 className="text-3xl md:text-[40px] font-medium text-[#1a1a1a] leading-tight tracking-tight translate ml-32">
              Stories from people who
              <br />
              found their place with us
            </h2>
            </div>
          </div>

        {/* Carousel */}
        <div 
          className="relative"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div
            ref={containerRef}
            className="flex gap-6 overflow-x-auto scrollbar-hide scroll-smooth"
            style={{ 
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
              WebkitOverflowScrolling: 'touch'
            }}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleMouseUp}
          >
            {testimonials.map((testimonial) => (
              <React.Fragment key={testimonial.id}>
                {testimonial.type === 'image' ? (
                  <ImageCard testimonial={testimonial} />
                ) : (
                  <TextCard testimonial={testimonial} />
                )}
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center gap-2 mt-10" role="tablist">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                stopAutoPlay();
                setCurrentIndex(index);
                setTimeout(startAutoPlay, 2000);
              }}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentIndex 
                  ? 'bg-black w-8' 
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
              aria-label={`Go to slide ${index + 1}`}
              role="tab"
              aria-selected={index === currentIndex}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsCarousel;