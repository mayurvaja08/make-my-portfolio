// import React from "react";
 import React, { useState } from "react";
import { motion } from "framer-motion";

const skills = [
  { name: "React", pct: 90 },
  { name: "JavaScript", pct: 92 },
  { name: "Tailwind", pct: 88 },
  { name: "UI/UX", pct: 84 }
];

export default function About({ Location, setLocation, Experience, setExperience, Education, setEducation}) {
    // const [Location, setLocation] = useState("Your City, Country");
    // const [Experience, setExperience] = useState("3+ years");
    // const [Education, setEducation] = useState("B.E. Computer Science");
  return (
    <section id="about" className="pt-14 pb-14">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6 items-start">
        <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} className="md:col-span-2 glass-card p-8 rounded-2xl">
          <h3 className="text-2xl font-semibold">About Me</h3>
          <p className="mt-4 text-gray-300">
            I am a front-end developer and UI/UX designer who builds fast, accessible and beautiful web applications.
            I focus on creating user-first interfaces and polished interactions.
          </p>

          <div className="mt-6">
            <h4 className="font-medium">Skills</h4>
            <div className="mt-3 space-y-3">
              {skills.map((s) => (
                <div key={s.name}>
                  <div className="flex justify-between text-sm text-gray-300 mb-1">
                    <span>{s.name}</span>
                    <span>{s.pct}%</span>
                  </div>
                  <div className="w-full bg-white/5 h-3 rounded-full">
                    <div className="bg-neonBlue h-3 rounded-full transition-all" style={{ width: `${s.pct}%` }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.aside initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} className="glass-card p-6 rounded-2xl">
          <h4 className="font-semibold">Quick Facts</h4>
          <dl className="mt-4 text-sm text-gray-300">

             <div className="text-sm font-semibold"><dt className="text-xs text-gray-400">Location</dt>
                    <input
                        type="text"
                        value={Location}
                        onChange={(e) => setLocation(e.target.value)}
                      /></div>            

            <div className="text-sm font-semibold"><dt className="text-xs text-gray-400">Experience</dt>
                        <input
                          type="text"
                          value={Experience}
                          onChange={(e) => setExperience(e.target.value)}
                        /></div>
  
              <div className="text-sm font-semibold"><dt className="text-xs text-gray-400">Education</dt>
                        <input
                          type="text"
                          value={Education}
                          onChange={(e) => setEducation(e.target.value)}
                        /></div>
            {/* <div className="mt-3"><dt className="text-xs text-gray-400">Education</dt><dd>B.E. Computer Science</dd></div> */}
          </dl>
        </motion.aside>
      </div>
    </section>
  );
}
