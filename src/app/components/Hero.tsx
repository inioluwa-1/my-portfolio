"use client"

import type React from "react"
import { useEffect, useState } from "react"

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
          <p className="subtitle">Full-Stack Web Developer</p>
          <p className="description">
            Passionate developer crafting modern, responsive web applications with cutting-edge technologies. Currently
            expanding expertise in Next.js while mastering the full spectrum of web development.
          </p>
          <a href="#projects" onClick={handleSmoothScroll} className="cta-button">
            View My Work
          </a>
        </div>
      </div>
    </section>
  )
}
