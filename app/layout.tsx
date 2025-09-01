import TanStackProvider from '@/components/TanStackProvider/TanStackProvider';
import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import 'modern-normalize';
import './globals.css';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Homework #6',
  description: 'Created by Oleksii Rudenko',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <TanStackProvider>
        <body className={`${geistSans.variable} ${geistMono.variable}`}>
          <Header />
          <main>{children}</main>
          <Footer />
        </body>
      </TanStackProvider>
    </html>
  );
}
