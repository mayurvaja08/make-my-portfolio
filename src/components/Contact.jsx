import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaTwitter, FaLinkedin } from "react-icons/fa";

export default function Contact({ contactEmail, setContactEmail }) {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  // Editable email for "Get in touch"
  // const [contactEmail, setContactEmail] = useState("vaja2591@gmail.com");

  function onSubmit(e) {
    e.preventDefault();
    const mailto = `mailto:${contactEmail}?subject=${encodeURIComponent(
      "Portfolio Contact: " + form.name
    )}&body=${encodeURIComponent(form.message + "\n\n" + form.email)}`;
    window.location.href = mailto;
  }

  return (
    <section id="contact" className="pt-14 pb-14">
      <h3 className="text-2xl font-semibold mb-6">Contact</h3>

      <div className="grid md:grid-cols-2 gap-6">
        {/* LEFT FORM */}
        <motion.form
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          onSubmit={onSubmit}
          className="glass-card p-6 rounded-2xl"
        >
          <label className="text-sm text-gray-300">Name</label>
          <input
            required
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className="mt-2 mb-3 w-full rounded-md p-2 bg-[#0b0b0b] border border-white/5"
          />

          <label className="text-sm text-gray-300">Email</label>
          <input
            required
            value={form.email}
            type="email"
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            className="mt-2 mb-3 w-full rounded-md p-2 bg-[#0b0b0b] border border-white/5"
          />

          <label className="text-sm text-gray-300">Message</label>
          <textarea
            required
            rows="6"
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            className="mt-2 mb-3 w-full rounded-md p-2 bg-[#0b0b0b] border border-white/5"
          />

          <div className="flex gap-3">
            <button
              type="submit"
              className="px-4 py-2 rounded-md neon-btn bg-neonBlue text-black font-semibold"
            >
              Send Message
            </button>
            <button
              type="button"
              onClick={() => setForm({ name: "", email: "", message: "" })}
              className="px-4 py-2 rounded-md border border-white/5"
            >
              Reset
            </button>
          </div>
        </motion.form>

        {/* RIGHT SIDE */}
        <motion.aside
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="glass-card p-6 rounded-2xl"
        >
          <h4 className="font-semibold mb-2">Get in touch</h4>

          {/* Editable Email Input */}
          <label className="text-sm text-gray-300">Contact Email</label>
          <input
            value={contactEmail}
            onChange={(e) => setContactEmail(e.target.value)}
            className="mt-2 mb-3 w-full rounded-md p-2 bg-[#0b0b0b] border border-white/5"
          />

          {/* Clickable link using same value */}
          <p className="text-gray-300">
            Email:{" "}
            <a className="text-neonBlue" href={`mailto:${contactEmail}`}>
              {contactEmail}
            </a>
          </p>

          <div className="mt-6 flex gap-3">
            <a className="p-3 rounded-md border border-white/5" href="#">
              <FaTwitter />
            </a>
            <a className="p-3 rounded-md border border-white/5" href="#">
              <FaLinkedin />
            </a>
            <a
              className="p-3 rounded-md border border-white/5"
              href={`mailto:${contactEmail}`}
            >
              <FaEnvelope />
            </a>
          </div>
        </motion.aside>
      </div>
    </section>
  );
}
