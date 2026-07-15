export interface Work {
  title: string;
  description: string;
  tags: string[];
  url: string;
  imageSeed: string;
  image?: string;
}

export const works: Work[] = [
  {
    title: '美容室 凪 -nagi-',
    description:
      'ナチュラル・オーガニック系美容室のコーポレートサイト。トップページ、メニュー・料金、スタイリスト紹介、ギャラリーの4ページで構成し、デザインから実装まで一貫して担当しました。',
    tags: ['Astro', 'Tailwind CSS'],
    url: 'https://hair-salon-omega-five.vercel.app',
    imageSeed: 'portfolio-work-hair-salon',
    image: '/images/works/hair-salon-nagi-thumbnail.png',
  },
  {
    title: 'Bar NOCTURNE',
    description:
      'アールデコ×ヴィンテージジャズをテーマにした架空バーのブランドサイト。パララックスや罫線描画アニメーションなど上質な雰囲気を伝える演出にこだわり、デザインから実装まで担当しました。',
    tags: ['Astro', 'Tailwind CSS'],
    url: 'https://bar-nocturne.vercel.app',
    imageSeed: 'portfolio-work-bar-nocturne',
    image: '/images/works/bar-nocturne-thumbnail.png',
  },
  {
    title: '喫茶とまり木',
    description:
      '1978年創業・三代続く純喫茶という設定のレトロ喫茶店サイト。手描き風イラストで温かみのある世界観を表現し、ビルド不要のプレーンHTML/CSSで軽量に実装しました。',
    tags: ['HTML', 'CSS', 'JavaScript'],
    url: 'https://tanupuralavo77-pixel.github.io/kissa-tomarigi/',
    imageSeed: 'portfolio-work-kissa-tomarigi',
    image: '/images/works/kissa-tomarigi-thumbnail.png',
  },
  {
    title: 'もふもふ堂 Mofu Mofu Do',
    description:
      'パンケーキ・スイーツ系カフェの架空店舗サイト。パステルカラーの「ソフトクレイ」スタイルでメニューやギャラリーを構成し、親しみやすい雰囲気に仕上げました。',
    tags: ['HTML', 'CSS', 'JavaScript'],
    url: 'https://tanupuralavo77-pixel.github.io/mofumofu-do/',
    imageSeed: 'portfolio-work-mofumofu-do',
    image: '/images/works/mofumofu-do-thumbnail.png',
  },
  {
    title: '家族防災チェック',
    description:
      '非常食を備えるだけでは防災にならない、家族みんなで備える大切さを伝える診断系LP。縦長の漫画コマ割りで共感を生むストーリーを構成し、デザインからコーディングまで担当しました。',
    tags: ['HTML', 'CSS', 'LPデザイン'],
    url: 'https://tanupuralavo77-pixel.github.io/manga-lp/family-bousai/',
    imageSeed: 'portfolio-work-family-bousai',
    image: '/images/works/family-bousai.jpeg',
  },
  {
    title: '休息タイプ診断',
    description:
      '休んでいるのに回復しない、という悩みに寄り添う休息タイプ診断LP。漫画形式で共感からCTAまでの流れを設計し、実装しました。',
    tags: ['HTML', 'CSS', 'LPデザイン'],
    url: 'https://tanupuralavo77-pixel.github.io/manga-lp/kyusoku-shindan/',
    imageSeed: 'portfolio-work-kyusoku-shindan',
    image: '/images/works/kyusoku-shindan.jpeg',
  },
  {
    title: 'AI購買サポート',
    description:
      '比較しすぎて決められない、という購買前の悩みを解消するAI診断LP。漫画コマ割りでストーリー訴求し、実装まで一貫して担当しました。',
    tags: ['HTML', 'CSS', 'LPデザイン'],
    url: 'https://tanupuralavo77-pixel.github.io/manga-lp/ai-kaimono/',
    imageSeed: 'portfolio-work-ai-kaimono',
    image: '/images/works/ai-kaimono.jpeg',
  },
];
