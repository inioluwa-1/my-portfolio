import type React from "react"

import "./globals.css"
import { ToastProvider } from "./contexts/ToastContext"
import ToastContainer from "./components/ToastContainer"

export const metadata = {
  title: "Ayanbisi Inioluwa Nehemiah - Web Developer",
  description:
    "Full-Stack Web Developer passionate about crafting modern, responsive web applications with cutting-edge technologies.",
  keywords: "web developer, full-stack developer, React, Next.js, Node.js, TypeScript",
  authors: [{ name: "Ayanbisi Inioluwa Nehemiah" }],
}
export const viewport = "width=device-width, initial-scale=1" 


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <ToastProvider>
          {children}
          <ToastContainer />
        </ToastProvider>
      </body>
    </html>
  )
}
