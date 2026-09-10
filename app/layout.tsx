import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "The Mall Cafe | Verulam",
  description:
    "Modern South African Indian street food and fusion fast food, made fresh at The Mall Cafe, Verulam. Order in, take out, or get it delivered.",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#1B1410",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col bg-cream text-ink overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
