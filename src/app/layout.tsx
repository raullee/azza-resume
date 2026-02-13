import type { Metadata } from "next";
import { Inter, Playfair_Display, Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/contexts/theme-context";

const inter = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

const cormorant = Cormorant_Garamond({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Azza Shanina | Administrative & Customer Service Professional",
  description:
    "Versatile multilingual professional with expertise in administration, customer service, and HR coordination. Based in Kuala Lumpur, Malaysia.",
  keywords: [
    "Azza Shanina",
    "Administrative Professional",
    "Customer Service",
    "HR Coordinator",
    "Kuala Lumpur",
    "Malaysia",
    "Resume",
  ],
  openGraph: {
    title: "Azza Shanina | Administrative & Customer Service Professional",
    description:
      "Versatile multilingual professional with expertise in administration, customer service, and HR coordination.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} ${playfair.variable} ${cormorant.variable} font-sans antialiased`}
      >
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
