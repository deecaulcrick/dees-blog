import type { Metadata } from "next";
import localFont from "next/font/local";
import { DM_Mono, Lato, Newsreader } from "next/font/google";
import Header from "@/components/Header";
import { ThemeProvider } from "@/components/ThemeProvider";
import "./globals.css";

const lato = Lato({
  subsets: ["latin"],
  variable: "--font-lato",
  weight: "400",
  style: "normal",
  display: "swap"
});

const newsreader = Newsreader({
  subsets: ["latin"],
  variable: "--font-newsreader",
});

const dmMono = DM_Mono({
  subsets: ["latin"],
  variable: "--font-dm-mono",
  weight: "400",
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
      <body className={`  ${lato.variable} ${newsreader.variable}${dmMono.variable} ${gambetta.variable} ${bespokeSerif.variable} antialiased `} >
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
          <div>
            <Header />
          </div>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
