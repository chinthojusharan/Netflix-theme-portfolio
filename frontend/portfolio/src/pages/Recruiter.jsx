import React from 'react';
import { FaEnvelope, FaLinkedin, FaTwitter } from "react-icons/fa";

const skills = [
  "HTML", "CSS","JavaScript", "React", "Node.js", "Express", "MongoDB", "Tailwind CSS",  "Git", "REST APIs"
];

const Recruiter = () => {
  return (
    <div className="min-h-screen bg-zinc-950 text-white px-6 py-10 pt-20">
      {/* Title */}
      <h1 className="text-5xl sm:text-6xl text-center font-bold mb-16 tracking-wide pt-1">
        <span className="text-green-500">Recruiter</span> View 🧑‍💼
      </h1>

      {/* Resume */}
      <section className="mb-20 text-center">
        <h2 className="text-3xl font-semibold mb-4 border-b-2 border-zinc-700 inline-block">Resume</h2>
        <p className="text-zinc-400 mb-4">Download my resume directly:</p>
        <a
          href="/Sharan_Resume.pdf"
          download
          className="inline-block px-6 py-3 bg-green-600 hover:bg-green-700 transition rounded-full text-white font-semibold"
        >
          Download Resume
        </a>
      </section>

      {/* Skills */}
      <section className="mb-20 text-center">
        <h2 className="text-3xl font-semibold mb-6 border-b-2 border-zinc-700 inline-block">Tech Skills</h2>
        <div className="flex flex-wrap justify-center gap-4 mt-4">
          {skills.map((skill, idx) => (
            <span
              key={idx}
              className="bg-green-700/20 border border-green-600 px-4 py-2 rounded-full text-sm font-medium text-green-300"
            >
              {skill}
            </span>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section className="text-center">
        <h2 className="text-3xl font-semibold mb-4 border-b-2 border-zinc-700 inline-block">Contact</h2>
        <p className="text-zinc-300 mb-2">📧 chinthojusharan@gmail.com</p>
        <p className="text-zinc-300">🔗 <a href="https://www.linkedin.com/in/sharan-chinthoju-16067331b" target="_blank" className="text-blue-400 hover:underline">LinkedIn Profile</a></p>
      </section>
    </div>
  );
};

export default Recruiter;
