import "./globals.css";
import type { Metadata } from "next";
import { Inter, Roboto_Mono } from "next/font/google";
import NavBar from "./components/Navbar/NavBar";
import Footer from "./components/Footer/Footer";
import { NextUIProvider } from "@nextui-org/react";

const whatsappURL = "https://wa.me/1127682286";

const inter = Inter({ subsets: ["latin"] });
const robotoMono = Roboto_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-roboto-mono",
});

export const metadata: Metadata = {
  title: "Nahitan | Diseño y desarrollo web",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <link rel="icon" href="/logo.png" sizes="any" />
      <body className={robotoMono.className}>
        <NavBar />
        {children}
        <Footer />
        {/* Boton de whatsapp */}
        <a
          href={whatsappURL}
          target="_blank"
          rel="noopener noreferrer"
          className="fixed right-4 bottom-4"
        >
          <img src="/whatsapp.png" alt="WhatsApp" width="65" height="65" />
        </a>
      </body>
    </html>
  );
}
