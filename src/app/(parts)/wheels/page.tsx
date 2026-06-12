/** @format */

import { CircleQuestionMark, Info } from "lucide-react";
import { AccordionWheels } from "./accordion";
import ImageWithLoading from "../components/imageLoad";

export default function DeckPage() {
  return (
    <div className="flex flex-col  tracking-tight gap-6  p-6 max-w-4xl self-center w-full">
      <h1 className=" self-center font-semibold text-3xl flex flex-col">
        Wheels (Roda Skateboard)
      </h1>

      <ImageWithLoading
        src="/wheels.png"
        alt="Wheels Skateboard"
        width={800}
        height={400}
        className="rounded-lg object-cover"
        containerClassName="self-center"
      />
      <p className="text-xs text-muted-foreground text-center">Sumber : sourceskate.com</p>

      <div className="text-sm tracking-normal leading-5 flex flex-col gap-2">
        <h2 className="text-xl font-semibold">Semua Tentang Wheels Skateboard</h2>

        <p>
          Roda skateboard berbahan uretan pertama kali muncul pada tahun 1970-an dan mengubah
          skateboarding selamanya. Roda uretan tidak hanya bertahan berkali-kali lebih lama daripada
          roda baja dan tanah liat tradisional, tetapi dengan kemampuan uretan untuk mencengkeram
          dan memantul, para skater kini dapat melakukan tikungan tanpa tergelincir, dan meluncur di
          atas permukaan jalan yang kasar tanpa merasakan getaran jalan yang keras.
        </p>

        <p>
          Uretan membawa olahraga skateboard keluar dari periode abad pertengahan awal, dan membantu
          mengubahnya dari sekadar hobi menjadi gaya hidup yang digemari oleh jutaan orang. Kini,
          hampir 50 tahun kemudian, hampir setiap roda skateboard yang diproduksi terbuat dari
          uretan.
        </p>

        <p>
          Tidak seperti para skater di awal tahun 1970-an, kita memiliki banyak pilihan dalam hal
          roda skateboard uretan berkualitas tinggi. Dua variabel terpenting dalam roda skateboard
          adalah ukuran dan kekerasan (juga dikenal sebagai duro).
        </p>
      </div>

      <div className="text-sm tracking-normal leading-5 flex flex-col gap-2 ">
        <h2 className="text-xl font-semibold">Ukuran Roda</h2>

        <p>
          Ukuran atau diameter roda skateboard Anda akan sangat memengaruhi performa skateboard
          Anda. Roda dengan diameter besar akan melaju lebih cepat dan sedikit lebih berat daripada
          roda yang lebih kecil. Roda yang besar juga akan mengangkat Anda dan papan skateboard
          lebih tinggi dari tanah dibandingkan roda yang lebih kecil. Roda yang lebih kecil akan
          lebih ringan, membuat Anda duduk lebih dekat ke tanah, dan lebih mudah dikendalikan.
        </p>

        <ImageWithLoading
          src="/wheelsd.png"
          alt="Diameter Roda Skateboard"
          width={400}
          height={400}
          className="rounded-lg object-cover"
          containerClassName="self-center"
        />

        <p>
          Pemain skateboard jalanan yang mahir teknik akan lebih menyukai roda berukuran kecil
          karena bobot roda yang ringan memungkinkan pemain skateboard jalanan untuk melakukan trik
          flip dengan lebih mudah. ​​Pemain skateboard transisi biasanya akan memilih roda yang
          lebih besar agar dapat menghasilkan kecepatan lebih tinggi.
        </p>

        <p>
          Diameter roda skateboard diukur dalam milimeter dan kisaran ukurannya umumnya 49mm hingga
          75mm. 26 milimeter mungkin tampak tidak signifikan jika Anda belum banyak bereksperimen
          dengan berbagai ukuran roda skateboard, tetapi bahkan beberapa milimeter pun akan membuat
          perbedaan bagi pemain skateboard berpengalaman. Untuk merinci ukuran roda berdasarkan gaya
          bermain umum, lihat tabel di bawah ini.
        </p>
      </div>

      <div className="text-sm tracking-normal leading-5 flex flex-col gap-2">
        <h2 className="text-xl font-semibold">Tabel Ukuran Roda Skateboard</h2>

        <ImageWithLoading
          src="/tablewheels.png"
          alt="Tabel Ukuran Roda Skateboard"
          width={500}
          height={400}
          className="rounded-lg object-cover"
          containerClassName="self-start"
        />

        <div className="flex items-start gap-2 rounded-xl bg-green-500/15 p-3 text-green-700">
          <Info className="size-4 shrink-0 sm:size-5 self-center" />
          <p className="text-xs leading-relaxed sm:text-sm">
            Cobalah mulai dengan roda berukuran 52mm - 55mm. Ini adalah ukuran yang sangat umum dan
            bagus untuk mempelajari dasar-dasar Skateboarding.
          </p>
        </div>
      </div>

      <div className="text-sm tracking-normal leading-5 flex flex-col gap-2">
        <h2 className="text-xl font-semibold">Durometer Roda (Kekerasan Roda)</h2>

        <p>
          Kekerasan atau durometer roda skateboard menentukan seberapa besar cengkeraman roda dan
          seberapa banyak guncangan yang dapat diserapnya. Secara sederhana, roda yang lebih lunak
          akan terkompresi ketika tekanan diterapkan padanya, sehingga memberikan cengkeraman yang
          lebih besar dan memungkinkannya menyerap lebih banyak guncangan. Roda yang lebih keras
          hampir tidak akan terkompresi di bawah tekanan, sehingga memberikan cengkeraman yang lebih
          kecil, dan penyerapan guncangan yang lebih sedikit. Roda yang lunak akan menghasilkan
          pengalaman berkendara yang sangat mulus, tetapi roda yang keras lebih disukai oleh
          sebagian besar skater jalanan dan transisi karena responsifnya.
        </p>

        <h2 className="text-md font-semibold">Tabel Kekerasan Roda (Durometer)</h2>
        <ImageWithLoading
          src="/durometer.png"
          alt="Durometer Roda Skateboard"
          width={600}
          height={400}
          className="rounded-lg object-cover"
          containerClassName="self-start"
        />

        <p>
          Menggunakan roda keras akan memungkinkan Anda merasakan semua yang Anda lewati. Kesadaran
          ini akan bermanfaat saat Anda melewati transisi bergelombang di taman atau menavigasi
          perpaduan beton dan aspal di hutan kota. Roda keras juga akan merespons langsung gerakan
          Anda. Saat Anda melakukan ollie, semua tekanan yang Anda berikan langsung berpindah ke dek
          dan roda Anda, memberi Anda daya dorong maksimal. Spitfire menawarkan sejumlah roda keras.
        </p>

        <p>
          Roda lunak umumnya tidak ideal untuk skating di jalanan atau transisi, karena daya
          cengkeramnya yang kuat akan menyebabkan roda menempel pada rintangan daripada meluncur
          atau bergesekan di atasnya. Roda lunak juga kurang responsif terhadap gerakan Anda, yang
          membuat trik seperti ollie dan kickflip menjadi lebih sulit.
        </p>
      </div>

      <div className="text-sm tracking-normal leading-5 flex flex-col gap-2">
        <h2 className="text-xl font-semibold">Bentuk Roda (Shape)</h2>

        <p>
          Shape wheel skateboard adalah bentuk desain roda yang menentukan bagaimana roda menyentuh
          permukaan dan merespons saat digunakan. Meskipun dua roda memiliki ukuran dan tingkat
          kekerasan yang sama, shape yang berbeda dapat memberikan sensasi berkendara yang berbeda
          pula. Shape memengaruhi stabilitas saat landing, grip saat berbelok, kemudahan melakukan
          slide, serta seberapa ringan roda terasa ketika melakukan flip tricks.
        </p>

        <ImageWithLoading
          src="/shapewheels.png"
          alt="Shape Roda Skateboard"
          width={600}
          height={400}
          className="rounded-lg object-cover"
          containerClassName="self-center"
        />
        <p className="text-xs text-muted-foreground text-center">Sumber: spitfirewheels.com</p>

        <p>
          Untuk street skating, banyak skater memilih shape yang lebih ramping karena terasa ringan
          dan responsif saat melakukan trik teknis seperti kickflip atau heelflip. Di sisi lain,
          shape yang lebih lebar memberikan area kontak yang lebih besar dengan permukaan sehingga
          menawarkan stabilitas, kontrol, dan grip yang lebih baik. Shape seperti ini sering dipilih
          untuk skatepark, bowl, transition, atau skater yang menginginkan landing yang lebih
          konsisten.
        </p>

        <p>
          Tidak ada shape yang benar-benar terbaik untuk semua orang. Pemilihan shape wheel
          sebaiknya disesuaikan dengan gaya bermain, medan yang sering digunakan, dan preferensi
          pribadi. Karena itu, banyak skater mencoba beberapa shape berbeda sebelum menemukan roda
          yang paling nyaman dan sesuai dengan kebutuhan mereka.
        </p>

        <a
          href="https://www.spitfirewheels.com/wheel-shapes/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 text-sm"
        >
          Lihat lebih banyak bentuk roda di situs resmi Spitfire Wheels
          <span className="inline-flex not-prose">
            <svg viewBox="0 0 16 16" height="16" width="16" data-slot="geist-icon">
              <path
                fill="currentColor"
                fillRule="evenodd"
                d="M6.75 4H6v1.5h3.44L5.47 9.47l-.53.53L6 11.06l.53-.53 3.97-3.97V10H12V5a1 1 0 0 0-1-1z"
                clipRule="evenodd"
              ></path>
            </svg>
          </span>
        </a>
      </div>

      <div>
        <div className="flex items-center gap-2 mb-4 text-xl font-semibold mt-4 bg-green-200 rounded-2xl p-3 text-green-800 w-max">
          <h2 className="">Sering Ditanyakan</h2>
          <CircleQuestionMark className="w-6 h-6 " />
        </div>

        <AccordionWheels />
      </div>
    </div>
  );
}
