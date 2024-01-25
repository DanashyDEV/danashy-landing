import { Radio_Canada } from "next/font/google";
import "./globals.css";

import Navbar from "./components/Navbar/page";

const radioCanada = Radio_Canada({ subsets: ["latin"] });

export const metadata = {
  title: "Danashy | Servicios Integrales",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={radioCanada.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
