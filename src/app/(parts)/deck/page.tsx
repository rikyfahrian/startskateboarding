/** @format */

import Image from "next/image";
import { AccordionBasic } from "./accordion";

export default function DeckPage() {
  return (
    <div className="flex flex-col  tracking-tight gap-6  p-6 max-w-4xl self-center w-full">
      <h1 className=" self-center font-semibold text-3xl flex flex-col">Deck (Papan Skateboard)</h1>

      <Image
        src="/sourceskate.png"
        alt="Deck Skateboard"
        width={800}
        height={400}
        className="rounded-lg object-cover self-center"
      />
      <p className="text-xs text-muted-foreground text-center">Sumber : sourceskate.com</p>

      <div>
        <h2 className="text-xl font-semibold">Semua Tentang Papan Skateboard</h2>
        <div className="text-sm tracking-normal leading-5 flex flex-col gap-2 mt-2">
          <p>
            Papan skateboard Anda adalah fondasi dari keseluruhan nuansa skateboard Anda. Gaya
            berkendara Anda, berbagai rintangan yang dapat Anda lalui, dan komponen penting lainnya
            (truck, roda, dll.) semuanya berkaitan dengan papan skateboard yang Anda pilih.
          </p>
          <p>
            Pilihan papan skateboard yang tersedia saat ini sangat beragam. Teknologi skateboard
            telah berkembang jauh dari papan skateboard pertama di tahun 1960-an, yang sempit,
            padat, dan sulit dioperasikan.
          </p>
          <p>
            Saat ini, papan skateboard dibuat menggunakan 7 hingga 9 lembaran kayu tipis terpisah,
            yang dikenal sebagai (ply) yang direkatkan bersama. Perekatan beberapa lembaran kayu
            memungkinkan papan untuk melentur di bawah tekanan sehingga tahan terhadap kerusakan,
            responsif terhadap gerakan Anda, dan ringan.
          </p>
          <Image
            src="/plies.png"
            alt="Deck Skateboard"
            width={500}
            height={400}
            className="rounded-lg object-cover self-center"
          />
          <p>
            Kayu maple mentah pertama-tama dipotong menjadi lembaran persegi panjang tipis, yang
            kemudian ditumpuk satu di atas yang lain dengan lem di antara setiap lembaran. Penjepit
            kemudian ditempatkan secara strategis pada tumpukan kayu yang telah dilem untuk
            membentuk bagian cekung papan skateboard. Setelah lem mengering dan lapisan-lapisan
            tersebut menyatu menjadi satu objek, penjepit dilepas dan kita mendapatkan persegi
            panjang kayu yang telah dibentuk.
          </p>
          <p>
            Dari persegi panjang melengkung ini, papan skateboard terakhir dipotong. Ada banyak
            sekali bentuk dan ukuran yang dapat dipotong dari potongan ini yang akan menentukan
            karakteristik akhir papan. Bagian-bagian berikut akan menjelaskan secara detail berbagai
            pilihan bentuk dan ukuran papan, dan bagaimana setiap pilihan akan memengaruhi
            pengalaman Anda saat bermain skateboard.
          </p>
          <Image
            src="/shape.png"
            alt="Deck Skateboard"
            width={500}
            height={400}
            className="rounded-lg object-cover self-center"
          />

          <p className="text-xs text-muted-foreground text-center">
            Macam-macam bentuk papan skateboard
          </p>
          <p className="text-xs text-muted-foreground text-center">Sumber : ccsskateboarding</p>
        </div>
        <h2 className="text-xl font-semibold">Bagian Papan Skateboard</h2>
        <div className="text-sm tracking-normal leading-5 flex flex-col gap-2 mt-2">
          <p>
            Papan skateboard terdiri dari beberapa bagian utama, masing-masing dengan fungsi
            spesifik yang berkontribusi pada performa keseluruhan dan gaya berkendara Anda. Berikut
            adalah bagian-bagian utama dari papan skateboard:
          </p>

          <ul className="list-disc list-inside">
            <li>
              <strong>Nose:</strong> Bagian ujung depan papan. Biasanya bentuknya sedikit lebih
              besar dan lebih naik dibanding bagian belakang (tail).
            </li>
            <li>
              <strong>Tail:</strong> Bagian ujung belakang papan. Bagian ini yang dihentakan ke
              tanah (pop) untuk melakukan trik seperti ollie.
            </li>
            <li>
              <strong>Griptape:</strong> Lemberan seperti amplas kasar yang ditempel di bagian atas
              papan supaya sepatu tidak licin saat berdiri di atasnya.
            </li>
            <li>
              <strong>Concave:</strong> Kelengkungan melengkung ke dalam di sepanjang sisi kiri dan
              kanan papan. Gunanya biar kaki kita bisa mencengkeram papa dengan lebih pas dan
              stabil.
              <Image
                src="/concave.png"
                alt="Deck Skateboard"
                width={500}
                height={400}
                className="rounded-lg object-cover mx-auto"
              />
            </li>
          </ul>
        </div>

        <h2 className="text-xl font-semibold">Sering Ditanyakan</h2>
        <div>
          <AccordionBasic />
        </div>
      </div>
    </div>
  );
}
