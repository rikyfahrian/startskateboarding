/** @format */

import { AccordionBasic, Item } from "../components/accordion";

const items: Item[] = [
  {
    value: "item-1",
    trigger: "Apa itu ukuran truck 129, 139, 149, dll.?",
    content:
      "Ukuran truck mengacu pada lebar axle truck. Semakin besar angkanya, semakin lebar truck tersebut. Idealnya, lebar truck disesuaikan dengan lebar deck agar papan terasa stabil dan nyaman saat digunakan.",
  },
  {
    value: "item-2",
    trigger: "Berapa harga truck skateboard lokal di Indonesia?",
    content:
      "Harga truck skateboard di Indonesia bervariasi tergantung merek dan material. Untuk truck lokal, harga biasanya berkisar antara Rp 250.000 hingga Rp 700.000 per pasang, sedangkan merek internasional bisa lebih mahal.",
    tips: "Pastikan membeli truck dari toko skateboard terpercaya agar mendapatkan produk asli dan sesuai kebutuhan skating kamu.",
  },
  {
    value: "item-3",
    trigger: "Apa pengaruh tinggi truck (low, mid, high)?",
    content:
      "Truck low lebih stabil dan cocok untuk technical street skating. Truck mid menawarkan keseimbangan antara stabilitas dan ruang roda. Truck high memberikan ruang lebih besar untuk roda berdiameter besar dan lebih nyaman untuk transition atau cruising.",
  },
  {
    value: "item-4",
    trigger: "Berapa lama truck skateboard bisa bertahan?",
    content:
      "Truck biasanya jauh lebih awet dibanding deck. Dengan penggunaan normal, truck dapat bertahan bertahun-tahun. Komponen yang lebih sering diganti adalah bushing, pivot cup, atau kingpin jika sudah aus atau rusak.",
  },
  {
    value: "item-5",
    trigger: "Apakah truck skateboard bisa berkarat?",
    content:
      "Ya, truck terbuat dari logam sehingga dapat berkarat jika sering terkena air dan tidak dirawat. Setelah skating di kondisi basah, sebaiknya keringkan truck dan bearing untuk mencegah korosi dan memperpanjang umur komponen.",
  },
];

export function AccordionTruck() {
  return <AccordionBasic items={items} />;
}
