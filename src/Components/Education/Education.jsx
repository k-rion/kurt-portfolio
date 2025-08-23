import React from "react";
import "./Education.css";

function Education() {
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
              <p>Specializing in Game Development, UI/UX, and Web Development</p>
            </div>

            <div className="card">
                <div className="card-header">
                  <div>
                    <h4>Tools Used</h4>
                    <div className="tools-used">
                      <div className="tools">
                        <i class="devicon-visualstudio-plain colored"></i>
                        <span>Visual Studio</span>
                      </div>

                      <div className="tools">
                        <i class="devicon-vscode-plain colored"></i>
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
                <li>
                  <div>
                    <span className="bullet"></span>
                    Completion for ReactJS for Beginner Certificate, SimpliLearn | SkillUP
                  </div>
                  <span className="cert-date">July 28, 2025</span>
                </li>
                <li>
                  <div>
                    <span className="bullet"></span>
                    486-Hour Internship Certificate, Lamina Studios, LLC
                  </div>
                  <span className="cert-date">May 12, 2025</span>
                </li>
                <li>
                  <div>
                    <span className="bullet"></span>
                    Research Presenter, STI Research Symposium – <br />
                    “Hello World: A 2D Cross Platform Java and C# Programming Game”
                  </div>
                  <span className="cert-date">Dec 2024</span>
                </li>
                <li>
                  <div>
                    <span className="bullet"></span>
                    SAP Business One, Systems Integration & Architecture Training
                  </div>
                  <span className="cert-date">March 2023</span>
                </li>
              </ul>
            </div>

            {/* Languages */}
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
                  <i className="fa-brands fa- fa-js"></i>
                  <span>Javascript</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

export default Education;
