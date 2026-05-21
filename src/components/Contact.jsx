import { Send } from "lucide-react";
import { useState } from "react";

const initialForm = {
  name: "",
  email: "",
  interest: "Idea Lab"
};

export default function Contact() {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState("idle");

  function updateField(event) {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
  }

  async function handleSubmit(event) {
    event.preventDefault();
    setStatus("loading");

    try {
      const baseUrl = import.meta.env.VITE_API_BASE_URL || "";
      const response = await fetch(`${baseUrl}/api/interest`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form)
      });

      if (!response.ok) {
        throw new Error("Request failed");
      }

      setStatus("success");
      setForm(initialForm);
    } catch (error) {
      setStatus("error");
    }
  }

  return (
    <section className="section-band section-contact" id="contact">
      <div className="section-shell contact-layout">
        <div className="section-heading" data-reveal>
          <p className="section-kicker">Connect</p>
          <h2>Join the next founder circle.</h2>
          <p>
            Share your interest and the API will record a local response during development. On Vercel,
            the same form uses a serverless endpoint.
          </p>
        </div>

        <form className="contact-form" onSubmit={handleSubmit} data-reveal>
          <label>
            Full name
            <input name="name" value={form.name} onChange={updateField} placeholder="Your name" required />
          </label>
          <label>
            Email
            <input
              name="email"
              type="email"
              value={form.email}
              onChange={updateField}
              placeholder="you@example.com"
              required
            />
          </label>
          <label>
            Interest area
            <select name="interest" value={form.interest} onChange={updateField}>
              <option>Idea Lab</option>
              <option>Build Sprint</option>
              <option>Pitch Room</option>
            </select>
          </label>
          <button className="btn btn-primary" type="submit" disabled={status === "loading"}>
            {status === "loading" ? "Sending" : "Send interest"}
            <Send size={17} />
          </button>
          {status === "success" && <p className="form-status success">Interest received. See you in the circle.</p>}
          {status === "error" && <p className="form-status error">Could not submit right now. Please retry.</p>}
        </form>
      </div>
    </section>
  );
}
