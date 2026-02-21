
import React from "react";
import TODO from "../../assets/todo..png";
import TOUR from "../../assets/tour.jpg";
import SAMRT from '../../assets/smart.png'

const projects = [
  {
    id: 1,
    title: "To-Do List Application",
    image: TODO,
    description:
      "A fully responsive task management app built with React. Includes task creation, update, delete, and filtering functionality.",
    tech: "React • JavaScript • CSS",
    github: "https://github.com/riyamore1192/To-do-list-app",
  },
  {
    id: 2,
    title: "Tour Booking Website",
    image: TOUR,
    description:
      "A dynamic travel booking website built using React, allowing users to explore destinations and book trips interactively.",
    tech: "React • JavaScript • Responsive UI",
    github: "https://github.com/riyamore1192/Tour-web-clone",
  },
  {
    id: 3,
    title: "SmartQuiz app",
    image: SAMRT,
    live_link: "https://my-quizmaster-app.netlify.app/",
    description: "An interactive quiz app built with React and JavaScript, designed to provide smooth performance, instant feedback, and dynamic score calculation.",
    tech: "react • reaposnsive • Tailwind css",
    github: "https://github.com/riyamore1192/my-Quiz-app",
  }
];

const Project = () => {
  return (
    <section
      id="projects"
      className="py-20 px-6 md:px-12 lg:px-24 bg-gray-900 text-white"
    >
      {/* Section Heading */}
      <div className="text-center mb-14">
        <h2 className="text-4xl md:text-5xl font-bold">My Projects</h2>
        <div className="w-24 h-1 bg-[#8245ec] mx-auto mt-4"></div>
        <p className="text-gray-400 mt-6 max-w-2xl mx-auto text-base md:text-lg">
          A selection of frontend projects showcasing my React development,
          responsive design, and clean UI implementation skills.
        </p>
      </div>

      {/* Projects Grid */}
      <div className="grid gap-10 sm:grid-cols-1 md:grid-cols-2 max-w-6xl mx-auto">
        {projects.map((project) => (
          <div
            key={project.id}
            className="bg-[#111827] rounded-2xl border-2 border-blue-950 overflow-hidden shadow-lg hover:shadow-purple-500/40 hover:-translate-y-2 transition-all duration-300"
          >
            {/* Image */}
            {/* <img
              src={project.image}
              alt={project.title}
              className="w-30 h-20 p-4 mt-4 object-fill"
            /> */}
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 p-7 sm:h-52 md:h-60 lg:h-64 object-cover object- rounded-xl"
            />


            {/* Content */}
            <div className="p-6">
              <h3 className="text-2xl font-semibold mb-3 text-[#8245ec]">
                {project.title}
              </h3>

              <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                {project.description}
              </p>

              <p className="text-gray-500 text-sm mb-6">
                {project.tech}
              </p>

              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-6 py-2 rounded-full bg-gradient-to-r from-[#8245ec] to-[#a855f7] text-white text-sm font-semibold hover:scale-105 transition-transform"
              >
                View Code
              </a>
              <a
                href={project.live_link}
                target="_blank"
                className="inline-block ml-3 px-6 py-2 rounded-full bg-gradient-to-r from-[#8245ec] to-[#a855f7] text-white text-sm font-semibold hover:scale-105 transition-transform">
                Live Demo
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Project;