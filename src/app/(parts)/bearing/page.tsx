/** @format */

import Image from "next/image";
import { AccordionBearing } from "./accordion";
import { CircleQuestionMark } from "lucide-react";
import ImageWithLoading from "../components/imageLoad";

export default function BearingPage() {
  return (
    <div className="flex flex-col tracking-tight gap-6 p-6 max-w-4xl self-center w-full">
      <h1 className="self-center font-semibold text-3xl flex flex-col">Bantalan Roda (Bearing)</h1>

      <ImageWithLoading
        src="/bearing.png"
        alt="Bearing Skateboard"
        width={400}
        height={200}
        className="rounded-lg object-cover"
        containerClassName="self-center"
      />
      <p className="text-xs text-muted-foreground text-center">Sumber : bronsonspeedco.com</p>

      <div>
        <h2 className="text-xl font-semibold">Semua Tentang Bearing</h2>
        <div className="text-sm tracking-normal leading-5 flex flex-col gap-2 mt-2">
          <p>
            Bearing adalah komponen kecil berbentuk lingkaran yang dipasang di dalam roda
            skateboard. Meski ukurannya mungil, bearing punya peran yang sangat penting —
            bearing-lah yang memungkinkan roda berputar dengan mulus di atas axle truck.
          </p>
          <p>
            Setiap roda membutuhkan dua bearing, sehingga satu set skateboard lengkap memerlukan
            total 8 bearing. Bearing skateboard menggunakan standar ukuran internasional yang
            disebut 608, yang berarti semua bearing skateboard punya dimensi luar yang sama dan
            kompatibel dengan semua roda dan truck skateboard.
          </p>
          <p>
            Di dalam setiap bearing terdapat bola-bola baja kecil yang berputar di antara dua cincin
            logam (inner race dan outer race). Bola-bola inilah yang mengurangi gesekan sehingga
            roda bisa berputar cepat dan lancar.
          </p>

          <ImageWithLoading
            src="/bearingparts.png"
            alt="Anatomi Bearing"
            width={500}
            height={400}
            className="rounded-lg object-cover"
            containerClassName="self-center"
          />
          <p className="text-xs text-muted-foreground text-center">
            Bagian-bagian dalam sebuah bearing
          </p>
        </div>

        <h2 className="text-xl font-semibold mt-4">Bagian-Bagian Bearing</h2>
        <div className="text-sm tracking-normal leading-5 flex flex-col gap-2 mt-2">
          <p>
            Meski terlihat sederhana dari luar, bearing terdiri dari beberapa komponen yang
            masing-masing punya fungsi penting:
          </p>
          <ul className="list-disc list-inside flex flex-col gap-1">
            <li>
              <strong>Inner Race:</strong> Cincin bagian dalam yang menempel pada axle truck dan
              tidak berputar.
            </li>
            <li>
              <strong>Outer Race:</strong> Cincin bagian luar yang menempel pada roda dan ikut
              berputar bersama roda.
            </li>
            <li>
              <strong>Balls:</strong> Bola-bola baja kecil yang berputar di antara inner dan outer
              race untuk mengurangi gesekan.
            </li>
            <li>
              <strong>Retainer / Cage:</strong> Kerangka yang menjaga jarak antar bola agar tetap
              merata dan tidak bergeser.
            </li>
            <li>
              <strong>Shield:</strong> Penutup tipis di sisi bearing yang melindungi bagian dalam
              dari debu dan kotoran.
            </li>
          </ul>
        </div>

        <h2 className="text-xl font-semibold mt-4">Mengenal Rating ABEC</h2>
        <div className="text-sm tracking-normal leading-5 flex flex-col gap-2 mt-2">
          <p>
            Kamu mungkin sering melihat tulisan seperti ABEC 3, ABEC 5, atau ABEC 7 pada kemasan
            bearing. ABEC adalah sistem rating yang mengukur presisi dan toleransi pembuatan bearing
            — semakin tinggi angkanya, semakin presisi bearing tersebut dibuat.
          </p>
          <p>
            Namun perlu diingat, rating ABEC tidak secara langsung menentukan seberapa cepat atau
            tahan lama sebuah bearing untuk skateboard. Banyak faktor lain seperti kualitas bahan,
            pelumasan, dan shield yang justru lebih berpengaruh pada performa nyata di jalanan.
          </p>
        </div>

        <h2 className="text-xl font-semibold mt-4">Cara Merawat Bearing</h2>
        <div className="text-sm tracking-normal leading-5 flex flex-col gap-2 mt-2">
          <p>
            Bearing yang dirawat dengan baik bisa bertahan jauh lebih lama dan tetap berputar
            kencang. Berikut beberapa tips merawat bearing kamu:
          </p>
          <ul className="list-disc list-inside flex flex-col gap-1">
            <li>
              Hindari skating di kondisi basah atau genangan air karena bisa menyebabkan karat.
            </li>
            <li>
              Bersihkan bearing secara berkala menggunakan cairan pembersih khusus bearing atau
              aseton, lalu keringkan sebelum diberi pelumas baru.
            </li>
            <li>
              Gunakan pelumas bearing (bearing lubricant) secukupnya — terlalu banyak justru
              memperlambat putaran.
            </li>
            <li>
              Jika bearing sudah terasa kasar, berbunyi, atau putarannya melambat drastis, saatnya
              ganti dengan yang baru.
            </li>
          </ul>

          <ImageWithLoading
            src="/bearingcleaner.png"
            alt="Membersihkan Bearing"
            width={400}
            height={400}
            className="rounded-lg object-cover"
            containerClassName="self-center"
          />

          <p className="text-muted-foreground text-xs text-center">Sumber: Skatedeluxe.com</p>
        </div>

        <div>
          <div className="flex items-center gap-2 mb-4 text-xl font-semibold mt-4 bg-green-200 rounded-2xl p-3 text-green-800 w-max">
            <h2 className="">Sering Ditanyakan</h2>
            <CircleQuestionMark className="w-6 h-6 " />
          </div>

          <AccordionBearing />
        </div>
      </div>
    </div>
  );
}
