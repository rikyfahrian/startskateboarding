/** @format */

import Image from "next/image";
import SkateboardDeckFinder from "./feature/size";

export default function HomePage() {
  return (
    <div className="flex flex-col p-8 font-sans gap-2">
      <h1 className="text-3xl font-medium tracking-tight self-center">
        Panduan Merakit Skateboard
      </h1>

      <div className="relative group self-center cursor-pointer">
        <Image
          src="/deckgriptape2.png"
          alt="Tekstur Griptape"
          width={500}
          height={400}
          className="rounded-lg object-cover transition-opacity duration-300 group-hover:opacity-0"
        />
        <Image
          src="/deckgriptape.png"
          alt="Deck Hover"
          width={500}
          height={400}
          className="absolute inset-0 rounded-lg object-cover transition-opacity duration-300 opacity-0 group-hover:opacity-100"
        />
        <p className="text-xs text-muted-foreground text-center">
          Skateboard lengkap dengan griptape yang sudah dipasang
        </p>
      </div>

      <SkateboardDeckFinder />
    </div>
  );
}
