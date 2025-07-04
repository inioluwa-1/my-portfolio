"use client"

import type React from "react"
import { createContext, useContext, useState, useCallback } from "react"

interface Toast {
  id: number
  message: string
  type: "success" | "error"
}

interface ToastContextType {
  toasts: Toast[]
  showToast: (message: string, type?: "success" | "error", duration?: number) => number
  removeToast: (id: number) => void
}

const ToastContext = createContext<ToastContextType | undefined>(undefined)

export function ToastProvider({ children }: { children: React.ReactNode }) {
  const [toasts, setToasts] = useState<Toast[]>([])

  const showToast = useCallback((message: string, type: "success" | "error" = "success", duration = 4000) => {
    const id = Date.now() + Math.random() // Ensure unique ID
    const newToast = { id, message, type }

    setToasts((prev) => [...prev, newToast])

    // Auto-remove toast after duration
    setTimeout(() => {
      setToasts((prev) => prev.filter((toast) => toast.id !== id))
    }, duration)

    return id
  }, [])

  const removeToast = useCallback((id: number) => {
    setToasts((prev) => prev.filter((toast) => toast.id !== id))
  }, [])

  return <ToastContext.Provider value={{ toasts, showToast, removeToast }}>{children}</ToastContext.Provider>
}

export function useToast() {
  const context = useContext(ToastContext)
  if (context === undefined) {
    throw new Error("useToast must be used within a ToastProvider")
  }
  return context
}
