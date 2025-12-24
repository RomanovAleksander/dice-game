import type { Metadata } from 'next';
import { Roboto } from 'next/font/google';
import { Providers } from './providers';
import './globals.css';

const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-roboto',
});

export const metadata: Metadata = {
  title: 'Dice Game',
  description: 'A simple dice game built with Next.js, TypeScript, and Material UI',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode; }>) {
  return (
    <html lang="en">
    <body className={roboto.variable}>
    <Providers>{children}</Providers>
    </body>
    </html>
  );
}
