import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import TanstackQueryProvider from '@/providers/TanstackQueryProvider';
import StoreProvider from '@/providers/StoreProvider';
import { Toaster } from 'react-hot-toast';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'E-commerce Site',
  description: 'Generated by Tech Analalytica Ltd.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} min-h-screen flex flex-col`}>
        <Toaster
          position="bottom-center"
          toastOptions={{
            // Define default options
            className: '',
            duration: 3000,
            style: {
              background: '#363636',
              color: '#fff',
            },
            // Default options for specific types
            success: {
              duration: 3000,
              theme: {
                primary: 'green',
                secondary: 'black',
              },
            },
            error: {
              duration: 3000,
              theme: {
                primary: 'red',
                secondary: 'black',
              },
            },
          }}
        />
        <StoreProvider>
          <TanstackQueryProvider>
            <Header />
            {children}
            <Footer />
          </TanstackQueryProvider>
        </StoreProvider>
      </body>
    </html>
  );
}
