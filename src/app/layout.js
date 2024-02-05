import { Radio_Canada } from "next/font/google";
import "./globals.css";

import Navbar from "./components/Navbar/page";
import WhatsApp from "./components/Whatsapp/page";

const radioCanada = Radio_Canada({ subsets: ["latin"] });

export const metadata = {
  title: "Danashy | Servicios Integrales",
  description: "Escaleras mecánicas, ascensores, elevadores, montacargas, refacciones",
};

function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={radioCanada.className}>
        <Navbar />
        {children}
        <WhatsApp />
      </body>
    </html>
  );
}

export default RootLayout
