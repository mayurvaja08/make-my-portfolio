// import React from "react";
 import React, { useState } from "react";
import { motion } from "framer-motion";

export default function Hero({ name, role, Color1, setColor1, Color2, setColor2 }) {
    // const [Color1, setColor1] = useState("#00b0ff");
    // const [Color2, setColor2] = useState("#9b5cff");
  
  return (
    <section id="home" className="pt-24 pb-12">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <div>
          {/* <motion.h1 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-5xl md:text-6xl font-extrabold">
            Mayur Vaja
            <span className="block text-neonBlue">Frontend Developer & UI/UX Designer</span>
          </motion.h1> */}
          <motion.h1
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
  className="text-5xl md:text-6xl font-extrabold"
>
  {name}
  <span className="block text-neonBlue">{role}</span>
</motion.h1>


          <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.2 }} className="mt-6 text-gray-300 max-w-lg">
            I build fast, modern & beautiful web experiences — focusing on performance, accessibility, and delightful UI.
          </motion.p>

          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.35 }} className="mt-8 flex gap-4">
            <a href="#contact" className="px-6 py-3 rounded-md neon-btn bg-neonBlue text-black font-semibold">Hire Me</a>
            <a href="/assets/Resume.pdf" download className="px-6 py-3 rounded-md border border-gray-700 text-gray-200 hover:glow-hover">Download CV</a>
          </motion.div>

          <div className="mt-8 text-sm text-gray-400">Available for freelance and full-time.</div>
        </div>

        <div className="relative flex items-center justify-center">
          <motion.div initial={{ scale: 0.95, opacity: 0 }} whileInView={{ scale: 1, opacity: 1 }} transition={{ duration: 0.7 }} className="w-full max-w-md glass-card p-6 rounded-2xl">
            <div className="relative">
<div
        className="absolute -right-14 -top-14 w-36 h-36 rounded-full opacity-30 animate-[floaty_9s_ease-in-out_infinite] flex items-center justify-center"
        style={{
          background: `radial-gradient(circle, ${Color1}, transparent)`
        }}
        
      ><input
        type="color"
        value={Color1}
        onChange={(e) => setColor1(e.target.value)} // <-- correct setter
          style={{
            width: 80,
            height: 40,
            border: "none",
            cursor: "pointer",
            background: "transparent",
            padding: 0
          }}
          aria-label="Pick color 1"
        />
      </div>


      {/* SECOND circle */}
      <div
        className="absolute -left-10 -bottom-14 w-28 h-28 rounded-full opacity-20 animate-[floaty_11s_ease-in-out_infinite] flex items-center justify-center"
        style={{
          background: `radial-gradient(circle, ${Color2}, transparent)`
        }}
                  aria-label="Pick color 1"
      ><input
        type="color"
        value={Color2}
        onChange={(e) => setColor2(e.target.value)} // <-- correct setter
          style={{
            width: 80,
            height: 40,
            border: "none",
            cursor: "pointer",
            background: "transparent",
            padding: 0
          }}
          aria-label="Pick color 1"
        />
      </div>
              <img src={procoss.env.public_url+'/assets/profile_pic.jpg'} alt="profile" className="w-36 h-36 rounded-full object-cover mx-auto border-2 border-solid border-[#122033]" />
              <h3 className="text-center mt-4 font-semibold">Frontend Developer</h3>
              <p className="text-center text-xs text-gray-400 mt-2">I design and develop user-centered experiences.</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
