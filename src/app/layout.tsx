import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })


export const metadata = {
  title: "My Portfolio",
    description:
    "Full-Stack Web Developer passionate about crafting modern, responsive web applications with cutting-edge technologies.",
  keywords: "web developer, full-stack developer, React, Next.js, Node.js, TypeScript",
  authors: [{ name: "Ayanbisi Inioluwa Nehemiah" }],
}

export const viewport = "width=device-width, initial-scale=1"; // ✅ Correct way
// export const metadata = {
//   title: "Ayanbisi Inioluwa Nehemiah - Web Developer",
//   description:
//     "Full-Stack Web Developer passionate about crafting modern, responsive web applications with cutting-edge technologies.",
//   keywords: "web developer, full-stack developer, React, Next.js, Node.js, TypeScript",
//   authors: [{ name: "Ayanbisi Inioluwa Nehemiah" }],
//   viewport: "width=device-width, initial-scale=1",
// }

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
