import type { Metadata } from "next";
import { Geist, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { TooltipProvider } from "@/components/ui/tooltip";

const geist = Geist({ subsets: ["latin"], variable: "--font-inter" });

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
});

export const metadata: Metadata = {
  title: "Amanpreet Singh — Backend Engineer",
  description:
    "Backend Engineer specializing in FastAPI, scalable systems, and applied AI. OSS contributor to deepset-ai/haystack.",
  keywords:
    "backend engineer, fastapi, python, typescript, nextjs, portfolio, oss, ai",
  authors: [{ name: "Amanpreet Singh" }],
  creator: "Amanpreet Singh",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body
        className={`${geist.variable} ${jetbrainsMono.variable} font-sans antialiased bg-background text-foreground`}
      >
        <TooltipProvider delayDuration={300}>{children}</TooltipProvider>
      </body>
    </html>
  );
}
