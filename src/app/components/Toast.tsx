"use client"

import { CheckCircle, X, AlertCircle } from "lucide-react"

interface ToastProps {
  id: number
  message: string
  type: "success" | "error"
  onClose: (id: number) => void
}

export default function Toast({ id, message, type, onClose }: ToastProps) {
  const Icon = type === "success" ? CheckCircle : AlertCircle

  return (
    <div className={`toast ${type} show`}>
      <Icon size={20} className="toast-icon" />
      <div className="toast-message">{message}</div>
      <button className="toast-close" onClick={() => onClose(id)} aria-label="Close toast">
        <X size={16} />
      </button>
    </div>
  )
}
