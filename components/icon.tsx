const paths = {
  arrow: <><path d="M4 12h15"/><path d="m13 6 6 6-6 6"/></>,
  back: <><path d="M20 12H5"/><path d="m11 18-6-6 6-6"/></>,
  external: <><path d="M7 17 17 7"/><path d="M7 7h10v10"/></>,
  download: <><path d="M12 3v12m-5-5 5 5 5-5"/><path d="M5 17v4h14v-4"/></>,
  pin: <><path d="M19 10c0 5-7 10-7 10S5 15 5 10a7 7 0 1 1 14 0Z"/><circle cx="12" cy="10" r="2.5"/></>,
  email: <><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/></>,
  menu: <path d="M4 6h16M4 12h16M4 18h16"/>,
  close: <path d="m6 6 12 12M6 18 18 6"/>,
  layout: <><rect x="3" y="4" width="18" height="16" rx="2"/><path d="M3 9h18M9 9v11"/></>,
  database: <><ellipse cx="12" cy="5.5" rx="8" ry="3.5"/><path d="M4 5.5v6c0 1.9 3.6 3.5 8 3.5s8-1.6 8-3.5v-6M4 11.5v6c0 1.9 3.6 3.5 8 3.5s8-1.6 8-3.5v-6"/></>,
  code: <path d="m8 6-6 6 6 6m8-12 6 6-6 6m-2-15-4 18"/>,
  file: <><path d="M6 3h8l4 4v14H6z"/><path d="M14 3v5h4m-9 5h6m-6 4h6"/></>,
  briefcase: <><rect x="3" y="7" width="18" height="13" rx="2"/><path d="M8 7V4h8v3M3 12h18m-11 0v2h4v-2"/></>,
  education: <><path d="m2 9 10-5 10 5-10 5z"/><path d="M6 11v5c4 3 8 3 12 0v-5m4-2v6"/></>,
  github: <><path d="M9 19c-4.3 1.3-4.3-2.2-6-2.7m12 5v-3.4c0-1 .1-1.5-.5-2.1 3.1-.4 6.3-1.5 6.3-6.9a5.4 5.4 0 0 0-1.4-3.8 5 5 0 0 0-.1-3.8s-1.1-.4-3.9 1.5a13.5 13.5 0 0 0-7 0C5.7 1 4.6 1.4 4.6 1.4a5 5 0 0 0-.2 3.8A5.4 5.4 0 0 0 3 9c0 5.3 3.2 6.5 6.3 6.9-.4.4-.6.9-.5 2.1v3.4" transform="translate(0 1)"/></>,
  linkedin: <><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M7.5 10.5v6m0-9v.1m4 8.9v-6m0 2.7a2.7 2.7 0 0 1 5.4 0v3.3"/></>,
} as const;

export type IconName = keyof typeof paths;

export function Icon({ name, className }: { name: IconName; className?: string }) {
  return (
    <svg className={className} width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {paths[name]}
    </svg>
  );
}
