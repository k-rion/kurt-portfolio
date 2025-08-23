import React from 'react'
import './SkillAndServices.css'

function SkillAndServices() {

    const skills = [
        {
            icon: <i className="fa-solid fa-pen-nib"></i>,
            name: "UI/UX Design",
            desc: "Creating intuitive and beautiful user experiences" 
        },
        {
            icon: <i className="fa-regular fa-file"></i>,
            name: "Frontend Development",
            desc: "Building responsive and interactive web applications",
        },
        {
            icon: <i className="fa-solid fa-gamepad"></i>,
            name: "Game Development",
            desc: "Building immersive games with UI, level design, character scripts, and animations."
        },
        {
            icon: <i className="fa-solid fa-screwdriver-wrench"></i>,
            name: "Troubleshooting",
            desc: "Providing reliable basic troubleshooting for both hardware and software issues to keep systems running smoothly.",
        }
    ]


  return (
    <div>
      <section id="skills" className="skills fade-in">       
          <h2 className="skill-title">Skills & Services</h2>
          <p className="skill-sub">What I bring to the table</p>

            {skills.map((skills, indx) => (
                <div className="skill-container" key={indx}>
                    <div className="skills-grid">
                        <div className="skill-card">
                        <div className="skill-icon">
                            {skills.icon}
                        </div>
                        <div className="skill-item">{skills.name}</div>
                        <div className="skill-desc">{skills.desc}</div>
                        </div>
                    </div> 
                </div>
            ))}

      </section>
    </div>
  )
}

export default SkillAndServices
