import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  const [bgColor, setBgColor] = useState("#0D0D0D");

  const [name, setName] = useState("Mayur Vaja");
  const [role, setrole] = useState("Frontend & UI/UX");
  const [Education, setEducation] = useState("B.E. Computer Science");
  const [Location, setLocation] = useState("Your City, Country");
  const [Experience, setExperience] = useState("3+ years");

  const [Color1, setColor1] = useState("#00b0ff");
  const [Color2, setColor2] = useState("#9b5cff");

  // 🔗 LINK STATES
  const [Link1, setLink1] = useState("Add Link");
  const [Link2, setLink2] = useState("Add Link");
  const [Link3, setLink3] = useState("Add Link");
  const [Link4, setLink4] = useState("Add Link");
  const [Link5, setLink5] = useState("Add Link");
  const [Link6, setLink6] = useState("Add Link");

  // 🏷️ TITLE STATES (For Projects + Footer)
  const [Title1, setTitle1] = useState("Project One");
  const [Title2, setTitle2] = useState("Project Two");
  const [Title3, setTitle3] = useState("Project Three");
  const [Title4, setTitle4] = useState("Project Four");
  const [Title5, setTitle5] = useState("Project Five");
  const [Title6, setTitle6] = useState("Project Six");

  const [contactEmail, setContactEmail] = useState("vaja2591@gmail.com");


  return (
    <div
      className="min-h-screen text-gray-100 selection:bg-neonBlue selection:text-black"
      style={{ backgroundColor: bgColor }}
    >
      <input
        type="color"
        value={bgColor}
        onChange={(e) => setBgColor(e.target.value)}
        style={{ width: 80, height: 40, border: "none", cursor: "pointer" }}
      />

      {/* Background gradients */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#071025] via-[#0b0b17] to-[#0d0712] opacity-80"></div>

        <div className="pointer-events-none">
          <div className="float-shape w-[380px] h-[380px] rounded-full blur-3xl opacity-30 bg-[radial-gradient(circle,_#00b0ff,_transparent)] absolute -left-40 -top-24 animate-[floaty_8s_ease-in-out_infinite]"></div>
          <div className="float-shape w-[260px] h-[260px] rounded-full blur-3xl opacity-20 bg-[radial-gradient(circle,_#9b5cff,_transparent)] absolute right-[-40px] top-40 animate-[floaty_10s_ease-in-out_infinite]"></div>
        </div>
      </div>

      <Navbar
        name={name}
        setName={setName}
        role={role}
        setrole={setrole}
        Education={Education}
        setEducation={setEducation}
        Location={Location}
        setLocation={setLocation}
        Experience={Experience}
        setExperience={setExperience}
      />

      <main className="relative">
        <Hero
          name={name}
          role={role}
          Color1={Color1}
          setColor1={setColor1}
          Color2={Color2}
          setColor2={setColor2}
        />

        <div className="max-w-6xl mx-auto px-6">
          <About
            Location={Location}
            setLocation={setLocation}
            Experience={Experience}
            setExperience={setExperience}
            Education={Education}
            setEducation={setEducation}
          />

          <Services />

          {/* ⭐ PROJECTS WITH TITLES + LINKS */}
          <Projects
            Link1={Link1} setLink1={setLink1}
            Link2={Link2} setLink2={setLink2}
            Link3={Link3} setLink3={setLink3}
            Link4={Link4} setLink4={setLink4}
            Link5={Link5} setLink5={setLink5}
            Link6={Link6} setLink6={setLink6}
            
            Title1={Title1} setTitle1={setTitle1}
            Title2={Title2} setTitle2={setTitle2}
            Title3={Title3} setTitle3={setTitle3}
            Title4={Title4} setTitle4={setTitle4}
            Title5={Title5} setTitle5={setTitle5}
            Title6={Title6} setTitle6={setTitle6}
          />

      <Contact contactEmail={contactEmail} setContactEmail={setContactEmail} />
        </div>
      </main>

      {/* ⭐ FOOTER WILL RECEIVE ALL FINAL VALUES */}
      <Footer
        name={name}
        role={role}
        Education={Education}
        Location={Location}
        Experience={Experience}
        Color1={Color1}
        Color2={Color2}
        
        Link1={Link1}
        Link2={Link2}
        Link3={Link3}
        Link4={Link4}
        Link5={Link5}
        Link6={Link6}

        Title1={Title1}
        Title2={Title2}
        Title3={Title3}
        Title4={Title4}
        Title5={Title5}
        Title6={Title6}

        contactEmail={contactEmail}
      />
    </div>
  );
}
