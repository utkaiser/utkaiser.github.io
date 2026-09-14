import type { Metadata, Viewport } from "next";
import { Inter, Inter_Tight } from "next/font/google";
import { Providers } from "./providers";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const interTight = Inter_Tight({
  variable: "--font-inter-tight",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://luiskaiser.com"),
  title: "Luis Kaiser - Homepage",
  description:
    "Luis Kaiser works on reinforcement learning, continual learning, and AI for science.",
  alternates: { canonical: "/" },
  authors: [{ name: "Luis Kaiser" }],
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#09090b" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${interTight.variable} bg-white tracking-tight antialiased dark:bg-zinc-950`}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
