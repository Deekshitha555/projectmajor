
import Footer from "src/components/actual/Footer";
import { NavbarDemo } from "../../components/actual/navbar";
export default function RootLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
        <main className="bg-gray-900 relative flex flex-col justify-center items-center overflow-hidden sm:px-0" suppressHydrationWarning>
        <NavbarDemo/>
        <div className="w-full">{children}</div>
        <Footer/>
      </main>
    );
  }
  