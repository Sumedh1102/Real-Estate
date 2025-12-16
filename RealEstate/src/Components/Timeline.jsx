import React, { useState, useEffect, useRef } from "react";

const ProcessTimeline = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [visibleSteps, setVisibleSteps] = useState([]);
  const timelineRef = useRef(null);
  const stepRefs = useRef([]);

  const steps = [
    {
      id: "01",
      title: "Search & explore",
      description:
        "Browse verified property listings by price, location, and lifestyle. Filter easily with smart tools and discover homes that fit your vibe. Start your journey from anywhere, right on your screen.",
      image:
        "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=500&fit=crop",
      align: "right",
    },
    {
      id: "02",
      title: "Book a tour",
      description:
        "Pick your favorite properties and schedule tours online in seconds. Our team confirms quickly and arranges convenient times for you. See homes in person or through guided virtual tours.",
      image:
        "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=500&fit=crop&sat=-100",
      align: "left",
    },
    {
      id: "03",
      title: "Make your move",
      description:
        "Get expert help with offers, negotiations, and all the paperwork. We guide you step by step, keeping everything clear and stress-free. From first offer to final signature, we're with you all the way.",
      image:
        "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&h=500&fit=crop",
      align: "right",
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (!timelineRef.current) return;

      const timelineRect = timelineRef.current.getBoundingClientRect();
      const viewportHeight = window.innerHeight;

      const timelineStart = timelineRect.top;
      const timelineHeight = timelineRect.height;

      const scrollStart = viewportHeight * 0.2;
      const scrollEnd = viewportHeight * 0.8;

      let progress = 0;
      if (timelineStart < scrollStart) {
        const scrolled = scrollStart - timelineStart;
        const totalScrollable = timelineHeight + scrollStart - scrollEnd;
        progress = Math.min(scrolled / totalScrollable, 1);
      }

      setScrollProgress(progress);

      const visible = stepRefs.current.map((ref) => {
        if (!ref) return false;
        const rect = ref.getBoundingClientRect();
        return rect.top < viewportHeight * 0.75;
      });

      setVisibleSteps(visible);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#F5F1E9] pt-24 px-6">
      <div className="max-w-[1350px] mx-auto">
        {/* Header */}
        <div className="border border-black/10 mb-3" />
        <div className="mb-12">
          <div className="flex items-center gap-2 mb-2 justify-center">
            <span className="w-3 h-3 rounded-sm bg-[#1a1a1a]" />
            <span className="text-[11px] uppercase tracking-widest text-[#1a1a1a] font-medium">
              Process
            </span>
          </div>

          <h2 className="text-3xl md:text-[48px] text-center font-medium text-[#1a1a1a] leading-tight tracking-tight">
            Starting with browsing and
            <br />
            ending with move-in day
          </h2>
        </div>

        {/* Timeline */}
        <div ref={timelineRef} className="relative mt-16">
          {/* Background Line */}
          <div className="absolute left-1/2 top-8 bottom-0 w-px bg-[#F5F1E9] -translate-x-1/2 hidden md:block" />

          {/* Progress Line */}
          <div
            className="absolute left-1/2 top-8 w-px bg-black -translate-x-1/2 hidden md:block transition-all duration-300 ease-out"
            style={{ height: `${scrollProgress * 100}%` }}
          />

          {/* Steps */}
          <div className="space-y-36">
            {steps.map((step, index) => (
              <div
                key={step.id}
                ref={(el) => (stepRefs.current[index] = el)}
                className="relative"
              >
                {/* Timeline Node */}
                <div className="absolute left-1/2 top-0 -translate-x-1/2 z-10 hidden md:block">
                  <div
                    className={`w-16 h-16 rounded-2xl flex items-center justify-center transition-all duration-500 ${
                      visibleSteps[index]
                        ? "bg-black scale-100 opacity-100"
                        : "bg-gray-300 scale-75 opacity-50"
                    }`}
                  >
                    <span
                      className={`font-medium text-sm ${
                        visibleSteps[index]
                          ? "text-white"
                          : "text-gray-500"
                      }`}
                    >
                      {step.id}
                    </span>
                  </div>
                </div>

                {/* Content Grid */}
                <div
                  className={`grid md:grid-cols-2 gap-8 md:gap-32 items-center ${
                    step.align === "right" ? "" : "md:grid-flow-dense"
                  }`}
                >
                  {/* Image */}
                  <div
                    className={`${
                      step.align === "right"
                        ? "md:col-start-1"
                        : "md:col-start-2"
                    } transition-all duration-700 ${
                      visibleSteps[index]
                        ? "opacity-100 translate-y-6"
                        : "opacity-0 translate-y-20"
                    }`}
                  >
                    <img
                      src={step.image}
                      alt={step.title}
                      className="w-full h-80 object-cover border-8 border-white rounded-2xl"
                    />
                  </div>

                  {/* Content */}
                  <div
                    className={`${
                      step.align === "right"
                        ? "md:col-start-2"
                        : "md:col-start-1"
                    } transition-all duration-700 ${
                      visibleSteps[index]
                        ? "opacity-100 -translate-y-10"
                        : "opacity-0 translate-y-12"
                    }`}
                  >
                    <div className="bg-white rounded-xl p-6">
                      <div className="inline-block mb-3">
                        <span className="bg-black text-white text-xs font-medium px-4 py-2 rounded-full uppercase tracking-wider">
                          Step {step.id}
                        </span>
                      </div>

                      <h3 className="text-3xl font-bold mb-4 text-gray-900">
                        {step.title}
                      </h3>

                      <p className="text-gray-600 leading-relaxed text-base">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Mobile Node */}
                <div className="md:hidden mt-8 flex justify-center">
                  <div
                    className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                      visibleSteps[index] ? "bg-black" : "bg-gray-300"
                    }`}
                  >
                    <span className="text-sm font-medium text-white">
                      {step.id}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProcessTimeline;
