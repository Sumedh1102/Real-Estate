import React from "react";

const AgencyComparison = () => {
  const otherAgencies = [
    "Pushy sales approach",
    "Generic listings, often outdated",
    "Complicated process full of paperwork",
    "Hard to reach agents",
    "One-size-fits-all service",
    "Focus only on closing deals",
    "Limited area knowledge",
    "Confusing websites and search tools",
  ];

  const ourAgency = [
    "Friendly guidance with no pressure",
    "Verified listings updated daily",
    "Step-by-step support, we handle all",
    "Easy contact anytime",
    "Personalized advice for your needs",
    "Focus on building relationships",
    "Local experts who know inside-out",
    "Simple and fast property search",
  ];

  return (
    <div className="w-full min-h-screen relative flex items-center justify-center py-6 px-4 sm:px-6">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://i.postimg.cc/jjRJbLhJ/Chat-GPT-Image-Dec-13-2025-05-07-15-PM.png')",
        }}
      />

      {/* Main Comparison Card */}
      <div className="relative w-full max-w-5xl rounded-xl p-2 bg-white/50 backdrop-blur-xl border border-white/20 shadow-xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 rounded-xl overflow-hidden">
          
          {/* LEFT COLUMN */}
          <div className="bg-white/5 p-4 sm:p-6 lg:p-8">
            <h2 className="text-2xl sm:text-3xl font-normal text-center text-gray-900 mb-5">
              Other agencies
            </h2>

            <div className="space-y-0.5">
              {otherAgencies.map((item, index) => (
                <div key={index}>
                  <div className="flex items-start gap-3 py-2 rounded-md hover:bg-black/5 transition">
                    <div className="w-4 h-4 bg-black rounded-sm flex items-center justify-center mt-1">
                      <svg
                        className="w-3 h-3 text-white"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="3"
                      >
                        <path d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </div>

                    <p className="text-gray-800 text-base leading-snug">
                      {item}
                    </p>
                  </div>

                  {index < otherAgencies.length - 1 && (
                    <div className="h-px bg-black" />
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT COLUMN */}
          <div className="bg-black p-4 sm:p-6 lg:p-8">
            <h2 className="text-2xl sm:text-3xl font-normal text-center text-white mb-5">
              Our agency
            </h2>

            <div className="space-y-0.5">
              {ourAgency.map((item, index) => (
                <div key={index}>
                  <div className="flex items-start gap-3 py-2 rounded-md hover:bg-white/10 transition">
                    <div className="w-4 h-4 bg-white rounded-sm flex items-center justify-center mt-1">
                      <svg
                        className="w-3 h-3 text-black"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="3"
                      >
                        <path d="M5 13l4 4L19 7" />
                      </svg>
                    </div>

                    <p className="text-white text-base leading-snug">
                      {item}
                    </p>
                  </div>

                  {index < ourAgency.length - 1 && (
                    <div className="h-px bg-white" />
                  )}
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default AgencyComparison;
