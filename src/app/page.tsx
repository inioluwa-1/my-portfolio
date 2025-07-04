"use client"

import { useEffect } from "react"
import Navigation from "./components/Navigation"
import Hero from "./components/Hero"
import About from "./components/About"
import Skills from "./components/Skills"
import Projects from "./components/Projects"
import Contact from "./components/Contact"
import Loader from "./components/Loader"
import Toast from "./components/Toast"
import { useScrollAnimation } from "./hooks/useScrollAnimation"
import { useToast } from "./hooks/useToast"

export default function Home() {
  const { toasts, showToast, removeToast } = useToast()

  useScrollAnimation()

  useEffect(() => {
    // Initialize EmailJS
    if (typeof window !== "undefined") {
      const script = document.createElement("script")
      script.src = "https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js"
      script.onload = () => {
        if (window.emailjs) {
          window.emailjs.init("rW67dvm7j11LLsvJU")
        }
      }
      document.head.appendChild(script)

      // Welcome toast
      const welcomeTimer = setTimeout(() => {
        showToast("Welcome to my portfolio! Feel free to explore and get in touch.", "success", 3000)
      }, 1500)

      return () => {
        clearTimeout(welcomeTimer)
        if (document.head.contains(script)) {
          document.head.removeChild(script)
        }
      }
    }
  }, [showToast])

  return (
    <>
      <Loader />
      <Navigation />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>

      {/* Toast notifications */}
      {toasts.map((toast) => (
        <Toast key={toast.id} id={toast.id} message={toast.message} type={toast.type} onClose={removeToast} />
      ))}
    </>
  )
}
