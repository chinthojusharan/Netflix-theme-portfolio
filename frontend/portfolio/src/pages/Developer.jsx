import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Developer = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const res = await fetch('http://localhost:5000/api/projects');
        const data = await res.json();
        setProjects(data);
      } catch (err) {
        console.error('Error fetching projects:', err);
      }
    };

    fetchProjects();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-zinc-900 to-black text-white px-6 py-10 pt-20">
      {/* Hero Title */}
      <h1 className="text-center text-5xl sm:text-6xl font-extrabold text-white tracking-wide mb-16">
        <span className="text-red-600">Developer</span> Mode 👨‍💻
      </h1>

      {/* Projects Section */}
      <section className="mb-20">
        <h2 className="text-3xl font-bold mb-6 border-b-2 border-zinc-700 inline-block">Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project) => (
            <Link to={`/project/${project.slug}`} key={project._id}>
              <div className="backdrop-blur bg-white/5 border border-zinc-800 p-4 rounded-xl shadow-lg hover:scale-[1.03] hover:shadow-[0_0_20px_4px_rgba(239,68,68,0.5)] transition-all duration-300">
                <img
                  src={project.image}
                  alt={project.title}
                  className="rounded-lg mb-4 h-40 w-full object-cover border border-zinc-700"
                />
                <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
                <p className="text-sm text-zinc-400 mb-3">{project.description}</p>
                <div className="flex flex-wrap gap-2 text-xs text-zinc-300 mb-4">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="bg-red-600/20 px-2 py-1 rounded-full">{tech}</span>
                  ))}
                </div>
                <div className="flex gap-4 text-sm">
                  <a href={project.github} target="_blank" className="text-blue-400 hover:underline">GitHub</a>
                  <a href={project.demo} target="_blank" className="text-green-400 hover:underline">Live Demo</a>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* About Me Section */}
      <section className="mb-20">
        <h2 className="text-3xl font-bold mb-4 border-b-2 border-zinc-700 inline-block">About Me</h2>
        <p className="text-zinc-300 leading-relaxed max-w-4xl">
          Hey, I'm <span className="text-red-500 font-medium">Sharan</span> — a full-stack web developer obsessed with creating cool, cinematic UIs like this one. I enjoy turning ideas into interactive websites using the MERN stack. My goal? Build apps that people love to use.
        </p>
      </section>

      {/* Contact Section */}
      <section className="mb-10">
        <h2 className="text-3xl font-bold mb-4 border-b-2 border-zinc-700 inline-block">Contact</h2>
        <p className="text-zinc-300 mb-2">📧 <span className="text-white">chinthojusharan@gmail.com</span></p>
        <p className="text-zinc-300">🔗 <a href="https://www.linkedin.com/in/sharan-cchinthoju-16067331b" target="_blank" className="text-blue-400 hover:underline">LinkedIn Profile</a></p>
      </section>
    </div>
  );
};

export default Developer;
