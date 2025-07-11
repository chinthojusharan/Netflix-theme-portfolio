import React, { useState } from "react";

const AddProject = () => {
  const [formData, setFormData] = useState({
    title: "",
    slug: "",
    description: "",
    fullDescription: "",
    techStack: "",
    github: "",
    live: "",
    image: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:5000/projects", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        alert("✅ Project added successfully!");
        setFormData({
          title: "",
          slug: "",
          description: "",
          fullDescription: "",
          techStack: "",
          github: "",
          live: "",
          image: "",
        });
      } else {
        alert("❌ Failed to add project.");
      }
    } catch (err) {
      console.error(err);
      alert("❌ Error adding project.");
    }
  };

  return (
    <div className="min-h-screen bg-zinc-900 text-white p-10 pt-20">
      <h1 className="text-3xl font-bold mb-6">🎬 Add New Project</h1>
      <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-4 max-w-2xl">
        {[
          ["title", "Project Title"],
          ["slug", "Unique Slug (used in URL)"],
          ["description", "Short Description"],
          ["fullDescription", "Full Description"],
          ["techStack", "Tech Stack (e.g., React, Tailwind CSS)"],
          ["github", "GitHub URL"],
          ["live", "Live Site URL"],
          ["image", "Image URL (hosted image)"],
        ].map(([name, label]) => (
          <input
            key={name}
            name={name}
            value={formData[name]}
            onChange={handleChange}
            placeholder={label}
            className="bg-zinc-800 rounded p-3 outline-none border border-zinc-700"
            required
          />
        ))}

        <button
          type="submit"
          className="bg-red-600 hover:bg-red-700 py-3 px-6 rounded text-lg font-semibold"
        >
          Add Project
        </button>
      </form>
    </div>
  );
};

export default AddProject;
