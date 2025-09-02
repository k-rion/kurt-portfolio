import React, { useState } from "react";
import "./FeaturedProject.css";

// imported pictures (CLickNcart)
import clickncart1 from "../../ClickNcartProject/clickncart1.png"
import clickncart2 from "../../ClickNcartProject/clickncart2.png"
import clickncart3 from "../../ClickNcartProject/clickncart3.png"
import clickncart4 from "../../ClickNcartProject/clickncart4.png"
import clickncart5 from "../../ClickNcartProject/clickncart5.png"

// imported pictures (Symposium)
import symposium1 from "../../Project1_Symposium/Hello_World.png"
import symposium2 from "../../Project1_Symposium/Symposium.jpg"
import symposium3 from "../../Project1_Symposium/Symposium2.jpg"
import symposium4 from "../../Project1_Symposium/Symposium3.jpg"
import symposium5 from "../../Project1_Symposium/Symposium4.jpg"

// imported pictures (Stealth and Steal)
import SAS from "../../Project2_StealAndStealth/Screenshot_2025-06-25_073038.png.png"
import SAS1 from "../../Project2_StealAndStealth/1.png"
import SAS2 from "../../Project2_StealAndStealth/2.png"
import SAS3 from "../../Project2_StealAndStealth/3.png"
import SAS4 from "../../Project2_StealAndStealth/Saturday_GameDev_Designing_Level2.png"
import SAS5 from "../../Project2_StealAndStealth/Thursday_GameDev.png"
import SAS6 from "../../Project2_StealAndStealth/Tuesday_GameDev4.png"

//Todo List App
import TodoList from "../../Todo_App/Screenshot 2025-09-01 102701.png"
import TodoList2 from "../../Todo_App/Screenshot 2025-09-01 102802.png"
import TodoList3 from "../../Todo_App/Screenshot 2025-09-01 102825.png"

