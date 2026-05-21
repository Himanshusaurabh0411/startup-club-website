import axios from "axios";
import { AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import About from "./components/About.jsx";
import Contact from "./components/Contact.jsx";
import Events from "./components/Events.jsx";
import Footer from "./components/Footer.jsx";
import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import LoadingScreen from "./components/LoadingScreen.jsx";
import Programs from "./components/Programs.jsx";
import ScrollProgress from "./components/ScrollProgress.jsx";
import Team from "./components/Team.jsx";
import Testimonials from "./components/Testimonials.jsx";
import { clubData as fallbackData } from "./data/clubData.js";

function getStoredTheme() {
  if (typeof window === "undefined") {
    return "dark";
  }

  return localStorage.getItem("startup-club-theme") || "dark";
}

export default function App() {
  const [clubData, setClubData] = useState(fallbackData);
  const [theme, setTheme] = useState(getStoredTheme);
  const [menuOpen, setMenuOpen] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    localStorage.setItem("startup-club-theme", theme);
  }, [theme]);

  useEffect(() => {
    const controller = new AbortController();
    const baseUrl = import.meta.env.VITE_API_BASE_URL || "";

    axios
      .get(`${baseUrl}/api/club-data`, { signal: controller.signal })
      .then((response) => setClubData(response.data))
      .catch((error) => {
        if (error.name !== "CanceledError") {
          setClubData(fallbackData);
        }
      })
      .finally(() => setLoading(false));

    return () => {
      controller.abort();
    };
  }, []);

  return (
    <>
      <AnimatePresence>{loading && <LoadingScreen />}</AnimatePresence>
      <ScrollProgress />
      <Header
        theme={theme}
        onThemeToggle={() => setTheme((current) => (current === "dark" ? "light" : "dark"))}
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
      />
      <main>
        <Hero profile={clubData.instagramProfile} stats={clubData.stats} />
        <About aboutCards={clubData.aboutCards} stats={clubData.stats} />
        <Events events={clubData.events} />
        <Programs programs={clubData.programs} />
        <Team team={clubData.team} />
        <Testimonials testimonials={clubData.testimonials} />
        <Contact />
      </main>
      <Footer socials={clubData.socials} />
    </>
  );
}
