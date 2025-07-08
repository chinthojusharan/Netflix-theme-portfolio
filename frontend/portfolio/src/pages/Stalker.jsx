import React from 'react';
import { useNavigate } from 'react-router-dom';

const Stalker = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-black text-red-600 flex flex-col items-center justify-center px-6">
      {/* Glitch Text */}
      <h1 className="text-4xl sm:text-6xl font-extrabold tracking-wide mb-6 glitch" data-text="You're Not Supposed To Be Here">
        You're Not Supposed To Be Here
      </h1>

      {/* Secret Message */}
      <p className="text-zinc-400 max-w-xl text-center mb-10 animate-pulse">
        But since you're curious... 👀  
        This section doesn’t exist, or does it?  
        Maybe you're the kind of person who reads the terms and conditions too.
      </p>

      {/* Go Back */}
      <button
        onClick={() => navigate('/')}
        className="px-6 py-3 bg-red-700 hover:bg-red-600 transition rounded-full text-white font-semibold"
      >
        Go Back
      </button>

      {/* Custom CSS */}
      <style>{`
        .glitch {
          position: relative;
          color: red;
        }

        .glitch::before,
        .glitch::after {
          content: attr(data-text);
          position: absolute;
          left: 0;
          width: 100%;
          overflow: hidden;
          clip: rect(0, 900px, 0, 0);
        }

        .glitch::before {
          animation: glitchTop 2s infinite linear alternate-reverse;
          color: #f00;
          top: -2px;
        }

        .glitch::after {
          animation: glitchBottom 2s infinite linear alternate-reverse;
          color: #0ff;
          top: 2px;
        }

        @keyframes glitchTop {
          0% { clip: rect(0, 9999px, 0, 0); }
          10% { clip: rect(0, 9999px, 30px, 0); }
          20% { clip: rect(0, 9999px, 0, 0); }
          30% { clip: rect(0, 9999px, 25px, 0); }
          100% { clip: rect(0, 9999px, 0, 0); }
        }

        @keyframes glitchBottom {
          0% { clip: rect(0, 9999px, 0, 0); }
          10% { clip: rect(40px, 9999px, 80px, 0); }
          20% { clip: rect(0, 9999px, 0, 0); }
          30% { clip: rect(15px, 9999px, 60px, 0); }
          100% { clip: rect(0, 9999px, 0, 0); }
        }
      `}</style>
    </div>
  );
};

export default Stalker;
