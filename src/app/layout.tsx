import type { Metadata } from "next";
import localFont from "next/font/local";
import { Work_Sans, DM_Mono, Merriweather } from "next/font/google";
import "./globals.css";

const clashGrotesk = localFont({
  src: [
    { path: "../../public/fonts/ClashGrotesk/ClashGrotesk-Bold.woff", weight: "700", style: "normal" },
    { path: "../../public/fonts/ClashGrotesk/ClashGrotesk-Semibold.woff", weight: "600", style: "normal" },
    { path: "../../public/fonts/ClashGrotesk/ClashGrotesk-Medium.woff", weight: "500", style: "normal" },
    { path: "../../public/fonts/ClashGrotesk/ClashGrotesk-Regular.woff", weight: "400", style: "normal" },
    { path: "../../public/fonts/ClashGrotesk/ClashGrotesk-Light.woff", weight: "300", style: "normal", },
    { path: "../../public/fonts/ClashGrotesk/ClashGrotesk-Variable.woff", weight: "100 900", style: "normal" }

  ],
  variable: "--font-clash-grotesk",
  display: "swap"
});
const workSans = Work_Sans({
  subsets: ["latin"],
  variable: "--font-work-sans",
});
const dmMono = DM_Mono({
  subsets: ["latin"],
  variable: "--font-dm-mono",
  weight: "400",
  style: "normal",
  display: "swap"
});
const merriwether = Merriweather({
  subsets: ["latin"],
  variable: "--font-merriweather",
  weight:[ "400", "500", "700", "800", "900"],
  style: "normal",
  display: "swap"
});

const gambetta = localFont({
  src: [
    { path: "../../public/fonts/Gambetta/Gambetta-Regular.woff", weight: " 400", style: "normal" },
    { path: "../../public/fonts/Gambetta/Gambetta-Italic.woff", weight: " 400", style: "italic" },
    { path: "../../public/fonts/Gambetta/Gambetta-Medium.woff", weight: " 500", style: "normal" },
    { path: "../../public/fonts/Gambetta/Gambetta-MediumItalic.woff", weight: " 500", style: "italic" },
    { path: "../../public/fonts/Gambetta/Gambetta-Semibold.woff", weight: " 600", style: "normal" },
    { path: "../../public/fonts/Gambetta/Gambetta-SemiboldItalic.woff", weight: " 600", style: "italic" },
    { path: "../../public/fonts/Gambetta/Gambetta-Bold.woff", weight: " 700", style: "normal" },
    { path: "../../public/fonts/Gambetta/Gambetta-BoldItalic.woff", weight: " 700", style: "italic" },
  ],
  variable: "--font-gambetta",
  display: "swap"
});
const bespokeSerif = localFont({
  src: [
    {path: "../../public/fonts/BespokeSerif/BespokeSerif-Regular.woff", weight: "400", style: "normal"},
    {path: "../../public/fonts/BespokeSerif/BespokeSerif-Medium.woff", weight: "500", style: "normal"},
    {path: "../../public/fonts/BespokeSerif/BespokeSerif-Bold.woff", weight: "700", style: "normal"},
    {path: "../../public/fonts/BespokeSerif/BespokeSerif-Extrabold.woff", weight: "900", style: "normal"},
  ],
  variable: "--font-bespoke-serif",
  display: "swap"
})


export const metadata: Metadata = {
  title: "dee Caulcrick's blog",
  description: "A blog on building your own software, designing interfaces and exploring ml/ai",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`  ${clashGrotesk.variable}${workSans.variable} ${dmMono.variable} ${gambetta.variable} ${bespokeSerif.variable} antialiased p-2 lg:p-6`} >
        {children}
      </body>
    </html>
  );
}
