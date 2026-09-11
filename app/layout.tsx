import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "The Mall Cafe Verulam | Home of The Gatsby | Since 1987",
  description:
    "Home of The Gatsby (feeds up to 4). Authentic South African fast food, flame-grilled chicken tikka, whopper burgers, toasted sandwiches, Durban bunnies & curries. 100% Halal certified. 94 Wick Street, Verulam.",
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-icon.png",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#000000",
  viewportFit: "cover",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full antialiased scroll-smooth">
      <body className="min-h-full flex flex-col bg-white text-black overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
