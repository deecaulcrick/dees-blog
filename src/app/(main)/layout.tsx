import Footer from "@/components/Footer";
import Header from "@/components/Header";
import SideBar from "@/components/SideBar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex justify-center">
      <div className="container flex border-x border-0.5 border-dashed border-border ">
        <div className=" hide-scrollbar ">
          <div className="relative w-full mb-20">
            <Header />
          </div>


          {children}
          <div className="relative w-full lg:hidden">
            <Footer />
          </div>
        </div>
      </div>

    </div>
  );
}
