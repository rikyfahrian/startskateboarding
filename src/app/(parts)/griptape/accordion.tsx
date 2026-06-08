/** @format */

import { AccordionBasic, Item } from "../components/accordion";

const items: Item[] = [
  {
    value: "item-1",
    trigger: "Apakah semua griptape ukurannya sama?",
    content:
      "Griptape umumnya dijual dalam lembaran standar berukuran 9 x 33 inci, yang cukup untuk menutup satu deck skateboard standar. Beberapa merek juga menjual dalam bentuk roll panjang, cocok untuk yang sering ganti griptape.",
  },
  {
    value: "item-2",
    trigger: "Berapa harga griptape di Indonesia?",
    content:
      "Harga griptape di Indonesia cukup terjangkau. Untuk merek lokal atau entry-level, harganya berkisar Rp 30.000 hingga Rp 80.000 per lembar. Merek internasional seperti Mob atau Jessup bisa mencapai Rp 100.000 hingga Rp 200.000.",
    tips: "Griptape adalah komponen murah tapi penting — jangan terlalu hemat karena griptape yang berkualitas buruk bisa bikin kaki gampang slip.",
  },
  {
    value: "item-3",
    trigger: "Apa bedanya griptape kasar dan yang lebih halus?",
    content:
      "Griptape dengan butiran lebih kasar memberikan cengkeraman lebih kuat, cocok untuk trik teknikal yang butuh kontrol penuh. Griptape yang lebih halus terasa lebih nyaman di kaki tapi cengkeramannya sedikit berkurang. Pilihan tergantung preferensi dan gaya skating kamu.",
  },
  {
    value: "item-4",
    trigger: "Seberapa sering griptape harus diganti?",
    content:
      "Tidak ada patokan waktu pasti. Tanda griptape perlu diganti adalah saat permukaannya sudah terasa licin, tepinya mulai terangkat, atau ada bagian yang sobek. Skater yang sering main bisa ganti tiap beberapa bulan, sementara yang jarang main bisa lebih lama.",
  },
  {
    value: "item-5",
    trigger: "Apakah griptape tahan air?",
    content:
      "Griptape tidak dirancang untuk kondisi basah. Jika sering kena air, lem perekatnya bisa melemah dan permukaannya kehilangan daya cengkeram lebih cepat. Sebaiknya hindari skating di kondisi hujan, dan jika basah segera keringkan papan kamu.",
  },
];

export function AccordionGriptape() {
  return <AccordionBasic items={items} />;
}
