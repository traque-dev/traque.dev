'use client';

import { cn } from '@/lib/utils';
import React, { useMemo } from 'react';
import { motion } from 'motion/react';
import Image from 'next/image';
import DottedMap from 'dotted-map';
import {
  Bug,
  Shield,
  Smartphone,
  AlertTriangle,
  Activity,
  Bell,
  Code,
} from 'lucide-react';

export function Features2() {
  return (
    <div
      id="product"
      className="mx-auto w-full max-w-7xl px-4 py-4 md:my-20 md:px-8 md:py-20"
    >
      <div className="mb-16 text-center">
        <h2 className="mb-4 text-4xl font-bold text-white md:text-6xl">
          Everything you need to{' '}
          <span className="text-primary">track and fix errors</span>
        </h2>
        <p className="mx-auto max-w-2xl text-neutral-400">
          From real-time crash detection to detailed analytics, we provide all
          the tools you need to monitor and improve your mobile
          application&apos;s stability
        </p>
      </div>
      <div className="cols-1 mx-auto mt-20 grid max-w-3xl auto-rows-[25rem] gap-4 lg:max-w-none lg:grid-cols-5">
        <Card className="relative flex flex-col justify-between lg:col-span-3">
          <div className="absolute inset-0">
            <MapView />
          </div>
          <div className="absolute inset-x-0 bottom-0 z-10 h-[70%] bg-gradient-to-t from-neutral-900 to-transparent" />
          <CardContent className="absolute bottom-0 z-10">
            <CardTitle>Global Error Monitoring</CardTitle>
            <CardDescription>
              Monitor your app&apos;s performance across the globe. Track
              crashes and errors from users worldwide with real-time geographic
              insights. (coming soon)
            </CardDescription>
          </CardContent>
        </Card>
        <Card className="relative flex flex-col justify-between lg:col-span-2">
          <Chart />
          <div className="absolute inset-x-0 bottom-0 z-10 h-[40%] bg-gradient-to-t from-neutral-800 to-transparent" />
          <CardContent className="absolute bottom-0 z-10">
            <CardTitle>Exception Analytics</CardTitle>
            <CardDescription>
              See trends and details for all app exceptions.
            </CardDescription>
          </CardContent>
        </Card>
        <Card className="relative flex flex-col justify-between bg-transparent lg:col-span-2">
          <div className="absolute inset-0 flex items-center justify-center">
            <LogoOrbit />
          </div>
          <div className="absolute inset-x-0 bottom-0 z-10 h-[70%] bg-gradient-to-t from-neutral-900 via-neutral-900 to-transparent" />
          <CardContent className="absolute bottom-0 z-10">
            <CardTitle>Easy Integration</CardTitle>
            <CardDescription>
              Set up Traque in minutes. Just add a few lines of code and start
              tracking errors right away.
            </CardDescription>
          </CardContent>
          <div className="absolute right-4 bottom-4 opacity-10 md:opacity-100"></div>
        </Card>

        <Card className="flex flex-col justify-between lg:col-span-3">
          <CardSkeletonBody>
            <div className="mt-6 h-full w-full rounded-lg p-4 px-2 md:px-10">
              <DashboardCard />
            </div>
          </CardSkeletonBody>
          <CardContent className="h-40">
            <CardTitle>Real-time Alerts</CardTitle>
            <CardDescription>
              Get instant notifications when critical errors occur. Set up
              custom alert rules and collaborate with your team to resolve
              issues quickly.
            </CardDescription>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

export const SkeletonTwo = () => {
  return (
    <div className="relative mt-10 flex h-60 flex-col items-center bg-transparent md:h-60"></div>
  );
};

// Card structure
const CardSkeletonBody = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn('relative h-full w-full overflow-hidden', className)}>
      {children}
    </div>
  );
};

const CardContent = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return <div className={cn('p-6', className)}>{children}</div>;
};

const CardTitle = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <h3
      className={cn(
        'font-rubik inline-block text-[22px] leading-[31px] font-[500] text-white',
        className
      )}
    >
      {children}
    </h3>
  );
};
const CardDescription = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <p
      className={cn(
        'mt-2 max-w-sm font-sans text-sm font-normal tracking-tight text-neutral-300',
        className
      )}
    >
      {children}
    </p>
  );
};

const Card = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <motion.div
      whileHover="animate"
      className={cn(
        'group relative isolate flex flex-col overflow-hidden rounded-2xl !bg-neutral-950 shadow-[0_1px_1px_rgba(0,0,0,0.3),0_4px_6px_rgba(0,0,0,0.2),0_24px_68px_rgba(0,0,0,0.4),0_2px_3px_rgba(0,0,0,0.2)]',
        className
      )}
    >
      {children}
    </motion.div>
  );
};

