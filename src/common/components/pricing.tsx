import { Button } from '@/common/components/ui/button';
import { Check } from 'lucide-react';
import Link from 'next/link';

export default function Pricing() {
  return (
    <section className="py-16 md:pt-40">
      <div className="mx-auto max-w-5xl px-6">
        <div className="mx-auto max-w-2xl space-y-6 text-center">
          <h1 className="text-center text-4xl font-semibold lg:text-5xl">
            Simple, <span className="text-fuchsia-500">transparent</span>{' '}
            pricing
          </h1>
          <p>
            Track exceptions and events with Traque. Unlock AI Chat and Agents
            to diagnose and fix issues faster.
          </p>
        </div>

        <div className="mt-8 grid gap-6 md:mt-20 md:grid-cols-5 md:gap-0">
          <div className="flex flex-col justify-between space-y-8 rounded-(--radius) border p-6 md:col-span-2 md:my-2 md:rounded-r-none md:border-r-0 lg:p-10">
            <div className="space-y-4">
              <div>
                <h2 className="font-medium">Free</h2>
                <span className="my-3 block text-2xl font-semibold">
                  $0 / mo
                </span>
                <p className="text-muted-foreground text-sm">
                  Best for getting started
                </p>
              </div>

              <Button asChild variant="outline" className="w-full">
                <Link href="https://app.traque.dev/auth/signup">
                  Get started
                </Link>
              </Button>

              <hr className="border-dashed" />

              <ul className="list-outside space-y-3 text-sm">
                {[
                  'Up to 10,000 exceptions/month',
                  'Core event & exception tracking',
                  'Email support',
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <Check className="size-3" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="dark:bg-muted relative overflow-hidden rounded-(--radius) border p-6 shadow-lg shadow-gray-950/5 md:col-span-3 lg:p-10 dark:[--color-muted:var(--color-zinc-900)]">
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 z-0 bg-[radial-gradient(900px_circle_at_50%_0%,rgba(212,175,55,0.30)_0%,rgba(161,123,17,0.22)_35%,transparent_65%)] dark:bg-[radial-gradient(900px_circle_at_50%_0%,rgba(212,175,55,0.36)_0%,rgba(161,123,17,0.26)_35%,transparent_65%)]"
            />
            <div className="relative z-10 grid gap-6 sm:grid-cols-2">
              <div className="space-y-4">
                <div>
                  <h2 className="font-medium">Plus</h2>
                  <span className="my-3 block text-2xl font-semibold">
                    $8 / mo
                  </span>
                  <p className="text-muted-foreground text-sm">per seat</p>
                </div>

                <Button
                  asChild
                  className="w-full bg-[#D4AF37] text-black hover:bg-[#C79F2F] focus-visible:ring-[#D4AF37]"
                >
                  <Link href="https://app.traque.dev/auth/signup">
                    Get started
                  </Link>
                </Button>
              </div>

              <div>
                <div className="text-sm font-medium">
                  Everything in Free, plus:
                </div>

                <ul className="mt-4 list-outside space-y-3 text-sm">
                  {[
                    'Unlimited exceptions and events',
                    'Long-term retention',
                    'AI Chat for on-demand insights',
                    'AI Agents to analyze and help fix issues',
                    'Priority support',
                  ].map((item, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <Check className="size-3" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 grid gap-6 md:mt-10 md:grid-cols-5 md:gap-0">
          <div className="flex flex-col justify-between space-y-8 rounded-(--radius) border p-6 md:col-span-5 lg:p-10">
            <div className="grid gap-6 sm:grid-cols-2">
              <div className="space-y-4">
                <div>
                  <h2 className="font-medium">On‑premises</h2>
                  <span className="my-3 block text-2xl font-semibold">
                    Deploy your own
                  </span>
                  <p className="text-muted-foreground text-sm">
                    Download from GitHub and deploy in your cloud or data center
                  </p>
                </div>

                <Button asChild className="w-full">
                  <Link href="https://github.com/traque-dev">
                    View on GitHub
                  </Link>
                </Button>
              </div>

              <div>
                <div className="text-sm font-medium">What you get:</div>
                <ul className="mt-4 list-outside space-y-3 text-sm">
                  {[
                    'Self-hosted deployment with your own keys',
                    'You manage infrastructure and costs',
                    'Full feature set, depending on your configuration',
                    'No usage-based fees from Traque',
                    'Download from GitHub',
                  ].map((item, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <Check className="size-3" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
