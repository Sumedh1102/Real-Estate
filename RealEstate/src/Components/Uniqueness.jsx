export default function RealEstateSidekick() {
  const columns = [
    {
      title: "Verified properties you can trust",
      items: [
        "All listings personally verified by our team",
        "Accurate pricing, location, and project details",
        "No fake listings or misleading information"
      ]
    },
    {
      title: "Local real estate experts in Palghar",
      items: [
        "Deep knowledge of Nalasopara East & nearby areas",
        "Guidance on connectivity, schools, and amenities",
        "Honest advice based on your budget and goals"
      ]
    },
    {
      title: "Stress-free property buying & selling",
      items: [
        "Complete support with paperwork & documentation",
        "Clear, step-by-step guidance throughout the process",
        "Smooth coordination from site visit to registration"
      ]
    },
    {
      title: "Quick site visits & easy communication",
      items: [
        "Fast scheduling for property site visits",
        "Easy contact via phone and WhatsApp",
        "Responsive support from our expert team"
      ]
    }
  ];

  return (
    <section className="w-full bg-[#F5F1E9] py-24 px-6">
      <div className="max-w-[1400px] mx-auto">
        {/* Header */}
        <div className="border-t border-black/10 mb-6 sm:mb-8"></div>
        
        <div className="mb-8 sm:mb-10 md:mb-12">
          <div className="flex flex-col sm:flex-row sm:items-start gap-4 sm:gap-6">
            {/* Label */}
            <div className="flex items-center gap-2 sm:pt-1">
              <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-sm bg-[#1a1a1a]" />
              <span className="text-[10px] sm:text-[11px] uppercase tracking-widest text-[#1a1a1a] font-medium">
                Why Choose Us
              </span>
            </div>
            
            {/* Heading */}
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[48px] font-medium text-[#1a1a1a] leading-tight tracking-tight lg:translate-x-40">
              Trusted real estate guidance
              <br />
              —built around your future
            </h2>
          </div>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-14">
          {columns.map((column, colIndex) => (
            <div 
              key={colIndex}
              className="relative group transition-all duration-200 p-6 -m-6 rounded-lg"
            >
              {/* Start Divider */}
              {colIndex === 0 && (
                <div className="hidden lg:block absolute top-0 -left-7 w-px h-full bg-black" />
              )}
              
              {/* Middle Divider */}
              {colIndex < columns.length - 1 && (
                <div className="hidden lg:block absolute top-0 -right-7 w-px h-full bg-black" />
              )}
              
              {/* End Divider */}
              {colIndex === columns.length - 1 && (
                <div className="hidden lg:block absolute top-0 -right-7 w-px h-full bg-black" />
              )}
              
              {/* Title Pill */}
              <div className="inline-block bg-[#EDE9DF] rounded-md px-2 py-1 mb-20 ml-4 transition-shadow duration-200">
                <h3 className="text-[21px] font-medium text-black leading-snug">
                  {column.title}
                </h3>
              </div>

              {/* Bullet List */}
              <div className="space-y-0">
                {column.items.map((item, itemIndex) => (
                  <div key={itemIndex}>
                    <div className="flex items-start gap-3 py-4 ml-4">
                      <div className="w-2.5 h-2.5 bg-black rounded-[3px] mt-2 flex-shrink-0"></div>
                      <p className="text-base text-gray-800 leading-relaxed">
                        {item}
                      </p>
                    </div>
                    {itemIndex < column.items.length - 1 && (
                      <div className="w-full h-px bg-black ml-3"></div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
