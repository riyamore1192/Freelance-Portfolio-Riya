import { useState } from 'react'
import Navbar from './Componants/Navbar/Navbar'
import Home from './Componants/Home/Home'
import About from './Componants/About/About'
import Skill from './Componants/Skill/Skill'
import Project from './Componants/Project/Project'
import Contact from './Componants/Contact/Contact'
import Services from './Componants/Service/Service'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="bg-[#0c0a2c]">

      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px]
       [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>

      <div className="relative py-4">
        <Navbar />
        <Home />
        <About />
        <Skill />
        <Services />
        <Project />
        <Contact />
      </div>
    </div>
  )
}

export default App
