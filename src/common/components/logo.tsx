'use client';

import { cn } from '@/common/utils/cn';
import Link from 'next/link';

export const Logo = ({ className }: { className?: string }) => {
  return (
    <Link
      href="/"
      className={cn(
        'relative z-20 flex shrink-0 items-center justify-center gap-2 px-2 py-1 text-sm font-normal text-black',
        className
      )}
    >
      <img src="/logo.png" alt="Traque" className="h-8 w-8" />

      <span className="text-lg font-medium text-white">Traque</span>
    </Link>
  );
};
