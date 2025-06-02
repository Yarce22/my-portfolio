import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ApolloWrapper } from "@/lib/apolloWrapper";
import Header from "components/shared/Header";
import Footer from "components/shared/Footer";

import "../globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Yarce's Portfolio",
  description: "Yarce's Portfolio",
};

export default async function RootLayout({
  children,
  params
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}>) {
  const { lang } = await params

  return (
    <html lang={lang}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ApolloWrapper>
          <Header lang={lang} />
          {children}
          <Footer lang={lang} />
        </ApolloWrapper>
      </body>
    </html>
  );
}
