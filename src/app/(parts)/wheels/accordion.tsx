/** @format */

import { AccordionBasic, Item } from "../components/accordion";

const items: Item[] = [
  {
    value: "item-1",
    trigger: "Apa arti ukuran Wheels 52mm, 54mm, 56mm, dll.?",
    content:
      "Ukuran Wheels diukur berdasarkan diameter roda dalam milimeter (mm). Wheels yang lebih kecil biasanya lebih ringan dan responsif untuk street skating, sedangkan Wheels yang lebih besar lebih cepat dan nyaman untuk cruising atau transition.",
  },
  {
    value: "item-2",
    trigger: "Berapa harga Wheels skateboard di Indonesia?",
    content:
      "Harga Wheels skateboard bervariasi tergantung merek, material, dan teknologi yang digunakan. Untuk Wheels lokal atau entry-level, harga umumnya berkisar antara Rp 150.000 hingga Rp 400.000 per set, sedangkan merek internasional dapat mencapai Rp 600.000 atau lebih.",
    tips: "Pilih Wheels sesuai gaya bermain dan pastikan membeli dari toko skateboard terpercaya untuk mendapatkan kualitas yang baik.",
  },
  {
    value: "item-3",
    trigger: "Apa arti angka durometer seperti 95A, 99A, atau 101A?",
    content:
      "Durometer menunjukkan tingkat kekerasan roda. Semakin tinggi angkanya, semakin keras Wheels tersebut. Wheels 99A–101A populer untuk street dan skatepark karena lebih cepat dan mudah slide, sedangkan Wheels yang lebih lunak cocok untuk jalanan kasar dan cruising.",
  },
  {
    value: "item-4",
    trigger: "Berapa lama Wheels skateboard bisa bertahan?",
    content:
      "Umur Wheels tergantung frekuensi penggunaan, permukaan yang sering dilalui, dan gaya bermain. Dengan penggunaan normal, Wheels bisa bertahan berbulan-bulan hingga bertahun-tahun. Jika bentuknya sudah tidak rata atau diameter berkurang drastis, saatnya mengganti Wheels.",
  },
  {
    value: "item-5",
    trigger: "Apakah Wheels skateboard bisa aus atau rusak?",
    content:
      "Ya. Seiring waktu, Wheels akan mengalami keausan akibat gesekan dengan permukaan jalan atau skatepark. Flat spot juga bisa muncul jika sering melakukan powerslide dengan teknik yang kurang tepat, sehingga roda menjadi tidak bulat sempurna.",
  },
];

export function AccordionWheels() {
  return <AccordionBasic items={items} />;
}
