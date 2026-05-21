import axios from "axios";
import { motion } from "framer-motion";
import { useState } from "react";
import { FiMail, FiSend } from "react-icons/fi";
import SectionHeader from "./SectionHeader.jsx";

const initialForm = {
  name: "",
  email: "",
  message: ""
};

export default function Contact() {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle");

  function updateField(event) {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
    setErrors((current) => ({ ...current, [name]: "" }));
  }

  function validate() {
    const nextErrors = {};

    if (form.name.trim().length < 2) {
      nextErrors.name = "Please enter your name.";
    }

    if (!/^\S+@\S+\.\S+$/.test(form.email)) {
      nextErrors.email = "Please enter a valid email.";
    }

    if (form.message.trim().length < 10) {
      nextErrors.message = "Message should be at least 10 characters.";
    }

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  }

  async function handleSubmit(event) {
    event.preventDefault();

    if (!validate()) {
      return;
    }

    setStatus("loading");

    try {
      const baseUrl = import.meta.env.VITE_API_BASE_URL || "";
      await axios.post(`${baseUrl}/api/interest`, form);
      setStatus("success");
      setForm(initialForm);
    } catch (error) {
      setStatus("error");
    }
  }

  return (
    <section className="py-20 sm:py-24" id="contact">
      <div className="section-shell grid gap-10 lg:grid-cols-[.85fr_1fr] lg:items-start">
        <SectionHeader
          eyebrow="Contact"
          title="Ready to build with Startup Club?"
          copy="Send your interest and the API-powered form will respond with a success state. This demonstrates real frontend-to-backend integration for the recruitment task."
        />

        <motion.form
          className="glass-panel rounded-[2rem] p-5 sm:p-7"
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.55 }}
        >
          <div className="mb-6 flex items-center gap-3 rounded-3xl bg-ink p-4 text-white dark:bg-white/10">
            <span className="grid h-11 w-11 place-items-center rounded-2xl bg-electric text-midnight">
              <FiMail />
            </span>
            <div>
              <p className="font-black">Founder community desk</p>
              <p className="text-sm text-white/62">We reply with opportunities, events, and program updates.</p>
            </div>
          </div>

          <div className="grid gap-5">
            <label className="grid gap-2 font-extrabold text-ink dark:text-white">
              Name
              <input
                className="min-h-12 rounded-2xl border border-black/10 bg-white px-4 text-ink outline-none transition focus:border-ocean focus:ring-4 focus:ring-ocean/15 dark:border-white/10 dark:bg-midnight dark:text-white"
                name="name"
                value={form.name}
                onChange={updateField}
                placeholder="Your full name"
              />
              {errors.name && <span className="text-sm text-pulse">{errors.name}</span>}
            </label>

            <label className="grid gap-2 font-extrabold text-ink dark:text-white">
              Email
              <input
                className="min-h-12 rounded-2xl border border-black/10 bg-white px-4 text-ink outline-none transition focus:border-ocean focus:ring-4 focus:ring-ocean/15 dark:border-white/10 dark:bg-midnight dark:text-white"
                name="email"
                type="email"
                value={form.email}
                onChange={updateField}
                placeholder="you@example.com"
              />
              {errors.email && <span className="text-sm text-pulse">{errors.email}</span>}
            </label>

            <label className="grid gap-2 font-extrabold text-ink dark:text-white">
              Message
              <textarea
                className="min-h-36 resize-y rounded-2xl border border-black/10 bg-white p-4 text-ink outline-none transition focus:border-ocean focus:ring-4 focus:ring-ocean/15 dark:border-white/10 dark:bg-midnight dark:text-white"
                name="message"
                value={form.message}
                onChange={updateField}
                placeholder="Tell us what you want to build or learn."
              />
              {errors.message && <span className="text-sm text-pulse">{errors.message}</span>}
            </label>

            <button className="primary-btn w-full" type="submit" disabled={status === "loading"}>
              {status === "loading" ? "Submitting..." : "Send Message"}
              <FiSend />
            </button>
            {status === "success" && (
              <p className="rounded-2xl bg-mint/15 px-4 py-3 font-extrabold text-emerald-700 dark:text-mint">
                Message sent successfully. Welcome to the builder circle.
              </p>
            )}
            {status === "error" && (
              <p className="rounded-2xl bg-pulse/10 px-4 py-3 font-extrabold text-pulse">
                Submission failed. Please retry in a moment.
              </p>
            )}
          </div>
        </motion.form>
      </div>
    </section>
  );
}
