import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import "./FeaturedProject.css";

// imported pictures (CLickNcart)
import clickncart1 from "../../ClickNcartProject/clickncart1.png";
import clickncart2 from "../../ClickNcartProject/clickncart2.png";
import clickncart3 from "../../ClickNcartProject/clickncart3.png";
import clickncart4 from "../../ClickNcartProject/clickncart4.png";
import clickncart5 from "../../ClickNcartProject/clickncart5.png";

// imported pictures (Symposium)
import symposium1 from "../../Project1_Symposium/Hello_World.png";
import symposium2 from "../../Project1_Symposium/Symposium.jpg";
import symposium3 from "../../Project1_Symposium/Symposium2.jpg";
import symposium4 from "../../Project1_Symposium/Symposium3.jpg";
import symposium5 from "../../Project1_Symposium/Symposium4.jpg";

// imported pictures (Stealth and Steal)
import SAS from "../../Project2_StealAndStealth/Screenshot_2025-06-25_073038.png.png";
import SAS1 from "../../Project2_StealAndStealth/1.png";
import SAS2 from "../../Project2_StealAndStealth/2.png";
import SAS3 from "../../Project2_StealAndStealth/3.png";
import SAS4 from "../../Project2_StealAndStealth/Saturday_GameDev_Designing_Level2.png";
import SAS5 from "../../Project2_StealAndStealth/Thursday_GameDev.png";
import SAS6 from "../../Project2_StealAndStealth/Tuesday_GameDev4.png";

//Todo List App
import TodoList from "../../Todo_App/Screenshot 2025-09-01 102701.png";
import TodoList2 from "../../Todo_App/Screenshot 2025-09-01 102802.png";
import TodoList3 from "../../Todo_App/Screenshot 2025-09-01 102825.png";

// imported pictures (movie list)
import MovieL from "../../MovieList/M1.png";
import MovieL2 from "../../MovieList/M2.png";

