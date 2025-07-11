import React from "react";
import { Link } from "react-router-dom";
import projectData from "../data/projectData";
import { useNavigate } from "react-router-dom";
import { FaEnvelope, FaLinkedin, FaTwitter } from "react-icons/fa";

const Developer = () => {
  const projects = projectData;
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-zinc-900 to-black text-white px-6 py-10 pt-20">
      {/* Hero Title */}

      <h1 className="text-center text-5xl sm:text-6xl font-extrabold text-white tracking-wide mb-16">
        <span className="text-red-600">Developer</span> View 👨‍💻
      </h1>

      {/* About Me Section */}

      <div className="bg-zinc-950  text-white min-h-screen p-10 pt-10">
        {/* About Section */}
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-red-600">
            About Me
          </h1>
          <p className="text-zinc-300 text-lg leading-relaxed">
            I'm{" "}
            <span className="text-white font-semibold">Sharan Chinthoju</span>,
            a passionate and creative full-stack web developer who loves
            building modern, interactive, and clean web experiences. With a
            strong foundation in the MERN stack, I enjoy turning ideas into
            digital reality.
          </p>

          <p className="text-zinc-400 mt-4 text-base">
            From building clones like Netflix and Spotify to AI-powered apps
            like Chef Claude, I constantly strive to improve and keep my code
            elegant and purposeful. When I'm not coding, I'm likely exploring
            design trends or polishing my projects.
          </p>
        </div>




        {/* Projects Section */}
        <section className="mb-10 mx-auto text-center pt-28">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-red-600">
            Projects
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {projects.map((project) => (
              <Link to={`/projects/${project.slug}`} key={project.slug}>
                <div className="backdrop-blur bg-white/5 border border-zinc-800 p-4 rounded-xl shadow-lg hover:scale-[1.03] hover:shadow-[0_0_20px_4px_rgba(239,68,68,0.5)] transition-all duration-300">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="rounded-lg mb-4 h-40 w-full object-cover border border-zinc-700"
                  />
                  <h3 className="text-xl font-semibold mb-1">
                    {project.title}
                  </h3>
                  <p className="text-sm text-zinc-400 mb-3">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 text-xs text-zinc-300 mb-4">
                    {project.techStack.split(",").map((tech, i) => (
                      <span
                        key={i}
                        className="bg-red-600/20 px-2 py-1 rounded-full"
                      >
                        {tech.trim()}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4 text-sm">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        className="text-blue-400 hover:underline"
                      >
                        GitHub
                      </a>
                    )}
                    {project.demo && project.demo !== "" && (
                      <a
                        href={project.demo}
                        target="_blank"
                        className="text-green-400 hover:underline"
                      >
                        Live Demo
                      </a>
                    )}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Tech Stack */}
        <div className="max-w-4xl mx-auto mt-12">
          <h2 className="text-3xl font-semibold mb-4 text-red-500 text-center">
            Tech Stack I Use
          </h2>
          <div className="flex flex-wrap justify-center gap-6 text-sm text-zinc-200">
            <span className="bg-zinc-800 px-4 py-2 rounded-xl">HTML</span>
            <span className="bg-zinc-800 px-4 py-2 rounded-xl">CSS</span>
            <span className="bg-zinc-800 px-4 py-2 rounded-xl">JavaScript</span>
            <span className="bg-zinc-800 px-4 py-2 rounded-xl">
              TailwindCSS
            </span>
            <span className="bg-zinc-800 px-4 py-2 rounded-xl">React</span>
            <span className="bg-zinc-800 px-4 py-2 rounded-xl">Node.js</span>
            <span className="bg-zinc-800 px-4 py-2 rounded-xl">Express</span>
            <span className="bg-zinc-800 px-4 py-2 rounded-xl">MongoDB</span>
            <span className="bg-zinc-800 px-4 py-2 rounded-xl">OpenAI API</span>
            <span className="bg-zinc-800 px-4 py-2 rounded-xl">GitHub</span>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <section className="">
        <div className="bg-zinc-950 text-white py-16 px-6" id="contact">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-red-600 mb-6">
              Get in Touch
            </h2>
            <p className="text-zinc-300 mb-10 text-lg">
              Whether you want to discuss a project, ask a question, or just say
              hi — I'm always open to connecting!
            </p>

            <div className="flex flex-col md:flex-row items-center justify-center gap-8 text-zinc-300 text-base">
              {/* Email */}
              <a
                href="mailto:your.email@example.com"
                className="flex items-center gap-2 hover:text-red-500 transition"
              >
                <FaEnvelope className="text-lg" />
                chinthojusharan@gmail.com
              </a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/sharan-chinthoju-16067331b/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-red-500 transition"
              >
                <FaLinkedin className="text-lg" />
                LinkedIn
              </a>

              {/* Twitter */}
              <a
                href="https://x.com/chinthojusharan"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-red-500 transition"
              >
                <FaTwitter className="text-lg" />
                Twitter
              </a>
            </div>
          </div>
        </div>

        {/* Optional Form (can be removed) */}
        <form
          action="https://formspree.io/f/mvgrevyw" // ← Replace with your own Formspree URL
          method="POST"
          className="mt-5 max-w-xl mx-auto space-y-4"
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className="w-full bg-zinc-800 p-3 rounded-md outline-none"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            className="w-full bg-zinc-800 p-3 rounded-md outline-none"
          />
          <textarea
            name="message"
            rows="4"
            placeholder="Your Message"
            required
            className="w-full bg-zinc-800 p-3 rounded-md outline-none resize-none"
          />
          <div className="flex justify-center">
            <button
              type="submit"
              className="bg-red-600 hover:bg-red-700 px-6 py-2 rounded-md text-white font-semibold transition"
            >
              Send Message
            </button>
          </div>
        </form>
      </section>
    </div>
  );
};

export default Developer;
