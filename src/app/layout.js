import Link from "next/link";
import { Inter } from "next/font/google";
import "./globals.css";
import SparklsIcon from "../components/SparklsIcon";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "VidCaptions",
  description: "App that Generate Captions for videos you just upload video we will do the rest",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className + " bg-gradient-to-b from-bg-gradient-from to-bg-gradient-to min-h-screen text-white"}>
        <main className="py-4 px-4 max-w-2xl mx-auto sm:px-16">
          <header className="flex justify-between justify-center mb-4">
            <Link href="/" className="flex gap-1">
              <SparklsIcon />
              <span>VidCaptions</span>
            </Link>
            <nav className="flex gap-6 text-white/80">
              <Link href="/">Home</Link>
              <Link href="mailto:n7289220@gmail.com">Contact</Link>
              <Link href="/pricing">Pricing</Link>
            </nav>
          </header>
          {children}
        </main>
      </body>
    </html>
  );
}
