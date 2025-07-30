"use client"

import { useEffect, useState } from "react"

export default function Loader() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
      document.body.classList.add("loaded")
    }, 100)

    return () => clearTimeout(timer)
  }, [])

  if (!isLoading) return null

  return (
    <div id="loader">
      <div className="spinner"></div>
    </div>
  )
}
