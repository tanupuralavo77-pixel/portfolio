export interface Work {
  title: string;
  description: string;
  tags: string[];
  url: string;
  imageSeed: string;
}

// NOTE: `url` is a placeholder until the hair-salon site is deployed —
// replace with the real deployed URL before publishing this portfolio.
export const works: Work[] = [
  {
    title: '美容室 凪 -nagi-',
    description:
      'ナチュラル・オーガニック系美容室のコーポレートサイト。トップページ、メニュー・料金、スタイリスト紹介、ギャラリーの4ページで構成し、デザインから実装まで一貫して担当しました。',
    tags: ['Astro', 'Tailwind CSS'],
    url: 'https://example.com/REPLACE_ME',
    imageSeed: 'portfolio-work-hair-salon',
  },
];
