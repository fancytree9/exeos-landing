import type { Metadata } from "next";
import Header from "@/components/header/header";
import Footer from "@/components/footer/footer";
import FooterLogo from "@/components/footer/footer-logo";
import "./globals.css";
import AosInit from "./aos-init";

export const metadata: Metadata = {
  title: "Exeos Web",
  description: "Exeos Web",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <AosInit>
          <Header />
          <main className="pt-[120px] md:pt-[240px] relative overflow-hidden">
            {children}
          </main>
          <Footer />
          <FooterLogo />
        </AosInit>
      </body>
    </html>
  );
}
