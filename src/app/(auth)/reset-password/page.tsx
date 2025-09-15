'use client';

import { Suspense, useMemo } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation } from '@tanstack/react-query';
import { Button } from '@/common/components/ui/button';
import { auth } from '@/lib/auth';
import { AnimatePresence, motion } from 'motion/react';
import { ConfettiMinimalisticLinearIcon } from '@/common/components/icons/confetti-minimalistic-linear-icon';

const schema = z
  .object({
    password: z
      .string({ required_error: 'Please enter a new password' })
      .min(8, 'Password must be at least 8 characters'),
    confirmPassword: z.string({
      required_error: 'Please confirm your password',
    }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    path: ['confirmPassword'],
    message: 'Passwords do not match',
  });

type FormValues = z.infer<typeof schema>;

function ResetPassword() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const token = searchParams.get('token');
  const errorParam = searchParams.get('error');

  const disabledByToken = useMemo(
    () => !token || !!errorParam,
    [token, errorParam]
  );

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: {
      password: '',
      confirmPassword: '',
    },
  });

  const {
    mutate: resetPassword,
    isPending,
    isSuccess,
    error,
  } = useMutation({
    mutationFn: async (values: FormValues) => {
      if (!token) throw new Error('Invalid or expired link');

      const { data, error } = await auth.resetPassword({
        newPassword: values.password,
        token,
      });

      if (error) {
        throw new Error(error.message ?? 'Failed to reset password');
      }

      return data;
    },
    onSuccess: () => {
      reset();
    },
  });

  const onSubmit = (values: FormValues) => resetPassword(values);

  const inputBase =
    'w-full rounded-md border border-white/10 bg-zinc-900/60 px-4 py-2 text-sm text-white placeholder:text-zinc-500 outline-none focus-visible:ring-[3px] focus-visible:ring-ring/50';

  if (isSuccess) {
    return (
      <div className="flex min-h-[70vh] items-center justify-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="w-full max-w-md rounded-2xl border border-white/10 bg-black/60 p-8 shadow-2xl backdrop-blur"
        >
          <div className="flex flex-col items-center text-center">
            <ConfettiMinimalisticLinearIcon className="size-14 text-green-300" />
            <h1 className="mt-3 text-2xl font-bold">Password updated</h1>
            <p className="mt-2 text-white/70">
              You can now sign in with your new password.
            </p>
            <div className="mt-6 flex gap-3">
              <Button onClick={() => router.push('/')}>Go home</Button>
            </div>
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="flex min-h-[70vh] items-center justify-center px-4">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md rounded-2xl border border-white/10 bg-black/60 p-8 shadow-2xl backdrop-blur"
      >
        <h1 className="text-2xl font-bold">Reset your password</h1>
        <p className="mt-2 text-sm text-white/70">
          Enter a new password below.
        </p>

        <AnimatePresence>
          {(disabledByToken || errorParam) && (
            <motion.div
              initial={{ opacity: 0, y: -4 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -4 }}
              className="mt-4 rounded-md border border-red-500/20 bg-red-500/10 p-3 text-sm text-red-300"
            >
              {errorParam === 'INVALID_TOKEN' || !token
                ? 'This reset link is invalid or has expired.'
                : 'Unable to use this reset link.'}
            </motion.div>
          )}
        </AnimatePresence>

        <form onSubmit={handleSubmit(onSubmit)} className="mt-6 space-y-4">
          <div>
            <label className="mb-1 block text-sm text-white/80">
              New password
            </label>
            <input
              type="password"
              autoComplete="new-password"
              className={inputBase}
              placeholder="••••••••"
              disabled={isPending || disabledByToken}
              {...register('password')}
            />
            {errors.password?.message && (
              <p className="mt-1 text-xs text-red-400">
                {errors.password.message}
              </p>
            )}
          </div>
          <div>
            <label className="mb-1 block text-sm text-white/80">
              Confirm password
            </label>
            <input
              type="password"
              autoComplete="new-password"
              className={inputBase}
              placeholder="••••••••"
              disabled={isPending || disabledByToken}
              {...register('confirmPassword')}
            />
            {errors.confirmPassword?.message && (
              <p className="mt-1 text-xs text-red-400">
                {errors.confirmPassword.message}
              </p>
            )}
          </div>

          <AnimatePresence>
            {error && !disabledByToken && (
              <motion.p
                initial={{ opacity: 0, y: -4 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -4 }}
                className="text-sm text-red-400"
              >
                {error.message}
              </motion.p>
            )}
          </AnimatePresence>

          <Button
            type="submit"
            className="w-full"
            disabled={isPending || disabledByToken}
          >
            {isPending ? (
              <span className="inline-flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M12,4a8,8,0,0,1,7.89,6.7A1.53,1.53,0,0,0,21.38,12h0a1.5,1.5,0,0,0,1.48-1.75,11,11,0,0,0-21.72,0A1.5,1.5,0,0,0,2.62,12h0a1.53,1.53,0,0,0,1.49-1.3A8,8,0,0,1,12,4Z"
                  >
                    <animateTransform
                      attributeName="transform"
                      dur="0.75s"
                      repeatCount="indefinite"
                      type="rotate"
                      values="0 12 12;360 12 12"
                    />
                  </path>
                </svg>
                Resetting...
              </span>
            ) : (
              'Reset password'
            )}
          </Button>
        </form>
      </motion.div>
    </div>
  );
}

export default function ResetPasswordPage() {
  return (
    <Suspense>
      <ResetPassword />
    </Suspense>
  );
}
