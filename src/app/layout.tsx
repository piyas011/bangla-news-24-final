import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import MainHeader, {
  LatestNewsBar,
} from "@/components/HeaderSection/MainHeader";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Bangla News 24",
  description: "This is a BBC News Clone Website / Piyas Ahmed",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="bn,en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head></head>
      <body className="min-h-full flex flex-col">
        <header>
          <MainHeader />
        </header>
        <LatestNewsBar />
        <main>{children}</main>
      </body>
    </html>
  );
}
