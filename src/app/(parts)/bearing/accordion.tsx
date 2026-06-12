/** @format */
/** @format */

import { AccordionBasic, Item } from "../components/accordion";

const items: Item[] = [
  {
    value: "item-1",
    trigger: "Apa itu ABEC rating pada bearing skateboard?",
    content:
      "ABEC (Annular Bearing Engineers' Committee) adalah standar yang mengukur presisi dan toleransi bearing. Semakin tinggi angkanya (ABEC 3, 5, 7, 9), semakin presisi bearing tersebut. Untuk skateboard, ABEC 5 atau 7 sudah lebih dari cukup — perbedaan performa di atas itu hampir tidak terasa saat skating.",
  },
  {
    value: "item-2",
    trigger: "Berapa harga bearing skateboard di Indonesia?",
    content:
      "Harga bearing skateboard di Indonesia cukup bervariasi. Merek lokal seperti Etaks atau Crowd Hardware bisa didapat sekitar Rp 250.000 hingga Rp 350.000 per set (8 buah). Merek premium seperti Bones Reds atau Swiss berkisar Rp 400.000 hingga Rp 600.000.",
    tips: "Bones Reds adalah pilihan favorit banyak skater karena menawarkan performa tinggi dengan harga yang relatif terjangkau.",
  },
  {
    value: "item-3",
    trigger: "Seberapa sering bearing harus dibersihkan?",
    content:
      "Tidak ada patokan waktu yang baku. Tandanya adalah saat roda mulai terasa berat, bergetar, atau terdengar berisik saat diputar. Skater yang sering main di luar ruangan atau di area berdebu perlu lebih sering membersihkan bearing dibanding yang skating di dalam ruangan.",
  },
  {
    value: "item-4",
    trigger: "Apakah bearing bisa dibersihkan sendiri?",
    content:
      "Bisa, dan cukup mudah. Lepas penutup bearing (shield) menggunakan jarum atau pin kecil, rendam bearing dalam cairan pembersih seperti acetone atau isopropyl alcohol, lalu keringkan dan tetesi dengan pelumas bearing. Hindari menggunakan WD-40 karena bisa mempercepat kerusakan.",
  },
  {
    value: "item-5",
    trigger: "Apakah bearing tahan air?",
    content:
      "Bearing skateboard tidak dirancang untuk kondisi basah. Air dan kotoran bisa masuk ke dalam dan menyebabkan karat serta keausan lebih cepat. Jika bearing terkena air, segera keringkan dan beri pelumas ulang. Bearing dengan shield karet (rubber shielded) sedikit lebih tahan terhadap debu dan percikan air dibanding yang bershield besi.",
  },
];

export function AccordionBearing() {
  return <AccordionBasic items={items} />;
}
