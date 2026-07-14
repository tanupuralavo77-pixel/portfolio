export interface Work {
  title: string;
  description: string;
  tags: string[];
  url: string;
  imageSeed: string;
}

export const works: Work[] = [
  {
    title: '美容室 凪 -nagi-',
    description:
      'ナチュラル・オーガニック系美容室のコーポレートサイト。トップページ、メニュー・料金、スタイリスト紹介、ギャラリーの4ページで構成し、デザインから実装まで一貫して担当しました。',
    tags: ['Astro', 'Tailwind CSS'],
    url: 'https://hair-salon-omega-five.vercel.app',
    imageSeed: 'portfolio-work-hair-salon',
  },
  {
    title: 'Bar NOCTURNE',
    description:
      'アールデコ×ヴィンテージジャズをテーマにした架空バーのブランドサイト。パララックスや罫線描画アニメーションなど上質な雰囲気を伝える演出にこだわり、デザインから実装まで担当しました。',
    tags: ['Astro', 'Tailwind CSS'],
    url: 'https://bar-nocturne.vercel.app',
    imageSeed: 'portfolio-work-bar-nocturne',
  },
  {
    title: '喫茶とまり木',
    description:
      '1978年創業・三代続く純喫茶という設定のレトロ喫茶店サイト。手描き風イラストで温かみのある世界観を表現し、ビルド不要のプレーンHTML/CSSで軽量に実装しました。',
    tags: ['HTML', 'CSS', 'JavaScript'],
    url: 'https://tanupuralavo77-pixel.github.io/kissa-tomarigi/',
    imageSeed: 'portfolio-work-kissa-tomarigi',
  },
  {
    title: 'もふもふ堂 Mofu Mofu Do',
    description:
      'パンケーキ・スイーツ系カフェの架空店舗サイト。パステルカラーの「ソフトクレイ」スタイルでメニューやギャラリーを構成し、親しみやすい雰囲気に仕上げました。',
    tags: ['HTML', 'CSS', 'JavaScript'],
    url: 'https://tanupuralavo77-pixel.github.io/mofumofu-do/',
    imageSeed: 'portfolio-work-mofumofu-do',
  },
];
