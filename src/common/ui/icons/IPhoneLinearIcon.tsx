import { IconProps } from '@/common/ui/icons/types';

export function IPhoneLinearIcon({ className }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      className={className}
    >
      <g fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M4 10c0-3.771 0-5.657 1.172-6.828S8.229 2 12 2s5.657 0 6.828 1.172S20 6.229 20 10v4c0 3.771 0 5.657-1.172 6.828S15.771 22 12 22s-5.657 0-6.828-1.172S4 17.771 4 14z" />
        <path
          strokeLinecap="round"
          d="M15 19H9m7.748-16.622l-.084.126c-.756 1.134-1.134 1.701-1.686 2.044q-.165.103-.341.183c-.592.27-1.274.27-2.637.27s-2.044 0-2.636-.27a3 3 0 0 1-.342-.183c-.552-.343-.93-.91-1.686-2.044l-.084-.126"
        />
      </g>
    </svg>
  );
}
