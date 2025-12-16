import { useState } from "react"

const services = [
  {
    title: "Buy a property",
    description:
      "Find your dream home with local experts who understand every street, price trend, and hidden gem. We make buying smooth, transparent, and exciting.",
  },
  {
    title: "Sell your property",
    description:
      "From pricing to closing, we handle every detail to help you sell faster and for the best value — with zero guesswork.",
  },
  {
    title: "Rent & lease",
    description:
      "Whether you're finding a place to live or renting out your property, we make leasing easy, safe, and stress-free.",
  },
  {
    title: "Property management",
    description:
      "We take care of your property like it's our own — ensuring steady returns, reliable tenants, and peace of mind all year round.",
  },
  {
    title: "Property management",
    description:
      "We take care of your property like it's our own — ensuring steady returns, reliable tenants, and peace of mind all year round.",
  },
  {
    title: "Property management",
    description:
      "We take care of your property like it's our own — ensuring steady returns, reliable tenants, and peace of mind all year round.",
  },
  {
    title: "Property management",
    description:
      "We take care of your property like it's our own — ensuring steady returns, reliable tenants, and peace of mind all year round.",
  },
]

export default function ServicesSection() {
  const [openIndex, setOpenIndex] = useState(null)

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="w-full bg-[#F5F1E9] py-20 md:py-28">
      <div className="mx-auto max-w-[1100px] px-32">
        {/* Header */}
        <div className="mb-12 flex flex-col items-center text-center">
          <div className="mb-6 flex items-center gap-2">
            <span className="h-3 w-3 rounded-[4px] bg-black" />
            <span className="text-base font-medium text-black">SERVICES</span>
          </div>
          <h2 className="max-w-[700px] text-4xl font-medium leading-tight tracking-tight text-black md:text-5xl">
            <span className="text-balance">
              Service, support, and strategy — made simple from start to finish.
            </span>
          </h2>
        </div>

        {/* Services Card */}
        <div className="rounded-xl bg-white px-10">
          {services.map((service, index) => {
            const isOpen = openIndex === index

            return (
              <div key={service.title}>
                <div
                  onClick={() => handleToggle(index)}
                  className={`
                    group flex cursor-pointer items-start gap-5 px-3 py-9 transition-colors duration-300 ease-in-out
                  `}
                >
                  {/* Plus Icon */}
                  <div
                    className={`
                      flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[#d0cdc4]
                      transition-all duration-300 ease-in-out  group-hover:bg-[#F5F1E9]/50
                      ${isOpen ? "scale-105 bg-[#F5F1E9]/50" : ""}
                    `}
                  >
                    <svg
                      className={`
                        h-4 w-4 text-[#a0a0a0] transition-transform duration-300 ease-out
                        ${isOpen ? "rotate-45" : ""}
                      `}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4v16m8-8H4" />
                    </svg>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-black md:text-xl">{service.title}</h3>

                    <div
                      className={`
                        grid transition-all duration-350 ease-out
                        ${isOpen ? "mt-3 grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}
                      `}
                    >
                      <div className="overflow-hidden">
                        <p className="max-w-[500px] text-sm leading-relaxed text-[#555] md:text-base">
                          {service.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Divider */}
                {index < services.length - 1 && (
                  <div className=" border-t border-[#e2e0d6] " />
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
