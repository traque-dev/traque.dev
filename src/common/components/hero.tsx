import { Spotlight } from '@/common/components/ui/spotlight';
import { BackgroundDots } from '@/common/components/ui/background-dots';
import { type FC } from 'react';
import { ScriptCopyButton } from '@/common/components/script-copy-button';
import { HeroCodeBlock } from '@/common/components/hero-code-block';
import { Button } from './ui/button';
import Link from 'next/link';

type Props = {
  count?: number;
};

export const Hero: FC<Props> = () => {
  return (
    <div className="bg-grid-white/[0.02] relative flex min-h-screen w-full overflow-hidden rounded-md bg-black/[0.96] antialiased md:items-center md:justify-center">
      <Spotlight />
      <BackgroundDots />

      <div className="relative z-10 mx-auto w-full max-w-7xl p-4 pt-32 md:pt-0">
        <div className="flex flex-col items-center justify-center gap-8 md:flex-row md:gap-4">
          <div className="flex w-full flex-col items-start justify-start md:flex-[0.5]">
            {/* <div className="flex flex-row items-center justify-center gap-4">
              <Image src="/logo.png" alt="Logo" width={48} height={48} />
              <div className="bg-opacity-50 bg-gradient-to-b from-neutral-50 to-neutral-300 bg-clip-text text-xl font-semibold text-transparent">
                TRAQUE
              </div>
            </div> */}
            <h1 className="bg-opacity-50 mt-10 bg-gradient-to-b from-neutral-50 to-neutral-400 bg-clip-text text-left text-4xl font-bold text-transparent md:text-5xl">
              Tracking Service
              <br /> for Your Startup
            </h1>
            <p className="mt-4 max-w-lg text-left text-base font-normal text-neutral-300">
              Simple and effective error and event tracking service with a very
              convenient mobile app.
            </p>

            <div className="mt-6">
              <Link href="https://app.traque.dev/auth/signup" target="_blank">
                <Button className="mb-4">Get Started</Button>
              </Link>
              <ScriptCopyButton
                showMultiplePackageOptions={true}
                codeLanguage="shell"
                lightTheme="vesper"
                darkTheme="vesper"
                commandMap={{
                  npm: 'npm install @traque/core',
                  yarn: 'yarn add @traque/core',
                  pnpm: 'pnpm add @traque/core',
                  bun: 'bun add @traque/core',
                }}
              />
            </div>
          </div>

          <div className="w-full md:flex-[0.5]">
            <HeroCodeBlock />
          </div>
        </div>
      </div>
    </div>
  );
};
