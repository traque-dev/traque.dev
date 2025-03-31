import { IconProps } from '@/common/ui/icons/types';

export function LockKeyholeMinimalisticLinearIcon({ className }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      className={className}
    >
      <g fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M2 16c0-2.828 0-4.243.879-5.121C3.757 10 5.172 10 8 10h8c2.828 0 4.243 0 5.121.879C22 11.757 22 13.172 22 16s0 4.243-.879 5.121C20.243 22 18.828 22 16 22H8c-2.828 0-4.243 0-5.121-.879C2 20.243 2 18.828 2 16Z" />
        <path strokeLinecap="round" d="M12 14v4m-6-8V8a6 6 0 1 1 12 0v2" />
      </g>
    </svg>
  );
}
