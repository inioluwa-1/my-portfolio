export interface Project {
  id: number
  title: string
  description: string
  technologies: string[]
  icon: string
  liveDemo?: string
  github?: string
}

export interface Skill {
  category: string
  skills: string[]
}

export interface ContactFormData {
  name: string
  email: string
  message: string
}

export interface ToastProps {
  message: string
  type: "success" | "error"
  duration?: number
}
