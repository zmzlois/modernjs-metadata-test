import ZackAvatar from './Zack.webp';
import ai_hero from './ai-testing-hero.webp';

export interface BlogPost {
  title: string;
  slug: string;
  // biome-ignore lint/suspicious/noExplicitAny: <explanation>
  listingImage?: any;
  // biome-ignore lint/suspicious/noExplicitAny: <explanation>
  heroImage?: any;
  date: Date;
  time?: string;
  authors: Author[];
  description: string;
}
export type Author = {
  displayName: string;
  zephyrMember: boolean;
  // biome-ignore lint/suspicious/noExplicitAny: <explanation>
  avatar: any;
  socialLinks?: Array<{
    link: string;
    platform: 'LinkedIn' | 'X' | 'YouTube' | 'Twitch' | 'Github';
  }>;
};

const Zack: Author = {
  displayName: 'Zack C.',
  zephyrMember: true,
  avatar: ZackAvatar,
  socialLinks: [
    {
      link: 'https://www.linkedin.com/in/zackarychapple',
      platform: 'LinkedIn',
    },
    { link: 'https://x.com/Zackary_Chapple', platform: 'X' },
  ],
};

export const blogPosts: BlogPost[] = [
  {
    title: 'AI based end-to-end testing',
    slug: './ai-e2e-testing',
    date: new Date('February 18, 2025 20:00:00 GMT+0'),
    heroImage: ai_hero,
    listingImage: ai_hero,
    description:
      'Revolutionizing e2e testing with Midscene, Puppeteer, and Zephyr Cloud',
    authors: [Zack],
  },
];
