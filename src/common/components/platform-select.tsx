import Link from 'next/link';
import { ReactNode } from 'react';
import { ReactLogo } from '@/common/ui/icons/ReactLogo';
import { NodeJsLogo } from '@/common/ui/icons/NodeJsLogo';
import { NestJsLogo } from '@/common/ui/icons/NestJsLogo';

interface Platform {
  name: string;
  icon?: ReactNode;
  url: string;
}

export function PlatformSelect() {
  const platforms: Platform[] = [
    {
      name: 'React',
      icon: <ReactLogo />,
      url: '/docs/react/installation',
    },
    {
      name: 'Node.js',
      icon: <NodeJsLogo />,
      url: '/docs/node/installation',
    },
    {
      name: 'NestJS',
      icon: <NestJsLogo />,
      url: '/docs/nest/installation',
    },
  ];

  return (
    <div className="w-full p-4">
      <div className="flex flex-col items-center justify-center gap-4 md:flex-row">
        {platforms.map((platform) => (
          <Link
            key={platform.name}
            href={platform.url}
            className="w-full flex-1 no-underline"
          >
            <div className="cursor-pointer rounded-lg bg-neutral-900 p-6 shadow-md transition-all hover:scale-[1.02]">
              <div className="flex flex-col items-center space-y-4">
                <div className="flex h-16 w-16 items-center justify-center">
                  {platform.icon}
                </div>
                <div className="text-foreground mt-4 text-xl font-semibold no-underline">
                  {platform.name}
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
