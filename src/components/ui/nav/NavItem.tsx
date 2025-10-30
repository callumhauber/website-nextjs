import Link from 'next/link';
import type { ReactNode } from 'react';

const NavItem = ({ children, className = '', href }: { children: ReactNode; className?: string; href: string }) => (
  <Link href={href} className={`p-3 text-lime-400 transition-colors hover:text-lime-600 ${className}`}>
    {children}
  </Link>
);

export { NavItem };
