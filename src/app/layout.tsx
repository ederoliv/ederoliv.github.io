import type { Metadata } from "next";
import { Inter, Fraunces } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Eder Oliveira | Desenvolvedor Fullstack",
  description: "Portfólio de Eder Oliveira, Desenvolvedor Fullstack apaixonado por criar experiências digitais únicas.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${inter.variable} ${fraunces.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans bg-primary-light text-primary-dark selection:bg-primary-mid selection:text-primary-dark">
        {children}
      </body>
    </html>
  );
}
