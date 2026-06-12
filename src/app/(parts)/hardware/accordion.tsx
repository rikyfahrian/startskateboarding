/** @format */

import { AccordionBasic, Item } from "../components/accordion";

const items: Item[] = [
  {
    value: "item-1",
    trigger: "Apa bedanya baut Phillips dan Allen pada hardware skateboard?",
    content:
      "Baut Phillips menggunakan obeng plus (+) biasa yang mudah ditemukan di mana saja. Baut Allen menggunakan kunci hex (segi enam) yang memberikan torsi lebih besar sehingga lebih kecil kemungkinannya untuk dol saat dikencangkan. Keduanya berfungsi sama — pilih sesuai preferensi dan alat yang kamu punya.",
  },
  {
    value: "item-2",
    trigger: "Berapa harga hardware skateboard di Indonesia?",
    content:
      "Hardware skateboard termasuk komponen paling terjangkau. Merek lokal atau entry-level bisa didapat sekitar Rp 20.000 hingga Rp 50.000 per set (8 baut + 8 mur). Merek internasional seperti Independent atau Shake Junt berkisar Rp 60.000 hingga Rp 120.000.",
    tips: "Hardware adalah komponen yang sering diremehkan, tapi jangan terlalu irit — baut yang mudah dol bisa bikin truck susah dilepas dan merusak deck kamu.",
  },
  {
    value: "item-3",
    trigger: "Ukuran hardware berapa yang cocok untuk setup standar?",
    content:
      "Untuk setup tanpa riser pad, ukuran 7/8 inci hingga 1 inci sudah cukup untuk mayoritas deck standar. Jika menggunakan riser pad 1/8 inci, pakai baut 1 inci hingga 1 1/8 inci. Baut yang terlalu pendek tidak akan mencengkeram kuat, sedangkan yang terlalu panjang bisa menonjol ke permukaan deck.",
  },
  {
    value: "item-4",
    trigger: "Seberapa sering hardware perlu diganti?",
    content:
      "Hardware tidak perlu sering diganti jika tidak ada masalah. Ganti jika baut sudah mulai dol (kepala baut rusak sehingga susah dikencangkan atau dilepas), berkarat parah, atau patah. Biasakan mengecek kekencangan baut secara berkala, terutama setelah beberapa sesi skating.",
  },
  {
    value: "item-5",
    trigger: "Apakah hardware bisa berkarat?",
    content:
      "Bisa, terutama jika sering terkena air atau disimpan di tempat lembap. Sebagian besar hardware modern terbuat dari baja tahan karat yang cukup tahan korosi, namun tetap bisa berkarat dalam jangka panjang jika tidak dirawat. Jika kamu sering skating di luar ruangan atau kondisi basah, periksa kondisi baut lebih rutin.",
  },
];
export function AccordionHardware() {
  return <AccordionBasic items={items} />;
}