const MapView = () => {
  const svgMap = useMemo(() => {
    const map = new DottedMap({
      height: 40,
      grid: 'diagonal',
    });

    return map.getSVG({
      radius: 0.15,
      color: '#FF6B6B',
      shape: 'circle',
    });
  }, []);

  return (
    <div className="relative h-full w-full overflow-hidden">
      <div className="absolute inset-0 transition-opacity duration-300">
        <Image
          src={`data:image/svg+xml;utf8,${encodeURIComponent(svgMap)}`}
          className="pointer-events-none absolute top-0 -right-2 -mt-14 h-full w-full object-cover opacity-50 select-none [mask-image:linear-gradient(to_bottom,transparent,white_15%,white_85%,transparent)]"
          alt="Global error tracking visualization"
          height={595}
          width={356}
          priority={true}
          draggable={false}
        />
      </div>
    </div>
  );
};

const Chart = () => {
  return (
    <div className="m-4 mx-auto w-full max-w-[290px] rounded-[18px_18px_0px_0px] border border-[0.4px] border-neutral-600 bg-neutral-900 p-2 shadow-[0px_37px_10px_0px_rgba(0,0,0,0.00),0px_24px_10px_0px_rgba(0,0,0,0.01),0px_13px_8px_0px_rgba(0,0,0,0.02),0px_6px_6px_0px_rgba(0,0,0,0.03),0px_1px_3px_0px_rgba(0,0,0,0.04)]">
      {/* Window Controls */}
      <div className="mb-8 flex gap-2">
        <div className="h-3 w-3 cursor-pointer rounded-full bg-[#FF5F57] hover:opacity-80"></div>
        <div className="h-3 w-3 cursor-pointer rounded-full bg-[#FEBC2E] hover:opacity-80"></div>
        <div className="h-3 w-3 cursor-pointer rounded-full bg-[#28C840] hover:opacity-80"></div>
      </div>

      {/* Chart Container */}
      <div className="relative mx-auto h-[200px] w-[260px]">
        {/* Chart Bars - Error frequency over time */}
        <div className="absolute top-0 right-0 bottom-16 left-0 flex h-[190px] items-end justify-between gap-4">
          <div className="h-[30%] w-full cursor-pointer rounded-t-[15px] bg-[linear-gradient(180deg,#4B5563_0%,#1F2937_100%),linear-gradient(90deg,#6B7280_0%,#374151_100%)] transition-opacity hover:opacity-80"></div>
          <div className="h-[70%] w-full cursor-pointer rounded-t-[15px] bg-[linear-gradient(180deg,#EF4444_0%,#DC2626_100%),linear-gradient(90deg,#F87171_0%,#EF4444_100%)] transition-opacity hover:opacity-80"></div>
          <div className="h-[40%] w-full cursor-pointer rounded-t-[15px] bg-[linear-gradient(180deg,#4B5563_0%,#1F2937_100%),linear-gradient(90deg,#6B7280_0%,#374151_100%)] transition-opacity hover:opacity-80"></div>
          <div className="h-[80%] w-full cursor-pointer rounded-t-[15px] bg-[linear-gradient(180deg,#F59E0B_0%,#D97706_100%),linear-gradient(90deg,#FBBF24_0%,#F59E0B_100%)] transition-opacity hover:opacity-80"></div>
          <div className="h-[50%] w-full cursor-pointer rounded-t-[15px] bg-[linear-gradient(180deg,#4B5563_0%,#1F2937_100%),linear-gradient(90deg,#6B7280_0%,#374151_100%)] transition-opacity hover:opacity-80"></div>
          <div className="relative h-[100%] w-full cursor-pointer rounded-t-[15px] bg-[linear-gradient(180deg,#EF4444_0%,#DC2626_100%),linear-gradient(90deg,#F87171_0%,#EF4444_100%)] transition-opacity hover:opacity-90"></div>
        </div>

        {/* Bottom Bar */}
        <div className="absolute -right-10 -bottom-4 -left-10 flex items-center justify-between gap-4 rounded-full border border-neutral-600 bg-neutral-800 p-1">
          <div></div>
          <button className="bg-primary cursor-pointer rounded-[37px] px-6 py-2 text-right text-white shadow-[0px_1px_1px_2px_rgba(255,255,255,0.10)_inset,0px_-1px_5px_2px_rgba(255,255,255,0.10)_inset,0px_10px_20px_0px_rgba(0,0,0,0.10),0px_3px_6px_0px_rgba(0,0,0,0.05),0px_4px_8px_0px_rgba(3,7,18,0.06),0px_2px_4px_0px_rgba(3,7,18,0.06),0px_0px_0px_1px_rgba(3,7,18,0.08)]">
            Analyze
          </button>
        </div>
      </div>
    </div>
  );
};

