import { Faq } from '@/common/components/faq';
import Pricing from '@/common/components/pricing';
import PricingComparator from '@/common/components/pricing-comparator';
import { BackgroundDots } from '@/common/components/ui/background-dots';
import { Spotlight } from '@/common/components/ui/spotlight';

export default function PricingPage() {
  return (
    <div className="relative overflow-x-hidden">
      <Spotlight />
      <BackgroundDots />

      <div className="relative z-10">
        <Pricing />
        <PricingComparator />
        <Faq />
      </div>
    </div>
  );
}
