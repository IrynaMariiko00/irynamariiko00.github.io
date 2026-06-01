import type { Metadata } from "next";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import ScrollToTop from "../components/ScrollToTop/ScrollToTop";
import { GlobalModal } from "../components/modals/GlobalModal/GlobalModal";
import "../index.css";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Portraits Lviv",
  description: "Handmade portraits that tell your story",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="uk">
      <head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/img-comparison-slider@8/dist/styles.css"
        />
      </head>
      <body>
        <main className="bg-[var(--color-bg)]">
          <Header />
          <ScrollToTop />
          {children}
          <Footer />
          <GlobalModal />
        </main>

        <Script
          src="https://cdn.jsdelivr.net/npm/img-comparison-slider@8/dist/index.js"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
