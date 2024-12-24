/* eslint-disable @next/next/no-css-tags */
import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Footer from "./components/layout/Footer";
import ThemeProvider from "./context/ThemeProvider";
import { LanguageProvider } from "@/app/context/LanguageContext";
import { Suspense } from "react";
import Loading from "./components/layout/Loading";
import Header from "./components/layout/Header";

const firago = localFont({
  src: [
    {
      path: "./fonts/FiraGO-Regular.woff",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/FiraGO-Medium.woff",
      weight: "600",
      style: "normal",
    },
    {
      path: "./fonts/FiraGO-Bold.woff",
      weight: "700",
      style: "normal",
    },
    {
      path: "./fonts/FiraGO-LightItalic.woff",
      weight: "300",
      style: "italic",
    },
    {
      path: "./fonts/FiraGO-BookItalic.woff",
      weight: "400",
      style: "italic",
    },
  ],

  variable: "--font-firago",
});

export const metadata: Metadata = {
  title: "Simponia - The Gemstone of Batumi Botanical Garden",
  description:
    "Explore Simponia, a captivating destination at Batumi Botanical Garden, offering natural beauty, rare gemstones, and immersive experiences.",
  keywords:
    "Simponia, Batumi Botanical Garden, natural gemstones, travel destination, botanical attractions",
  openGraph: {
    title: "Simponia - The Gemstone of Batumi Botanical Garden",
    description:
      "Discover the beauty and allure of Simponia in Batumi Botanical Garden, where nature meets culture.",
    url: "https://simponia.ge/",
    images: [
      {
        url: "https://simponia.ge/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdsrw9a3z8%2Fimage%2Fupload%2Fv1733600041%2Fabout-img.png&w=1920&q=100",
        width: 650,
        height: 650,
        alt: "Simponia at Batumi Botanical Garden",
      },
    ],
  },
  icons: {
    icon: "/favicon.ico",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Check if the current path matches "/studio"
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta charSet="UTF-8" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://simponia.ge/" />
        <meta property="og:type" content="website" />
      </head>
      <body className={`${firago.className} antialiased`}>
        <Suspense fallback={<Loading />}>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <LanguageProvider>
              <Header />
              {children}
              <section id="footer">
                <Footer />
              </section>
            </LanguageProvider>
          </ThemeProvider>
        </Suspense>
      </body>
    </html>
  );
}
