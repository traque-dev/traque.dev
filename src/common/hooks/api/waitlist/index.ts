import { useMutation } from '@tanstack/react-query';
import { saveToWaitlist } from '@/common/api/waitlist';

export function useSaveToWaitlistMutation() {
  return useMutation({
    mutationFn: (email: string) => {
      return saveToWaitlist(email);
    },
  });
}
