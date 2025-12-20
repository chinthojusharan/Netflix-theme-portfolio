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
        <img data-atropos-offset="5" class="position-relative" src="https://craftohtml.themezaa.com/images/demo-freelancer-06.png" alt="" data-no-retina="" style="transition-duration: 300ms; transform: translate3d(0px, 0px, 0px);"></img>
      </div>
    </section>
  );
};

export default Hero;
