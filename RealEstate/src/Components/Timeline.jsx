import React, { useState, useEffect, useRef } from "react";

const ProcessTimeline = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [visibleSteps, setVisibleSteps] = useState([]);
  const timelineRef = useRef(null);
  const stepRefs = useRef([]);

  const steps = [
    {
      id: "01",
      title: "Explore verified properties",
      description:
        "Browse verified residential and investment properties in Nalasopara East and nearby areas. Filter by budget, location, and property type to find homes that truly match your needs and future plans.",
      image:
        "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=500&fit=crop",
      align: "right",
    },
    {
      id: "02",
      title: "Schedule site visits",
      description:
        "Shortlist your preferred properties and book site visits with ease. Our team coordinates quickly and arranges convenient timings, whether you prefer physical visits or guided walkthroughs.",
      image:
        "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=500&fit=crop&sat=-100",
      align: "left",
    },
    {
      id: "03",
      title: "Close with confidence",
      description:
        "From price negotiations to documentation and registration, we handle the entire process for you. Enjoy clear guidance, legal transparency, and stress-free support until you receive possession.",
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
    <div className="min-h-screen bg-[#F5F1E9] pt-12 sm:pt-16 md:pt-20 lg:pt-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-[1350px] mx-auto">
        {/* Header */}
        <div className="border-t border-black/10 mb-6 sm:mb-8"></div>
        
        <div className="mb-8 sm:mb-10 md:mb-12">
          <div className="flex flex-col sm:flex-row sm:items-start gap-4 sm:gap-6">
            {/* Label */}
            <div className="flex items-center gap-2 sm:pt-1">
              <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-sm bg-[#1a1a1a]" />
              <span className="text-[10px] sm:text-[11px] uppercase tracking-widest text-[#1a1a1a] font-medium">
                Our Process
              </span>
            </div>
            
            {/* Heading */}
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[48px] font-medium text-[#1a1a1a] leading-tight tracking-tight md:translate-x-20 lg:translate-x-40">
              A simple, transparent way
              <br />
              —to buy or invest in property
            </h2>
          </div>
        </div>

        {/* Timeline */}
        <div ref={timelineRef} className="relative mt-8 sm:mt-12 md:mt-16">
          {/* Background Line */}
          <div className="absolute left-1/2 top-8 bottom-0 w-px bg-[#F5F1E9] -translate-x-1/2 hidden md:block" />

          {/* Progress Line */}
          <div
            className="absolute left-1/2 top-8 w-px bg-black -translate-x-1/2 hidden md:block transition-all duration-300 ease-out"
            style={{ height: `${scrollProgress * 100}%` }}
          />

          {/* Steps */}
          <div className="space-y-16 sm:space-y-24 md:space-y-32 lg:space-y-36">
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
                  className={`grid md:grid-cols-2 gap-6 sm:gap-8 md:gap-16 lg:gap-24 xl:gap-32 items-center ${
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
                        ? "opacity-100 translate-y-0 sm:translate-y-6"
                        : "opacity-0 translate-y-10 sm:translate-y-20"
                    }`}
                  >
                    <img
                      src={step.image}
                      alt={step.title}
                      className="w-full h-48 sm:h-64 md:h-72 lg:h-80 object-cover border-4 sm:border-6 md:border-8 border-white rounded-xl sm:rounded-2xl"
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
                        ? "opacity-100 translate-y-0 md:-translate-y-10"
                        : "opacity-0 translate-y-8 md:translate-y-12"
                    }`}
                  >
                    <div className="bg-white rounded-lg sm:rounded-xl p-5 sm:p-6 md:p-7 lg:p-8">
                      <div className="inline-block mb-3">
                        <span className="bg-black text-white text-xs font-medium px-4 py-2 rounded-full uppercase tracking-wider">
                          Step {step.id}
                        </span>
                      </div>

                      <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 sm:mb-4 text-gray-900">
                        {step.title}
                      </h3>

                      <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Mobile Node */}
                <div className="md:hidden mt-6 sm:mt-8 flex justify-center">
                  <div
                    className={`w-10 h-10 sm:w-12 sm:h-12 rounded-lg flex items-center justify-center transition-all duration-500 ${
                      visibleSteps[index]
                        ? "bg-black scale-100"
                        : "bg-gray-300 scale-90"
                    }`}
                  >
                    <span className="text-sm sm:text-base font-medium text-white">
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
