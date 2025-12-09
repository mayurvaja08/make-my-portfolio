// import React from "react";
 import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaLaptopCode, FaMobileAlt, FaReact } from "react-icons/fa";

const services = [
  { icon: <FaLaptopCode size={22} />, name: "Web Development", desc: "Fast, accessible web apps" },
  { icon: <FaMobileAlt size={22} />, name: "App UI/UX Design", desc: "Mobile-first interfaces" },
  { icon: <FaReact size={22} />, name: "React & Next.js", desc: "Modern React deployments" }
];

export default function Services() {
  return (
    <section id="services" className="pt-14 pb-14">
      <h3 className="text-2xl font-semibold mb-6">Services</h3>
      <div className="grid md:grid-cols-3 gap-6">
        {services.map((s, i) => (
          <motion.article key={s.name} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 * i }} className="glass-card p-6 rounded-2xl hover:glow-hover">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-md bg-[#061d2b] flex items-center justify-center text-neonBlue">{s.icon}</div>
              <div>
                <h4 className="font-semibold">{s.name}</h4>
                <p className="text-sm text-gray-400 mt-1">{s.desc}</p>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
