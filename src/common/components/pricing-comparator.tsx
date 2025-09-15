import { Button } from '@/common/components/ui/button';
import { Cpu, Sparkles } from 'lucide-react';
import Link from 'next/link';

const tableData = [
  {
    feature: 'Exceptions/month',
    free: '10,000',
    pro: 'Unlimited',
    startup: 'Depends on deployment',
  },
  {
    feature: 'Event tracking',
    free: true,
    pro: true,
    startup: true,
  },
  {
    feature: 'Data retention',
    free: 'Standard',
    pro: 'Long-term',
    startup: 'Configurable',
  },
  {
    feature: 'Support',
    free: 'Email',
    pro: 'Priority',
    startup: 'Community/Custom',
  },
];

const aiData = [
  {
    feature: 'AI Chat',
    free: false,
    pro: true,
    startup: 'Optional',
  },
  {
    feature: 'AI Agents (analyze & assist fixes)',
    free: false,
    pro: true,
    startup: 'Optional',
  },
];

function CheckIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="size-4"
    >
      <path
        fillRule="evenodd"
        d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
        clipRule="evenodd"
      />
    </svg>
  );
}

function renderCell(value: string | boolean) {
  if (typeof value === 'boolean') {
    return value ? <CheckIcon /> : '';
  }
  return value;
}

export default function PricingComparator() {
  return (
    <section className="py-16">
      <div className="mx-auto max-w-5xl px-6">
        <div className="w-full overflow-auto lg:overflow-visible">
          <table className="w-[200vw] border-separate border-spacing-x-3 md:w-full dark:[--color-muted:var(--color-zinc-900)]">
            {/* sticky top-0 */}
            <thead className="bg-background">
              <tr className="*:py-4 *:text-left *:font-medium">
                <th className="lg:w-2/5"></th>
                <th className="space-y-3">
                  <span className="block">Free</span>

                  <Button asChild variant="outline" size="sm">
                    <Link href="https://app.traque.dev/auth/signup">
                      Get started
                    </Link>
                  </Button>
                </th>
                <th className="bg-muted space-y-3 rounded-t-(--radius) px-4">
                  <span className="block">Plus</span>
                  <Button asChild size="sm">
                    <Link href="https://app.traque.dev/auth/signup">
                      Get started
                    </Link>
                  </Button>
                </th>
                <th className="space-y-3">
                  <span className="block">On‑premises</span>
                  <Button asChild variant="outline" size="sm">
                    <Link href="https://github.com/traque-dev">
                      View on GitHub
                    </Link>
                  </Button>
                </th>
              </tr>
            </thead>
            <tbody className="text-caption text-sm">
              <tr className="*:py-3">
                <td className="flex items-center gap-2 font-medium">
                  <Cpu className="size-4" />
                  <span>Platform</span>
                </td>
                <td></td>
                <td className="bg-muted border-none px-4"></td>
                <td></td>
              </tr>
              {tableData.map((row, index) => (
                <tr key={index} className="*:border-b *:py-3">
                  <td className="text-muted-foreground">{row.feature}</td>
                  <td>{renderCell(row.free)}</td>
                  <td className="bg-muted border-none px-4">
                    <div className="-mb-3 border-b py-3">
                      {renderCell(row.pro)}
                    </div>
                  </td>
                  <td>{renderCell(row.startup)}</td>
                </tr>
              ))}
              <tr className="*:pt-8 *:pb-3">
                <td className="flex items-center gap-2 font-medium">
                  <Sparkles className="size-4" />
                  <span>AI</span>
                </td>
                <td></td>
                <td className="bg-muted border-none px-4"></td>
                <td></td>
              </tr>
              {aiData.map((row, index) => (
                <tr key={index} className="*:border-b *:py-3">
                  <td className="text-muted-foreground">{row.feature}</td>
                  <td>{renderCell(row.free)}</td>
                  <td className="bg-muted border-none px-4">
                    <div className="-mb-3 border-b py-3">
                      {renderCell(row.pro)}
                    </div>
                  </td>
                  <td>{renderCell(row.startup)}</td>
                </tr>
              ))}
              <tr className="*:py-6">
                <td></td>
                <td></td>
                <td className="bg-muted rounded-b-(--radius) border-none px-4"></td>
                <td></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
