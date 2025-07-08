import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  return (
    <section className="h-screen overflow-hidden bg-black text-white flex items-center justify-center px-4 pt-20">
      <div className="text-center">
        <h1 className="text-4xl md:text-6xl font-bold tracking-wide mb-4" onClick={() => navigate('/whowatching')}>
          Hi, I'm <span className="text-red-500">Sharan</span>
        </h1>
        <p className="text-gray-400 max-w-xl mx-auto">
          A Full Stack Developer building modern web experiences with the MERN stack.
        </p>
      </div>
    </section>
  );
};

export default Home;
