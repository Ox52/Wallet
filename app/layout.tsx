import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/themeprovider";

const manrope = Manrope({ subsets: ["latin"], variable: "--font-manrope" }); // ✅ safer font variant

export const metadata: Metadata = {
  title: "SEED",
  description: "web3 Wallet",
  icons: [
    {
      rel: "icon",
      type: "image/png",
      url: "/app/seed-light.png",
      media: "(prefers-color-scheme:light)",
    },
    {
      rel: "icon",
      type: "image/png",
      url: "/app/seed-dark.png",
      media: "(prefers-color-scheme:dark)",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // ✅ prevents React from complaining if dark/light mismatch on first render
    <html lang="en" suppressHydrationWarning>
      <body className={`${manrope.variable} font-sans`}>
        {/* ✅ ThemeProvider wrapped properly */}
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
