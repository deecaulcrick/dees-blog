import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Splash from "@/components/shape-dividers/Splash";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <div className="w-full flex flex-col justify-center items-center">
        <div className="bg-theme-green dark:bg-theme-teal h-70 w-full flex justify-center">
          <div className="container px-8 md:px-15 lg:px-30 ">
            <Header />
          </div>
        </div>
        <div className="w-full">
          <Splash />
        </div>
        {children}
      </div>
      <div className="w-full">
        <Footer />
      </div>
    </>
  );
}
