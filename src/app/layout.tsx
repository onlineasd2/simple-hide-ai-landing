import "./globals.css";
import { Inter } from "next/font/google";
import type { Metadata } from "next";

const inter = Inter({
    subsets: ["latin"],
    display: "swap", // рекомендовано для предотвращения FOUT
});

export const metadata: Metadata = {
    title: "Simple Hidden AI - Ace Interviews with Invisible AI Assistant",
    description: "Use powerful AI tools during interviews or screen sharing sessions — completely invisible to others. Your secret edge to perform with confidence.",
    keywords: ["AI assistant", "interview help", "hidden AI", "screen sharing", "technical interview"],
    authors: [{ name: "Simple Hidden AI" }],
    creator: "Simple Hidden AI",
    publisher: "Simple Hidden AI",
    icons: {
        icon: '/favicon.ico',
    },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
        <head>
            <link rel="preload" href="/logo.webp" as="image" type="image/webp" />
            <link rel="preload" href="/app-ui.webp" as="image" type="image/webp" />
            <link rel="dns-prefetch" href="//fonts.googleapis.com" />
            <link rel="icon" href="/favicon.ico" />
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
            <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
            <meta name="theme-color" content="#7D58D9" />
            <meta name="color-scheme" content="light dark" />
        </head>
        <body className={inter.className}>
            <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-blue-600 text-white px-4 py-2 rounded z-50">
                Skip to main content
            </a>
            {children}
        </body>
    </html>
  );
}
