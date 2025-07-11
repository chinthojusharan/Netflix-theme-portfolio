import React from "react";
import { useParams } from "react-router-dom"; // or useRouter for Next.js
import projectData from "../data/projectData"; // update path as needed
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
// import Lightbox from "react-image-lightbox";
// import "react-image-lightbox/style.css";
import { useState } from "react";
import "swiper/css";

const ProjectPage = () => {
  const { slug } = useParams(); // or useRouter().query in Next.js
  const project = projectData.find((p) => p.slug === slug);

  if (!project) return <div className="text-white p-10">Project not found</div>;
  // const [photoIndex, setPhotoIndex] = useState(0);
  // const [isOpen, setIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);

  return (
    <div className="bg-zinc-950 text-white min-h-screen pt-16">
      {/* Banner */}
      <div
        className="w-full h-[60vh] bg-cover bg-center relative"
        style={{ backgroundImage: `url(${project.image})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 to-transparent p-10 flex flex-col justify-end">
          <h1 className="text-5xl font-bold mb-2">{project.title}</h1>
          <p className="text-lg text-zinc-300">{project.description}</p>
        </div>
      </div>

      {/* Details Section */}
      <div className="p-10 max-w-5xl mx-auto">
        <h2 className="text-2xl font-semibold mb-4">📖 Project Overview</h2>
        <p className="text-zinc-300 leading-relaxed mb-6">
          {project.fullDescription}
        </p>

        <h3 className="text-xl font-medium mb-2">🛠 Tech Stack</h3>
        <p className="text-zinc-400 mb-6">{project.techStack}</p>

        <div className="flex gap-6 mb-10">
          <a
            href={project.github}
            target="_blank"
            className="bg-white text-black px-5 py-2 rounded hover:bg-zinc-300 transition"
          >
            GitHub
          </a>
          <a
            href={project.demo}
            target="_blank"
            className="bg-red-600 text-white px-5 py-2 rounded hover:bg-red-700 transition"
          >
            Live Site
          </a>
        </div>

        {/* Optional Additions */}
        {project.features && (
          <>
            <h3 className="text-xl font-medium mb-2">✨ Features</h3>
            <ul className="list-disc list-inside text-zinc-400 mb-6">
              {project.features.map((feature, i) => (
                <li key={i}>{feature}</li>
              ))}
            </ul>
          </>
        )}

        {project.screenshots && (
          <>
            <h3 className="text-xl font-medium mb-2">🖼 Screenshots</h3>
            <Swiper
              modules={[Autoplay]}
              spaceBetween={20}
              slidesPerView={1}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              loop={true}
              speed={1800}
              breakpoints={{
                640: { slidesPerView: 1 },
                768: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
              }}
            >
              {project.screenshots.map((url, i) => (
                <SwiperSlide key={i}>
                  <div
                    onClick={() => setSelectedImageIndex(i)}
                    className="cursor-pointer w-full h-80 bg-zinc-800 flex items-center justify-center rounded-xl overflow-hidden"
                  >
                    <img
                      src={url}
                      alt={`Screenshot ${i + 1}`}
                      className="h-full object-contain"
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
            {selectedImage && (
              <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50">
                <img
                  src={selectedImage}
                  alt="Full Screenshot"
                  className="max-h-[90vh] max-w-[90vw] rounded-lg"
                />
                <button
                  onClick={() => setSelectedImage(null)}
                  className="absolute top-6 right-6 text-white text-3xl font-bold hover:text-red-500"
                >
                  &times;
                </button>
              </div>
            )}
            {selectedImageIndex !== null && (
              <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50">
                {/* Image */}
                <img
                  src={project.screenshots[selectedImageIndex]}
                  alt="Full Screenshot"
                  className="max-h-[90vh] max-w-[90vw] rounded-lg"
                />

                {/* Close Button */}
                <button
                  onClick={() => setSelectedImageIndex(null)}
                  className="absolute top-6 right-6 text-white text-3xl font-bold hover:text-red-500"
                >
                  &times;
                </button>

                {/* Left Arrow */}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedImageIndex((prev) =>
                      prev === 0 ? project.screenshots.length - 1 : prev - 1
                    );
                  }}
                  className="absolute left-4 text-white text-4xl p-2 hover:text-red-500"
                >
                  {/* &#8592; */}
                  &lt;
                </button>

                {/* Right Arrow */}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedImageIndex(
                      (prev) => (prev + 1) % project.screenshots.length
                    );
                  }}
                  className="absolute right-4 text-white text-4xl p-2 hover:text-red-500"
                >
                  {/* &#8594; */}
                  &gt;
                </button>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default ProjectPage;
