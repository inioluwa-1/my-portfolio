"use client"

import { useEffect, useState } from "react"
import { Typewriter } from "react-simple-typewriter"

export default function Hero() {
  const [floatOffset, setFloatOffset] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setFloatOffset((prev) => (prev === 0 ? 10 : 0))
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    const target = document.querySelector("#projects")
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" })
    }
  }

  return (
    <section id="home" className="hero">
      <div className="container">
        <div className="hero-content" style={{ transform: `translateY(${floatOffset}px)` }}>
          <h1>Ayanbisi Inioluwa Nehemiah</h1>

          {/* Typewriter effect here */}
          <p className="subtitle text-green-400 text-lg font-semibold">
            <Typewriter
              words={["Full-Stack Web Developer", "Tech Enthusiast", "Creative Coder👨‍💻"]}
              loop={true}
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </p>

          <p className="description text-gray-400 mt-4">
            Passionate developer crafting modern, responsive web applications with cutting-edge technologies. Currently
            expanding expertise in Next.js while mastering the full spectrum of web development.
          </p>

          <a
            href="#projects"
            onClick={handleSmoothScroll}
            className="cta-button mt-6 inline-block px-6 py-3 bg-green-500 text-black font-bold rounded-full hover:bg-green-600 transition-all"
          >
            View My Work
          </a>
        </div>
      </div>
    </section>
  )
}
