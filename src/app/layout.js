// src/app/layout.js

import "./globals.css";

//👇 Import our second font
import { Poppins, Martian_Mono } from "next/font/google";

const martianMono = Martian_Mono({
  subsets: ["latin"],
  display: "swap",
  //👇 Add variable to our object
  variable: "--font-martian",
});
const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  //👇 Add variable to our object
  variable: "--font-poppins",
});

export default function RootLayout({ children }) {
  return (
    // 👇 Attach CSS variables to HTML
    <html lang="en" className={`${poppins.variable} ${martianMono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
