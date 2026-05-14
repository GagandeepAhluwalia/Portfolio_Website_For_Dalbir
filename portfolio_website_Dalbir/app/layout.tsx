import type { Metadata } from "next";
import { Bricolage_Grotesque, Inter } from "next/font/google";
import "./globals.css";

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-bricolage",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Dalbir Singh Badwal — Operations Manager",
  description:
    "Operations Manager at GardaWorld. Halifax, Nova Scotia. Six-plus years leading security operations, client services, and high-performing teams.",
  keywords: [
    "Dalbir Singh Badwal",
    "GardaWorld",
    "Operations Manager",
    "Halifax",
    "Security Operations",
  ],
  authors: [{ name: "Dalbir Singh Badwal" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${bricolage.variable} ${inter.variable} font-sans bg-ink text-white antialiased grain`}
      >
        {children}
      </body>
    </html>
  );
}
