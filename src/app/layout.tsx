import Navbar from "@/components/Navigation/Navbar/Navbar";
import Footer from "@/components/Navigation/Footer/Footer";

import "../css/Main.css";

import React from "react";

export const metadata = {
  title: "Portfolio | Lautaro Spiazzi",
  description: "...",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className="min-w-screen min-h-screen overflow-x-hidden relative flex flex-col justify-between">
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
