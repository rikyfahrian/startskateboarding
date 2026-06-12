/** @format */

import Image from "next/image";
import { AccordionGriptape } from "./accordion";
import { CircleQuestionMark } from "lucide-react";
import ImageWithLoading from "../components/imageLoad";

export default function GriptapePage() {
  return (
    <div className="flex flex-col tracking-tight gap-6 p-6 max-w-4xl self-center w-full">
      <h1 className="self-center font-semibold text-3xl flex flex-col">Griptape</h1>

      <ImageWithLoading
        src="/griptape.png"
        alt="Griptape Skateboard"
        width={400}
        height={400}
        className="rounded-lg object-cover"
        containerClassName="self-center"
      />
      <p className="text-xs text-muted-foreground text-center">Sumber : mobgrip.com</p>

      <div>
        <h2 className="text-xl font-semibold">Semua Tentang Griptape</h2>
        <div className="text-sm tracking-normal leading-5 flex flex-col gap-2 mt-2">
          <p>
            Griptape adalah lembaran seperti amplas kasar yang ditempel di bagian atas (permukaan
            pijak) papan skateboard. Fungsinya sederhana tapi krusial — tanpa griptape, kaki kamu
            akan mudah tergelincir dari papan, terutama saat melakukan trik atau mendarat dari
            lompatan.
          </p>
          <p>
            Griptape umumnya terbuat dari silikon karbida atau aluminium oksida yang ditanamkan pada
            lembaran kertas atau bahan berbasis kain yang memiliki perekat di sisi bawahnya.
            Butiran-butiran kasar inilah yang memberikan gesekan antara sol sepatu dan papan,
            sehingga kaki tetap terkunci di posisinya.
          </p>
          <p>
            Meski terlihat sepele, pilihan griptape bisa memengaruhi feel skateboard kamu secara
            keseluruhan. Tingkat kekasaran, ketebalan, dan bahan griptape semuanya berperan dalam
            bagaimana kaki kamu berinteraksi dengan papan.
          </p>

          <div className="relative group self-center ">
            <Image
              src="/deckgriptape.png"
              alt="Tekstur Griptape"
              width={500}
              height={400}
              className="rounded-lg object-cover transition-opacity duration-300 group-hover:opacity-0"
            />
            <Image
              src="/deckgriptape2.png"
              alt="Deck Hover"
              width={500}
              height={400}
              className="absolute inset-0 rounded-lg object-cover transition-opacity duration-300 opacity-0 group-hover:opacity-100"
            />
          </div>
          <p className="text-xs text-muted-foreground text-center">Griptape yang sudah dipasang</p>
        </div>

        <h2 className="text-xl font-semibold mt-4">Cara Pasang Griptape</h2>
        <div className="text-sm tracking-normal leading-5 flex flex-col gap-2 mt-2">
          <p>
            Memasang griptape adalah salah satu hal pertama yang perlu kamu pelajari saat merakit
            skateboard. Prosesnya tidak sulit, tapi butuh ketelitian agar hasilnya rapi dan tidak
            ada gelembung udara.
          </p>
          <ul className="list-disc list-inside flex flex-col gap-1">
            <li>Lepas kertas pelindung perekat dari griptape secara perlahan.</li>
            <li>Tempelkan griptape dari tengah papan, lalu ratakan ke arah tepi sambil ditekan.</li>
            <li>Gosok permukaan griptape dengan jari atau alat khusus agar menempel sempurna.</li>
            <li>
              Gunakan bagian pinggir truck atau kunci pas untuk menggosok sisi tepi papan — ini akan
              membuat bekas garis di griptape sebagai panduan pemotongan.
            </li>
            <li>Potong sisa griptape di luar garis menggunakan cutter atau pisau tajam.</li>
            <li>Tusuk lubang baut dengan obeng dari bawah papan agar lubangnya terlihat.</li>
          </ul>

          <div className="flex justify-center mt-4">
            <iframe
              className="rounded-lg"
              width="560"
              height="315"
              src="https://www.youtube.com/embed/c2llhl4Mft4?si=-rx2XTQxdlGk2B8w"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
        </div>

        <h2 className="text-xl font-semibold mt-4">Jenis-Jenis Griptape</h2>
        <div className="text-sm tracking-normal leading-5 flex flex-col gap-2 mt-2">
          <p>
            Tidak semua griptape sama. Ada beberapa variasi yang bisa kamu pilih sesuai preferensi
            dan gaya bermain:
          </p>
          <ul className="list-disc list-inside flex flex-col gap-1">
            <li>
              <strong>Standard Griptape:</strong> Paling umum digunakan. Kasar merata di seluruh
              permukaan, cocok untuk semua jenis skating.
            </li>
            <li>
              <strong>Perforated Griptape:</strong> Memiliki lubang-lubang kecil di permukaannya
              untuk memudahkan pemasangan tanpa gelembung udara.
            </li>
            <li>
              <strong>Clear / Transparent Griptape:</strong> Bening sehingga desain deck di bawahnya
              tetap terlihat. Biasanya sedikit kurang kasar dibanding griptape standar.
            </li>
            <li>
              <strong>Colored & Printed Griptape:</strong> Hadir dalam berbagai warna dan motif
              untuk tampilan yang lebih personal dan ekspresif.
            </li>
          </ul>
        </div>

        <h2 className="text-xl font-semibold mt-4">Kapan Harus Ganti Griptape?</h2>
        <div className="text-sm tracking-normal leading-5 flex flex-col gap-2 mt-2">
          <p>
            Griptape akan aus seiring pemakaian. Tanda-tanda griptape perlu diganti antara lain:
          </p>
          <ul className="list-disc list-inside flex flex-col gap-1">
            <li>Permukaan sudah terasa licin dan tidak lagi memberikan grip yang cukup.</li>
            <li>Tepi griptape mulai terangkat atau mengelupas dari papan.</li>
            <li>Ada bagian yang sobek atau terkelupas di tengah permukaan.</li>
          </ul>
          <p>
            Tidak ada patokan waktu pasti — semua tergantung seberapa sering dan seberapa keras kamu
            skating. Sebagian skater mengganti griptape setiap kali ganti deck baru, sebagian
            lainnya hanya mengganti saat sudah terasa licin.
          </p>
        </div>

        <div>
          <div className="flex items-center gap-2 mb-4 text-xl font-semibold mt-4 bg-green-200 rounded-2xl p-3 text-green-800 w-max">
            <h2 className="">Sering Ditanyakan</h2>
            <CircleQuestionMark className="w-6 h-6 " />
          </div>

          <AccordionGriptape />
        </div>
      </div>
    </div>
  );
}
