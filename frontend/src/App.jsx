import { useState } from "react";
import axios from "axios";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Admin from "./Admin";
import "./App.css";

function Portfolio() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [formStatus, setFormStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    setFormStatus("Sending...");

    try {
      const response = await axios.post(
        "http://localhost:5000/api/contact",
        formData
      );

      setFormStatus(response.data.message);

      setFormData({
        name: "",
        email: "",
        message: "",
      });

      setTimeout(() => {
        setFormStatus("");
      }, 5000);
    } catch (error) {
      console.error("Contact error:", error);

      setFormStatus(
        "Failed to send message. Please try again."
      );
    }
  };

  return (
    <div className="portfolio">

      {/* ================= NAVBAR ================= */}

      <nav className="navbar">

        <a href="#home" className="logo">
          Safwana.
        </a>

        <div className="nav-links">

          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#experience">Experience</a>
          <a href="#projects">Projects</a>
          <a href="#education">Education</a>
          <a href="#contact">Contact</a>

        </div>

      </nav>

      {/* ================= HERO ================= */}

      <section id="home" className="hero-section">

        <div className="hero-container">

          <div className="hero-content">

            <p className="small-title">
              Hello, I'm
            </p>

            <h1>
              Safwana
            </h1>

            <h2>
              Computer Science Engineering Student
            </h2>

            <p className="hero-text">
              I am a passionate web development enthusiast
              and aspiring frontend developer interested in
              building modern, responsive websites and
              creating meaningful digital experiences.
            </p>

            <div className="hero-buttons">

              <a
                href="#projects"
                className="primary-btn"
              >
                View My Projects
              </a>

              <a
                href="#contact"
                className="secondary-btn"
              >
                Contact Me
              </a>

            </div>

          </div>

          {/* PROFILE IMAGE */}

          <div className="hero-image">

            <div className="profile-wrapper">

              <img
                src="/profile.jpg"
                alt="Safwana"
                className="profile-image"
              />

            </div>

          </div>

        </div>

      </section>

      {/* ================= ABOUT ================= */}

      <section
        id="about"
        className="section"
      >

        <p className="section-label">
          ABOUT ME
        </p>

        <h2>
          Who I Am
        </h2>

        <p className="about-text">
          I am a final-year Computer Science Engineering
          student with a strong interest in Front-End
          Development and Data Analytics. I have experience
          working with HTML, CSS, JavaScript, React, Python,
          SQL, Power BI, and Microsoft Excel. I enjoy
          creating responsive web applications, learning
          new technologies, and solving real-world problems
          through technology.
        </p>

      </section>

      {/* ================= SKILLS ================= */}

      <section
        id="skills"
        className="section skills-section"
      >

        <div className="section-container">

          <p className="section-label">
            MY SKILLS
          </p>

          <h2>
            Technologies & Tools
          </h2>

          <div className="skills-grid">

            <div className="skill-card">
              <span>HTML5</span>
            </div>

            <div className="skill-card">
              <span>CSS3</span>
            </div>

            <div className="skill-card">
              <span>JavaScript</span>
            </div>

            <div className="skill-card">
              <span>React.js</span>
            </div>

            <div className="skill-card">
              <span>Python</span>
            </div>

            <div className="skill-card">
              <span>SQL</span>
            </div>

            <div className="skill-card">
              <span>Power BI</span>
            </div>

            <div className="skill-card">
              <span>Microsoft Excel</span>
            </div>

            <div className="skill-card">
              <span>Git & GitHub</span>
            </div>

          </div>

        </div>

      </section>

      {/* ================= EXPERIENCE ================= */}

      <section
        id="experience"
        className="section"
      >

        <p className="section-label">
          EXPERIENCE
        </p>

        <h2>
          Internships
        </h2>

        <div className="projects-grid">

          <div className="project-card">

            <div>

              <div className="card-number">
                01
              </div>

              <h3>
                Frontend Development Intern
              </h3>

              <p className="company-name">
                CODSOFT
              </p>

              <p>
                Worked on frontend development tasks and
                built responsive and interactive web
                applications using HTML, CSS, and
                JavaScript.
              </p>

            </div>

            <span>
              HTML / CSS / JavaScript / Git
            </span>

          </div>

          <div className="project-card">

            <div>

              <div className="card-number">
                02
              </div>

              <h3>
                Web Development Intern
              </h3>

              <p className="company-name">
                Oasis Infobyte
              </p>

              <p>
                Completed assigned web development projects
                while gaining practical experience in
                frontend development, responsive design,
                and web technologies.
              </p>

            </div>

            <span>
              Frontend Development
            </span>

          </div>

        </div>

      </section>

      {/* ================= PROJECTS ================= */}

      <section
        id="projects"
        className="section projects-section"
      >

        <p className="section-label">
          MY WORK
        </p>

        <h2>
          Featured Projects
        </h2>

        <div className="projects-grid">

          <div className="project-card">

            <div>

              <div className="card-number">
                01
              </div>

              <h3>
                Kinetrexa Food Delivery
              </h3>

              <p>
                A full-stack food delivery web application
                developed using the MERN stack. It includes
                food browsing, user authentication, cart
                management, checkout, order tracking, and
                an admin dashboard for managing orders.
              </p>

            </div>

            <span>
              MERN Stack
            </span>

          </div>

          <div className="project-card">

            <div>

              <div className="card-number">
                02
              </div>

              <h3>
                Career Quest
              </h3>

              <p>
                A placement preparation platform designed
                to help engineering students prepare for
                company interviews through company-specific
                interview questions and user authentication.
              </p>

            </div>

            <span>
              Node.js / Express / MongoDB
            </span>

          </div>

          <div className="project-card">

            <div>

              <div className="card-number">
                03
              </div>

              <h3>
                Parkinson's Disease Detection
              </h3>

              <p>
                Developed a machine learning and deep
                learning based system for Parkinson's
                disease detection using voice-related
                features and Python-based technologies.
              </p>

            </div>

            <span>
              Python / TensorFlow / Librosa
            </span>

          </div>

          <div className="project-card">

            <div>

              <div className="card-number">
                04
              </div>

              <h3>
                Campus Placement Prediction
              </h3>

              <p>
                Developed a machine learning model to
                predict campus placement outcomes using
                student academic data, preprocessing
                techniques, and model evaluation.
              </p>

            </div>

            <span>
              Python / Machine Learning
            </span>

          </div>

        </div>

      </section>

      {/* ================= EDUCATION ================= */}

      <section
        id="education"
        className="section education-section"
      >

        <div className="section-container">

          <p className="section-label">
            EDUCATION
          </p>

          <h2>
            My Education
          </h2>

          <div className="education-list">

            <div className="education-card">

              <div className="education-year">
                2023 — 2027
              </div>

              <div>

                <h3>
                  B.E. Computer Science Engineering
                </h3>

                <p>
                  Visvesvaraya Technological University
                </p>

                <strong>
                  CGPA: 7.45
                </strong>

              </div>

            </div>

            <div className="education-card">

              <div className="education-year">
                2021 — 2023
              </div>

              <div>

                <h3>
                  Pre-University Course
                </h3>

                <p>
                  Karnataka State Board
                </p>

                <strong>
                  Percentage: 78.8%
                </strong>

              </div>

            </div>

            <div className="education-card">

              <div className="education-year">
                2019 — 2020
              </div>

              <div>

                <h3>
                  SSLC
                </h3>

                <p>
                  Karnataka State Board
                </p>

                <strong>
                  Percentage: 86.24%
                </strong>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* ================= CONTACT ================= */}

      <section
        id="contact"
        className="section contact-section"
      >

        <p className="section-label">
          CONTACT
        </p>

        <h2>
          Let's Connect
        </h2>

        <p className="contact-intro">
          I am open to internships, entry-level
          opportunities, and technical collaborations.
        </p>

        <form
          className="contact-form"
          onSubmit={handleSubmit}
        >

          <div className="form-row">

            <input
              type="text"
              placeholder="Your Name"
              value={formData.name}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  name: e.target.value,
                })
              }
              required
            />

            <input
              type="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  email: e.target.value,
                })
              }
              required
            />

          </div>

          <textarea
            placeholder="Your Message"
            value={formData.message}
            onChange={(e) =>
              setFormData({
                ...formData,
                message: e.target.value,
              })
            }
            required
          ></textarea>

          <button
            type="submit"
            className="primary-btn"
          >
            Send Message
          </button>

          {formStatus && (
            <p className="form-status">
              {formStatus}
            </p>
          )}

        </form>

        <div className="contact-links">

          <a href="mailto:safwana0677@gmail.com">
            Email
          </a>

          <a
            href="https://github.com/safwana0688-beep"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/safwana-sharif"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>

        </div>

      </section>

      {/* ================= FOOTER ================= */}

      <footer>

        <p>
          © 2026 Safwana. All Rights Reserved.
        </p>

      </footer>

    </div>
  );
}

/* ================= ROUTING ================= */

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Portfolio />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

