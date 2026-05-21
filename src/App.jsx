import { useEffect, useState } from "react";
import Contact from "./components/Contact.jsx";
import Events from "./components/Events.jsx";
import Footer from "./components/Footer.jsx";
import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import Impact from "./components/Impact.jsx";
import Programs from "./components/Programs.jsx";
import { clubData as fallbackData } from "./data/clubData.js";
import { useReveal } from "./hooks/useReveal.js";

function getStoredTheme() {
  if (typeof window === "undefined") {
    return "light";
  }

  return localStorage.getItem("startup-club-theme") || "light";
}

export default function App() {
  const [clubData, setClubData] = useState(fallbackData);
  const [theme, setTheme] = useState(getStoredTheme);
  const [menuOpen, setMenuOpen] = useState(false);

  useReveal();

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem("startup-club-theme", theme);
  }, [theme]);

  useEffect(() => {
    const controller = new AbortController();
    const baseUrl = import.meta.env.VITE_API_BASE_URL || "";

    fetch(`${baseUrl}/api/club-data`, { signal: controller.signal })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Could not load club API data");
        }
        return response.json();
      })
      .then((data) => setClubData(data))
      .catch((error) => {
        if (error.name !== "AbortError") {
          setClubData(fallbackData);
        }
      });

    return () => controller.abort();
  }, []);

  return (
    <>
      <Header
        theme={theme}
        onThemeToggle={() => setTheme((current) => (current === "light" ? "dark" : "light"))}
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
      />
      <main>
        <Hero stats={clubData.stats} />
        <Programs programs={clubData.programs} />
        <Events events={clubData.events} />
        <Impact stats={clubData.stats} toolkit={clubData.toolkit} />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
