import { useState } from "react"
import { ChevronRight, Linkedin, Facebook, Instagram, Youtube } from "lucide-react"

/* ---------------------- Static Data ---------------------- */

const FOOTER_COLUMNS = [
  {
    title: "PAGES",
    links: [
      "Home",
      "About us",
      "Services",
      "Blogs",
      "Career",
      "Reviews",
      "Sell Properties",
      "Submit Properties",
      "Contact",
    ],
  },
  {
    title: "EXPLORE PROPERTIES BY",
    links: ["Categories", "Agents", "Neighborhoods"],
  },
  {
    title: "CATEGORIES",
    links: [
      "All",
      "Villa",
      "Single Family Home",
      "Luxury Homes",
      "Apartment",
      "Office Space",
      "Commercial",
      "Land",
    ],
  },
]

const TikTokIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
  </svg>
)

const XIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
)

const SOCIAL_LINKS = [
  { icon: Linkedin, label: "LinkedIn" },
  { icon: Facebook, label: "Facebook" },
  { icon: TikTokIcon, label: "TikTok" },
  { icon: Instagram, label: "Instagram" },
  { icon: Youtube, label: "YouTube" },
  { icon: XIcon, label: "X (Twitter)" },
]

/* ---------------------- Component ---------------------- */

export default function Footer() {
  const [email, setEmail] = useState("")
  const [isFocused, setIsFocused] = useState(false)

  const handleSubscribe = () => {
    if (!email) return
    console.log("Subscribed:", email)
    setEmail("")
  }

  const handleKeyDown = (e) => {
    if (e.key === "Enter") handleSubscribe()
  }

  return (
    <footer className="relative bg-black text-[#F6F2E8] overflow-hidden">
      <div className="relative z-10 px-6 md:px-12 lg:px-20 pt-24 md:pt-32 pb-16">

        {/* Navigation Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-20 mb-32">
          {FOOTER_COLUMNS.map(({ title, links }) => (
            <div key={title}>
              <div className="flex items-center gap-2 mb-6">
                <span className="w-2 h-2 rounded-[2px] bg-[#D4A574]" />
                <h3 className="text-xs font-normal  text-white">
                  {title}
                </h3>
              </div>

              <nav>
                {links.map((link) => (
                  <a
                    key={link}
                    href="#"
                    className="group flex items-center justify-between py-4 border-l border-b border-[#2A2A2A] transition-all duration-300 hover:bg-[#0A0A0A]"
                  >
                    <span className="text-[15px] transition-colors duration-300 group-hover:text-white ml-2">
                      {link}
                    </span>
                    <ChevronRight className="w-4 h-4 opacity-60 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-1" />
                  </a>
                ))}
              </nav>
            </div>
          ))}
        </div>

        {/* Giant Brand Typography */}
        <div className="relative">
          <div className="flex flex-col items-center">
          <h2
  className="block text-[#F6F2E8] font-medium tracking-tighter leading-none m-0 p-0 text-left -translate-x-20"
  style={{ fontSize: "475px" }}
>
  Realist
</h2>


            <div className="w-full max-w-[900px] flex justify-end translate-x-60 -translate-y-64">
              <div className="grid grid-cols-2 gap-4">
                {SOCIAL_LINKS.map(({ icon: Icon, label }) => (
                  <a
                    key={label}
                    href="#"
                    aria-label={label}
                    className="flex items-center justify-center w-14 h-14 bg-[#1A1A1A] rounded-lg transition-all duration-300 hover:bg-[#2A2A2A] hover:scale-110 active:scale-95"
                  >
                    <Icon />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter */}
        <div className="max-w-xl mx-auto mb-20">
          <div className="flex items-left justify-left gap-2 mb-4">
            <span className="w-2 h-2 rounded-[2px] translate-y-1 bg-[#D4A574]" />
            <p className="text-xs font-medium tracking-widest text-[#D4A574]">
              GET FRESH UPDATES
            </p>
          </div>

          <div
            className={`flex items-center bg-[#F6F2E8] rounded-xl overflow-hidden transition-all duration-300 ${
              isFocused
                ? "ring-2 ring-[#D4A574] ring-offset-2 ring-offset-black"
                : ""
            }`}
          >
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onFocus={() => setIsFocused(true)}
              onBlur={() => setIsFocused(false)}
              onKeyDown={handleKeyDown}
              placeholder="jane@framer.com"
              className="flex-1 px-6 py-4 bg-transparent text-black placeholder-gray-500 outline-none text-[15px]"
            />
            <button
              onClick={handleSubscribe}
              className="flex items-center gap-2 px-8 py-3 bg-black text-white font-medium text-sm tracking-wide transition-all duration-300 hover:bg-[#1A1A1A] hover:scale-[1.02] active:scale-95 rounded-xl mr-1"
            >
              SUBSCRIBE
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-[#2A2A2A]">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
            <div className="flex gap-6">
              <a href="#" className="hover:text-[#F6F2E8] transition-colors">
                PRIVACY POLICY
              </a>
              <a href="#" className="hover:text-[#F6F2E8] transition-colors">
                TERMS
              </a>
            </div>
            <div className="flex gap-6">
              <span>©TEMPLATE BY REALMEHEDI</span>
              <span>BUILT IN FRAMER</span>
            </div>
          </div>
        </div>

      </div>
    </footer>
  )
}
