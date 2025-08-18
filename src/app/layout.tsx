import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

export const metadata: Metadata = {
  title: "Aman - Full Stack Developer | Web, Mobile & Game Development",
  description: "Full-stack developer specializing in React, Next.js, mobile apps, game development, and AI/ML solutions. Building modern, scalable applications with cutting-edge technologies.",
  keywords: "full stack developer, react developer, next.js, mobile development, game development, AI ML, web development, typescript, python",
  authors: [{ name: "Aman" }],
  creator: "Aman",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://your-domain.com",
    title: "Aman - Full Stack Developer",
    description: "Full-stack developer specializing in modern web and mobile applications",
    siteName: "Aman Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aman - Full Stack Developer",
    description: "Full-stack developer specializing in modern web and mobile applications",
    creator: "@yourusername",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >

          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
