"use client"

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
    <section className="w-full bg-[#F5F1E9] py-12 sm:py-16 md:py-20 lg:py-28">
      <div className="mx-auto max-w-[1100px] px-4 sm:px-6 md:px-8 lg:px-16 xl:px-32">
        {/* Header */}
        <div className="mb-8 flex flex-col items-center text-center sm:mb-10 md:mb-12">
          <div className="mb-4 flex items-center gap-2 md:mb-6">
            <span className="h-3 w-3 rounded-[4px] bg-black" />
            <span className="text-sm font-medium text-black sm:text-base">SERVICES</span>
          </div>
          <h2 className="max-w-[700px] px-4 text-3xl font-medium leading-tight tracking-tight text-black sm:text-4xl md:text-5xl">
            <span className="text-balance">Service, support, and strategy — made simple from start to finish.</span>
          </h2>
        </div>

        {/* Services Card */}
        <div className="rounded-xl bg-white px-4 sm:px-6 md:px-8 lg:px-10">
          {services.map((service, index) => {
            const isOpen = openIndex === index

            return (
              <div key={service.title}>
                <div
                  onClick={() => handleToggle(index)}
                  className={`
                    group flex cursor-pointer items-start gap-3 px-2 py-6 transition-colors duration-300 ease-in-out
                    sm:gap-4 sm:px-3 sm:py-7 md:gap-5 md:py-9
                  `}
                >
                  {/* Plus Icon */}
                  <div
                    className={`
                      flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[#d0cdc4]
                      transition-all duration-300 ease-in-out group-hover:bg-[#F5F1E9]/50
                      sm:h-9 sm:w-9
                      ${isOpen ? "scale-105 bg-[#F5F1E9]/50" : ""}
                    `}
                  >
                    <svg
                      className={`
                        h-3.5 w-3.5 text-[#a0a0a0] transition-transform duration-300 ease-out
                        sm:h-4 sm:w-4
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
                  <div className="flex-1 min-w-0">
                    <h3 className="text-base font-semibold text-black sm:text-lg md:text-xl">{service.title}</h3>

                    <div
                      className={`
                        grid transition-all duration-350 ease-out
                        ${isOpen ? "mt-2 grid-rows-[1fr] opacity-100 sm:mt-3" : "grid-rows-[0fr] opacity-0"}
                      `}
                    >
                      <div className="overflow-hidden">
                        <p className="max-w-[500px] text-sm leading-relaxed text-[#555] sm:text-base">
                          {service.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Divider */}
                {index < services.length - 1 && <div className="border-t border-[#e2e0d6]" />}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
