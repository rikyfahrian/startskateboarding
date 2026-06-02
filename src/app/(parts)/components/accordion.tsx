/** @format */

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Image from "next/image";

export type Item = {
  value: string;
  trigger: string;
  content: string;
  image?: string;
  tips?: string;
};

export function AccordionBasic({ items }: { items: Item[] }) {
  return (
    <Accordion type="single" collapsible className="w-full">
      {items.map((item) => (
        <AccordionItem key={item.value} value={item.value}>
          <AccordionTrigger>{item.trigger}</AccordionTrigger>
          <AccordionContent>
            {item.content}

            {item.tips && (
              <p className="mt-2 text-sm  bg-green-500/20 p-2 rounded-lg text-green-800">
                <strong>Tips:</strong> {item.tips}
              </p>
            )}
            {item.image && (
              <Image
                src={item.image}
                alt="Deck Skateboard"
                width={300}
                height={200}
                className="rounded-lg object-cover mt-2 "
              />
            )}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
