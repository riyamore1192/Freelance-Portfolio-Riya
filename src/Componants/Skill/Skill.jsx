
import React from 'react'
import Img1 from "../../assets/figma.jpg"
import Img2 from "../../assets/landingpage.jpg"
import Img3 from "../../assets/javascript.png";
import Img6 from "../../assets/bug.jpg"
import Img4 from "../../assets/react.jpg";
import Img5 from "../../assets/RESPONSIVE.jpg";

const skills = [
  {
    id: 1,
    img: Img1,
    name: "Figma to React",
    content: "Convert Figma designs into pixel-perfect React websites."
  },
  {
    id: 2,
    img: Img2,
    name: "Landing Page Development",
    content: "Modern, responsive landing pages for businesses."
  },
  {
    id: 3,
    img: Img4,
    name: "React JS",
    content: "Reusable components & clean frontend architecture."
  },
  {
    id: 4,
    img: Img3,
    name: "JavaScript",
    content: "Dynamic and interactive web functionality."
  },
  {
    id: 5,
    img: Img5,
    name: "Responsive Design",
    content: "Mobile-first & cross-device compatibility."
  },
  {
    id: 6,
    img: Img6,
    name: "UI Bug Fixing",
    content: "Fix layout issues and frontend errors quickly."
  }
]

const Skill = () => {
  return (
    <section id="skills" className="py-12 px-6 md:px-12 lg:px-24 bg-gray-900 text-white">

      {/* Heading */}
      <div className="text-center mb-10">
        <h2 className="text-4xl md:text-5xl font-bold">My Skills</h2>
        <div className="w-24 h-1 bg-[#8245ec] mx-auto mt-3"></div>
      </div>

      {/* Skills Grid */}
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
        {skills.map((sk) => (
          <div
            key={sk.id}
            className="bg-gray-800 p-2 rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300 text-center"
          >
            <img
              src={sk.img}
              alt={sk.name}
              className="w-20 h-25 mx-auto mb-4 object-contain"
            />
            {/* <img
              src={sk.img}
              alt={sk.name}
              className="w-14 h-14 mx-auto mb-4 object-contain"
            /> */}
            <h3 className="text-xl font-semibold mb-2">{sk.name}</h3>
            <p className="text-gray-400 text-sm">{sk.content}</p>
          </div>
        ))}
      </div>

    </section>
  )
}

export default Skill