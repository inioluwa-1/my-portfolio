"use client"

import { useToast } from "../contexts/ToastContext"
import Toast from "./Toast"

export default function ToastContainer() {
  const { toasts, removeToast } = useToast()

  return (
    <div className="toast-container">
      {toasts.map((toast) => (
        <Toast key={toast.id} id={toast.id} message={toast.message} type={toast.type} onClose={removeToast} />
      ))}
    </div>
  )
}
