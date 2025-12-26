import './globals.css';

import type { Metadata } from 'next';
import { Atkinson_Hyperlegible_Mono, Atkinson_Hyperlegible_Next } from 'next/font/google';
import { NavItem } from '@ui';
import { CiApple } from 'react-icons/ci';

const atkinsonHyperlegible = Atkinson_Hyperlegible_Next({
  variable: '--font-atkinson-hyperlegible',
  subsets: ['latin'],
  fallback: ['sans-serif', 'system-ui'],
  adjustFontFallback: false,
});

const atkinsonHyperlegibleMono = Atkinson_Hyperlegible_Mono({
  variable: '--font-atkinson-hyperlegible-mono',
  subsets: ['latin'],
  fallback: ['monospace', 'ui-monospace'],
  adjustFontFallback: false,
});

export const metadata: Metadata = {
  title: "Pomme d'api",
  description: 'Pottery gallery',
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
          <nav className="z-50 flex h-12 w-full shrink-0 items-center justify-between bg-gray-100 shadow dark:bg-gray-800">
            <div className="flex-1 text-left text-2xl text-lime-500 dark:text-lime-800">
              <NavItem className="p-0! text-nowrap" href="/">
                <span className="flex items-center p-3 sm:hidden">
                  <CiApple strokeWidth={1} />
                </span>
                <span className="hidden p-3 sm:inline">Pomme d'api</span>
              </NavItem>
            </div>
            <div className="flex flex-2 justify-center gap-1 text-base font-medium">
              <NavItem href="/gallery">gallery</NavItem>
              <NavItem href="/about">about</NavItem>
              <NavItem href="/contact">contact</NavItem>
            </div>
            <div className="flex-1"></div>
          </nav>
          <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-50 dark:bg-gray-900">{children}</main>
        </div>
      </body>
    </html>
  );
}
