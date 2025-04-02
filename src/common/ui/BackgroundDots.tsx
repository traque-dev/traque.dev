import { cn } from '@/common/utils/cn';
import { Fragment } from 'react';

export const BackgroundDots = () => (
  <Fragment>
    <div
      className={cn(
        'absolute inset-0',
        '[background-size:20px_20px]',
        '[background-image:radial-gradient(#1a1a1a_1px,transparent_1px)]'
      )}
    />
    <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_1%,black)] dark:bg-black" />
  </Fragment>
);
