import './globals.css';

import type { Metadata } from 'next';
import { Atkinson_Hyperlegible_Mono, Atkinson_Hyperlegible_Next } from 'next/font/google';
import { NavItem } from '@ui';

const atkinsonHyperlegible = Atkinson_Hyperlegible_Next({
  variable: '--font-atkinson-hyperlegible',
  subsets: ['latin'],
  fallback: ['sans-serif', 'system-ui'],
});

const atkinsonHyperlegibleMono = Atkinson_Hyperlegible_Mono({
  variable: '--font-atkinson-hyperlegible-mono',
  subsets: ['latin'],
  fallback: ['monospace', 'ui-monospace'],
});

export const metadata: Metadata = {
  title: 'ssstickers',
  description: 'suspiciously specific stickers',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${atkinsonHyperlegible.variable} ${atkinsonHyperlegibleMono.variable} antialiased`}>
        <div className="flex h-dvh flex-col font-sans">
          <nav className="z-50 flex h-12 w-full flex-shrink-0 items-center justify-between bg-gray-100 shadow">
            <div className="flex-1 text-left text-2xl text-lime-500">
              <NavItem className="text-nowrap" href="/">
                <span className="sm:hidden">sss</span>
                <span className="hidden sm:inline">suspiciously specific stickers</span>
              </NavItem>
            </div>
            <div className="flex flex-2 justify-center gap-1 text-base font-medium">
              <NavItem href="/gallery">gallery</NavItem>
              <NavItem href="/about">about</NavItem>
              <NavItem href="/contact">contact</NavItem>
            </div>
            <div className="flex-1"></div>
          </nav>
          <main className="flex-1 overflow-x-hidden overflow-y-auto">{children}</main>
        </div>
      </body>
    </html>
  );
}
