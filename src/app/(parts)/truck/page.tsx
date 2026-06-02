/** @format */

import Image from "next/image";
import { Info } from "lucide-react";
import { AccordionTruck } from "./accordion";

export default function DeckPage() {
  return (
    <div className="flex flex-col  tracking-tight gap-6  p-6 max-w-4xl self-center w-full">
      <h1 className=" self-center font-semibold text-3xl flex flex-col">Truck (Truk Skateboard)</h1>

      <Image
        src="/truck.png"
        alt="Truck Skateboard"
        width={800}
        height={400}
        className="rounded-lg object-cover self-center"
        loading="eager"
      />
      <p className="text-xs text-muted-foreground text-center">Sumber : sourceskate.com</p>

      <div className="text-sm tracking-normal leading-5 flex flex-col gap-2">
        <h2 className="text-xl font-semibold">Semua Tentang Truck Skateboard</h2>

        <p>
          Truck adalah poros papan seluncur Anda. Truck akan mengontrol cara Anda berbelok,
          melakukan ollie, grind, dan bertanggung jawab untuk menerjemahkan gerakan Anda ke dalam
          gerakan papan seluncur Anda. Truck adalah perantara antara dek dan roda Anda, dan penting
          untuk memilih ukuran yang tepat.
        </p>

        <Image
          src="/truckdetail.png"
          alt="Deck Skateboard"
          width={500}
          height={400}
          className="rounded-lg object-cover self-center"
        />

        <p className="text-xs text-muted-foreground text-center">Sumber : ccsskateboarding</p>
      </div>

      <div className="text-sm tracking-normal leading-5 flex flex-col gap-2 ">
        <h2 className="text-xl font-semibold">Lebar Truck</h2>

        <p>
          Untuk memilih truck skateboard terbaik untuk skateboard lengkap Anda, Anda perlu
          mengetahui ukuran truck yang sesuai dengan deck Anda. Lebar truck berbanding lurus dengan
          lebar deck Anda. Truck yang terlalu sempit akan membuat skateboard tidak stabil; sedangkan
          truck yang terlalu lebar dapat menyebabkan sepatu bersentuhan dengan roda saat mendorong,
          di antara masalah lainnya.
        </p>

        <Image
          src="/widthtruck.png"
          alt="Width Truck Skateboard"
          width={500}
          height={400}
          className="rounded-lg object-cover self-center"
        />

        <p>
          Memilih truck skateboard terbaik untuk setup Anda bisa agak menantang karena papan
          skateboard diukur dalam inci, sedangkan truck diukur menggunakan berbagai satuan yang
          berbeda-beda tergantung mereknya.
        </p>

        <p>
          Beberapa merek truk juga mengukur lebar truk mereka dari mur poros ke mur poros, sementara
          yang lain hanya mengukur lebar gantungan. Pada akhirnya, yang Anda inginkan adalah truk
          yang, ketika dipasang pada dek Anda, memposisikan mur porosnya dalam jarak seperempat inci
          dari tepi dek. Ini berarti bahwa mur poros Anda tidak menjorok keluar melewati tepi dek
          Anda, dan tidak berada lebih dari 1/4 di dalam tepi dek Anda.
        </p>
      </div>

      <div className="text-sm tracking-normal leading-5 flex flex-col gap-2">
        <h2 className="text-xl font-semibold">Tinggi Truck</h2>
        <p>
          Setelah Anda menentukan lebar truck yang Anda butuhkan, Anda mungkin ingin
          mempertimbangkan apakah Anda menginginkan truck rendah atau tinggi. Banyak merek truck
          skateboard menawarkan produk mereka dalam pilihan rendah dan tinggi, dan masing-masing
          akan memiliki performa yang sedikit berbeda.
        </p>
        <Image
          src="/hightruck.png"
          alt="Height Truck Skateboard"
          width={500}
          height={400}
          className="rounded-lg object-cover self-center"
        />

        <p>
          Truck <span className="font-semibold">rendah</span> memiliki kingpin yang lebih pendek,
          yang memberikan ruang ekstra pada hanger Anda untuk grinding, membuat posisi Anda lebih
          rendah ke tanah, dan menstabilkan truck. Selain itu, material yang perlu Anda manipulasi
          lebih sedikit dengan truck rendah, sehingga tendangan dan dorongan Anda bisa menjangkau
          lebih jauh. Stabilitas, respons, dan ruang grinding yang ditawarkan oleh truck rendah
          seringkali lebih disukai oleh skater jalanan.
        </p>

        <p>
          Truck <span className="font-semibold">tinggi</span> memiliki kingpin yang sekitar 5mm
          lebih panjang daripada truck rendah. Ini memungkinkan radius putar yang lebih besar dan
          jarak tambahan antara dek dan as roda, sehingga truck tinggi kompatibel dengan roda yang
          lebih besar. Kemampuan untuk berbelok lebih tajam dan menerima roda yang lebih besar
          membuat truck tinggi menarik bagi skater transisi. Radius putar yang lebih besar juga
          membuat truck tinggi ideal untuk sekadar berkeliling kota.
        </p>

        <div className="flex items-start gap-2 rounded-xl bg-green-500/15 p-3 text-green-700">
          <Info className="size-4 shrink-0 sm:size-5" />
          <p className="text-xs leading-relaxed sm:text-sm">
            Truk yang tidak disebutkan secara spesifik sebagai tinggi atau rendah umumnya setara
            dengan truk tinggi.
          </p>
        </div>
      </div>

      <div className="text-sm tracking-normal leading-5 flex flex-col gap-2">
        <h2 className="text-xl font-semibold">Bantalan Truck (Bushing)</h2>

        <p>
          Bushing skateboard adalah cetakan silindris kecil dari uretan yang memungkinkan truck
          skateboard Anda berputar. Terletak di atas kingpin, bushing ini mentransfer tekanan dari
          kaki Anda ke truck, memungkinkan Anda melakukan belokan, carving, dan manuver lainnya.
        </p>

        <div className="flex gap-4 justify-center">
          <Image
            src="/bushing1.png"
            alt="Bushing Skateboard"
            width={250}
            height={400}
            className="rounded-lg object-cover self-center"
          />

          <Image
            src="/bushing2.png"
            alt="Bushing Skateboard"
            width={100}
            height={200}
            className="rounded-lg object-cover self-center"
          />
        </div>

        <p>
          Semua truck sudah dilengkapi dengan bushing yang terpasang, tetapi dari waktu ke waktu
          Anda mungkin perlu menggantinya. Bushing tersedia dalam berbagai durometer, atau pilihan
          kekerasan, yang memengaruhi stabilitas dan respons truck Anda.
        </p>

        <p>
          Bushing yang keras akan membuat truck skateboard Anda kaku, stabil, dan membutuhkan lebih
          banyak tenaga untuk berbelok. Bushing yang lunak akan berbelok dengan mudah dan merespons
          tekanan dengan cepat. Bushing standar yang disertakan dengan sebagian besar truck
          skateboard biasanya cenderung lunak, jadi jika Anda menginginkan bushing yang lebih keras,
          sebaiknya beli satu set secara terpisah.
        </p>
      </div>

      <div>
        <h2 className="text-xl font-semibold">Sering Ditanyakan</h2>
        <AccordionTruck />
      </div>
    </div>
  );
}
