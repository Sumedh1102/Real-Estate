export default function RealEstateSidekick() {
  const columns = [
    {
      title: "Verified listings you can trust",
      items: [
        "Every property checked for accuracy",
        "No fake or outdated information",
        "Transparent details, zero surprises"
      ]
    },
    {
      title: "Local experts, real guidance",
      items: [
        "Agents who know the neighborhoods",
        "Tips on schools commutes ",
        "Honest advice tailored to you"
      ]
    },
    {
      title: "Stress-free buying & selling",
      items: [
        "We manage paperwork",
        "Simple, step-by-step support",
        "Smooth process from start to finish"
      ]
    },
    {
      title: "Fast tours & easy contact",
      items: [
        "Schedule viewings in one click",
        "Connect via phone WhatsApp",
        "Quick response from our team"
      ]
    }
  ];

  return (
    <section className="w-full bg-[#F5F1E9] py-24 px-6">
      <div className="max-w-[1400px] mx-auto">
        {/* Section Header */}
          <div className="border border-black/10 mb-3"></div>
          <div className="mb-20">
            <div className="flex items-center gap-2 mb-4">
              <span className="w-3 h-3 rounded-sm bg-[#1a1a1a] mb-16" />
              <span className="text-[11px] uppercase tracking-widest text-[#1a1a1a] font-medium pb-16">Our Uniqueness</span>
            <h2 className="text-3xl md:text-[48px] font-medium text-[#1a1a1a] leading-tight tracking-tight translate ml-32">
             Why we’re not just another agency
              <br />
              — we’re your real estate sidekick
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
             {/* Start Divider (only for first column) */}
              {colIndex === 0 && (
                <div className="hidden lg:block absolute top-0 -left-7 w-px h-full bg-black" />
              )}
              
              {/* Middle Divider (your existing logic – unchanged) */}
              {colIndex < columns.length - 1 && (
                <div className="hidden lg:block absolute top-0 -right-7 w-px h-full bg-black" />
              )}
              
              {/* End Divider (only for last column) */}
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