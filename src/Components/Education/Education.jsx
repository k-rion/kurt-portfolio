import React, { useState } from "react";
import "./Education.css";

// import your actual certificate images
import certReact from "../../Certificates/simple learn certificate.png"
import certInternship from "../../Certificates/Certificate of Completion (Lamina Studios).png"
import certResearch from "../../Certificates/Symposium Presenter Certificate.jpeg"
import certSAP from "../../Certificates/SAP Certificate.jpeg"

function Education() {
  const [selectedImage, setSelectedImage] = useState(null);

  // Certification Section
  const certifications = [
    {
      title:
        "Completion for ReactJS for Beginner Certificate, SimpliLearn | SkillUP",
      date: "July 28, 2025",
      image: certReact,
    },
    {
      title: "486-Hour Internship Certificate, Lamina Studios, LLC",
      date: "May 12, 2025",
      image: certInternship,
    },
    {
      title:
        "Research Presenter, STI Research Symposium – “Hello World: A 2D Cross Platform Java and C# Programming Game”",
      date: "Dec 2024",
      image: certResearch,
    },
    {
      title: "SAP Business One, Systems Integration & Architecture Training",
      date: "March 2023",
      image: certSAP,
    },
  ];

  // Tools Section
  const tools = [
    {
      toolName: "Visual Studio",
      toolUsed: "devicon-visualstudio-plain colored",
    },
    {
      toolName: "VS Code",
      toolUsed: "devicon-vscode-plain colored",
    },
    {
      toolName: "Git",
      toolUsed: "devicon-git-plain colored"
    },
    {
      toolName: "GitHub",
      toolUsed: "devicon-github-original",
    },
    {
      toolName: "Unity",
      toolUsed: "fa-brands fa-unity",
    },
    {
      toolName: "Figma",
      toolUsed: "devicon-figma-plain", 
      color: "#F24E1E",
    },
    {
      toolName: "Canva",
      toolUsed: "devicon-canva-original colored",
    },
  ];

  // Programming Languages Section
  const progLanguage = [
    {
      progBrand: "fa-brands fa-java",
      progLang: "Java",
      progBColor: "#f89820",
    },
    {
      progBrand: "devicon-tailwindcss-original colored",
      progLang: "Tailwind",
    },
    {
      progBrand: "fa-brands fa-react",
      progLang: "React",
      progBColor: "#61dafb",
    },
    {
      progBrand: "devicon-csharp-plain colored",
      progLang: "C#",
    },
    {
      progBrand: "fa-brands fa-html5",
      progLang: "HTML5",
      progBColor: "#e34f26",
    },
    {
      progBrand: "fa-brands fa-css3-alt",
      progLang: "CSS",
      progBColor: "#1572b6",
    },
    {
      progBrand: "fa-brands fa-js",
      progLang: "Javascript",
      progBColor: "#f7df1e",
    },
    {
      progBrand: "fa-brands fa-python",
      progLang: "Python",
      progBColor: "#3776ab",
    },
    {
      progBrand: "devicon-azuresqldatabase-plain colored",
      progLang: "SQL"
    },
  ];

  return (
    <section id="education" className="education-section">
      <div className="container fade-in">
        <div className="section-header">
          <h2>Education & Background</h2>
          <p>My academic journey and professional development</p>
        </div>

        <div className="education-grid">
          {/* Education */}
          <div className="education-block">
            <h3>Education</h3>
            <div className="card">
              <div className="card-header">
                <div>
                  <h4>Bachelor of Science in Information Technology</h4>
                  <p className="highlight">STI College San Jose Del Monte</p>
                </div>
                <span className="date">2021 - 2025</span>
              </div>
              <p>
                Specializing in Game Development, UI/UX, and Web Development
              </p>
            </div>

            {/* Tools */}
            <div className="card">
              <div className="card-header">
                <div>
                  <h4>Tools Used</h4>
                    <div className="column-flex">
                      {tools.map((t, index) => (
                    <div className="tools-used" key={index}>
                      <div className="tools">
                        <i className={t.toolUsed} style={{color: t.color}}></i>
                        <span>{t.toolName}</span>
                      </div>
                    </div>
                    ))}
                    </div>
                </div>
              </div>
            </div>
          </div>

          {/* Certifications & Skills */}
          <div className="certification-block">
            <h3>Certifications & Skills</h3>
            <div className="card">
              <ul className="cert-list">
                {certifications.map((cert, index) => (
                  <li key={index}>
                    <div>
                      <button
                        className="cert-btn"
                        onClick={() => setSelectedImage(cert.image)}
                      >
                        {cert.title}
                      </button>
                    </div>
                    <span className="cert-date">{cert.date}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Programming Section */}
            <div className="card">
              <h4>Programming Languages</h4>
                <div className="prog-flex">
                  {progLanguage.map((p, i) => (
                <div className="prog-languages" key={i}> 
                  <div className="lang">
                    <i className={p.progBrand} style={{color: p.progBColor}}></i>
                    <span>{p.progLang}</span>
                  </div>
                </div>
                ))}  
              </div>    
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      {selectedImage && (
        <div className="modal-overlay-edu" onClick={() => setSelectedImage(null)}>
          <div
            className="modal-content-edu"
            onClick={(e) => e.stopPropagation()}
          >
            <img src={selectedImage} alt="Certificate" />
            <button
              className="close-btn-edu"
              onClick={() => setSelectedImage(null)}
            >
              <i className="fa-solid fa-xmark"></i>
            </button>
          </div>
        </div>
      )}
    </section>
  );
}

export default Education;
