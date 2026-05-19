/** @format */

import SkateboardDeckFinder from "./feature/size";

export default function HomePage() {
  return (
    <div className="flex flex-col p-8 font-sans gap-2">
      <h1 className="text-3xl font-medium tracking-tight self-center">
        Panduan Merakit Skateboard
      </h1>

      <SkateboardDeckFinder />
    </div>
  );
}
