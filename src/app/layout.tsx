import type { Metadata } from "next";
import { Sora, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const sora = Sora({ variable: "--font-sora", subsets: ["latin"], display: "swap" });
const inter = Inter({ variable: "--font-inter", subsets: ["latin"], display: "swap" });
const jetbrains = JetBrains_Mono({
  variable: "--font-mono-jet",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://topnotchtechnology.co.in"),
  title: "Topnotch Technology — Digital Marketing, SEO & Tech Solutions",
  description:
    "Topnotch Technology delivers premium digital marketing, SEO, content writing, web development and data analytics from Jaipur, trusted across the UK, US, Canada, Ireland and Australia.",
  keywords: [
    "digital marketing Jaipur",
    "SEO agency India",
    "web development",
    "data analytics",
    "content writing",
  ],
  openGraph: {
    title: "Topnotch Technology",
    description: "Empowering global growth through technology solutions.",
    type: "website",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="dark">
      <body className={`${sora.variable} ${inter.variable} ${jetbrains.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}