
import React from 'react'

const About = () => {
  return (
    <section
      id="about"
      className="py-12 px-6 md:px-12 lg:px-24 font-sans bg-gray-900 text-white"
    >
      <div className="max-w-4xl mx-auto">
        {/* Heading */}
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center md:text-left">
          About Me
        </h1>

        {/* Subtitle */}
        <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-[#8245ec] text-center md:text-left">
          Hi! I'm Riya, a Freelance Frontend Developer
        </h2>

        {/* About content */}
        <ul className="space-y-4 text-base md:text-lg leading-relaxed">
          <li>
            I specialize in converting **Figma designs into responsive React websites**. I focus on creating websites that are not just functional, but **beautiful, fast, and user-friendly**.
          </li>
          <li>
            I am proficient in **HTML, CSS, JavaScript, and React**, and continuously learning new technologies to deliver modern and scalable solutions.
          </li>
          <li>
            I have completed several personal projects and small client projects, including **landing pages, portfolios, and small business websites**, all with **clean, reusable code**.
          </li>
          <li>
            My goal as a freelancer is to help clients bring their **designs to life**, deliver projects quickly, and ensure satisfaction with every website I build.
          </li>
        </ul>
      </div>
    </section>
  )
}

export default About