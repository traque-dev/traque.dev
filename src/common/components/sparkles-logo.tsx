import { BrymeeLogo } from './icons/BrymeeLogo';
import { SpeeklLogo } from './icons/SpeeklLogo';
import { SparklesCore } from './ui/sparkles';

export function SparklesLogo() {
  return (
    <div className="w-screen overflow-hidden">
      <div className="mx-auto mt-2 w-screen max-w-2xl">
        <div className="text-center text-4xl text-white">
          Used by amazing startups
        </div>

        <div className="mt-14 flex flex-row items-center justify-center gap-20">
          <SpeeklLogo className="h-auto w-[150px]" />
          <BrymeeLogo className="h-auto w-[150px]" />
        </div>
      </div>

      <div className="relative -mt-32 h-96 w-screen overflow-hidden [mask-image:radial-gradient(50%_50%,white,transparent)] before:absolute before:inset-0 before:bg-[radial-gradient(circle_at_bottom_center,#8842C0,transparent_70%)] before:opacity-40 after:absolute after:top-1/2 after:-left-1/2 after:aspect-[1/0.7] after:w-[200%] after:rounded-[100%] after:border-t after:border-[#8842C066] after:bg-zinc-900">
        <SparklesCore
          id="tsparticles"
          background="transparent"
          particleDensity={300}
          className="absolute inset-x-0 bottom-0 h-full w-full [mask-image:radial-gradient(50%_50%,white,transparent_85%)]"
        />
      </div>
    </div>
  );
}
