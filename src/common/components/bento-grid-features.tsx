'use client';

import { cn } from '@/common/utils/cn';
import { motion } from 'motion/react';
import { CodeBlock } from './code-block';

export function BentoGridFeatures() {
  const features = [
    {
      title: 'Track events with simple code',
      description:
        'Monitor user interactions, feature usage, and custom business events with just one line of code.',
      skeleton: <SkeletonOne />,
      className:
        'col-span-1 lg:col-span-4 border-b lg:border-r border-neutral-800',
    },
    {
      title: 'Real-time event analytics',
      description:
        'View event trends, user journeys, and feature adoption metrics in beautiful dashboards.',
      skeleton: <SkeletonTwo />,
      className: 'border-b col-span-1 lg:col-span-2 border-neutral-800',
    },
    {
      title: 'Custom event properties',
      description:
        'Include any data with your events - user info, amounts, metadata, or complex objects.',
      skeleton: <SkeletonThree />,
      className: 'col-span-1 lg:col-span-3 lg:border-r border-neutral-800',
    },
    {
      title: 'Smart event notifications',
      description:
        'Get notified when important events happen via push, email, or Discord.',
      skeleton: <SkeletonFour />,
      className: 'col-span-1 lg:col-span-3 border-b lg:border-none',
    },
  ];
  return (
    <div className="relative z-20 mx-auto max-w-7xl py-10">
      <div className="px-8">
        <h4 className="mb-4 text-center text-4xl font-bold text-white md:text-6xl">
          Event tracking made <span className="text-primary">simple</span>
        </h4>

        <p className="mx-auto my-4 max-w-2xl text-center text-sm font-normal text-neutral-300 lg:text-base">
          Track user interactions, monitor feature usage, and understand user
          behavior with powerful event tracking. Get insights into what users
          actually do in your app.
        </p>
      </div>

      <div className="relative">
        <div className="mt-12 grid grid-cols-1 rounded-md border-neutral-800 lg:grid-cols-6 xl:border">
          {features.map((feature) => (
            <FeatureCard key={feature.title} className={feature.className}>
              <FeatureTitle>{feature.title}</FeatureTitle>
              <FeatureDescription>{feature.description}</FeatureDescription>
              <div className="h-full w-full">{feature.skeleton}</div>
            </FeatureCard>
          ))}
        </div>
      </div>
    </div>
  );
}

const FeatureCard = ({
  children,
  className,
}: {
  children?: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn(`relative overflow-hidden p-4 sm:p-8`, className)}>
      {children}
    </div>
  );
};

const FeatureTitle = ({ children }: { children?: React.ReactNode }) => {
  return (
    <p className="mx-auto max-w-5xl text-left text-xl tracking-tight text-white md:text-2xl md:leading-snug">
      {children}
    </p>
  );
};

const FeatureDescription = ({ children }: { children?: React.ReactNode }) => {
  return (
    <p
      className={cn(
        'mx-auto max-w-4xl text-left text-sm md:text-base',
        'text-center font-normal text-neutral-300',
        'mx-0 my-2 max-w-sm text-left md:text-sm'
      )}
    >
      {children}
    </p>
  );
};

export const SkeletonOne = () => {
  const code = `import { Traque } from '@traque/core';

// Initialize Traque
const traque = new Traque({
  apiKey: process.env.TRAQUE_API_KEY,
  serviceUrl: process.env.TRAQUE_SERVICE_URL,
});

// Track user login
traque.captureEvent('user_login', {
  userId: 'user123',
  method: 'email',
  timestamp: new Date(),
});
`;

  return (
    <div className="relative flex h-full gap-4 px-2 py-8">
      <div className="mx-auto h-full w-full">
        <CodeBlock code={code} language="typescript" filename="app.ts" />
      </div>
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-40 h-60 w-full bg-gradient-to-t from-black via-black to-transparent" />
    </div>
  );
};

