import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <section
      className="h-screen overflow-hidden  bg-black text-white flex items-center justify-center px-4 pt-20"
      onClick={() => navigate("/whowatching")} 
    >
      <div className="text-center">
        <h1 className="text-4xl md:text-6xl font-bold tracking-wide mb-4">
          Hi, I'm <span className="text-red-500">Sharan</span>
        </h1>
        <p className="text-gray-400 max-w-xl mx-auto">
          A Full Stack Developer building modern web experiences with MERN
          stack.
        </p>
        <div class="atropos-inner text-center overflow-visible">
          <div
            data-atropos-offset="-1"
            class="absolute left-0 right-0 transition duration-300 transform translate-x-0 translate-y-0 translate-z-0"
          >
            <img
              src="images/demo-freelancer-01.png"
              class="w-[70%]"
              alt=""
              data-no-retina
            />
          </div>

          <span class="atropos-highlight transition duration-300 opacity-0 transform translate-x-0 translate-y-0 translate-z-0"></span>
        </div>
      </div>
      <p className="absolute bottom-6 text-md text-gray-400 animate-pulse">
        Click anywhere to continue
      </p>
    </section>
  );
};

export default Home;
