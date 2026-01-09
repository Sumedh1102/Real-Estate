import { useState } from "react"
import { ChevronRight, Linkedin, Facebook, Instagram, Youtube } from "lucide-react"

/* ---------------------- Static Data ---------------------- */

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
        {/* Giant Brand Typography */}
        <div className="relative mb-16 sm:mb-24 md:mb-32">
          <div className="flex flex-col items-center">
            <h2 className="block text-[#F6F2E8] font-medium tracking-tighter leading-none m-0 p-0 text-center lg:text-left lg:-translate-x-20 text-[15vw] sm:text-[12vw] md:text-[10vw] lg:text-[200px] xl:text-[475px]">
              Realist
            </h2>

            <div className="w-full flex justify-center lg:justify-end lg:max-w-[900px] lg:translate-x-60 mt-8 lg:-mt-48 xl:-mt-64">
              <div className="grid grid-cols-3 sm:grid-cols-6 lg:grid-cols-2 gap-3 sm:gap-4">
                {SOCIAL_LINKS.map(({ icon: Icon, label }) => (
                  <a
                    key={label}
                    href="#"
                    aria-label={label}
                    className="flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 bg-[#1A1A1A] rounded-lg transition-all duration-300 hover:bg-[#2A2A2A] hover:scale-110 active:scale-95"
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
            <p className="text-xs font-medium tracking-widest text-[#D4A574]">GET FRESH UPDATES</p>
          </div>

          <div
            className={`flex flex-col sm:flex-row items-stretch sm:items-center bg-[#F6F2E8] rounded-xl overflow-hidden transition-all duration-300 ${
              isFocused ? "ring-2 ring-[#D4A574] ring-offset-2 ring-offset-black" : ""
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
              className="flex-1 px-4 sm:px-6 py-4 bg-transparent text-black placeholder-gray-500 outline-none text-[15px]"
            />
            <button
              onClick={handleSubscribe}
              className="flex items-center justify-center gap-2 px-6 sm:px-8 py-3 bg-black text-white font-medium text-sm tracking-wide transition-all duration-300 hover:bg-[#1A1A1A] hover:scale-[1.02] active:scale-95 rounded-xl m-1"
            >
              SUBSCRIBE
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-[#2A2A2A]">
          <div className="flex flex-col items-center gap-4 text-xs sm:text-sm text-gray-500 md:flex-row md:justify-between">
            <div className="flex gap-4 sm:gap-6">
              <a href="#" className="hover:text-[#F6F2E8] transition-colors">
                PRIVACY POLICY
              </a>
              <a href="#" className="hover:text-[#F6F2E8] transition-colors">
                TERMS
              </a>
            </div>
            <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-6 text-center">
              <span>©TEMPLATE BY REALMEHEDI</span>
              <span>BUILT IN FRAMER</span>
            </div>
          </div>
        </div>
    </footer>
  )
}
