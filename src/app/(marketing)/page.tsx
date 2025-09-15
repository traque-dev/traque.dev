import { FeaturesGrid } from '@/common/components/features-grid';
import { ClockCircleLinearIcon } from '@/common/components/icons/clock-circle-linear-icon';
import { WadOfMoneyLinearIcon } from '@/common/components/icons/wad-of-money-linear-icon';
import { IPhoneLinearIcon } from '@/common/components/icons/iphone-linear-icon';
import { CodeLinearIcon } from '@/common/components/icons/code-linear-icon';
import { LockKeyholeMinimalisticLinearIcon } from '@/common/components/icons/lock-keyhole-minimalistic-linear-icon';
import { BackgroundDots } from '@/common/components/ui/background-dots';
import { Hero } from '@/common/components/hero';
import { Features2 } from '@/common/components/features2';
import { SparklesLogo } from '@/common/components/sparkles-logo';
import { FeaturesWithStickyScroll } from '@/common/components/features-with-sticky-scroll';
import { BentoGridFeatures } from '@/common/components/bento-grid-features';
import { Faq } from '@/common/components/faq';

export default async function Home() {
  return (
    <div>
      <Hero />

      <SparklesLogo />

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

      <FeaturesWithStickyScroll />

      <Features2 />

      <BentoGridFeatures />

      <Faq />
    </div>
  );
}
