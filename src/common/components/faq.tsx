'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';

type FAQItemProps = {
  question: string;
  answer: string;
  index: number;
};

function FAQItem({ question, answer, index }: FAQItemProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.3,
        delay: index * 0.15,
        ease: 'easeOut',
      }}
      className={cn(
        'group border-border/60 rounded-lg border',
        'transition-all duration-200 ease-in-out',
        isOpen ? 'bg-card/30 shadow-sm' : 'hover:bg-card/50'
      )}
    >
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-center justify-between gap-4 px-6 py-4"
      >
        <h3
          className={cn(
            'text-left text-base font-medium transition-colors duration-200',
            'text-foreground/80',
            isOpen && 'text-foreground'
          )}
        >
          {question}
        </h3>
        <motion.div
          animate={{
            rotate: isOpen ? 180 : 0,
            scale: isOpen ? 1.1 : 1,
          }}
          transition={{
            duration: 0.3,
            ease: 'easeInOut',
          }}
          className={cn(
            'shrink-0 rounded-full p-0.5',
            'transition-colors duration-200',
            isOpen ? 'text-primary' : 'text-muted-foreground'
          )}
        >
          <ChevronDown className="h-4 w-4" />
        </motion.div>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{
              height: 'auto',
              opacity: 1,
              transition: {
                height: {
                  duration: 0.4,
                  ease: [0.04, 0.62, 0.23, 0.98],
                },
                opacity: {
                  duration: 0.25,
                  delay: 0.1,
                },
              },
            }}
            exit={{
              height: 0,
              opacity: 0,
              transition: {
                height: {
                  duration: 0.3,
                  ease: 'easeInOut',
                },
                opacity: {
                  duration: 0.25,
                },
              },
            }}
          >
            <div className="border-border/40 border-t px-6 pt-2 pb-4">
              <motion.p
                initial={{ y: -8, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -8, opacity: 0 }}
                transition={{
                  duration: 0.3,
                  ease: 'easeOut',
                }}
                className="text-muted-foreground text-sm leading-relaxed"
              >
                {answer}
              </motion.p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export function Faq() {
  const faqs: Omit<FAQItemProps, 'index'>[] = [
    {
      question: 'Why was Traque built?',
      answer:
        "Traque was created because existing tools lacked a great mobile experience for error tracking. As product builders, we want to know what's happening in our apps anywhere, especially when errors occur.",
    },
    {
      question: 'What does Traque track?',
      answer:
        'Traque tracks application errors and custom events in real time, then sends the right details to help you debug faster and understand user behavior.',
    },
    {
      question: 'Do I have to use the Traque cloud?',
      answer:
        'No. You can deploy your own Traque backend and use it with the web dashboard. The mobile app is available when using our cloud version.',
    },
    {
      question: 'Is there a mobile app?',
      answer:
        'Yes. Our iOS app is available now (Android is coming soon) and works with the Traque cloud to deliver real-time notifications and insights on the go.',
    },
    {
      question: 'How does Traque handle my data and privacy?',
      answer:
        "We treat security seriously and don't sell your data. When you use AI features, we send minimized, de‑identified data to our model provider to generate answers.",
    },
    {
      question: 'Which AI provider do you use?',
      answer:
        'We use OpenAI models by default for AI Chat and AI Agents features.',
    },
    {
      question: 'Where is my data stored?',
      answer:
        'For the cloud version, data is currently stored in the US. EU regions are planned.',
    },
    {
      question: 'How do notifications work?',
      answer:
        'You can receive push, email, and Discord notifications. Configure severity and frequency so you get alerted instantly for critical issues and summaries for the rest.',
    },
    {
      question: 'Is there a free plan?',
      answer:
        'Yes. We offer a Free plan for getting started and a Plus plan for higher volumes and AI features.',
    },
    {
      question: 'How do I get started?',
      answer:
        'Install @traque/core, set your API key and service URL, and start capturing errors and events in minutes.',
    },
  ];

  return (
    <section className="bg-background relative w-full overflow-hidden py-16">
      {/* Decorative elements */}
      <div className="bg-primary/5 absolute top-20 -left-20 h-64 w-64 rounded-full blur-3xl" />
      <div className="bg-primary/5 absolute -right-20 bottom-20 h-64 w-64 rounded-full blur-3xl" />

      <div className="relative mx-auto max-w-5xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mx-auto mb-12 max-w-3xl space-y-3 text-center"
        >
          <h2 className="text-center text-4xl font-semibold lg:text-5xl">
            Frequently Asked Questions
          </h2>
          <p className="text-muted-foreground mx-auto max-w-2xl text-base">
            Everything you need to know about{' '}
            <span className="text-primary">Traque</span>
          </p>
        </motion.div>

        <div className="mx-auto max-w-2xl space-y-2">
          {faqs.map((faq, index) => (
            <FAQItem key={index} {...faq} index={index} />
          ))}
        </div>

        {/* <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className={cn('mx-auto mt-12 max-w-md rounded-lg p-6 text-center')}
        >
          <div className="bg-primary/10 text-primary mb-4 inline-flex items-center justify-center rounded-full p-2">
            <MailIcon className="h-4 w-4" />
          </div>
          <p className="text-foreground mb-1 text-sm font-medium">
            Still have questions?
          </p>
          <p className="text-muted-foreground mb-4 text-xs">
            We&apos;re here to help you
          </p>
          <a
            href="mailto:dan@traque.dev"
            className={cn(
              'rounded-md px-4 py-2 text-sm',
              'bg-primary text-primary-foreground',
              'hover:bg-primary/90',
              'transition-colors duration-200',
              'font-medium'
            )}
          >
            Contact Support
          </a>
        </motion.div> */}
      </div>
    </section>
  );
}
