export interface FeatureItem {
  title: string;
  image: string;
}

export const FEATURES = {
  convenience: [
    { title: 'Warm up your shower water while still snoozing under the covers.​', image: '/assets/Feature 1.png' },
    { title: 'Dim the lights for a movie night with just your voice, popcorn in hand.​', image: '/assets/Feature 2.png' },
    { title: 'From turning on the stove to locking the doors, one app does it all.​', image: '/assets/Feature 3.png' },
  ],
  productivity: [
    { title: 'Morning Routine', image: '/assets/Feature 2-3.png' },
    { title: 'Work Focus Mode', image: '/assets/Feature 3.png' },
    { title: 'Evening Wind Down', image: '/assets/Feature 1.png' },
  ],
  sustainability: [
    { title: 'Energy Monitoring', image: '/assets/Feature 2.png' },
    { title: 'Auto Shutoff', image: '/assets/Feature 1.png' },
    { title: 'Renewable Integration', image: '/assets/Feature 2-1.png' },
  ],
  security: [
    { title: 'Smart Locks', image: '/assets/Feature 2-2.png' },
    { title: 'Motion Detection', image: '/assets/Feature 2-3.png' },
    { title: 'Privacy Mode', image: '/assets/Feature 3.png' },
  ],
} as const;

export const TABS = [
  { key: 'convenience' as const, label: 'Convenience' },
  { key: 'productivity' as const, label: 'Productivity' },
  { key: 'sustainability' as const, label: 'Sustainability' },
  { key: 'security' as const, label: 'Security & Privacy Control' },
];

export type TabKey = keyof typeof FEATURES;

