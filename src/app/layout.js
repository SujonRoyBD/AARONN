import { Syne } from "next/font/google";
import "./globals.css";
import Navbar from "./component/shared/navbar/page";
import Footer from "./component/shared/footer/page";

// Syne font configuration
const syne = Syne({
  variable: "--font-syne", // Use this in CSS
  subsets: ["latin"], // Use Latin subset
  weight: ["400", "700"], // Include Regular and Bold weights
  display: "swap", // Optimize font loading
});

export const metadata = {
  title: "Syne Font with Tailwind",
  description: "Demonstration of Syne font with Tailwind CSS in Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${syne.variable} antialiased`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
