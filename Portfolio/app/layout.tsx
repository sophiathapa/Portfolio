import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navigation } from "@/components/navigation";
import { ThemeProvider } from "next-themes";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sophia Thapa Magar",
  description: 'Computer Engineering graduate & Full Stack Developer crafting elegant digital experiences with modern technologies.',
  keywords: ['Full Stack Developer', 'Computer Engineering', 'React', 'Next.js', 'TypeScript', 'Web Development'],
  authors: [{ name: 'Sophia Thapa Magar' }],
  openGraph: {
    title: 'Sophia Thapa Magar | Full Stack Developer',
    description: 'Computer Engineering graduate & Full Stack Developer crafting elegant digital experiences.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange={false}
        >
          <Navigation />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
