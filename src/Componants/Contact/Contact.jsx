
import React, { useState, useRef } from "react";

const Contact = () => {
  const form = useRef();
  const [isSent, setIsSent] = useState(false);

  return (
    <section
      id="contact"
      className="py-20 px-6 md:px-12 lg:px-24 bg-gray-900 text-white"
    >
      {/* Heading */}
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold">
          Let’s Work Together
        </h2>
        <div className="w-24 h-1 bg-[#8245ec] mx-auto mt-4"></div>
        <p className="text-gray-400 mt-6 max-w-2xl mx-auto text-base md:text-lg">
          Have a Figma design ready? Need a responsive React website?
          I’m available for freelance projects and would love to help bring your ideas to life.
        </p>
      </div>

      {/* Contact Form */}
      <div className="max-w-xl mx-auto bg-[#111827] p-8 rounded-2xl shadow-lg border border-gray-700">
        <h3 className="text-2xl font-semibold text-center text-[#8245ec] mb-6">
          Send Me a Message 🚀
        </h3>

        <form ref={form} className="flex flex-col space-y-5">
          <input
            type="text"
            name="user_name"
            placeholder="Your Name"
            required
            className="p-3 rounded-md bg-[#1f2937] text-white border border-gray-600 focus:outline-none focus:border-[#8245ec]"
          />

          <input
            type="email"
            name="user_email"
            placeholder="Your Email"
            required
            className="p-3 rounded-md bg-[#1f2937] text-white border border-gray-600 focus:outline-none focus:border-[#8245ec]"
          />

          <input
            type="text"
            name="subject"
            placeholder="Project Type (Landing Page / Figma to React / etc.)"
            required
            className="p-3 rounded-md bg-[#1f2937] text-white border border-gray-600 focus:outline-none focus:border-[#8245ec]"
          />

          <textarea
            name="message"
            placeholder="Tell me about your project..."
            rows="4"
            required
            className="p-3 rounded-md bg-[#1f2937] text-white border border-gray-600 focus:outline-none focus:border-[#8245ec]"
          />

          <button
            type="submit"
            className="mt-4 py-3 rounded-full font-semibold text-white transition transform hover:scale-105"
            style={{
              background: "linear-gradient(90deg, #8245ec, #a855f7)",
            }}
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;