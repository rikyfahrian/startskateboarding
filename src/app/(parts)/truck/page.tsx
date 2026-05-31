/** @format */

import Image from "next/image";
import { AccordionBasic } from "../deck/accordion";

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

      <div>
        <h2 className="text-xl font-semibold">Semua Tentang Truck Skateboard</h2>
        <div className="text-sm tracking-normal leading-5 flex flex-col gap-2 mt-2">
          <p>
            Truck adalah poros papan seluncur Anda. Truck akan mengontrol cara Anda berbelok,
            melakukan ollie, grind, dan bertanggung jawab untuk menerjemahkan gerakan Anda ke dalam
            gerakan papan seluncur Anda. Truck adalah perantara antara dek dan roda Anda, dan
            penting untuk memilih ukuran yang tepat.
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
        <h2 className="text-xl font-semibold">Lebar Truck</h2>
        <div className="text-sm tracking-normal leading-5 flex flex-col gap-2 mt-2">
          <p>
            Untuk memilih truck skateboard terbaik untuk skateboard lengkap Anda, Anda perlu
            mengetahui ukuran truck yang sesuai dengan deck Anda. Lebar truck berbanding lurus
            dengan lebar deck Anda. Truck yang terlalu sempit akan membuat skateboard tidak stabil;
            sedangkan truck yang terlalu lebar dapat menyebabkan sepatu bersentuhan dengan roda saat
            mendorong, di antara masalah lainnya.
          </p>

          <Image
            src="/widthtruck.png"
            alt="Width Truck Skateboard"
            width={500}
            height={400}
            className="rounded-lg object-cover self-center"
          />

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
