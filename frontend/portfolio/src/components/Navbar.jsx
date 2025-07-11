import React from "react";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { UserCircleIcon } from "@heroicons/react/24/outline";
import { FaArrowLeft } from "react-icons/fa";
const navItems = [
  { name: "Home", path: "/" },
  { name: "Developer", path: "/developer" },
  { name: "Recruiter", path: "/recruiter" },
  { name: "Stalker", path: "/stalker" },
];

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/40 backdrop-blur border-b border-zinc-800 text-white px-6 py-4">
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        <button
          onClick={() => navigate(-1)}
          className=" px-4 py-2 bg-transparent text-white rounded hover:bg-zinc-900 transition "
        >
         &lt;
         {/* <FaArrowLeft className="text-md" /> */}
        </button>

        <h1
          onClick={() => navigate("/")}
          className="cursor-pointer text-2xl font-bold text-red-600 tracking-wide"
        >
          Sharan
        </h1>
        <div
          className="ml-auto cursor-pointer"
          onClick={() => navigate("/whowatching")}
        >
          <UserCircleIcon className="h-8 w-8 text-white hover:text-red-500 transition" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
