

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className=" flex justify-center">
      <div className="w-full">
        <div className=" hide-scrollbar ">
          {children}
         
        </div>
      </div>

    </div>
  );
}
