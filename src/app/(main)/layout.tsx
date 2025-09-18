import Header from "@/components/Header";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <div className="w-full flex flex-col justify-center items-center">
        <div className="header w-full flex justify-center">
          <div className="container px-8 md:px-15 lg:px-30">
            <Header />
          </div>
        </div>
        {children}
      </div>
      <div className="footer">
      </div>
    </>
  );
}
