import { axios } from '@/common/api/axios';
import type { WaitlistCountResult } from '@/common/api/waitlist/types';

export async function saveToWaitlist(email: string) {
  const url = '/api/v1/waitlist';

  const { data } = await axios.post(url, {
    email,
  });

  return data;
}

export async function getWaitlistCount(): Promise<WaitlistCountResult> {
  const url = '/api/v1/waitlist/count';

  const { data } = await axios.get<WaitlistCountResult>(url);

  return data;
}
