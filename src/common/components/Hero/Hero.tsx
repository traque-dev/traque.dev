import { Spotlight } from '@/common/ui/Spotlight';
import { BackgroundDots } from '@/common/ui/BackgroundDots';
import Image from 'next/image';
import { type FC } from 'react';
import { ScriptCopyButton } from '../script-copy-button';

type Props = {
  count?: number;
};

export const Hero: FC<Props> = () => {
  return (
    <div className="bg-grid-white/[0.02] relative flex min-h-screen w-full overflow-hidden rounded-md bg-black/[0.96] antialiased md:items-center md:justify-center">
      <Spotlight />
      <BackgroundDots />

      <div className="relative z-10 mx-auto w-full max-w-7xl p-4 pt-32 md:pt-0">
        <div className="flex flex-row items-center justify-center gap-4">
          <Image src="/logo.png" alt="Logo" width={48} height={48} />
          <div className="bg-opacity-50 bg-gradient-to-b from-neutral-50 to-neutral-300 bg-clip-text text-xl font-semibold text-transparent">
            TRAQUE
          </div>
        </div>
        <h1 className="bg-opacity-50 mt-10 bg-gradient-to-b from-neutral-50 to-neutral-400 bg-clip-text text-center text-4xl font-bold text-transparent md:text-7xl">
          Error Tracking Service
          <br /> for Your Startup
        </h1>
        <p className="mx-auto mt-4 max-w-lg text-center text-base font-normal text-neutral-300">
          Simple and effective error tracking service with a very convenient
          mobile app.
        </p>

        <div className="mt-10">
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

        {/* <WaitListForm /> */}

        {/* <div className="mx-auto mt-8 max-w-lg text-center text-[14px] font-normal text-neutral-400">
          <span className="font-bold text-white">{count}</span> people have
          joined the waitlist
        </div> */}
      </div>
    </div>
  );
};
