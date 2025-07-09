import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/themeProvider/themeProvider";

export const metadata: Metadata = {
  title: "Amanpreet's Portfolio",
  description: "This is Amanpreet's portfolio website showcasing his work and skills.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
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
