"use client";

import Contact from "@/components/Body/Contact";
import Expositor from "@/components/Body/Expositor";
import Header from "@/components/Body/Header";
import HorizontalRuler from "@/components/Body/HorizontalRuler";
import Presentation from "@/components/Body/Presentation";
import Projects from "@/components/Body/Projects";
import Technologies from "@/components/Body/Technologies";
import Navbar from "@/components/Navigation/Navbar/Navbar";

import { useEffect } from "react";

import AOS from "aos";
import "aos/dist/aos.css";

function HomePage() {
  useEffect(() => {
    AOS.init({
      once: true,
    });
  }, []);
  return (
    <>
      <header className="bg-black pb-8">
        <Navbar></Navbar>
      </header>
      <Header></Header>

      <main className="bg-gradient-to-br from-gray-800 via-gray-900 to-gray-800 bg-tech-bg bg-center bg-no-repeat bg-contain">
        <Expositor></Expositor>
        <Projects></Projects>
        <Technologies></Technologies>
        <Presentation></Presentation>
        <Contact></Contact>
      </main>
    </>
  );
}

export default HomePage;
