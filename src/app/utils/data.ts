/** @format */

export type ShoeSize = {
  size: number;
  insoleCm: string;
  deck: string;
  truck: string;
  note: string;
};

export type WheelsBase = {
  size: number;
  shape: string;
  hardness: string;
  note: string;
  playgrounds: "street" | "park";
};

export const WheelsTypes: WheelsBase[] = [
  {
    size: 52,
    shape: "Conical Full",
    hardness: "99A",
    note: "Tapak lebar dan stabil, sangat nyaman untuk mengunci grind di box atau rel.",
    playgrounds: "street",
  },
  {
    size: 53,
    shape: "Classic V-Shape",
    hardness: "101A",
    note: "Desain slim dan ringan, bikin pop papan lebih responsif untuk trik flip.",
    playgrounds: "street",
  },
  {
    size: 54,
    shape: "Tablet",
    hardness: "99A",
    note: "Perpaduan pas antara kecepatan dan kontrol, cocok untuk all-around park skating.",
    playgrounds: "park",
  },
  {
    size: 56,
    shape: "Sidecut",
    hardness: "84B",
    note: "Sangat keras dan cepat, didesain khusus agar presisi saat lock-in di coping bowl.",
    playgrounds: "park",
  },
  {
    size: 56,
    shape: "Cruiser Standard",
    hardness: "78A",
    note: "Roda empuk khusus komuter, sangat senyap dan halus menerjang aspal kasar.",
    playgrounds: "street",
  },
];

export const shoeSizes: ShoeSize[] = [
  {
    size: 34,
    insoleCm: "21.5 - 22 cm",
    deck: "7.25",
    truck: "127",
    note: "Ukuran deck minimalis, memberikan respons paling cepat namun area pijakan sangat terbatas.",
  },
  {
    size: 35,
    insoleCm: "22 - 22.5 cm",
    deck: "7.375",
    truck: "127",
    note: "Kombinasi ukuran yang sangat ringan, mempermudah rotasi flip dengan tenaga minimal.",
  },
  {
    size: 36,
    insoleCm: "22.5 - 23 cm",
    deck: "7.5",
    truck: "129",
    note: "Sangat responsif untuk manuver cepat dan melatih akurasi kontrol papan.",
  },
  {
    size: 37,
    insoleCm: "23 - 23.5 cm",
    deck: "7.75",
    truck: "129 / 139",
    note: "Menawarkan transisi yang baik antara kelincahan trik dan kestabilan dasar.",
  },
  {
    size: 38,
    insoleCm: "24 - 24.5 cm",
    deck: "8.0",
    truck: "139",
    note: "Ukuran standar industri (all-around) dengan proporsi paling seimbang untuk segala gaya main.",
  },
  {
    size: 39,
    insoleCm: "24.5 - 25 cm",
    deck: "8.0",
    truck: "139",
    note: "Menghasilkan keseimbangan optimal antara kontrol trik teknis dan stabilitas mendarat.",
  },
  {
    size: 40,
    insoleCm: "25 - 25.5 cm",
    deck: "8.125",
    truck: "144",
    note: "Memberikan ruang pijak sedikit lebih lebar untuk kenyamanan kontrol saat meluncur.",
  },
  {
    size: 41,
    insoleCm: "26 - 26.5 cm",
    deck: "8.25",
    truck: "144",
    note: "Lebar deck yang populer karena memberikan stabilitas tinggi saat kecepatan tinggi.",
  },
  {
    size: 42,
    insoleCm: "26.5 - 27 cm",
    deck: "8.25",
    truck: "144",
    note: "Fokus pada kestabilan transisi, sangat solid untuk meluncur di berbagai medan.",
  },
  {
    size: 43,
    insoleCm: "27 - 27.5 cm",
    deck: "8.375",
    truck: "149",
    note: "Area permukaan luas, mempermudah tangkapan kaki saat mendaratkan trik tinggi.",
  },
  {
    size: 44,
    insoleCm: "28 - 28.5 cm",
    deck: "8.5",
    truck: "149",
    note: "Konfigurasi papan lebar yang mengutamakan keamanan mendarat dan kontrol penuh.",
  },
  {
    size: 45,
    insoleCm: "29 - 29.5 cm",
    deck: "8.5 - 8.75",
    truck: "149 / 159",
    note: "Sangat kokoh dengan distribusi beban yang merata untuk meredam benturan keras.",
  },
  {
    size: 46,
    insoleCm: "30 - 30.5 cm",
    deck: "8.75",
    truck: "159",
    note: "Ukuran maksimal yang menawarkan stabilitas absolut dan kenyamanan meluncur jarak jauh.",
  },
];
