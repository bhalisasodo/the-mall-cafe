import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "The Mall Cafe | Home of The Gatsby | 100% Halal Takeaway",
  description:
    "Home of The Gatsby (feeds 4). Authentic South African Indian street food, flame-grilled chicken tikka, smash burgers, toasted sandwiches, Durban bunnies & curries. 100% Halal certified.",
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-icon.png",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#121212",
  viewportFit: "cover",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full antialiased scroll-smooth">
      <body className="min-h-full flex flex-col bg-cream text-ink overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
