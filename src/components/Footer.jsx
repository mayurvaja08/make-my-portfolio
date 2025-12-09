import { color } from "framer-motion";
import React, { useState } from "react";

/**
 * FooterWithFiles
 *
 * - Click "GET Your Code" -> opens modal
 * - Modal shows a file list (filename + code)
 * - Each file: Copy & Download buttons
 * - Buttons: Copy All & Download All (single .txt bundle)
 *
 * Replace filesToProvide array with your actual files.
 */
export default function FooterWithFiles({ name, role, Location, Experience, Education, Color1, Color2, Link1, Link2, Link3, Link4, Link5, Link6,  Title1, Title2, Title3, Title4, Title5, Title6, contactEmail }) {
  const [open, setOpen] = useState(false);

  //test - 1
    const [userAColor, setUserAColor] = useState("");


  // REPLACE these placeholder files with your real files (12-15 entries)
  const filesToProvide = [
    {
      name: "package.json",
      code: `
{
  "name": "my-portfolio",
  "private": true,
  "version": "0.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "lint": "eslint .",
    "preview": "vite preview"
  },
  "dependencies": {
    "framer-motion": "^10.12.16",
    "react": "^19.2.0",
    "react-dom": "^19.2.0",
    "react-icons": "^5.11.0"
  },
  "devDependencies": {
    "@eslint/js": "^9.39.1",
    "@types/react": "^19.2.5",
    "@types/react-dom": "^19.2.3",
    "@vitejs/plugin-react": "^5.1.1",
    "autoprefixer": "^10.4.22",
    "eslint": "^9.39.1",
    "eslint-plugin-react-hooks": "^7.0.1",
    "eslint-plugin-react-refresh": "^0.4.24",
    "globals": "^16.5.0",
    "postcss": "^8.5.6",
    "tailwindcss": "^4.1.17",
    "vite": "^7.2.4"
  }
}
`,
    },
    {
      name: "index.html",
      code: `
<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <link rel="icon" href="/assets/favicon.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Your Name — Portfolio</title>

    <!-- Tailwind CDN fallback (development friendly; can be removed when real build set) -->
    <script>
      // small tailwind config when using CDN fallback (optional)
      tailwind = { theme: { extend: {} } };
    </script>
    <script src="https://cdn.tailwindcss.com"></script>

    <style>
      /* Smooth scroll */
      html { scroll-behavior: smooth; }
    </style>
  </head>
  <body class="antialiased bg-[#0D0D0D] text-gray-100">
    <div id="root"></div>
    <script type="module" src="/src/main.jsx"></script>
  </body>
</html>

`,
    },
    {
      name: "src/main.jsx",
      code: `
import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

`,
    },
    // ... add more file objects here (up to 12-15)
    {
      name: "src/index.css",
      code: `
/* src/index.css - Tailwind v4 simple import */
@import "tailwindcss";

/* Custom utilities and CSS for neon/glass visuals */
:root {
  --bg: #0d0d0d;
  --glass: rgba(255,255,255,0.04);
  --neon: #00b0ff;
  --neon-2: #9b5cff;
}

/* floating shapes animation */
@keyframes floaty {
  0% { transform: translateY(0) translateX(0) rotate(0deg) scale(1); opacity: .9; }
  50% { transform: translateY(-18px) translateX(6px) rotate(2deg) scale(1.02); opacity: .85; }
  100% { transform: translateY(0) translateX(0) rotate(0deg) scale(1); opacity: .9; }
}

/* gradient background animation */
@keyframes bg-pan {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}

/* small glass card shadow + neon glow */
.glass-card {
  background: linear-gradient(135deg, rgba(255,255,255,0.03), rgba(255,255,255,0.02));
  border: 1px solid rgba(255,255,255,0.04);
  backdrop-filter: blur(6px);
  -webkit-backdrop-filter: blur(6px);
  box-shadow: 0 8px 30px rgba(0,0,0,0.6);
}

/* neon button */
.neon-btn {
  box-shadow: 0 6px 30px rgba(0,176,255,0.08), inset 0 0 18px rgba(0,176,255,0.04);
  transition: transform .18s ease, box-shadow .18s ease;
}
.neon-btn:hover { transform: translateY(-3px); box-shadow: 0 14px 50px rgba(0,176,255,0.12), inset 0 0 30px rgba(0,176,255,0.08); }

/* hover glow */
.glow-hover:hover { box-shadow: 0 8px 30px rgba(155,92,255,0.12); transform: translateY(-6px); }

/* project image zoom */
.proj-img { transition: transform .5s ease; }
.proj-item:hover .proj-img { transform: scale(1.06); }

/* responsive niceties */
@media (max-width: 640px) {
  .float-shape { display: none; }
}

/* animated gradient background helper */
.bg-neon-gradient {
  background: linear-gradient(120deg, rgba(0,176,255,0.09), rgba(155,92,255,0.06));
  background-size: 200% 200%;
  animation: bg-pan 8s ease infinite;
}

`,
    },
    // ... add more file objects here (up to 12-15)
    {
      name: "src/App.jsx",
      code: `
import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-[#0D0D0D] text-gray-100 selection:bg-neonBlue selection:text-black">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        {/* animated gradient layer */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#071025] via-[#0b0b17] to-[#0d0712] opacity-80"></div>

        {/* floating color blobs */}
        <div className="pointer-events-none">
          <div className="float-shape w-[380px] h-[380px] rounded-full blur-3xl opacity-30 bg-[radial-gradient(circle,_#00b0ff,_transparent)] absolute -left-40 -top-24 animate-[floaty_8s_ease-in-out_infinite]"></div>
          <div className="float-shape w-[260px] h-[260px] rounded-full blur-3xl opacity-20 bg-[radial-gradient(circle,_#9b5cff,_transparent)] absolute right-[-40px] top-40 animate-[floaty_10s_ease-in-out_infinite]"></div>
        </div>
      </div>

      <Navbar />
      <main className="relative">
        <Hero />
        <div className="max-w-6xl mx-auto px-6">
          <About />
          <Services />
          <Projects />
          <Contact />
        </div>
      </main>
      <Footer />
    </div>
  );
}

`,
    },
    // ... add more file objects here (up to 12-15)
    {
      name: "src/components/Navbar.jsx",
      code: `
import React from "react";
import { Link } from "react-scroll";
import { motion } from "framer-motion";

export default function Navbar() {
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
            <div className="text-sm font-semibold"> YOUR_NAME </div>
            <div className="text-xs text-gray-400"> YOUR_ROLE </div>
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
    <a href={"#" + to} className="hover:text-white transition">
      {children}
    </a>
  );
}

`,
    },
    // ... add more file objects here (up to 12-15)
    {
      name: "src/components/Hero.jsx",
      code: `
import React from "react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section id="home" className="pt-24 pb-12">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <div>
          <motion.h1 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-5xl md:text-6xl font-extrabold">
            YOUR_NAME
            <span className="block text-neonBlue">YOUR_ROLE</span>
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
              <div className="absolute -right-14 -top-14 w-36 h-36 rounded-full bg-[radial-gradient(circle,_YOUR_COLOR1,_transparent)] opacity-30 animate-[floaty_9s_ease-in-out_infinite]"></div>
              <div className="absolute -left-10 -bottom-14 w-28 h-28 rounded-full bg-[radial-gradient(circle,_YOUR_COLOR2,_transparent)] opacity-20 animate-[floaty_11s_ease-in-out_infinite]"></div>

              <img src="/assets/profile.jpg" alt="profile" className="w-36 h-36 rounded-full object-cover mx-auto border-2 border-solid border-[#122033]" />
              <h3 className="text-center mt-4 font-semibold">Frontend Developer</h3>
              <p className="text-center text-xs text-gray-400 mt-2">I design and develop user-centered experiences.</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

`,
    },
    // ... add more file objects here (up to 12-15)
    {
      name: "src/components/About.jsx",
      code: `
import React from "react";
import { motion } from "framer-motion";

const skills = [
  { name: "React", pct: 90 },
  { name: "JavaScript", pct: 92 },
  { name: "Tailwind", pct: 88 },
  { name: "UI/UX", pct: 84 }
];

export default function About() {
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
                    <div className="bg-neonBlue h-3 rounded-full transition-all" style={{ width: "\${s.pct}%" }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.aside initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} className="glass-card p-6 rounded-2xl">
          <h4 className="font-semibold">Quick Facts</h4>
          <dl className="mt-4 text-sm text-gray-300">
            <div><dt className="text-xs text-gray-400">Location</dt><dd> YOUR_LOCATION </dd></div>
            <div className="mt-3"><dt className="text-xs text-gray-400">Experience</dt><dd>YOUR_EXPERIENCE</dd></div>
            <div className="mt-3"><dt className="text-xs text-gray-400">Education</dt><dd>YOUR_EDUCATION</dd></div>
          </dl>
        </motion.aside>
      </div>
    </section>
  );
}

`,
    },
    // ... add more file objects here (up to 12-15)
    {
      name: "src/components/Services.jsx",
      code: `
import React from "react";
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

`,
    },
    // ... add more file objects here (up to 12-15)
    {
      name: "src/data/projects.js",
      code: `
const projects = [
  { id: 1, title: "YOUR_TITLE1", image: "/assets/project1.jpg", url: "YOUR_LINK1" },
  { id: 2, title: "YOUR_TITLE2", image: "/assets/project2.jpg", url: "YOUR_LINK2" },
  { id: 3, title: "YOUR_TITLE3", image: "/assets/project3.jpg", url: "YOUR_LINK3" },
  { id: 4, title: "YOUR_TITLE4", image: "/assets/project4.jpg", url: "YOUR_LINK4" },
  { id: 5, title: "YOUR_TITLE5", image: "/assets/project5.jpg", url: "YOUR_LINK5" },
  { id: 6, title: "YOUR_TITLE6", image: "/assets/project6.jpg", url: "YOUR_LINK6" }
];

export default projects;

`,
    },
    // ... add more file objects here (up to 12-15)
    {
      name: "src/components/Projects.jsx",
      code: `
import React from "react";
import { motion } from "framer-motion";
import projects from "../data/projects";

export default function Projects() {
  return (
    <section id="projects" className="pt-14 pb-14">
      <h3 className="text-2xl font-semibold mb-6">Selected Projects</h3>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((p, i) => (
          <motion.div key={p.id} initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.05 * i }} className="proj-item relative rounded-2xl overflow-hidden glass-card">
            <img src={p.image} alt={p.title} className="proj-img w-full h-52 object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4">
              <div>
                <h4 className="text-lg font-semibold">{p.title}</h4>
                <a href={p.url} className="mt-2 inline-block px-3 py-2 rounded-md bg-neonBlue text-black text-sm font-semibold">View Project</a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

`,
    },
    // ... add more file objects here (up to 12-15)
    {
      name: "src/components/Contact.jsx",
      code: `
import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaTwitter, FaLinkedin } from "react-icons/fa";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  function onSubmit(e) {
    e.preventDefault();
    // Use mailto for quick no-backend submission (avoids nesting template literals)
    const mailto = 'mailto:YOUR_CONTACTEMAIL?subject=' + encodeURIComponent("Portfolio Contact: " + form.name) + '&body=' + encodeURIComponent(form.message + "\n\n" + form.email);
    window.location.href = mailto;
  }

  return (
    <section id="contact" className="pt-14 pb-14">
      <h3 className="text-2xl font-semibold mb-6">Contact</h3>
      <div className="grid md:grid-cols-2 gap-6">
        <motion.form initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} onSubmit={onSubmit} className="glass-card p-6 rounded-2xl">
          <label className="text-sm text-gray-300">Name</label>
          <input required value={form.name} onChange={(e)=>setForm({...form,name:e.target.value})} className="mt-2 mb-3 w-full rounded-md p-2 bg-[#0b0b0b] border border-white/5" />
          <label className="text-sm text-gray-300">Email</label>
          <input required value={form.email} onChange={(e)=>setForm({...form,email:e.target.value})} type="email" className="mt-2 mb-3 w-full rounded-md p-2 bg-[#0b0b0b] border border-white/5" />
          <label className="text-sm text-gray-300">Message</label>
          <textarea required value={form.message} onChange={(e)=>setForm({...form,message:e.target.value})} rows="6" className="mt-2 mb-3 w-full rounded-md p-2 bg-[#0b0b0b] border border-white/5" />
          <div className="flex gap-3">
            <button type="submit" className="px-4 py-2 rounded-md neon-btn bg-neonBlue text-black font-semibold">Send Message</button>
            <button type="button" onClick={()=>{setForm({name:'',email:'',message:''})}} className="px-4 py-2 rounded-md border border-white/5">Reset</button>
          </div>
        </motion.form>

        <motion.aside initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} className="glass-card p-6 rounded-2xl">
          <h4 className="font-semibold mb-2">Get in touch</h4>
          <p className="text-gray-300">Email: <a className="text-neonBlue" href="mailto:YOUR_CONTACTEMAIL">YOUR_CONTACTEMAIL</a></p>

          <div className="mt-6 flex gap-3">
            <a className="p-3 rounded-md border border-white/5" href="#"><FaTwitter /></a>
            <a className="p-3 rounded-md border border-white/5" href="#"><FaLinkedin /></a>
            <a className="p-3 rounded-md border border-white/5" href="mailto:YOUR_CONTACTEMAIL"><FaEnvelope /></a>
          </div>
        </motion.aside>
      </div>
    </section>
  );
}

`,
    },
    // ... add more file objects here (up to 12-15)
    {
      name: "src/components/Footer.jsx",
      code: `
import React from "react";

export default function Footer() {
  return (
    <footer className="mt-12 py-8">
      <div className="max-w-6xl mx-auto px-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Mayur Vaja — Built with ❤️
      </div>
    </footer>
  );
}

`,
    },
    // ... add more file objects here (up to 12-15)
    {
      name: "src/utils/helpers.js",
      code: `
export function formatDate(ts) {
  const d = new Date(ts);
  return d.toLocaleString();
}
`,
    },
  ];

  // logic for filetoprovide
  // CORRECT REPLACE LOGIC
const generatedFiles = filesToProvide.map((file) => {
  const finalCode = file.code
    .replace(/YOUR_NAME/g, name)
    .replace(/YOUR_ROLE/g, role)
    .replace(/YOUR_LOCATION/g, Location)
    .replace(/YOUR_EXPERIENCE/g, Experience)
    .replace(/YOUR_EDUCATION/g, Education)
    .replace(/YOUR_COLOR1/g, Color1)
    .replace(/YOUR_COLOR2/g, Color2)
    .replace(/YOUR_LINK1/g, Link1)
    .replace(/YOUR_LINK2/g, Link2)
    .replace(/YOUR_LINK3/g, Link3)
    .replace(/YOUR_LINK4/g, Link4)
    .replace(/YOUR_LINK5/g, Link5)
    .replace(/YOUR_LINK6/g, Link6)
    .replace(/YOUR_TITLE1/g, Title1)
    .replace(/YOUR_TITLE2/g, Title2)
    .replace(/YOUR_TITLE3/g, Title3)
    .replace(/YOUR_TITLE4/g, Title4)
    .replace(/YOUR_TITLE5/g, Title5)
    .replace(/YOUR_CONTACTEMAIL/g, contactEmail)
    .replace(/YOUR_TITLE6/g, Title6);


  return {
    ...file,
    code: finalCode,
  };
});


  // copy single file code to clipboard
  const copyToClipboard = async (text) => {
    try {
      await navigator.clipboard.writeText(text);
      alert("Copied to clipboard ✅");
    } catch (err) {
      console.error("Copy failed", err);
      alert("Copy failed — please select & copy manually");
    }
  };

  // download single file
  const downloadFile = (filename, content) => {
    const blob = new Blob([content], { type: "text/plain;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = filename.replace(/\//g, "_"); // sanitize filename for download
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  // copy all files concatenated (with separators) to clipboard
  const copyAll = async () => {
    const joined = generatedFiles
        .map((f) => `// ===== ${f.name} =====\n${f.code}\n\n`)
      .join("");
    await copyToClipboard(joined);
  };

  // download all as a single .txt bundle (no zip)
  const downloadAllBundle = () => {
    const joined = generatedFiles
    .map((f) => `// ===== ${f.name} =====\n${f.code}\n\n`)
      .join("");
    downloadFile("all-files-bundle.txt", joined);
  };

  return (
    <>
      <footer className="mt-12 py-8">
        <div className="max-w-6xl mx-auto px-6 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} Mayur Vaja — Built with ❤️
          <button
            type="button"  
            onClick={() => setOpen(true)}
            className="px-4 py-2 rounded-md neon-btn bg-neonBlue text-black font-semibold ml-3"
          >
             Get Code
          </button>            
          <a href="/assets/Portfolio_User_Manual.pdf" download className="px-6 py-3 rounded-md border border-gray-700 text-gray-200 hover:glow-hover">Get Help</a>
        </div>
      </footer>

      {/* Modal */}
      {open && (
        <div
          className="fixed inset-0 z-50 flex items-start justify-center overflow-auto p-6"
          aria-modal="true"
          role="dialog"
        >
          {/* backdrop */}
          <div
            className="fixed inset-0 bg-black/50"
            onClick={() => setOpen(false)}
          />

          {/* modal panel */}
          <div className="relative z-10 w-full max-w-4xl bg-white text-black rounded-lg shadow-xl overflow-hidden">
            <div className="flex items-center justify-between px-5 py-3 border-b">
              <h3 className="text-lg font-semibold">Provided Files (Copy / Download)</h3>
              <div className="flex items-center gap-2">
                <button
                  onClick={copyAll}
                  className="px-3 py-1 bg-slate-100 rounded border text-sm"
                >
                  Copy All
                </button>
                <button
                  onClick={downloadAllBundle}
                  className="px-3 py-1 bg-slate-100 rounded border text-sm"
                >
                  Download All (.txt)
                </button>
                <button
                  onClick={() => setOpen(false)}
                  className="px-3 py-1 bg-red-100 rounded border text-sm"
                >
                  Close
                </button>
              </div>
            </div>

            <div className="max-h-[70vh] overflow-auto p-4 space-y-4">
              {generatedFiles.map((file, idx) => (
                <div
                  key={idx}
                  className="border rounded-md p-3 bg-slate-50"
                >
                  <div className="flex items-center justify-between mb-2">
                    <div className="font-mono text-sm">{file.name}</div>
                    <div className="flex gap-2">
                      <button
                        onClick={() => copyToClipboard(file.code)}
                        className="px-2 py-1 text-sm border rounded bg-white"
                      >
                        Copy
                      </button>
                      <button
                        onClick={() => downloadFile(file.name, file.code)}
                        className="px-2 py-1 text-sm border rounded bg-white"
                      >
                        Download
                      </button>
                    </div>
                  </div>

                  {/* code area */}
                  <textarea
                    readOnly
                    value={file.code}
                    rows={Math.min(20, file.code.split("\n").length + 2)}
                    className="w-full font-mono text-xs p-2 bg-transparent border rounded resize-vertical"
                    onFocus={(e) => {
                      // select all on focus for quick copying
                      e.target.select();
                    }}
                  />
                </div>
              ))}
            </div>

            <div className="flex items-center justify-end gap-2 px-4 py-3 border-t">
              <button
                onClick={() => {
                  // advanced: also copy all and close
                  copyAll();
                  setOpen(false);
                }}
                className="px-4 py-2 rounded bg-green-100 border"
              >
                Copy All & Close
              </button>

              <button
                onClick={() => setOpen(false)}
                className="px-4 py-2 rounded bg-white border"
              >
                Done
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
