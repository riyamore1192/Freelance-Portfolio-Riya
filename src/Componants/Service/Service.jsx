import React from 'react'

const services = [
    {
        id: 1,
        title: "Figma to React Conversion",
        description:
            "I convert your Figma designs into pixel-perfect, fully responsive React websites with clean and reusable code."
    },
    {
        id: 2,
        title: "Landing Page Development",
        description:
            "Modern, fast, and responsive landing pages built using React, tailored for startups and small businesses."
    },
    {
        id: 3,
        title: "Portfolio & Business Websites",
        description:
            "Professional multi-page websites designed to showcase your brand and services effectively."
    },
    {
        id: 4,
        title: "UI Bug Fixing & Improvements",
        description:
            "Fix layout issues, responsiveness problems, and frontend bugs quickly and efficiently."
    },
    {
        id: 5,
        title: "Figma Website Design",
        description:
            "Modern and clean website designs created in Figma, focused on user experience and conversion."
    }
]

const Services = () => {
    return (
        <section id="service" className="py-16 px-6 md:px-12 lg:px-24 bg-gray-900 text-white">

            {/* Heading */}
            <div className="text-center mb-12">
                <h2 className="text-4xl md:text-5xl font-bold">My Services</h2>
                <div className="w-24 h-1 bg-[#8245ec] mx-auto mt-3"></div>
            </div>

            {/* Services Grid */}
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-2 max-w-5xl mx-auto">
                {services.map((service) => (
                    <div
                        key={service.id}
                        className="bg-gray-800 p-6 rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300"
                    >
                        <h3 className="text-xl font-semibold mb-3 text-[#8245ec]">
                            {service.title}
                        </h3>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            {service.description}
                        </p>
                    </div>
                ))}
            </div>

        </section>
    )
}

export default Services