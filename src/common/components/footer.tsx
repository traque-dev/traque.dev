import Link from 'next/link';
import { Logo } from './logo';
import { Github as GithubIcon, Linkedin as LinkedinIcon } from 'lucide-react';
import { XLogo } from './icons/XLogo';

export function Footer() {
  const pages = [
    { title: 'Home', href: '/' },
    { title: 'Docs', href: '/docs' },
  ];

  const socials = [
    // { title: "Facebook", href: "#" },
    // { title: "Instagram", href: "#" },
    { title: 'X', href: 'https://x.com/traque_dev' },
    {
      title: 'LinkedIn',
      href: 'https://www.linkedin.com/company/traquedotdev/',
    },
    {
      title: 'Github',
      href: 'https://github.com/traque-dev',
    },
    {
      title: 'Discord',
      href: 'https://discord.gg/PvJr2Sd3',
    },
  ];

  const legal = [
    { title: 'Privacy Policy', href: '/privacy' },
    // { title: 'Terms of Service', href: '#' },
    // { title: 'Security', href: '#' },
  ];

  return (
    <footer className="bg-muted m-10 mx-auto w-full max-w-7xl rounded-xl">
      <div className="mx-auto max-w-7xl px-8 py-20">
        <div className="flex flex-col justify-between gap-12 md:flex-row">
          <div className="flex flex-col items-start">
            <Logo />
            <h2 className="mt-8 max-w-md text-2xl font-medium text-white">
              <span className="bg-gradient-to-b from-slate-100 via-gray-200 to-slate-300 bg-clip-text text-transparent">
                Monitoring and error tracking for your startup.
              </span>
            </h2>

            <a
              href="https://www.producthunt.com/products/traque?embed=true&utm_source=badge-featured&utm_medium=badge&utm_source=badge-traque"
              target="_blank"
              className="mt-8"
            >
              <img
                src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=997067&theme=dark&t=1753383471340"
                alt="Traque - Error&#0032;Tracking&#0032;Service&#0032;for&#0032;Your&#0032;Startup | Product Hunt"
                style={{ width: '250px', height: '54px' }}
                width="250"
                height="54"
              />
            </a>
          </div>

          <div className="grid grid-cols-1 gap-8 justify-self-end md:grid-cols-4">
            <div className="space-y-6">
              <h3 className="font-semibold">Pages</h3>
              <ul className="space-y-3">
                {pages.map((item, idx) => (
                  <li key={idx}>
                    <Link
                      href={item.href}
                      className="text-muted-foreground hover:text-foreground"
                    >
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-6">
              <h3 className="font-semibold">Socials</h3>
              <ul className="space-y-3">
                {socials.map((item, idx) => (
                  <li key={idx}>
                    <Link
                      href={item.href}
                      className="text-muted-foreground hover:text-foreground"
                      target="_blank"
                    >
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-6">
              <h3 className="font-semibold">Legal</h3>
              <ul className="space-y-3">
                {legal.map((item, idx) => (
                  <li key={idx}>
                    <Link
                      href={item.href}
                      className="text-muted-foreground hover:text-foreground"
                    >
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="mx-auto flex max-w-xs flex-col items-center justify-between justify-center pt-16 md:flex-row">
          <div className="mt-4 flex items-center justify-center gap-4 md:mt-0">
            <Link
              href="https://x.com/traque_dev"
              className="text-muted-foreground hover:text-foreground"
              target="_blank"
            >
              <XLogo className="size-5 text-white" />
            </Link>
            <Link
              href="https://www.linkedin.com/company/traquedotdev/"
              className="text-muted-foreground hover:text-foreground"
              target="_blank"
            >
              <LinkedinIcon size={20} />
            </Link>
            <Link
              href="https://github.com/traque-dev"
              className="text-muted-foreground hover:text-foreground"
              target="_blank"
            >
              <GithubIcon size={20} />
            </Link>
            {/* <Link
              href="#"
              className="text-muted-foreground hover:text-foreground"
            >
              <IconBrandFacebook size={20} />
            </Link>
            <Link
              href="#"
              className="text-muted-foreground hover:text-foreground"
            >
              <IconBrandInstagram size={20} />
            </Link> */}
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center bg-black/[0.96]">
        <div className="flex flex-col items-center justify-center gap-2">
          <div className="text-xs text-white/60">© 2025 Speekl, LLC</div>
          <div className="text-[10px] text-white/60">
            1111B South Governors Ave, STE 7418 Dover, DE 19904, USA
          </div>
        </div>
      </div>
    </footer>
  );
}
