"use client"

interface ToastProps {
  id: number
  message: string
  type: "success" | "error"
  onClose: (id: number) => void
}

export default function Toast({ id, message, type, onClose }: ToastProps) {
  return (
    <div className={`toast ${type} show`}>
      <i className="material-icons toast-icon">{type === "success" ? "check_circle" : "error"}</i>
      <div className="toast-message">{message}</div>
      <button className="toast-close" onClick={() => onClose(id)} aria-label="Close toast">
        <i className="material-icons">close</i>
      </button>
    </div>
  )
}
