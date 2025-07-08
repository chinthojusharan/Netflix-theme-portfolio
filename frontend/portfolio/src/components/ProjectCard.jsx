import React from "react";
import { Link } from "react-router-dom";

function ProjectCard({ project }) {
  return (
    <Link to={`/project/${project.slug}`}>
      <div className="bg-zinc-800 rounded-xl p-4 hover:scale-105 transition cursor-pointer shadow-md">
        <h2 className="text-xl font-bold">{project.title}</h2>
        <p className="text-sm text-gray-400">{project.description}</p>
      </div>
    </Link>
  );
}

export default ProjectCard;
