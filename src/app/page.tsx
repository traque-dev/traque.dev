import { Spotlight } from '@/common/ui/Spotlight';
import { Footer } from '@/common/components/Footer';
import { WaitListForm } from '@/common/components/WaitListForm';
import Image from 'next/image';
import { getWaitlistCount } from '@/common/api/waitlist';
import { FeaturesGrid } from '@/common/components/FeaturesGrid';
import { ClockCircleLinearIcon } from '@/common/ui/icons/ClockCircleLinearIcon';
import { WadOfMoneyLinearIcon } from '@/common/ui/icons/WadOfMoneyLinearIcon';
import { IPhoneLinearIcon } from '@/common/ui/icons/IPhoneLinearIcon';
import { CodeLinearIcon } from '@/common/ui/icons/CodeLinearIcon';
import { LockKeyholeMinimalisticLinearIcon } from '@/common/ui/icons/LockKeyholeMinimalisticLinearIcon';
import { BackgroundDots } from '@/common/ui/BackgroundDots';

export const revalidate = 60;

export default async function Home() {
  const { count } = await getWaitlistCount();

  return (
    <div>
      <div className="bg-grid-white/[0.02] relative flex min-h-screen w-full overflow-hidden rounded-md bg-black/[0.96] antialiased md:items-center md:justify-center">
        <Spotlight />
        <BackgroundDots />

        <div className="relative z-10 mx-auto w-full max-w-7xl p-4 pt-20 md:pt-0">
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

          <WaitListForm />

          <div className="mx-auto mt-8 max-w-lg text-center text-[14px] font-normal text-neutral-400">
            <span className="font-bold text-white">{count}</span> people have
            joined the waitlist
          </div>
        </div>
      </div>

      <div className="relative container mx-auto pb-8">
        <BackgroundDots />
        <FeaturesGrid
          items={[
            {
              area: 'md:[grid-area:1/1/2/7] xl:[grid-area:1/1/2/5]',
              icon: (
                <ClockCircleLinearIcon className="size-5 text-neutral-400" />
              ),
              title: 'Set It Up in Minutes',
              description:
                "Installing Traque is super simple—just a few lines of code and you're ready to start tracking errors. No confusing setup, no stress.",
            },
            {
              area: 'md:[grid-area:1/7/2/13] xl:[grid-area:2/1/3/5]',
              icon: (
                <WadOfMoneyLinearIcon className="size-5 text-neutral-400" />
              ),
              title: 'Great Value',
              description:
                "Traque gives you all the tools you need to monitor errors without the high price tag. It's affordable, straightforward, and built to grow with you.",
            },

            {
              area: 'md:[grid-area:2/1/3/7] xl:[grid-area:1/5/3/9]',
              icon: <IPhoneLinearIcon className="size-5 text-neutral-400" />,
              title: 'Stay in Control, Even on the Go',
              description:
                "With Traque's mobile app, you can keep an eye on your app from anywhere. Get alerts, check issues, and fix problems - all from your phone.",
            },

            {
              area: 'md:[grid-area:2/7/3/13] xl:[grid-area:1/9/2/13]',
              icon: <CodeLinearIcon className="size-5 text-neutral-400" />,
              title: 'Works with Your Favorite Tools',
              description:
                'Traque works great with your favorite tools - frontend or backend. It understands your setup and gives you simple, helpful error reports that just make sense.',
            },
            {
              area: 'md:[grid-area:3/1/4/13] xl:[grid-area:2/9/3/13]',
              icon: (
                <LockKeyholeMinimalisticLinearIcon className="size-5 text-neutral-400" />
              ),
              title: 'Extra Protection with AWS WAF',
              description:
                "Traque connects with AWS WAF to help block bad traffic before it becomes a problem. It's another layer of safety for your apps - built right in.",
            },
          ]}
        />
      </div>

      <Footer />
    </div>
  );
}
