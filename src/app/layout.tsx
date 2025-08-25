import './globals.css';
import Header from './shared/Header';
import Footer from './shared/Footer'

export const metadata = {
  title: "Polyglot App",
  description: "Learn and practice languages with ease",
};


export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-white text-black scroll-smooth">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
