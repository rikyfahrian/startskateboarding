/** @format */

import { AccordionBasic, Item } from "../components/accordion";

const items: Item[] = [
  {
    value: "item-1",
    trigger: "Apa itu deck 8.25, 8.0, 7.75, dll.?",
    content:
      'Lebar (width) deck diukur dalam inci di bagian terlebar papan. Ini menentukan seberapa besar ruang pijakan kamu. Skater street biasanya pakai 7.75"–8.25", sedangkan skater transition/vert sering pilih 8.5" ke atas.',

    image: "/widthdeck.png",
  },
  {
    value: "item-2",
    trigger: "Berapa harga deck skateboard lokal (Indonesia)?",
    content:
      "Harga deck skateboard lokal (Indonesia) bisa bervariasi tergantung merek, kualitas, dan tempat pembelian. Umumnya, harga deck berkisar antara Rp 300.000 hingga Rp 800.000.",
    tips: "Belilah papan skateboard di Skateshop lokal untuk mendukung bisnis lokal dan mendapatkan saran langsung dari staf yang berpengalaman.",
  },

  {
    value: "item-3",
    trigger: "Apa bedanya deck 7-ply dan 8-ply?",
    content:
      "Kebanyakan deck pakai 7-ply maple — 7 lapisan kayu yang direkatkan. Deck 8-ply lebih kaku dan tahan lama tapi lebih berat. Ada juga yang pakai lapisan carbon fiber atau fiberglass untuk nambahin kekuatan tanpa nambah berat.",
  },
  {
    value: "item-4",
    trigger: "Berapa lama deck bisa bertahan sebelum harus diganti?",
    content:
      "Tergantung seberapa sering dan keras kamu skating. Rata-rata deck bertahan 1–3 bulan untuk skater harian. Tanda-tanda harus ganti: bagian tail (ekor habis terkikis), delaminasi (lapisan mengelupas), atau papan terasa mati dan tidak ada pop-nya.",
  },
  {
    value: "item-5",
    trigger: "Apakah deck skateboard tahan air?",
    content:
      "Deck skateboard biasanya terbuat dari kayu maple yang tidak tahan air. Jika terkena air, kayu bisa melunak, melengkung, atau bahkan delaminasi (lapisan mengelupas). Untuk melindungi deck, hindari skating di genangan air atau hujan, dan pastikan untuk mengeringkan deck dengan baik jika terkena air.",
  },
];

export function AccordionDeck() {
  return <AccordionBasic items={items} />;
}
