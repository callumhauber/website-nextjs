import Link from 'next/link';
import Image, { type ImageProps } from 'next/image';
import type { ComponentProps, ReactNode } from 'react';

// --- Types ---
type BaseProps = {
  className?: string;
  children?: ReactNode;
};

type CardProps = BaseProps & {
  href: string;
};

// --- Components ---

const CardRoot = ({ children, className = '', href }: CardProps) => (
  <Link
    href={href}
    className={`group block w-full overflow-hidden rounded-2xl border border-slate-200 bg-slate-50 p-4 shadow-sm transition-all hover:border-slate-300 hover:shadow-md ${className}`}
  >
    <div className="flex h-full flex-col">{children}</div>
  </Link>
);

const CardHeader = ({ children, className = '' }: BaseProps) => (
  <div className={`mb-3 flex items-start justify-between gap-4 ${className}`}>{children}</div>
);

const CardTitle = ({ children, className = '' }: BaseProps) => (
  <h3 className={`text-lg leading-tight font-bold text-slate-900 ${className}`}>{children}</h3>
);

const CardDetailGroup = ({ children, className = '' }: BaseProps) => (
  <div className={`flex shrink-0 gap-2 ${className}`}>{children}</div>
);

const CardDetail = ({ children, className = '' }: BaseProps) => (
  <div
    className={`flex items-center justify-center rounded-lg border border-slate-200 bg-white px-2 py-1 text-sm font-medium text-slate-900 shadow-sm ${className}`}
  >
    {children}
  </div>
);

const CardImage = ({ className = '', alt, ...props }: ImageProps) => (
  <div className={`relative mb-4 aspect-square w-full overflow-hidden rounded-xl bg-slate-200 ${className}`}>
    <Image alt={alt} fill className="object-cover transition-transform duration-300 group-hover:scale-105" {...props} />
  </div>
);

const CardBody = ({ children, className = '' }: BaseProps) => (
  <div className={`flex flex-col gap-3 ${className}`}>{children}</div>
);

const CardActionGroup = ({ children, className = '' }: BaseProps) => (
  <div className={`flex flex-wrap gap-2 ${className}`}>{children}</div>
);

const CardAction = ({ children, className = '', ...props }: ComponentProps<'div'>) => (
  <div
    className={`flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-700 shadow-sm transition-colors hover:bg-slate-50 hover:text-slate-900 ${className}`}
    {...props}
  >
    {children}
  </div>
);

const CardDescription = ({ children, className = '' }: BaseProps) => (
  <p className={`text-sm leading-relaxed font-medium text-slate-900 ${className}`}>{children}</p>
);

// --- Export ---

export const Card = Object.assign(CardRoot, {
  Header: CardHeader,
  Title: CardTitle,
  DetailGroup: CardDetailGroup,
  Detail: CardDetail,
  Image: CardImage,
  Body: CardBody,
  ActionGroup: CardActionGroup,
  Action: CardAction,
  Description: CardDescription,
});