function FeaturedProject() {
  const [openImage, setOpenImage] = useState(null);
  const [zoomSrc, setZoomSrc] = useState(null);
  const [prevOverflow, setPrevOverflow] = useState("");
  const closeModal = () => setOpenImage(null);

  const openZoom = (img) => {
    setPrevOverflow(document.body.style.overflow || "");
    setZoomSrc(img);
    // lock background scroll while zoomed
    document.body.style.overflow = "hidden";
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  };
  const closeZoom = () => {
    setZoomSrc(null);
    document.body.style.overflow = prevOverflow || "";
  };

  useEffect(() => {
    return () => {
      document.body.style.overflow = prevOverflow || "";
    };
  }, [prevOverflow]);

  const projects = [
    // Todo List App
    {
      icon: TodoList,
      title: "Task App",
      description:
        "A simple and intuitive To-Do List app that helps you stay organized and productive. Easily add, edit, and check off tasks, set priorities, and manage your daily goals all in one place.",
      longDescription:
        "Stay on top of your tasks with this lightweight To-Do List app. Keep track of what needs to be done, organize your day, and boost productivity with a clean and simple interface.",
      showcaseImages: [TodoList2, TodoList3],
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
    },

    // Steal and Stealth Project Section
    {
      icon: SAS,
      title: "Stealth & Steal (Internship Project)",
      description:
        "Designing engaging game worlds with intuitive UI, creative level layouts, smooth character animations, and interactive scripts.",
      longDescription:
        "Game development involves planning, designing mechanics and art, developing systems, testing, publishing, and ongoing support.",
      showcaseImages: [SAS1, SAS2, SAS3, SAS4, SAS5, SAS6],

      features: [
        "Engaging UI",
        "Smooth Animations",
        "Level Design",
        "Interactive Scripts",
      ],
      tags: [
        { name: "C#", icon: "devicon-csharp-plain colored" },
        { name: "Java", icon: "fa-brands fa-java", color: "#f89820" },
        { name: "Unity", icon: "fa-brands fa-unity", color: "#000000" },
        { name: "Figma", icon: "devicon-figma-plain", color: "#F24E1E" },
      ],
      gradient: "linear-gradient(to bottom right, #bbf7d0, #ecfdf5)",
      iconColor: "#16a34a",
      status: "Completed",
      videoLink:
        "https://drive.google.com/file/d/1Rn2wyCL5KzcacdYUZ_5eZEgCqjyn2sBe/preview",
    },

    //Hello World Project Section
    {
      icon: symposium1,
      title: "Hello World (Capstone Project)",
      description:
        "A 2D programming game that introduces the fundamentals of Java and C#, helping students bridge the gap between theory and practical application. Featuring fun and engaging gameplay with vibrant 2D art design.",
      longDescription:
        "This 2D programming game is an interactive learning platform designed to teach the fundamentals of Java and C#. By solving coding challenges and engaging with creative puzzles, players bridge the gap between theory and practice while enjoying vibrant 2D visuals and fun gameplay.",
      showcaseImages: [symposium2, symposium3, symposium4, symposium5],
      features: [
        "A built-in coding console for writing, testing, and debugging code in real-time",
        "Engaging puzzles and challenges that reinforce programming concepts  ",
        "Lessons and hints to guide players through Java and C# fundamentals  ",
        "Progressive levels that increase in difficulty to match player growth",
        "A scoring and reward system to motivate continuous learning",
      ],
      tags: [
        { name: "C#", icon: "devicon-csharp-plain colored" },
        { name: "Java", icon: "fa-brands fa-java", color: "#f89820" },
        { name: "Figma", icon: "devicon-figma-plain", color: "#F24E1E" },
      ],
      gradient: "linear-gradient(to bottom right, #e9d5ff, #f5f3ff)",
      iconColor: "#a855f7",
      status: "Completed",
      videoLink:
        "https://drive.google.com/file/d/151lph_ZsbBtpmYkOdu5aeguLlSme9gC4/preview",
    },
    // StreamX (MovieList) Project
    {
      icon: MovieL,
      title: "StreamX",
      description:
        "StreamX is a modern movie listing platform that allows users to browse, search, and explore the latest films with an elegant and user-friendly interface.",
      longDescription:
        "I created this movie list project to enhance my skills in Tailwind CSS, React, and working with APIs. StreamX is a developing movie streaming and listing web app that dynamically fetches and displays films with posters, covers, ratings, and detailed banners in a cinematic layout. This project includes some functionality to help me improve my skills, but it is just a sample project and is not yet fully complete.",
      showcaseImages: [MovieL, MovieL2],
      title2_sub:
        "A movie discovery website featuring trending films, detailed movie banners, and smooth navigation — built for a modern streaming experience. While still in progress, it already includes trending titles, genre navigation, and search, with upcoming features like smooth transitions, pagination, and an enhanced watchlist.",
      features: [
        "Dynamic Movie Banner",
        "Search Bar",
        "Genre Navigation",
        "Responsive Design",
        "Cinematic Hero Section",
      ],
      tags: [
        { name: "React", icon: "fa-brands fa-react", color: "#61dafb" },
        { name: "Tailwind", icon: "devicon-tailwindcss-original colored" },
      ],
      gradient: "linear-gradient(to bottom right, #dbeafe, #eff6ff)",
      iconColor: "#3b82f6",
      status: "Done",
      projectLink: "https://k-rion.github.io/Movie-List/",
    },

    // ClickNCart Project
    {
      icon: clickncart1,
      title: "ClickNcart",
      description:
        "Modern shopping experience with clean UI and seamless checkout process.",
      longDescription:
        "A comprehensive e-commerce solution built with modern web technologies. This project was created to practice my skills in HTML and CSS, so some pages are unavailable. It features a clean, intuitive interface designed to make online shopping effortless for users while providing powerful management tools for administrators.",
      showcaseImages: [clickncart2, clickncart3, clickncart4, clickncart5],
      title2_sub:
        "This project features a user-friendly interface for an e-commerce platform, designed to deliver a smooth and enjoyable shopping experience. The clean and minimalist layout helps users focus on products without unnecessary distractions.",
      features: [
        "Responsive Design",
        "Admin Dashboard",
      ],
      tags: [
        { name: "React", icon: "fa-brands fa-react", color: "#61dafb" },
        { name: "HTML", icon: "fa-brands fa-html5", color: "#e34f26" },
        { name: "CSS", icon: "fa-brands fa-css3-alt", color: "#1572b6" },
      ],
      gradient: "linear-gradient(to bottom right, #dbeafe, #eff6ff)",
      iconColor: "#3b82f6",
      status: "Done",
      note: "it is currently designed for web only (not yet optimized for small-screen devices).",
      projectLink: "https://k-rion.github.io/ClickNcart/",
    },
  ];

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

                  <span
                    className={`project-status ${project.status
                      .toLowerCase()
                      .replace(" ", "-")}`}
                  >
                    {project.status}
                  </span>
                </div>

                {/* View Button */}
                <button
                  className="view-btn"
                  onClick={() => setOpenImage(project)}
                >
                  View
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Modal */}
        {openImage &&
          ReactDOM.createPortal(
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
                  <i className="fa-solid fa-xmark"></i>
                </button>

                {/* Title + Short Description */}
                <div className="first-layer">
                  <h1 className="modal-title">{openImage.title}</h1>
                  <p className="modal-sub">{openImage.longDescription}</p>
                </div>

                {/* Project Overview */}
                {openImage.title2_sub && (
                  <div className="section">
                    <h2 className="sec2-modal-title">Project Overview</h2>
                    <p className="modal-sub">{openImage.title2_sub}</p>
                  </div>
                )}

                {/* Project Showcase */}
                <div className="section showcase">
                  <h2 className="sec2-modal-title">Project Showcase</h2>
                  <div className="showcase-grid">
                    {/* Add images if available */}
                    {openImage.showcaseImages?.map((img, i) => (
                      <img
                        className="showcase-img"
                        key={i}
                        src={img}
                        alt={`Project Showcase ${i + 1}`}
                        onClick={() => openZoom(img)}
                        style={{ curso: "zoom-in" }}
                      />
                    ))}
                  </div>
                </div>

                {openImage.note && (
                  <div className="section">
                    <h2 className="note-text">Note:</h2>
                    <ul>
                      <li>{openImage.note}</li>
                    </ul>
                  </div>
                )}

                {/* Features & Technologies */}
                <div className="section grid-2">
                  <div>
                    <h3 className="sec2-modal-title">Key Features</h3>
                    <ul>
                      {openImage.features.map((f, i) => (
                        <li key={i}>
                          <span>•</span> {f}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h3 className="sec2-modal-title">Technologies Used</h3>
                    <div className="tech-tags">
                      {openImage.tags.map((t, i) => (
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
                  <button
                    className="github-btn"
                    onClick={() => window.open(openImage.projectLink, "_blank")}
                  >
                    <i className="fa-solid fa-link"></i> See Project Here!
                  </button>

                  {openImage.videoLink && (
                    <button
                      className="demo-btn"
                      onClick={() => window.open(openImage.videoLink, "_blank")}
                    >
                      <i className="fa-solid fa-up-right-from-square"></i> Video
                    </button>
                  )}
                </div>

                {/* Back Button */}
                <button className="close-btn" onClick={closeModal}>
                  <i className="fa-solid fa-arrow-left"></i> Back to Portfolio
                </button>
              </div>
            </div>,
            document.body
          )}
      </div>

      {zoomSrc &&
        ReactDOM.createPortal(
          <div
            className="overlay-zoom"
            onClick={closeZoom}
            role="dialog"
            arial-modal="true"
          >
            <div className="zoom-wrap" onClick={(e) => e.stopPropagation()}>
              <button
                className="zoom-close"
                onClick={closeZoom}
                arial-label="Close Zoom"
              >
                <i className="fa-solid fa-xmark"></i>
              </button>
              <img
                src={zoomSrc}
                alt="Zoomed Showcase"
                className="zoomed-image"
              />
            </div>
          </div>,
          document.body
        )}
    </section>
  );
}

export default FeaturedProject;
