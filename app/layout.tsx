import { SITE_NAME } from '@/site/config';
import './globals.css';
import { Footer, NavBar } from '@/components';

export const metadata = {
  title: SITE_NAME,
  description: "Discover world's best car showcase application",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body className='relative'>
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
