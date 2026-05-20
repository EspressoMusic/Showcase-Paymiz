import type { Metadata } from "next";
import { Heebo, Rubik } from "next/font/google";
import "./globals.css";

/** Body — designed for Hebrew (Oded Ezer), clean & professional */
const heebo = Heebo({
  subsets: ["hebrew", "latin"],
  variable: "--font-heebo",
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

/** Headlines — modern rounded sans with full Hebrew support */
const rubik = Rubik({
  subsets: ["hebrew", "latin"],
  variable: "--font-rubik",
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Bizmi — Investor Pitch",
  description:
    "Bizmi is a simple SaaS platform for small businesses — digital store, booking page, and owner dashboard without custom app development.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="he" dir="rtl" className="scroll-smooth">
      <body className={`${heebo.variable} ${rubik.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
