import type { ReactNode } from 'react';

import { Divider } from '../Divider';

const Section = ({ children, className = '', title }: { children: ReactNode; className?: string; title?: string }) => (
  <section
    className={`space-y-1 rounded-md border border-lime-100 bg-gray-100 p-2 text-black shadow-[0_0_4px_rgba(0,0,0,0.2)] dark:border-lime-800 dark:bg-gray-800 dark:text-gray-200 ${className}`}
  >
    {title && (
      <>
        <h2 className="text-xl font-bold">{title}</h2>
        <Divider />
      </>
    )}
    {children}
  </section>
);

export { Section };
