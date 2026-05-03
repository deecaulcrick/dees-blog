import Footer from "@/components/Footer";
import Header from "@/components/Header";
import SideBar from "@/components/SideBar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="max-w-7xl mx-auto flex justify-center">
      <div className="p-2 lg:p-6 w-full">
        <div className=" hide-scrollbar ">
          <div className="relative w-full">
            <Header />
          </div>
          {children}
          {/* <div className="relative w-full lg:hidden">
            <Footer />
          </div> */}
        </div>
      </div>

    </div>
  );
}
