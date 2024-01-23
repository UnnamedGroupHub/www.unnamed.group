import { Inter } from "next/font/google";
import "./globals.css";

import NavBar from "@/components/NavBar";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-screen">
      <head>
        <title>Unnamed Group | Non-Profit Community Management</title>
        <meta
          name="description"
          content="Unnamed Group is a non-profit organisation dedicated to developing and promoting communities that are fun, inclusive, and welcoming to all. We believe that games should be fun, not work."
        />
        <meta name="author" content="Unnamed Group" />
        <meta name="theme-color" content="#000000" />
        <link rel="icon" href="/logo.gif" />
      </head>
      <body className={`container mx-auto ${inter.className} h-full`}>
        <NavBar />
        {children}
      </body>
    </html>
  );
}
