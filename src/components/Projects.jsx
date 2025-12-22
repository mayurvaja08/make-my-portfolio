import React from "react";
import { motion } from "framer-motion";

export default function Projects({
  // --- TITLE PROPS (from App.jsx) ---
  Title1, setTitle1,
  Title2, setTitle2,
  Title3, setTitle3,
  Title4, setTitle4,
  Title5, setTitle5,
  Title6, setTitle6,

  // --- LINK PROPS ---
  Link1, setLink1,
  Link2, setLink2,
  Link3, setLink3,
  Link4, setLink4,
  Link5, setLink5,
  Link6, setLink6,
}) {

  // Local project array using titles from parent .. (App.jsx)
  const projects = [
    { id: 1, title: Title1, image: "/make-my-portfolio/assets/project1.jpg" },
    { id: 2, title: Title2, image: "/public/assets/project2.jpg" },
    { id: 3, title: Title3, image: "src/components/wallpaperflare.com_wallpaper (1).jpg" },
    { id: 4, title: Title4, image: "https://media.istockphoto.com/id/882298712/photo/lion-looking-straight-into-the-camera.jpg?s=612x612&w=0&k=20&c=7KIW8DwiyDF2kMlMAQQcByxa4Qwk2xof1Uizb3E4VC8=" },
    { id: 5, title: Title5, image: "/assets/project5.jpg" },
    { id: 6, title: Title6, image: "/assets/project6.jpg" }
  ];

  // Update the correct title
  const updateTitle = (id, value) => {
    if (id === 1) setTitle1(value);
    if (id === 2) setTitle2(value);
    if (id === 3) setTitle3(value);
    if (id === 4) setTitle4(value);
    if (id === 5) setTitle5(value);
    if (id === 6) setTitle6(value);
  };

  // Link handling (same as before)
  const getLink = (id) => {
    return {
      1: Link1,
      2: Link2,
      3: Link3,
      4: Link4,
      5: Link5,
      6: Link6,
    }[id];
  };

  const updateLink = (id, value) => {
    ({
      1: setLink1,
      2: setLink2,
      3: setLink3,
      4: setLink4,
      5: setLink5,
      6: setLink6,
    }[id])(value);
  };

  return (
    <section id="projects" className="pt-14 pb-14">
      <h3 className="text-2xl font-semibold mb-6">Selected Projects</h3>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((p, i) => (
          <motion.div
            key={p.id}
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.05 * i }}
            className="proj-item relative rounded-2xl overflow-hidden glass-card"
          >
            <img src={p.image} className="w-full h-52 object-cover" />

            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4">
              <div className="w-full">

                {/* Editable Title */}
                <input
                  className="text-lg font-semibold text-white bg-transparent border-b mb-2 outline-none w-full"
                  value={p.title}
                  onChange={(e) => updateTitle(p.id, e.target.value)}
                />

                {/* Editable Link */}
                <input
                  className="mt-2 px-3 py-2 rounded-md bg-white text-black text-sm font-semibold w-full outline-none"
                  value={getLink(p.id)}
                  onChange={(e) => updateLink(p.id, e.target.value)}
                />

              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
