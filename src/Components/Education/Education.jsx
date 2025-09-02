import React, { useState } from "react";
import "./Education.css";

// import your actual certificate images
import certReact from "../../Certificates/simple learn certificate.png"
import certInternship from "../../Certificates/Certificate of Completion (Lamina Studios).png"
import certResearch from "../../Certificates/Symposium Presenter Certificate.jpeg"
import certSAP from "../../Certificates/SAP Certificate.jpeg"

function Education() {
  const [selectedImage, setSelectedImage] = useState(null);

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

            <div className="card">
              <div className="card-header">
                <div>
                  <h4>Tools Used</h4>
                  <div className="tools-used">
                    <div className="tools">
                      <i className="devicon-visualstudio-plain colored"></i>
                      <span>Visual Studio</span>
                    </div>

                    <div className="tools">
                      <i className="devicon-vscode-plain colored"></i>
                      <span>Visual Studio Code</span>
                    </div>

                    <div className="tools">
                      <i className="fa-brands fa-unity"></i>
                      <span>Unity</span>
                    </div>
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

            <div className="card">
              <h4>Programming Languages</h4>
              <div className="prog-languages">
                <div className="lang">
                  <i className="fa-brands fa-java"></i>
                  <span>Java</span>
                </div>
                <div className="lang">
                  <i className="fa-solid fa-code"></i>
                  <span>C#</span>
                </div>
                <div className="lang">
                  <i className="fa-brands fa-python"></i>
                  <span>Python</span>
                </div>
                <div className="lang">
                  <i className="fa-brands fa-html5"></i>
                  <span>HTML</span>
                </div>
                <div className="lang">
                  <i className="fa-brands fa-css3-alt"></i>
                  <span>CSS</span>
                </div>
                <div className="lang">
                  <i className="fa-brands fa-react"></i>
                  <span>React</span>
                </div>
                <div className="lang">
                  <i className="fa-brands fa-js"></i>
                  <span>Javascript</span>
                </div>
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
              <i class="fa-solid fa-xmark"></i>
            </button>
          </div>
        </div>
      )}
    </section>
  );
}

export default Education;
