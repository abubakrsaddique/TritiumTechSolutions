import type { ReactNode, SVGProps } from "react";
import type { IconName } from "@/lib/data";

type IconProps = SVGProps<SVGSVGElement>;

function Svg({ children, ...props }: IconProps & { children: ReactNode }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.6}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      {children}
    </svg>
  );
}

export const MenuIcon = (p: IconProps) => (
  <Svg {...p}>
    <path d="M4 7h16M4 12h16M4 17h16" />
  </Svg>
);

export const CloseIcon = (p: IconProps) => (
  <Svg {...p}>
    <path d="M6 6l12 12M18 6 6 18" />
  </Svg>
);

export const ChevronDownIcon = (p: IconProps) => (
  <Svg {...p}>
    <path d="m6 9 6 6 6-6" />
  </Svg>
);

const icons: Record<IconName, (p: IconProps) => ReactNode> = {
  globe: (p) => (
    <Svg {...p}>
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18" />
      <path d="M12 3c2.6 2.4 4 5.6 4 9s-1.4 6.6-4 9c-2.6-2.4-4-5.6-4-9s1.4-6.6 4-9Z" />
    </Svg>
  ),
  phone: (p) => (
    <Svg {...p}>
      <rect x="6.5" y="2.5" width="11" height="19" rx="2.5" />
      <path d="M10.5 18.5h3" />
    </Svg>
  ),
  sparkles: (p) => (
    <Svg {...p}>
      <path d="m11 3 1.9 5.1L18 10l-5.1 1.9L11 17l-1.9-5.1L4 10l5.1-1.9L11 3Z" />
      <path d="m19 15 .8 2.2L22 18l-2.2.8L19 21l-.8-2.2L16 18l2.2-.8L19 15Z" />
    </Svg>
  ),
  cloud: (p) => (
    <Svg {...p}>
      <path d="M17.5 19H9a7 7 0 1 1 6.7-9h1.8a4.5 4.5 0 1 1 0 9Z" />
    </Svg>
  ),
  layers: (p) => (
    <Svg {...p}>
      <path d="m12 3 9 5-9 5-9-5 9-5Z" />
      <path d="m3 12.5 9 5 9-5" />
      <path d="m3 17 9 5 9-5" />
    </Svg>
  ),
  bulb: (p) => (
    <Svg {...p}>
      <path d="M9 18h6M10 21.5h4" />
      <path d="M15 14.2c.2-1 .8-1.8 1.6-2.6A6 6 0 1 0 6 8c0 1.4.5 2.5 1.5 3.6.8.8 1.4 1.600 1.5 2.600" />
    </Svg>
  ),
  mail: (p) => (
    <Svg {...p}>
      <rect x="3" y="5" width="18" height="14" rx="2.5" />
      <path d="m3.5 7 8.5 6 8.5-6" />
    </Svg>
  ),
  pin: (p) => (
    <Svg {...p}>
      <path d="M19.5 10c0 5.500-7.500 11-7.500 11S4.500 15.500 4.500 10a7.500 7.500 0 0 1 15 0Z" />
      <circle cx="12" cy="10" r="2.5" />
    </Svg>
  ),
  clock: (p) => (
    <Svg {...p}>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </Svg>
  ),
  check: (p) => (
    <Svg {...p}>
      <path d="m5 12.500 4.500 4.500L19 7.500" />
    </Svg>
  ),
  "arrow-right": (p) => (
    <Svg {...p}>
      <path d="M5 12h14M13 6l6 6-6 6" />
    </Svg>
  ),
  "arrow-up-right": (p) => (
    <Svg {...p}>
      <path d="M7 17 17 7M8 7h9v9" />
    </Svg>
  ),
};

export function Icon({ name, ...props }: IconProps & { name: IconName }) {
  return <>{icons[name](props)}</>;
}
