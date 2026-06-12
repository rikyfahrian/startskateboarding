/** @format */

"use client";

import { useState } from "react";
import Image, { ImageProps } from "next/image";
import { cn } from "@/src/lib/utils";

type ImageWithLoadingProps = ImageProps & {
  containerClassName?: string;
  alt?: string;
};

export default function ImageWithLoading({
  className,
  containerClassName,
  alt,
  ...props
}: ImageWithLoadingProps) {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className={cn("relative", containerClassName)}>
      {!loaded && <div className="absolute inset-0 bg-muted animate-pulse rounded-lg" />}
      <Image
        {...props}
        alt={alt || "Images"}
        className={cn(
          "transition-opacity duration-500",
          loaded ? "opacity-100" : "opacity-0",
          className,
        )}
        onLoad={() => setLoaded(true)}
      />
    </div>
  );
}
