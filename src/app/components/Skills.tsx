"use client"

import { useEffect } from "react"
import { Skill } from "../lib/types"

const skillsData: Skill[] = [
  {
    category: "Frontend Development",
    skills: ["HTML5", "CSS3", "Bootstrap", "JavaScript", "React", "Angular", "Vue.js", "Next.js (Learning)"],
  },
  {
    category: "Backend Development",
    skills: ["Node.js", "PHP", "Laravel", "RESTful APIs", "Server Management"],
  },
  {
    category: "Database Management",
    skills: ["MySQL", "Oracle", "Database Design", "Query Optimization"],
  },
  {
    category: "Tools & Technologies",
    skills: ["Git", "Responsive Design", "Web Performance", "Cross-browser Testing"],
  },
]

export default function Skills() {
  useEffect(() => {
    const skillTags = document.querySelectorAll(".skill-tag")

    skillTags.forEach((tag) => {
      const handleMouseEnter = () => {
        ;(tag as HTMLElement).style.transform = "scale(1.05) rotate(2deg)"
      }

      const handleMouseLeave = () => {
        ;(tag as HTMLElement).style.transform = "scale(1) rotate(0deg)"
      }

      tag.addEventListener("mouseenter", handleMouseEnter)
      tag.addEventListener("mouseleave", handleMouseLeave)
    })

    return () => {
      skillTags.forEach((tag) => {
        tag.removeEventListener("mouseenter", () => {})
        tag.removeEventListener("mouseleave", () => {})
      })
    }
  }, [])

  return (
    <section id="skills" className="scroll-animate">
      <div className="container">
        <h2 className="section-title">Technical Skills</h2>
        <div className="skills-grid">
          {skillsData.map((skillCategory, index) => (
            <div key={index} className="skill-category">
              <h3>{skillCategory.category}</h3>
              <div className="skills-list">
                {skillCategory.skills.map((skill, skillIndex) => (
                  <span key={skillIndex} className="skill-tag">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