export const SkeletonTwo = () => {
  const events = [
    { name: 'user_login', count: 1247, trend: '+12%' },
    { name: 'button_click', count: 856, trend: '+8%' },
    { name: 'purchase_completed', count: 42, trend: '+23%' },
    { name: 'feature_used', count: 334, trend: '+15%' },
    { name: 'page_view', count: 2981, trend: '+5%' },
  ];

  return (
    <div className="relative flex h-full flex-col gap-2 overflow-hidden p-4">
      <div className="rounded-lg bg-neutral-900 p-4 shadow-lg">
        <h3 className="mb-3 text-sm font-semibold text-gray-200">
          Event Analytics
        </h3>
        {events.map((event, idx) => (
          <motion.div
            key={event.name}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className="mb-2 flex items-center justify-between rounded-md bg-neutral-800 p-2"
          >
            <div className="flex flex-col">
              <span className="text-xs font-medium text-gray-300">
                {event.name}
              </span>
              <span className="text-lg font-bold text-white">
                {event.count.toLocaleString()}
              </span>
            </div>
            <span className="text-xs font-medium text-green-600">
              {event.trend}
            </span>
          </motion.div>
        ))}
      </div>
      <div className="pointer-events-none absolute inset-y-0 right-0 z-[100] h-full w-8 bg-gradient-to-l from-black to-transparent" />
    </div>
  );
};

export const SkeletonThree = () => {
  const eventProperties = [
    { key: 'userId', value: 'user123', type: 'string' },
    { key: 'amount', value: '29.99', type: 'number' },
    { key: 'success', value: 'true', type: 'boolean' },
    { key: 'metadata', value: '{ source: "app" }', type: 'object' },
    { key: 'tags', value: '["premium", "beta"]', type: 'array' },
  ];

  return (
    <div className="relative flex h-full flex-col gap-4 overflow-hidden p-6">
      <div className="rounded-lg bg-neutral-900 p-4 shadow-lg">
        <h3 className="mb-3 text-sm font-semibold text-gray-200">
          Event: purchase_completed
        </h3>
        <div className="space-y-2">
          {eventProperties.map((prop, idx) => (
            <motion.div
              key={prop.key}
              initial={{ opacity: 0, y: 10 }}
              transition={{ delay: idx * 0.1 }}
              className="flex items-center justify-between rounded-md bg-neutral-800 px-3 py-2"
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-2">
                <span className="font-mono text-xs text-purple-400">
                  {prop.key}
                </span>
                <span className="text-xs text-gray-500">({prop.type})</span>
              </div>
              <span className="font-mono text-xs text-gray-300">
                {prop.value}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-40 h-40 w-full bg-gradient-to-t from-black via-black to-transparent" />
    </div>
  );
};

export const SkeletonFour = () => {
  const notifications = [
    {
      type: 'push',
      title: 'New Premium User!',
      message: 'User upgraded to premium plan',
      time: '2m ago',
      icon: '📱',
    },
    {
      type: 'email',
      title: 'Daily Milestone Reached',
      message: '1000+ events tracked today',
      time: '1h ago',
      icon: '📧',
    },
    {
      type: 'discord',
      title: 'Feature Usage Alert',
      message: 'Export feature used 50+ times',
      time: '3h ago',
      icon: '💬',
    },
  ];

  return (
    <div className="relative flex h-full flex-col gap-3 overflow-hidden p-6">
      <h3 className="text-sm font-semibold text-gray-200">
        Live Notifications
      </h3>
      {notifications.map((notification, idx) => (
        <motion.div
          key={idx}
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: idx * 0.2 }}
          className="flex items-start gap-3 rounded-lg bg-neutral-900 p-3 shadow-sm"
        >
          <span className="text-lg">{notification.icon}</span>
          <div className="flex-1">
            <div className="flex items-center justify-between">
              <span className="text-xs font-medium text-white">
                {notification.title}
              </span>
              <span className="text-xs text-gray-500">{notification.time}</span>
            </div>
            <p className="text-xs text-gray-400">{notification.message}</p>
            <span className="text-xs tracking-wide text-blue-600 uppercase">
              {notification.type}
            </span>
          </div>
        </motion.div>
      ))}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-40 h-20 w-full bg-gradient-to-t from-black via-black to-transparent" />
    </div>
  );
};
