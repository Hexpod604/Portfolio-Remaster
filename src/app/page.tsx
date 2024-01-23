"use client";

import Contact from "@/components/Body/Contact";
import Expositor from "@/components/Body/Expositor";
import Header from "@/components/Body/Header";
import HorizontalRuler from "@/components/Body/HorizontalRuler";
import Presentation from "@/components/Body/Presentation";
import Projects from "@/components/Body/Projects";
import Technologies from "@/components/Body/Technologies";
import Navbar from "@/components/Navigation/Navbar/Navbar";

function HomePage() {
  return (
    <>
      <header className="bg-black pb-8">
        <Navbar></Navbar>
      </header>
      <Header></Header>

      <main className="bg-gradient-to-br from-gray-800 via-gray-900 to-gray-800">
        {/* <HorizontalRuler></HorizontalRuler> */}
        <Expositor></Expositor>
        <HorizontalRuler></HorizontalRuler>
        <Projects></Projects>
        <Technologies></Technologies>
        <Presentation></Presentation>
        <Contact></Contact>
      </main>
    </>
  );
}

export default HomePage;
