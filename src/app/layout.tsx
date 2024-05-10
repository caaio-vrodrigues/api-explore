import type { Metadata } from "next";
import { Inter } from "next/font/google";

//styles
import "./globals.css";
import '../../sass/index.scss';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "APIExplore",
  description: "Created by Caio V. Rodrigues",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body 
        suppressHydrationWarning={true} 
        className={`${inter.className} layoutBody flex`}>
        {children}
      </body>
    </html>
  );
};
