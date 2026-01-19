import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { ChevronRight } from "lucide-react"

export default function Home() {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  })

  // House layer transforms
  const houseY = useTransform(scrollYProgress, [0, 1], [0, -80])
  const houseBlur = useTransform(scrollYProgress, [0, 0.15], [16, 0])
  const houseOpacity = useTransform(scrollYProgress, [0, 1], [1, 0.9])

  // Flower layer transforms
  const flowerY = useTransform(scrollYProgress, [0, 1], [0, -120])
  const flowerBlur = useTransform(scrollYProgress, [0, 1], [0, 20])
  const flowerOpacity = useTransform(scrollYProgress, [0, 1], [1, 0.8])

  return (
    <main>
      <section ref={containerRef} className="relative h-screen w-full overflow-hidden">
        {/* Background House Layer - z-0 */}
        <motion.div
          className="absolute inset-0 z-0"
          style={{
            y: houseY,
            opacity: houseOpacity,
            filter: useTransform(houseBlur, (v) => `blur(${v}px)`),
          }}
        >
          <img
            src="https://i.postimg.cc/s2dLnNMn/Chat-GPT-Image-Jan-13-2026-02-54-34-PM.png"
            alt="House background"
            className="h-full w-full object-cover object-top"
          />
        </motion.div>

        {/* Foreground Flower Layer - z-10 */}
        <motion.div
          className="absolute inset-x-0 bottom-0 z-10 h-[100%]"
          style={{
            y: flowerY,
            opacity: flowerOpacity,
            filter: useTransform(flowerBlur, (v) => `blur(${v}px)`),
          }}
        >
          <img
            src="https://i.postimg.cc/447SgGpq/Chat-GPT-Image-Jan-13-2026-02-55-48-PM-Photoroom.png"
            alt="Flower field"
            className="h-full w-full object-cover object-top translate-y-20"
          />
        </motion.div>

        {/* Grid Overlay - z-20 */}
        <div
          className="pointer-events-none absolute inset-0 z-20"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(255,255,255,0.06) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(255,255,255,0.06) 1px, transparent 1px)
            `,
            backgroundSize: "96px 96px",
          }}
        />

        {/* Content Layer - z-30 */}
        <div className="relative z-30 flex h-full flex-col items-center justify-center px-4">
          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="group cursor-pointer text-center font-medium leading-none tracking-tight transition-colors duration-300 mb-40"
            style={{
              fontSize: "clamp(4rem, 18vw, 18rem)", // ⬅️ INCREASED SIZE
              color: "#f5f2e8",
              textShadow: "0 4px 30px rgba(0,0,0,0.3)",
            }}
          >
            <span className="transition-colors duration-300 hover:text-orange-300 ">
            buy. 
            </span>
            <span className="transition-colors duration-300 hover:text-orange-300 ">
            sell. 
            </span>
            <span className="transition-colors duration-300 hover:text-orange-300 ">
            rent.
            </span>
          </motion.h1>  

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="mt-8 max-w-2xl text-center text-lg font-light leading-relaxed text-white/85 md:text-2xl lg:text-[40px]"
            style={{
              textShadow: "0 2px 20px rgba(0,0,0,0.4)",
            }}
          >
            Find your dream property with
            <span className="block mt-4"> {/* 👈 Increase this value for more spacing */}
              <span className="bg-white/30 mr-1">
                verified listings
              </span>
               and 
               <span className="bg-white/30 ml-1"> 
                trusted agents
               </span>
            </span>
          </motion.p>
        </div>
      </section>
    </main>
  )
}
