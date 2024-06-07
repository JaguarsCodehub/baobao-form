import type { Metadata } from 'next';
import { Pixelify_Sans } from 'next/font/google';
import './globals.css';
import { ClerkProvider } from '@clerk/nextjs';
import { ThemeProvider } from '@/components/modals/ThemeProvider';
import { experimental__simple } from '@clerk/themes';
import Navbar from '@/components/navbar';
import { ToastProvider } from '@/components/ui/toast';

const font = Pixelify_Sans({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'BaoBao Form Portal',
  description: 'Get a chance to whitelist your application',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang='en'>
        <body className={font.className}>
          <Navbar />
          <ToastProvider />
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
