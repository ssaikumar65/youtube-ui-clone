import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import "./globals.css";

export const metadata = {
  title: "Youtube UI",
  description: "Youtube UI by SSK",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className=" bg-black text-zinc-200 font-['Roboto'] select-none">
        <div className=" flex flex-col h-screen">
          <Navbar />
          <div className="flex flex-1 ">
            <Sidebar />
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
