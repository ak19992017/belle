import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./component/Header";
import Footer from "./component/Footer";

const inter = Inter({ subsets: ["latin"] });

//static metadata
export const metadata: Metadata = {
  title: "Belle",
  description: "Life is what you make of it so make it beautiful",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <div className="mt-16">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
