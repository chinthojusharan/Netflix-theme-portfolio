import React from 'react';

const Hero = () => {
  return (
    <section className="h-screen bg-black text-white flex items-center justify-center px-4">
      <div className="text-center">
        <h1 className="text-4xl md:text-6xl font-bold tracking-wide mb-4">
          Hi, I'm <span className="text-red-500">Sharan</span>
        </h1>
        <p className="text-gray-400 max-w-xl mx-auto">
          A Full Stack Developer building modern web experiences with the MERN stack.
        </p>
      </div>
    </section>
  );
};

export default Hero;
