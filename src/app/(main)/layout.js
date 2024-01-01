import "../globals.css";
import { Poppins, Martian_Mono, Roboto_Mono } from "next/font/google";
import Navigation from "../../components/Navigation/Navigation.jsx";
const robotoMono = Roboto_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-roboto-mono",
});

const martianMono = Martian_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-martian",
});

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
});

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${poppins.variable} ${martianMono.variable} ${robotoMono.variable}`}
    >
      <body className="relative ">
        <header className="relative z-50 flex flex-col w-screen ">
          <Navigation />
        </header>
        {children}
      </body>
    </html>
  );
}
