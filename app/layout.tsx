import type { Metadata } from 'next';
import './globals.css';
import Footer from './components/Footer';
import Header from './components/Header';
import FloatingMenu from './components/FloatingMenu';


export const metadata: Metadata = {
  title: `Jimmy's Portfolio`,
  description: 'Hi, my name is Jimmy, here is my portfolio, click to see something about me.',
  icons: {
    icon: "/logo-JN-upscaled.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body className="relative min-h-screen text-gray-800 antialiased">
        <div
          className="fixed inset-0 z-[-2] bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/bg.gif')" }}
        />
        <div className="fixed inset-0 z-[-1] bg-black/30" />
        {/* <Header /> */}


        <main className="relative z-10">
          <Header />
          {children}</main>

        <Footer />
        <FloatingMenu />

      </body>
    </html>
  );
}
