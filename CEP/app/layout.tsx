import type { Metadata } from "next";
import { Poppins, Inter } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Screen Free Sundays | Rediscover Life Beyond the Screen",
  description: "A safe space for teenagers to disconnect from phones and reconnect with themselves, nature, and others.",
  keywords: "digital detox, screen addiction, teenage wellness, mindfulness, yoga, team sports",
  authors: [{ name: "Screen Free Sundays" }],
  openGraph: {
    title: "Screen Free Sundays | Rediscover Life Beyond the Screen",
    description: "A safe space for teenagers to disconnect from phones and reconnect with themselves, nature, and others.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${poppins.variable} ${inter.variable}`}>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}



