import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: "amanpreet@portfolio:~",
  description: "Full Stack Developer. Terminal Portfolio.",
  keywords: "full stack developer, react, next.js, terminal portfolio, developer",
  authors: [{ name: "Amanpreet" }],
  creator: "Amanpreet",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${jetbrainsMono.variable} font-mono antialiased bg-[#0d1117] text-[#c9d1d9] overflow-x-hidden`}>
        <div className="relative z-10 min-h-screen flex flex-col">
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem={false}
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
        </div>
      </body>
    </html>
  );
}
