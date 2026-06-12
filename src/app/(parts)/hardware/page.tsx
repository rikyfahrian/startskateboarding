/** @format */

import { CircleQuestionMark, Info } from "lucide-react";
import { AccordionHardware } from "./accordion";
import ImageWithLoading from "../components/imageLoad";

export default function HardwarePage() {
  return (
    <div className="flex flex-col tracking-tight gap-6 p-6 max-w-4xl self-center w-full">
      <h1 className="self-center font-semibold text-3xl flex flex-col">Baut (Hardware/Bolts)</h1>

      <ImageWithLoading
        src="/bolts.png"
        alt="Hardware Skateboard"
        width={300}
        height={400}
        className="rounded-lg object-cover"
        containerClassName="self-center"
      />
      <p className="text-xs text-muted-foreground text-center">Sumber : sourceskate.com</p>

      <div className="text-sm tracking-normal leading-5 flex flex-col gap-2">
        <h2 className="text-xl font-semibold">Semua Tentang Hardware Skateboard</h2>

        <p>
          Hardware skateboard, atau yang sering disebut bolts, adalah sekrup dan mur kecil yang
          menyatukan truck dengan deck. Meskipun ukurannya mungil dan sering kali luput dari
          perhatian, hardware adalah komponen krusial yang menentukan apakah semua bagian skateboard
          Anda terpasang dengan aman dan stabil.
        </p>

        <p>
          Setiap set hardware terdiri dari 8 buah baut dan 8 buah mur — empat pasang untuk setiap
          truck. Material yang paling umum digunakan adalah baja tahan karat, karena kuat, tidak
          mudah berkarat, dan tahan terhadap gesekan yang terjadi saat skating. Beberapa merek juga
          menawarkan hardware berbahan titanium yang lebih ringan, meski harganya jauh lebih mahal.
        </p>

        <p>
          Hardware tersedia dalam dua jenis kepala baut: Phillips (plus) dan Allen (hex/segi enam).
          Keduanya berfungsi sama, dan pemilihan jenis kepala baut biasanya hanya soal preferensi
          pribadi serta jenis kunci yang Anda miliki.
        </p>
      </div>

      <div className="text-sm tracking-normal leading-5 flex flex-col gap-2">
        <h2 className="text-xl font-semibold">Ukuran Hardware</h2>

        <p>
          Panjang baut hardware diukur dalam inci dan harus disesuaikan dengan ketebalan riser pad
          yang Anda gunakan (atau tidak gunakan). Memilih ukuran yang tepat sangat penting — baut
          yang terlalu pendek tidak akan mencengkeram dengan kuat, sementara baut yang terlalu
          panjang bisa menonjol ke permukaan deck dan mengganggu performa.
        </p>

        <p>
          Tanpa riser pad, ukuran hardware yang paling umum digunakan adalah 7/8 inci hingga 1 inci.
          Jika menggunakan riser pad setebal 1/8 inci, disarankan memakai baut sepanjang 1 inci
          hingga 1 1/8 inci. Untuk riser pad yang lebih tebal (1/4 inci), gunakan baut sepanjang 1
          1/4 inci.
        </p>
      </div>

      <div className="text-sm tracking-normal leading-5 flex flex-col gap-2">
        <h2 className="text-xl font-semibold">Jenis Kepala Baut</h2>

        <p>
          Ada dua jenis kepala baut yang umum ditemukan pada hardware skateboard: Phillips dan
          Allen. Baut Phillips menggunakan obeng plus (+) biasa yang mudah ditemukan di mana saja.
          Baut Allen menggunakan kunci hex (segi enam) yang memberikan torsi lebih besar sehingga
          lebih kecil kemungkinannya untuk dol atau slip saat dikencangkan.
        </p>

        <ImageWithLoading
          src="/allenbolts.png"
          alt="Jenis Kepala Baut Skateboard"
          width={300}
          height={400}
          className="rounded-lg object-cover"
          containerClassName="self-center"
        />

        <p className="text-xs text-muted-foreground text-center">Sumber: sanctionnow.com</p>

        <p>
          Sebagian besar skate tool sudah dilengkapi dengan kedua jenis kunci tersebut, jadi tidak
          perlu khawatir soal kompatibilitas. Pilih saja yang paling nyaman digunakan atau yang
          tersedia di toko terdekat.
        </p>

        <div className="flex items-start gap-2 rounded-xl bg-green-500/15 p-3 text-green-700">
          <Info className="size-4 shrink-0 sm:size-5 self-center" />
          <p className="text-xs leading-relaxed sm:text-sm">
            Banyak skater mengganti satu baut dengan warna berbeda sebagai penanda posisi nose dan
            tail deck — trik sederhana tapi sangat membantu, terutama untuk deck baru.
          </p>
        </div>
      </div>

      <div className="text-sm tracking-normal leading-5 flex flex-col gap-2">
        <h2 className="text-xl font-semibold">Cara Memasang Hardware dengan Benar</h2>

        <p>
          Kencangkan baut secara merata dan bergantian — jangan mengencangkan satu baut sampai penuh
          sebelum yang lain, karena bisa membuat truck tidak terpasang rata di deck. Kencangkan
          secara bertahap hingga semua baut terasa kokoh tanpa berlebihan.
        </p>

        <p>
          Baut yang terlalu kencang bisa merusak deck atau membuat truck susah dilepas di kemudian
          hari. Sebaliknya, baut yang terlalu longgar bisa menyebabkan truck bergerak dan deck
          terasa tidak stabil saat dinaiki. Periksa kekencangan hardware secara berkala, terutama
          setelah beberapa sesi skating.
        </p>
      </div>

      <div>
        <div className="flex items-center gap-2 mb-4 text-xl font-semibold mt-4 bg-green-200 rounded-2xl p-3 text-green-800 w-max">
          <h2 className="">Sering Ditanyakan</h2>
          <CircleQuestionMark className="w-6 h-6" />
        </div>

        <AccordionHardware />
      </div>
    </div>
  );
}