function FeaturedProject() {
  const projects = [
    // ClickNcart Project
    {
      icon: clickncart1,
      title: "ClickNcart (First Web Project)",
      description:
        "Modern shopping experience with clean UI and seamless checkout process.",
      longDescription:
        "A comprehensive e-commerce solution built with modern web technologies. This platform features a clean, intuitive interface that makes online shopping effortless for users while providing powerful management tools for administrators.",
      showcaseImages: [
        clickncart2, clickncart3, clickncart4, clickncart5
      ],
      title2_sub:
        "This project features a user-friendly interface for an e-commerce platform, designed to deliver a smooth and enjoyable shopping experience. The clean and minimalist layout helps users focus on products without unnecessary distractions. With intuitive navigation and clear product displays, it ensures convenience and efficiency for customers. Overall, the design enhances engagement while maintaining a modern and professional look.",
      features: [
        "Responsive Design",
        "Payment Integration",
        "Admin Dashboard",
        "Real-time Analytics",
      ],
      tags: [
        { name: "React", icon: "fa-brands fa-react", color: "#61dafb" },
        { name: "HTML", icon: "fa-brands fa-html5", color: "#e34f26" },
        { name: "CSS", icon: "fa-brands fa-css3-alt", color: "#1572b6" },
      ],
      gradient: "linear-gradient(to bottom right, #dbeafe, #eff6ff)",
      iconColor: "#3b82f6",
      status: "In Progress",
      projectLink: "https://k-rion.github.io/ClickNcart/",
      videoLink: "",
    },

     // Todo List App
    {
      icon: TodoList,
      title: "Todo List App",
      description:
        "A simple and intuitive To-Do List app that helps you stay organized and productive. Easily add, edit, and check off tasks, set priorities, and manage your daily goals all in one place.",
      longDescription:
        "Stay on top of your tasks with this lightweight To-Do List app. Keep track of what needs to be done, organize your day, and boost productivity with a clean and simple interface.",
      showcaseImages: [
        TodoList2, TodoList3
      ],
      title2_sub:
        "This project is a simple To-Do List app built to help users stay organized and productive. It allows you to easily add, edit, and check off tasks while keeping your daily goals clear and manageable.",
      features: [
        "Add, edit, and delete tasks easily",
        "Mark tasks as completed",
        "Simple and user-friendly interface",
        "Task organization for better productivity",
        "Lightweight and responsive design",
      ],
      tags: [
        { name: "React", icon: "fa-brands fa-react", color: "#61dafb" },
        { name: "Tailwind", icon: "devicon-tailwindcss-original colored" },
      ],
      gradient: "linear-gradient(to bottom right, #dbeafe, #eff6ff)",
      iconColor: "#3b82f6",
      status: "Completed",
      projectLink: "https://k-rion.github.io/TodoList/",
      videoLink: "",
    },

    // Steal and Stealth Project Section
    {
      icon: SAS,
      title: "Stealth & Steal (Internship Project)",
      description:
        "Designing engaging game worlds with intuitive UI, creative level layouts, smooth character animations, and interactive scripts.",
      longDescription:
        "Game development involves planning, designing mechanics and art, developing systems, testing, publishing, and ongoing support.",
      showcaseImages: [
       SAS1, SAS2, SAS3, SAS4, SAS5, SAS6,
      ],

      features: [
        "Engaging UI",
        "Smooth Animations",
        "Level Design",
        "Interactive Scripts",
      ],
      tags: [
        { name: "C#", icon: "fa-solid fa-code", color: "#9b59b6" },
        { name: "Java", icon: "fa-brands fa-java", color: "#f89820" },
        { name: "Unity", icon: "fa-brands fa-unity", color: "#000000" },
      ],
      gradient: "linear-gradient(to bottom right, #bbf7d0, #ecfdf5)",
      iconColor: "#16a34a",
      status: "Completed",
      projectLink: "",
      videoLink: "https://drive.google.com/file/d/1Rn2wyCL5KzcacdYUZ_5eZEgCqjyn2sBe/preview",
    },
    
    //Hello World Project Section
    {
      icon: symposium1,
      title: "Hello World (Capstone Project)",
      description:
        "Responsive portfolio showcasing creative work with smooth animations.",
      longDescription:
        "Built with advanced CSS animations, modern design principles and SEO optimization.",
      showcaseImages: [
         symposium2, symposium3, symposium4, symposium5
      ],
      features: [
        "Responsive Design",
        "SEO Optimized",
        "Smooth Animations",
        "Fast Loading",
      ],
      tags: [
        { name: "HTML", icon: "fa-brands fa-html5", color: "#e34f26" },
        { name: "CSS", icon: "fa-brands fa-css3", color: "#1572b6" },
        { name: "JavaScript", icon: "fa-brands fa-js", color: "#ffd43d" },
        { name: "React", icon: "fa-brands fa-react", color: "#61dafb" },
      ],
      gradient: "linear-gradient(to bottom right, #e9d5ff, #f5f3ff)",
      iconColor: "#a855f7",
      status: "Completed",
      projectLink: "",
      videoLink: "https://drive.google.com/file/d/151lph_ZsbBtpmYkOdu5aeguLlSme9gC4/preview",
    },
  ];

  const [selectedProject, setSelectedProject] = useState(null);
  const closeModal = () => setSelectedProject(null);


    const [zoomedImage, setIsZoomed] = useState(false);
    const handleImageCLick = (img) => {
        setIsZoomed(img);
    }
    const handleImageClose = () => {
        setIsZoomed(null);
    }
    const handleClose = () => {
    setIsZoomed(null);
    };


  return (
    <section id="projects" className="projects fade-in">
      <div className="container text-center">
        <h2 className="project-title">Featured Projects</h2>
        <p className="project-sub">A selection of my recent work</p>

        {/* Project Cards */}
        <div className="project-flex">
          <div className="project-grid">
            {projects.map((project, index) => (
              <div className="project-card" key={index}>
                {/* Project Image */}
                <div
                  className="project-image"
                  style={{ background: project.gradient }}
                >
                  <img src={project.icon} alt={project.title} />
                </div>

                {/* Project Content */}
                <div className="project-content">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>

                  <div className="project-tags">
                    {project.tags.map((tag, i) => (
                      <span key={i}>
                        <i
                          className={tag.icon}
                          style={{ color: tag.color, marginRight: "5px" }}
                        ></i>
                        {tag.name}
                      </span>
                    ))}
                  </div>

                    <span className={`project-status ${project.status.toLowerCase().replace(" ", "-")}`}>
                    {project.status}
                    </span>

                </div>

                {/* View Button */}
                <button
                  className="view-btn"
                  onClick={() => setSelectedProject(project)}
                >
                  View
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Modal */}
        {selectedProject && (
          <div className="modal" onClick={closeModal}>
            <div
              className="modal-content"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                className="modal-close"
                aria-label="Close project details"
                onClick={closeModal}
              >
                ×
              </button>

              {/* Title + Short Description */}
              <div className="first-layer">
                <h1 className="modal-title">{selectedProject.title}</h1>
                <p className="modal-sub">{selectedProject.longDescription}</p>
              </div>

              {/* Project Overview */}
              {selectedProject.title2_sub && (
                <div className="section">
                  <h2 className="sec2-modal-title">Project Overview</h2>
                  <p className="modal-sub">{selectedProject.title2_sub}</p>
                </div>
              )}

              {/* Project Showcase */}
              <div className="section showcase">
                <h2 className="sec2-modal-title">Project Showcase</h2>
                <div className="showcase-grid">
                  {/* Add images if available */}
                  {selectedProject.showcaseImages?.map((img, i) => (
                     <img 
                     className="showcase-img"
                     key={i} 
                    onClick={() => handleImageCLick(img)}
                     src={img} 
                     alt={`Project Showcase ${i + 1}`} 
                     />
                  ))}
                </div>
              </div>

              {/* Features & Technologies */}
              <div className="section grid-2">
                <div>
                  <h3 className="sec2-modal-title">Key Features</h3>
                  <ul>
                    {selectedProject.features.map((f, i) => (
                      <li key={i}>
                        <span>•</span> {f}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="sec2-modal-title">Technologies Used</h3>
                  <div className="tech-tags">
                    {selectedProject.tags.map((t, i) => (
                      <span key={i} className="span-tag">
                        <i
                          className={t.icon}
                          style={{ color: t.color, marginRight: "5px" }}
                        ></i>
                        {t.name}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="modal-actions">
                <button className="github-btn" onClick={() => window.open(selectedProject.projectLink, "_blank")}>
                  <i className="fa-solid fa-link"></i> Project Link
                </button>
                <button className="demo-btn" onClick={() => window.open(selectedProject.videoLink, "_blank")}>
                  <i className="fa-solid fa-up-right-from-square"></i> Live Demo
                </button>
              </div>

              {/* Back Button */}
              <button className="close-btn" onClick={closeModal}>
                <i className="fa-solid fa-arrow-left"></i> Back to Portfolio
              </button>
            </div>
          </div>
        )}


        {zoomedImage && (
          <div 
          className="overlay"
          onClick={handleImageClose}
          >
              <button className="zoomed-close-btn" onClick={handleClose}>
            ✕
          </button>
            <img src={zoomedImage} alt="Zoomed" className="zoomed-image"/>

          </div>
        )} 

      </div>
    </section>
  );
}

export default FeaturedProject;
