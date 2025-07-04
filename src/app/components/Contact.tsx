"use client"

import type React from "react"
import { useState } from "react"
import { Mail, Linkedin, Github, MessageCircle } from "lucide-react"
import { ContactFormData } from "../lib/types"
import { useToast } from "../contexts/ToastContext"

declare global {
  interface Window {
    emailjs: any
  }
}

export default function Contact() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { showToast } = useToast()

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(formData.email)) {
      showToast("Please enter a valid email address.", "error")
      return
    }

    setIsSubmitting(true)
    showToast("Sending your message...", "success", 2000)

    try {
      // Simulate email sending (replace with actual EmailJS call)
      await new Promise((resolve) => setTimeout(resolve, 2000))

      if (typeof window !== "undefined" && window.emailjs) {
        await window.emailjs.send("service_wayvmfq", "template_r051j22", {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        })
      }

      showToast(`Thank you ${formData.name}! Your message has been sent successfully.`, "success", 5000)
      setFormData({ name: "", email: "", message: "" })
    } catch (error) {
      showToast("Oops! Something went wrong. Please try again later.", "error", 5000)
      console.error("EmailJS error:", error)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="scroll-animate">
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>
        <div className="contact-content">
          <div className="contact-info">
            <h3>Let's Work Together</h3>
            <p>
              I'm always open to discussing new opportunities, innovative projects, or just having a chat about web
              development. Feel free to reach out!
            </p>
            <div className="social-links">
              <a href="mailto:your-email@example.com" className="social-link" title="Email">
                <Mail size={24} />
              </a>
              <a
                href="https://linkedin.com/in/your-linkedin-profile"
                className="social-link"
                title="LinkedIn"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="https://github.com/your-github-username"
                className="social-link"
                title="GitHub"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github size={24} />
              </a>
              <a
                href="https://wa.me/1234567890"
                className="social-link"
                title="WhatsApp"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle size={24} />
              </a>
            </div>
          </div>

          <div className="contact-form">
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input type="text" id="name" name="name" value={formData.name} onChange={handleInputChange} required />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <button type="submit" disabled={isSubmitting} className="submit-btn">
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
