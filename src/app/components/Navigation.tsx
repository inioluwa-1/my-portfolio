"use client"

import type React from "react"
import { useState } from "react"
import { useNavBackground } from "../hooks/useNavBackground"

export default function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const isScrolled = useNavBackground()

  const navItems = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#skills", label: "Skills" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact" },
  ]

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    const target = document.querySelector(href)
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" })
      setIsMobileMenuOpen(false)
    }
  }

  return (
    <nav style={{ background: isScrolled ? "rgba(0, 0, 0, 0.95)" : "rgba(0, 0, 0, 0.9)" }}>
      <div className="container">
        <a href="#home" className="logo" onClick={(e) => handleSmoothScroll(e, "#home")}>
          AIN
        </a>

        <ul className="nav-links">
          {navItems.map((item) => (
            <li key={item.href}>
              <a href={item.href} onClick={(e) => handleSmoothScroll(e, item.href)}>
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="mobile-nav"></div>
      </div>
    </nav>
  )
}
