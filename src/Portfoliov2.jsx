import React, { useEffect, useState } from "react";
import './Portfoliov2.css'

//import image
import MyPic from "../public/My Photo/MyPic.jpeg"
import aboutMePic from "../public/My Photo/1000115656.jpg"
import LogoLight from "../public/My Photo/K-removebg-preview.png"
import LogoDark from "../public/My Photo/K__1_-removebg-preview.png" 
import FeaturedProject from "./Components/Featured Project/FeaturedProject";
import SkillAndServices from "./Components/SkillsAndServices/SkillAndServices";
import Contact from "./Components/Contact/Contact";
import Typewriter from "./Components/TypeWriter/Typewriter";
import Education from "./Components/Education/Education";


function App() {

  useEffect(() => {
    // Smooth scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener("click", function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute("href"));
        if (target) {
          target.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      });
    });

    // Slide/Fade animations
    const observerOptions = { threshold: 0.1, rootMargin: "0px 0px -50px 0px" };

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    }, observerOptions);

    document.querySelectorAll(".fade-in, .slide-left, .slide-right").forEach(el => observer.observe(el));


      // Active nav highlight
      const handleScroll = () => {
        const sections = document.querySelectorAll("section[id]");
        const navLinks = document.querySelectorAll("nav a[href^='#']");
        const navbar = document.querySelector(".nav-right a");
        const navHeight = navbar ? navbar.offsetHeight : 0;
        let current = "";

        sections.forEach(section => {
          const sectionTop = section.offsetTop - navHeight - 10;
          if (window.scrollY >= sectionTop) current = section.getAttribute("id");
        });

        navLinks.forEach(link => {
          link.classList.remove("active");
          if (link.getAttribute("href") === `#${current}`) {
            link.classList.add("active");
          }
        });
      };

      window.addEventListener("scroll", handleScroll);
      handleScroll();
      return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Toggle Light and Dark
    const [darkMode, setDarkMode] = useState(true);

    useEffect(() => {
      if (darkMode) {
        document.body.classList.add("dark");
        localStorage.setItem("theme", "dark");
      } else {
        document.body.classList.remove("dark");
        localStorage.setItem("theme", "light");
      }
    }, [darkMode]);

    // Load saved theme when app starts 
    useEffect(() => {
      const savedTheme = localStorage.getItem("theme");
      if (savedTheme === "dark") {
        setDarkMode(true);
      }
    }, []);

  return (
    <div>
      <div className="portfolio">
      {/* Navigation */}
        <nav className="navbar">
          <div className="container nav-content">
            <div className="logo">
              <div className="nav-left">
                <a href="/">
                <img 
                  src={darkMode ? LogoDark : LogoLight} 
                  alt="My Logo" 
                  className="logo-image"
                />
                </a>
              </div>
            </div>

            <div className="nav-links">
            <div className="nav-right">
              <a href="#home">Home</a>
              <a href="#about">About</a>
              <a href="#projects">Projects</a>
              <a href="#skills">Skills</a>
              <a href="#contact">Contact</a>
            </div>
            </div>

            {/* Dark Mode Toggle */}
            <div className='dark_mode'>
              <input
                className='dark_mode_input'
                type='checkbox'
                id='darkmode-toggle'
                checked={darkMode}
                onChange={() => setDarkMode(!darkMode)}
              />
              <label className='dark_mode_label' for='darkmode-toggle'>
              </label>
            </div>        
        </div>
      </nav>

      {/* Hero */}
      <section id="home" className="hero fade-in">
        <div className="container hero-grid">

          <div className="hero-image">
            <img src={MyPic} alt="Portrait" />
          </div>

          <div className="info-section">
            <h1>
              Creative <span className="highlight">Designer</span> & Developer
            </h1>
            <p>
              <Typewriter
                texts={[
                  "I craft beautiful digital experiences that combine thoughtful design with clean, efficient code."
                ]}
              />
            </p>
            <div className="btn-group">
              <a href="#projects" className="btn primary">View My Work</a>
              <a href="#contact" className="btn outline">Get In Touch</a>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="about">
        <div className="container about-grid">
          <div className="about-image slide-right">
            <img src={aboutMePic} alt="About Me Picture Portrait" />
          </div>
          <div className="slide-left">
            <h2 className="aboutme-title">About Me</h2>
            <p className="aboutme-sub">
              I'm a passionate web designer and developer game developer to 
              creating digital solutions that make a difference.
            </p>
            <p className="aboutme-sub">
              When I'm not coding or designing, you'll find me exploring new
              technologies, reading design blogs, or enjoying coffee while
              sketching new ideas.
            </p>
          </div>
        </div>
      </section>

      {/* Education */}
      <Education darkMode={darkMode}/>

      {/* Projects */}
      <FeaturedProject darkMode={darkMode}/>

      {/* Skills */}
      <SkillAndServices darkMode={darkMode}/>

      {/* Contact */}
      <Contact darkMode={darkMode}/>

      {/* Footer */}
      <footer className="footer">
        <p>&copy; {new Date().getFullYear()} Kurt Rion Portfolio</p>
      </footer>
    </div>
    
    </div>
  )
}

export default App
