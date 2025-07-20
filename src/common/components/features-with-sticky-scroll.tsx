'use client';
import React, { useRef, useState } from 'react';
import {
  motion,
  useScroll,
  useTransform,
  useMotionValueEvent,
} from 'motion/react';
import { LayoutGrid, Smartphone, Bug } from 'lucide-react';
import Image from 'next/image';
import { Button } from './ui/button';
import { AppleLogo } from './icons/AppleLogo';
import Link from 'next/link';

const features = [
  {
    icon: <LayoutGrid className="h-8 w-8" />,
    title: "Keeps your team's projects organized",
    description:
      'Organize all your projects in one place. Keep track of tasks, deadlines, and team progress. Never lose sight of what needs to be done.',
    content: (
      <div>
        <Image
          src="/mobile_app_project.png"
          alt="Project organization dashboard"
          height="400"
          width="400"
          className="rounded-lg"
        />
      </div>
    ),
  },
  {
    icon: <Smartphone className="h-8 w-8" />,
    title: 'Tracks every issue in real time on mobile',
    description:
      'Monitor all issues as they happen. Get instant alerts on your phone. Stay connected to your projects even when you are away from your desk.',
    content: (
      <Image
        src="/mobile_app_organization.png"
        alt="Mobile issue tracking"
        height="400"
        width="400"
        className="rounded-lg"
      />
    ),
  },
  {
    icon: <Bug className="h-8 w-8" />,
    title: 'Delivers full exception insights anytime, anywhere',
    description:
      'Get complete details about every error that happens. Access stack traces, logs, and context from any device. Debug faster with all the information you need.',
    content: (
      <div className="relative">
        <Image
          src="/mobile_app_exception.png"
          alt="Exception insights dashboard"
          height="400"
          width="400"
          className="rounded-lg"
        />
      </div>
    ),
  },
];

export function FeaturesWithStickyScroll() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });
  const backgrounds = ['#000', '#000', '#000'];

  const [gradient, setGradient] = useState(backgrounds[0]);

  useMotionValueEvent(scrollYProgress, 'change', (latest) => {
    const cardsBreakpoints = features.map(
      (_, index) => index / features.length
    );
    const closestBreakpointIndex = cardsBreakpoints.reduce(
      (acc, breakpoint, index) => {
        const distance = Math.abs(latest - breakpoint);
        if (distance < Math.abs(latest - cardsBreakpoints[acc])) {
          return index;
        }
        return acc;
      },
      0
    );
    setGradient(backgrounds[closestBreakpointIndex % backgrounds.length]);
  });
  return (
    <motion.div
      animate={{ background: gradient }}
      transition={{ duration: 0.5 }}
      ref={ref}
      className="relative mx-auto h-full w-full max-w-7xl pt-20 md:pt-40"
    >
      <div className="flex flex-col items-center px-6 text-center">
        <h2 className="mt-4 text-lg font-bold md:text-2xl lg:text-4xl">
          Keep Your <span className="text-primary">Projects on Track</span>
        </h2>
        <p className="mx-auto mt-4 max-w-md text-sm md:text-base">
          Traque provides complete project monitoring and error tracking tools
          to help your team stay organized and fix issues faster.
        </p>
        <Link
          href="https://apps.apple.com/us/app/traque-monitoring/id6743767766"
          target="_blank"
        >
          <Button className="mt-6">
            <AppleLogo className="mr-2 h-4 w-4 text-white" />
            Download iOS App
          </Button>
        </Link>
      </div>

      <StickyScroll content={features} />
    </motion.div>
  );
}

export const StickyScroll = ({
  content,
}: {
  content: { title: string; description: string; icon?: React.ReactNode }[];
}) => {
  return (
    <div className="py-4 md:py-20">
      <motion.div className="relative mx-auto hidden h-full max-w-7xl flex-col justify-between p-10 lg:flex">
        {content.map((item, index) => (
          <ScrollContent key={item.title + index} item={item} index={index} />
        ))}
      </motion.div>
      <motion.div className="relative mx-auto flex max-w-7xl flex-col justify-between p-10 lg:hidden">
        {content.map((item, index) => (
          <ScrollContentMobile
            key={item.title + index}
            item={item}
            index={index}
          />
        ))}
      </motion.div>
    </div>
  );
};

export const ScrollContent = ({
  item,
  index,
}: {
  item: {
    title: string;
    description: string;
    icon?: React.ReactNode;
    content?: React.ReactNode;
  };
  index: number;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });
  const translate = useTransform(scrollYProgress, [0, 1], [0, 250]);
  const translateContent = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const opacity = useTransform(
    scrollYProgress,
    [0, 0.05, 0.5, 0.7, 1],
    [0, 1, 1, 0, 0]
  );

  const opacityContent = useTransform(
    scrollYProgress,
    [0, 0.2, 0.5, 0.8, 1],
    [0, 0, 1, 1, 0]
  );

  return (
    <motion.div
      ref={ref}
      transition={{ duration: 0.3 }}
      key={item.title + index}
      className="relative my-40 grid grid-cols-2 gap-8"
    >
      <div className="w-full">
        <motion.div
          style={{ y: translate, opacity: index === 0 ? opacityContent : 1 }}
          className=""
        >
          <div>{item.icon}</div>
          <motion.h2 className="mt-2 inline-block max-w-md bg-gradient-to-b text-left text-2xl font-bold lg:text-4xl">
            {item.title}
          </motion.h2>

          <motion.p className="font-regular text-md mt-4 max-w-sm text-neutral-300">
            {item.description}
          </motion.p>
        </motion.div>
      </div>
      <motion.div
        key={item.title + index}
        style={{ y: translateContent, opacity: opacity }}
        className="h-full w-full self-start rounded-md"
      >
        {item.content && item.content}
      </motion.div>
    </motion.div>
  );
};

export const ScrollContentMobile = ({
  item,
  index,
}: {
  item: {
    title: string;
    description: string;
    icon?: React.ReactNode;
    content?: React.ReactNode;
  };
  index: number;
}) => {
  return (
    <motion.div
      transition={{ duration: 0.3 }}
      key={item.title + index}
      className="relative my-10 flex flex-col md:flex-row md:gap-20"
    >
      <motion.div
        key={item.title + index}
        className="mb-8 w-full self-start rounded-md"
      >
        {item.content && item.content}
      </motion.div>
      <div className="w-full">
        <motion.div className="mb-6">
          <div>{item.icon}</div>
          <motion.h2 className="mt-2 inline-block bg-gradient-to-b from-white to-white bg-clip-text text-left text-2xl font-bold text-transparent lg:text-4xl">
            {item.title}
          </motion.h2>

          <motion.p className="mt-2 max-w-sm text-sm font-bold text-neutral-500 md:text-base">
            {item.description}
          </motion.p>
        </motion.div>
      </div>
    </motion.div>
  );
};
