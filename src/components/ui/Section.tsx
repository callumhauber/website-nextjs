import type { ReactNode } from 'react';

const Section = ({ children, className = '', title }: { children: ReactNode; className?: string; title?: string }) => (
  <section
    className={`space-y-1 rounded-md border-1 border-lime-100 bg-gray-100 p-2 shadow-[0_0_4px_rgba(0,0,0,0.2)] ${className}`}
  >
    {title && (
      <>
        <h2 className="text-xl font-bold">{title}</h2>
        <hr className="h-1 rounded-sm border-none shadow-[0_0_2px_rgba(0,0,0,0.2)]" />
      </>
    )}
    {children}
  </section>
);

export { Section };
