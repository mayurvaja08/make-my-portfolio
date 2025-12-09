import React from "react";
//  import React, { useState } from "react";
import { Link } from "react-scroll";
import { motion } from "framer-motion";

export default function Navbar({ name, setName, role, setrole }) {
  // const [name, setName] = useState("Mayur Vaja");
  // const [role, setrole] = useState("Frontend & UI/UX");


  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="sticky top-0 z-40 bg-transparent backdrop-blur-md glass-card"
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-neonBlue to-neonPurple flex items-center justify-center font-semibold text-black">VM</div>
          <div>
<div className="text-sm font-semibold">
  <input
    type="text"
    value={name}
    onChange={(e) => setName(e.target.value)}
    // className="bg-transparent outline-none border-b border-gray-500 focus:border-white"
  />
</div>            
<div className="text-sm font-semibold">
  <input
    type="text"
    value={role}
    onChange={(e) => setrole(e.target.value)}
    // className="bg-transparent outline-none border-b border-gray-500 focus:border-white"
  />
</div>   
          </div>
        </div>

        <nav className="hidden md:flex gap-6 items-center text-sm text-gray-300">
          <NavLink to="home">Home</NavLink>
          <NavLink to="about">About</NavLink>
          <NavLink to="services">Services</NavLink>
          <NavLink to="projects">Projects</NavLink>
          <NavLink to="contact">Contact</NavLink>

          <a href="#contact" className="ml-4 px-4 py-2 rounded-md neon-btn bg-[#082033] text-neonBlue border border-[#08324a] hover:bg-[#06202a]">Hire Me</a>
        </nav>

        <div className="md:hidden text-gray-300"> {/* mobile: simple anchor nav */}
          <a href="#contact" className="px-3 py-2 rounded-md bg-[#081422] text-neonBlue neon-btn">Hire</a>
        </div>
      </div>
    </motion.header>
  );
}

function NavLink({ to, children }) {
  return (
    <a href={`#${to}`} className="hover:text-white transition">
      {children}
    </a>
  );
}
