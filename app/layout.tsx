import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: {
    template: "%s | SmartHome IoT",
    default: "SmartHome IoT - Modern Smart Home Solutions"
  },
  description: "Discover the future of smart living with SmartHome IoT. Seamless control, advanced security, and energy efficiency for your home.",
  keywords: "smart home, IoT, home automation, security, energy saving",
  authors: [{ name: "SmartHome Team" }],
  creator: "SmartHome IoT",
  themeColor: "#667eea",
  openGraph: {
    title: "SmartHome IoT",
    description: "Intelligent home automation platform",
    type: "website",
    locale: "en_US",
    siteName: "SmartHome",
  },
  twitter: {
    card: "summary_large_image",
    title: "SmartHome IoT",
    description: "Future of smart living",
  },
  viewport: "width=device-width, initial-scale=1, viewport-fit=cover",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}
