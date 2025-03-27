import type { Metadata } from "next";
import { Toaster } from "react-hot-toast";
import { Nunito } from "next/font/google";
import "./globals.css";
import { Providers } from "@/components/providers/Providers";
import Header from "@/components/header/Header";
import { ReactNode } from "react";
import Footer from "@/components/footer/Footer";

const nunito = Nunito({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "My Blog",
  description: "Here, you can share your thoughts, ideas, and stories with the world",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <Providers>
        <body className={nunito.className}>
          <Header />
          <main className="max-w-[1000px] m-auto mt-16 pb-16 px-3 min-h-[100%]">{children}</main>
          <Footer />
          <Toaster />
        </body>
      </Providers>
    </html>
  );
}
