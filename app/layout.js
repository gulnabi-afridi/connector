import "./globals.css";
import Footer from "./layout/Footer";
import Navbar from "./layout/Navbar";
import { Toaster } from "sonner";

export const metadata = {
  title: "The Connecter - Unlocking Crypto for Everyday People",
  description: "The Connecter - Unlocking Crypto for Everyday People",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <Toaster richColors />
        {children}
        <Footer />
      </body>
    </html>
  );
}
