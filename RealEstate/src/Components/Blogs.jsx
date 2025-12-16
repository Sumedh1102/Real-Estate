import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';

const BlogsSection = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  const blogs = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&h=600&fit=crop",
      date: "DEC 5, 2024",
      category: "GUIDE",
      title: "First-time homebuyer's guide — everything you need to know before...",
      author: "JAMES MILLER",
      authorAvatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=James",
      featured: false
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&h=600&fit=crop",
      date: "DEC 16, 2024",
      category: "GUIDE",
      title: "How to rent out your property safely and successfully — a complete owner's guide",
      author: "JAMES MILLER",
      authorAvatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=James",
      featured: true
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=600&fit=crop",
      date: "JUL 5, 2024",
      category: "NEWS",
      title: "Real estate trends 2025 — what's shaping the property market this year",
      author: "JAMES MILLER",
      authorAvatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=James",
      featured: false
    }
  ];

  return (
    <section className="w-full bg-[#F5F1E9] py-24 px-6">
      <div className="max-w-[1350px] mx-auto">
        {/* Section Header */}
          <div className="border border-black/10 mb-3"></div>
          <div className="mb-10">
            <div className="flex items-center gap-2 mb-4">
              <span className="w-3 h-3 rounded-sm bg-[#1a1a1a] mb-16" />
              <span className="text-[11px] uppercase tracking-widest text-[#1a1a1a] font-medium pb-16">Blogs</span>
            <h2 className="text-3xl md:text-[48px] font-medium text-[#1a1a1a] leading-tight tracking-tight translate ml-32">
              News, stories, and inspiration
              <br />
              for better living every day
            </h2>
            </div>
          </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 mb-12">
          {blogs.map((blog) => (
            <div
              key={blog.id}
              className="group cursor-pointer"
              onMouseEnter={() => setHoveredCard(blog.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div 
                className="relative overflow-hidden rounded-lg mb-5 transition-all duration-500"
              >
                <div className="aspect-[16/10] overflow-hidden">
                  <img 
                    src={blog.image}
                    alt={blog.title}
                    className="w-full h-full object-cover transition-transform duration-700"
                    style={{
                      transform: hoveredCard === blog.id ? 'scale(1.08)' : 'scale(1)'
                    }}
                  />
                </div>
              </div>

              {/* Blog Meta */}
              <div className="mb-3 flex items-center gap-2">
                <span className="text-[12px] font-medium text-black uppercase">
                  {blog.date}
                </span>
                <span className="text-gray-400">•</span>
                <span className="text-[12px] font-normal text-black uppercase">
                  {blog.category}
                </span>
              </div>

              {/* Blog Title */}
              <h3 className="text-lg font-medium mb-5 text-gray-900 line-clamp-2 w-80">
                {blog.title}
              </h3>

              {/* Author Badge */}
              <div className="flex items-center gap-2">
                <img 
                  src={blog.authorAvatar}
                  alt={blog.author}
                  className="w-5 h-5 rounded-md bg-black"
                />
                <span className="text-xs font-medium text-gray-700 uppercase">
                  {blog.author}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA Button */}
        <div className="flex justify-center mt-16">
          <button 
            className="group bg-black text-white px-6 py-4 rounded-xl font-medium text-sm tracking-wide flex items-center gap-3 transition-all duration-300 hover:scale-105 hover:shadow-2xl"
          >
            READ ALL BLOGS
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </button>
        </div>
      </div>
    </section>
  );
};


export default BlogsSection;