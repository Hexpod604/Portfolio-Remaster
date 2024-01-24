import Footer from "@/components/Navigation/Footer/Footer";

import PageIcon from "@/images/PortfolioIcon.png";

import "@/css/Main.css";

import React from "react";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portafolio | Lautaro Spiazzi",
  description:
    "Desarrollador web apasionado con 3 años de aprendizaje, tanto en front-end como en back-end con variedad de tecnologías presentes en la industria actual.",
  metadataBase: new URL("https://lautaro-spiazzi.netlify.app"),
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: [{ url: PageIcon.src }],
    shortcut: [PageIcon.src],
    apple: [{ url: PageIcon.src }],
    other: [
      {
        rel: "apple-touch-icon-precomposed",
        url: PageIcon.src,
      },
    ],
  },
  openGraph: {
    title: "Portafolio | Lautaro Spiazzi",
    description:
      "Desarrollador web apasionado con 3 años de aprendizaje, tanto en front-end como en back-end con variedad de tecnologías presentes en la industria actual.",
    url: "https://lautaro-spiazzi.netlify.app",
    images: PageIcon.src,
    type: "website",
    locale: "es_ES",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className="scroll-smooth">
      <head>
        <link rel="shortcut icon" href={PageIcon.src} />
        <link rel="icon" type="image/x-icon" href={PageIcon.src} />
      </head>
      <body className="bg-gradient-to-br from-gray-800 via-gray-900 to-gray-800 min-w-screen min-h-screen overflow-x-hidden relative flex flex-col justify-between">
        {children}
        <Footer />
      </body>
    </html>
  );
}
