"use client"

import { useState } from "react"

const services = [
  {
    title: "Buy a Property",
    description:
      "We help you find the right home in Nalasopara East and nearby areas by understanding your budget, lifestyle, and future goals. From site visits to final registration, our experts guide you through every step with complete transparency.",
  },
  {
    title: "Sell Your Property",
    description:
      "Get the best value for your property with accurate market pricing, strategic promotion, and skilled negotiation. We manage everything from listing to closing, ensuring a smooth and profitable selling experience.",
  },
  {
    title: "Rent & Lease Assistance",
    description:
      "Whether you are looking to rent a home or lease out your property, we connect you with verified tenants and genuine listings. Our process ensures legal clarity, timely agreements, and stress-free transactions.",
  },
  {
    title: "Property Investment Advisory",
    description:
      "Make informed real estate investments with expert guidance on high-growth locations, pre-launch projects, and rental-yield opportunities in Palghar district. We focus on long-term returns and risk-aware decisions.",
  },
  {
    title: "Documentation & Legal Support",
    description:
      "We assist with all property-related documentation including agreement to sale, sale deed, registration, and coordination with legal professionals—ensuring compliance, accuracy, and peace of mind.",
  },
  {
    title: "Home Loan Assistance",
    description:
      "Our team helps you secure the right home loan by coordinating with trusted banks and financial institutions. From eligibility checks to approval support, we simplify the entire loan process for you.",
  },
  {
    title: "End-to-End Property Consulting",
    description:
      "From initial consultation to post-purchase support, we offer complete real estate consulting services tailored to your needs. Our client-first approach ensures clarity, confidence, and long-term satisfaction.",
  },
]

export default function ServicesSection() {
  const [openIndex, setOpenIndex] = useState(null)

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="w-full bg-[#F5F1E9]">
      <div className="mx-auto max-w-9xl px-4 sm:px-6 md:px-8 lg:px-16 xl:px-32">
        {/* Header */}
        <div className="border-t border-black/10 mb-6 sm:mb-8"></div>

        <div className="mb-8 sm:mb-10 md:mb-12">
          <div className="flex flex-col sm:flex-row sm:items-start gap-4 sm:gap-6">
            {/* Label */}
            <div className="flex items-center gap-2 sm:pt-1">
              <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-sm bg-[#1a1a1a]" />
              <span className="text-[10px] sm:text-[11px] uppercase tracking-widest text-[#1a1a1a] font-medium">
                Services
              </span>
            </div>

            {/* Heading */}
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[48px] font-medium text-[#1a1a1a] leading-tight tracking-tight lg:translate-x-40">
              Complete real estate solutions
              <br />
              —built around your needs
            </h2>
          </div>
        </div>

        {/* Services Card */}
        <div className="rounded-xl bg-white px-4 sm:px-6 md:px-8 lg:px-10">
          {services.map((service, index) => {
            const isOpen = openIndex === index

            return (
              <div key={service.title}>
                <div
                  onClick={() => handleToggle(index)}
                  className="
                    group flex cursor-pointer items-start gap-3 px-2 py-6 transition-colors duration-300 ease-in-out
                    sm:gap-4 sm:px-3 sm:py-7 md:gap-5 md:py-9
                  "
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
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M12 4v16m8-8H4"
                      />
                    </svg>
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <h3 className="text-base font-semibold text-black sm:text-lg md:text-xl">
                      {service.title}
                    </h3>

                    <div
                      className={`
                        grid transition-all duration-350 ease-out
                        ${
                          isOpen
                            ? "mt-2 grid-rows-[1fr] opacity-100 sm:mt-3"
                            : "grid-rows-[0fr] opacity-0"
                        }
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
                {index < services.length - 1 && (
                  <div className="border-t border-[#e2e0d6]" />
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
