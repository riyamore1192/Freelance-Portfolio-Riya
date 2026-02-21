
import React from 'react'
import img1 from "../../assets/oo.jpeg"

const Home = () => {
  return (
    <section
      id="home"
      className="py-4 px-[7vw] md:px-[7vw] lg:px-[20vw] font-sans mt-16 md:mt-24 lg:mt-32"
    >
      <div className="flex flex-col md:flex-row justify-center items-center">
        {/* Left Side */}
        <div className="md:w-1/2 text-center md:text-left mt-8 md:mt-0">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2 leading-tight">
            Hi, I’m Riya
          </h1>

          {/* Updated Skills Heading */}
          <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4 text-[#8245ec] leading-tight">
            I convert Figma designs into responsive React websites
          </h3>

          {/* Updated Paragraph */}
          <p className="text-base sm:text-lg md:text-lg text-gray-400 leading-relaxed">
            I specialize in turning your Figma designs into **pixel-perfect, responsive React websites**.  
            Whether it’s a landing page, portfolio, or small business site, I deliver **clean, reusable code** and fast performance.
          </p>

          {/* Updated Button */}
          <a
            href="https://1drv.ms/b/c/7fbb082733b8acba/IQBAQZ5TjLsFT64ZO8f6MQ7TAWAP-9X__3MZt2nn7ZcTP-g?e=qWpba3"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-white py-3 px-8 rounded-full mt-5 mb-8 text-lg font-bold transition duration-300 transform hover:scale-105"
            style={{
              background: 'linear-gradient(90deg, #8245ec, #a855f7)',
              boxShadow: '0 0 2px #8245ec, 0 0 2px #8245ec, 0 0 40px #8245ec',
            }}
          >
           View Resume & Projects
          </a>
        </div>

        {/* Right Side */}
        <div className="md:w-1/2 flex md:justify-end">
          <img
            src={img1}
            alt="Riya Portfolio"
            className="w-full h-full rounded-full object-cover drop-shadow-[0_10px_20px_rgba(130,69,236,0.5)]"
          />
        </div>
      </div>
    </section>
  )
}

export default Home