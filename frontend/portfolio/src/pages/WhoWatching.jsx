import React from 'react';
import { useNavigate } from 'react-router-dom';

const WhoWatching = () => {
  const navigate = useNavigate();

  const users = [
    { name: 'Developer', emoji: '👨‍💻', path: '/developer' },
    { name: 'Recruiter', emoji: '🧑‍💼', path: '/recruiter' },
    { name: 'Stalker', emoji: '🕵️‍♂️', path: '/stalker' },
  ];

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center">
      <h2 className="text-4xl mb-10 font-semibold">Who’s watching?</h2>
      <div className="flex gap-12">
        {users.map((user, idx) => (
          <div
            key={idx}
            onClick={() => navigate(user.path)}
            className="flex flex-col items-center hover:scale-110 transition-transform duration-300 cursor-pointer"
          >
            <div className="w-24 h-24 bg-zinc-800 rounded-md flex items-center justify-center text-4xl">
              {user.emoji}
            </div>
            <span className="mt-3 text-lg">{user.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhoWatching;
