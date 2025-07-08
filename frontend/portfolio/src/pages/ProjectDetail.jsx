import React from "react";
import { useParams } from "react-router-dom";
import projectData from "../data/projectData"; // You'll create this file next

const ProjectDetail = () => {
  const { slug } = useParams();
  const project = projectData.find((p) => p.slug === slug);

  if (!project) {
    return <div className="text-white p-10">Project not found 😢</div>;
  }

  return (
    <div className="text-white p-10 min-h-screen bg-zinc-900 pt-24">
      <h1 className="text-4xl font-bold mb-4">{project.title}</h1>
      <p className="text-lg mb-4">{project.fullDescription}</p>
      <div className="mb-4">
        <strong>Tech Stack:</strong> {project.techStack}
      </div>
      {project.github && (
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="underline text-blue-400"
        >
          {/* View on GitHub */}
        </a>
      )}
      <div className="flex flex-wrap gap-4 mt-8">
  <a
    href={project.github}
    target="_blank"
    className="bg-zinc-800 text-white border border-zinc-600 px-5 py-2 rounded-lg hover:bg-zinc-700 hover:border-blue-400 transition-all"
  >
    🔗 GitHub
  </a>

  {project.demo ? (
    <a
      href={project.demo}
      target="_blank"
      className="bg-red-600 text-white px-5 py-2 rounded-lg hover:bg-red-700 transition-all"
    >
      🚀 Live Demo
    </a>
  ) : (
    <button
      disabled
      className="bg-zinc-700 text-zinc-400 px-5 py-2 rounded-lg cursor-not-allowed"
    >
      🚫 Demo Not Available
    </button>
  )}
</div>

    </div>
  );
};

export default ProjectDetail;