const OrbitingIcons = ({
  centerIcon,
  orbits,
  className,
}: {
  centerIcon?: React.ReactNode;
  orbits: Array<{
    icons: React.ReactNode[];
    radius?: number;
    speed?: number;
    rotationDirection?: 'clockwise' | 'anticlockwise';
    className?: string;
  }>;
  className?: string;
}) => {
  // Precalculate all orbit data
  const orbitData = React.useMemo(() => {
    return orbits.map((orbit, orbitIndex) => {
      const radius = orbit.radius || 100 + orbitIndex * 80;
      const speed = orbit.speed || 1;
      const iconCount = orbit.icons.length;

      // Calculate angles for each icon with even distribution
      const angleStep = 360 / iconCount;
      const angles = Array.from({ length: iconCount }, (_, i) => angleStep * i);

      // Precalculate positions and animations for each icon
      const iconData = angles.map((angle) => {
        const rotationAngle =
          orbit.rotationDirection === 'clockwise'
            ? [angle, angle - 360]
            : [angle, angle + 360];

        return {
          angle,
          rotationAngle,
          position: {
            x: radius * Math.cos((angle * Math.PI) / 180),
            y: radius * Math.sin((angle * Math.PI) / 180),
          },
          animation: {
            initial: {
              rotate: angle,
              scale: 1,
              opacity: 1,
            },
            animate: {
              rotate: rotationAngle,
              scale: 1,
              opacity: 1,
            },
            transition: {
              rotate: {
                duration: speed,
                repeat: Infinity,
                ease: 'linear',
              },
            },
            counterRotation: {
              initial: { rotate: -angle },
              animate: {
                rotate:
                  orbit.rotationDirection === 'clockwise'
                    ? [-angle, -angle + 360]
                    : [-angle, -angle - 360],
              },
              transition: {
                duration: speed,
                repeat: Infinity,
                ease: 'linear',
              },
            },
          },
        };
      });

      return {
        radius,
        speed,
        iconData,
        rotationDirection: orbit.rotationDirection,
        className: orbit.className,
      };
    });
  }, [orbits]);

  return (
    <div className={cn('relative h-[200px] w-[200px]', className)}>
      {centerIcon && (
        <div className="absolute top-1/2 left-1/2 z-10 -translate-x-1/2 -translate-y-1/2">
          {centerIcon}
        </div>
      )}
      {orbitData.map((orbit, orbitIndex) => (
        <div
          key={orbitIndex}
          className="absolute top-0 left-0 h-full w-full"
          style={{ zIndex: orbits.length - orbitIndex }}
        >
          <div
            className={cn(
              'absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full',
              orbit.className
            )}
            style={{
              width: orbit.radius * 2 + 'px',
              height: orbit.radius * 2 + 'px',
            }}
          />

          {orbit.iconData.map((icon, iconIndex) => (
            <motion.div
              key={iconIndex}
              className="absolute"
              style={{
                width: '40px',
                height: '40px',
                left: `calc(50% - 20px)`,
                top: `calc(50% - 20px)`,
                transformOrigin: 'center center',
              }}
              initial={icon.animation.initial}
              animate={icon.animation.animate}
              transition={icon.animation.transition}
            >
              <div
                style={{
                  position: 'absolute',
                  left: `${orbit.radius}px`,
                  transformOrigin: 'center center',
                }}
              >
                <motion.div
                  initial={icon.animation.counterRotation.initial}
                  animate={icon.animation.counterRotation.animate}
                  transition={icon.animation.counterRotation.transition}
                  className="flex h-8 w-8 items-center justify-center rounded-full border-[0.7px] border-neutral-600 bg-neutral-800 bg-gradient-to-b p-2 shadow-[inset_0px_0px_8px_0px_rgba(255,255,255,0.1)] drop-shadow-[0px_4px_6px_rgba(0,0,0,0.3)] will-change-transform"
                >
                  {orbits[orbitIndex].icons[iconIndex]}
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      ))}
    </div>
  );
};

const LogoOrbit = () => {
  const orbit1Icons = [
    <Smartphone key="smartphone" className="h-8 w-8 text-white" />,
    <Bug key="bug" className="h-8 w-8 text-red-400" />,
    <Shield key="shield" className="h-8 w-8 text-green-400" />,
  ];

  const orbit2Icons = [
    <AlertTriangle key="alert" className="h-6 w-6 text-yellow-400" />,
    <Activity key="activity" className="h-6 w-6 text-blue-400" />,
    <Bell key="bell" className="h-6 w-6 text-purple-400" />,
    <Code key="code" className="h-6 w-6 text-white" />,
  ];

  return (
    <OrbitingIcons
      centerIcon={<img src="/logo.png" className="h-10 w-10" />}
      orbits={[
        {
          icons: orbit1Icons,
          rotationDirection: 'anticlockwise',
          radius: 50,
          speed: 9,
          className:
            'bg-[radial-gradient(circle,rgba(31,41,55,1)_0%,rgba(239,68,68,0.1)_100%)]',
        },
        {
          icons: orbit2Icons,
          rotationDirection: 'anticlockwise',
          radius: 90,
          speed: 15,
          className:
            'bg-[radial-gradient(circle,rgba(31,41,55,1)_0%,rgba(239,68,68,0.2)_100%)]',
        },
        {
          icons: orbit1Icons,
          rotationDirection: 'clockwise',
          radius: 140,
          speed: 7,
          className:
            'bg-[radial-gradient(circle,rgba(31,41,55,1)_0%,rgba(239,68,68,0.1)_100%)]',
        },
        {
          icons: orbit2Icons,
          rotationDirection: 'anticlockwise',
          radius: 180,
          speed: 15,
          className:
            'bg-[radial-gradient(circle,rgba(31,41,55,1)_0%,rgba(239,68,68,0.2)_100%)]',
        },
      ]}
    />
  );
};

const DashboardCard = () => {
  return (
    <div className="h-full w-full rounded-xl border border-neutral-600 bg-neutral-900 p-4">
      {/* Dashboard Header */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className="mb-6 flex items-center gap-2"
      >
        <div className="flex gap-2">
          <motion.div
            whileHover={{ scale: 1.2 }}
            className="h-3 w-3 rounded-full bg-[#FF5F57]"
          ></motion.div>
          <motion.div
            whileHover={{ scale: 1.2 }}
            className="h-3 w-3 rounded-full bg-[#FEBC2E]"
          ></motion.div>
          <motion.div
            whileHover={{ scale: 1.2 }}
            className="h-3 w-3 rounded-full bg-[#28C840]"
          ></motion.div>
        </div>
      </motion.div>

      {/* Dashboard Content */}
      <div className="flex h-full flex-col gap-4 md:flex-row">
        {/* Left Panel - App Stats */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          whileHover={{ scale: 1.02 }}
          className="flex-shrink-0 rounded-xl bg-neutral-800 p-6 shadow-sm transition-shadow hover:shadow-md"
        >
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <div className="rounded-lg bg-red-900/30 p-2">
                <Image
                  src="/logo.png"
                  alt="Traque Logo"
                  width={40}
                  height={40}
                  className="object-contain"
                />
              </div>
              <div>
                <div className="text-xs text-neutral-500">APPLICATION</div>
                <div className="text-sm font-semibold text-white">
                  MyApp Mobile
                </div>
              </div>
            </div>
            <div className="space-y-2">
              <div className="text-xs text-neutral-500">TODAY&apos;S STATS</div>
              <div className="grid grid-cols-2 gap-2 text-sm">
                <div className="rounded-lg bg-red-900/20 p-2">
                  <div className="font-medium text-neutral-300">Errors</div>
                  <div className="text-red-400">23</div>
                </div>
                <div className="rounded-lg bg-green-900/20 p-2">
                  <div className="font-medium text-neutral-300">Uptime</div>
                  <div className="text-green-400">99.8%</div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right Panel - Error Management */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          whileHover={{ scale: 1.02 }}
          className="relative flex-1 rounded-xl bg-neutral-800 p-6 shadow-sm transition-shadow hover:shadow-md"
        >
          <div className="mb-4 flex items-center justify-between">
            <div className="text-sm font-medium text-white">Recent Errors</div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="rounded-full bg-red-900/30 px-3 py-1 text-xs text-red-400"
            >
              View All
            </motion.button>
          </div>
          <div className="space-y-3">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="rounded-lg border border-neutral-700 bg-neutral-900 p-3"
            >
              <div className="flex items-center justify-between">
                <div className="text-sm font-medium text-white">
                  NetworkError
                </div>
                <div className="rounded-full bg-red-900/30 px-2 py-1 text-xs text-red-400">
                  Critical
                </div>
              </div>
              <div className="mt-1 text-xs text-neutral-500">
                iOS 17.2 • 12 occurrences
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="rounded-lg border border-neutral-700 bg-neutral-900 p-3"
            >
              <div className="flex items-center justify-between">
                <div className="text-sm font-medium text-white">
                  NullPointerException
                </div>
                <div className="rounded-full bg-yellow-900/30 px-2 py-1 text-xs text-yellow-400">
                  Warning
                </div>
              </div>
              <div className="mt-1 text-xs text-neutral-500">
                Android 14 • 5 occurrences
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
