'use client';

import confetti from 'canvas-confetti';
import { PlaceholdersAndVanishInput } from '@/common/ui/PlaceholdersAndVanishInput';
import { z } from 'zod';
import { useController, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { AnimatePresence, motion } from 'motion/react';
import { useSaveToWaitlistMutation } from '@/common/hooks/api/waitlist';
import { ConfettiMinimalisticLinearIcon } from '@/common/ui/icons/ConfettiMinimalisticLinearIcon';

const waitlistSchema = z.object({
  email: z
    .string({ required_error: 'Please Enter Your Email' })
    .email('Please Enter Valid Email'),
});

type WaitlistForm = z.infer<typeof waitlistSchema>;

export function WaitListForm() {
  const {
    control,
    handleSubmit,
    formState: { errors },
    reset: resetForm,
  } = useForm<WaitlistForm>({
    resolver: zodResolver(waitlistSchema),
    defaultValues: {
      email: '',
    },
  });

  const { field: email } = useController({
    control,
    name: 'email',
  });

  const {
    mutate: saveToWaitList,
    isPending,
    isSuccess,
  } = useSaveToWaitlistMutation();

  const onSubmit = ({ email }: WaitlistForm) => {
    saveToWaitList(email, {
      onSuccess() {
        confetti({
          particleCount: 200,
          spread: 360,
        });
        resetForm();
      },
    });
  };

  if (isSuccess) {
    return (
      <motion.div
        className="mt-10 flex items-center justify-center"
        initial={{
          y: -15,
          opacity: 0,
          scale: 0.9,
        }}
        animate={{
          y: 0,
          opacity: 1,
          scale: 1,
        }}
      >
        <div className="flex flex-col items-center">
          <ConfettiMinimalisticLinearIcon className="size-14 text-green-300" />
          <div className="mt-2 text-2xl font-bold">Thank you so much!</div>
          <div className="mt-4 max-w-2xl text-center text-xl text-white/80">
            We will send you an email once Traque is fully ready for you to use.
          </div>
        </div>
      </motion.div>
    );
  }

  return (
    <div className="mt-10">
      <PlaceholdersAndVanishInput
        value={email.value}
        onChange={email.onChange}
        placeholders={['email@traque.dev', 'Be among the first to try it.']}
        onSubmit={handleSubmit(onSubmit)}
        shouldVanish={false}
        isLoading={isPending}
      />

      <div className="relative h-2">
        <AnimatePresence>
          {errors?.email?.message && (
            <motion.div
              className="absolute mx-auto w-full text-center text-[14px] font-normal text-red-400"
              initial={{
                x: -15,
                opacity: 0,
              }}
              animate={{
                x: 0,
                opacity: 1,
              }}
              exit={{
                x: 15,
                opacity: 0,
              }}
              transition={{
                duration: 0.2,
              }}
            >
              {errors.email.message}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
