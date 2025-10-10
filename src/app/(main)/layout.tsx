import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Splash from "@/components/shape-dividers/Splash";
import SideBar from "@/components/SideBar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex justify-center h-screen">
      <div className="container border-x border-dashed border-zinc-400 dark:border-zinc-500 flex ">
        <SideBar />
        <div className="flex-1 overflow-y-auto hide-scrollbar ">
          <div className="relative w-full">
            <Header />
          </div>


          {children}
          <div className="relative w-full md:hidden">
            <Footer />
          </div>
        </div>
      </div>

    </div>
  );
}
