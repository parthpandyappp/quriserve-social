"use client";
import { useState } from "react";
import { CarouselProps } from "@/types";

export const Carousel = ({ images }: CarouselProps) => {
  const [activeImage, setActiveImage] = useState(0);
  return (
    <div className="relative h-[338px] w-full mb-[15.91px]">
      <img
        src={images[activeImage]?.media_url.source}
        alt="Image"
        className="h-full w-full object-cover"
      />
      <div className="hidden md:flex mt-[15.91px] gap-[3.98px] justify-center">
        {images &&
          Array.from({ length: images.length }, (value, index) =>
            index === activeImage ? (
              <img src="/assets/carousal-rectangle.svg" />
            ) : (
              <img src="/assets/carousal-circle.svg" />
            )
          )}
      </div>
      <div className="md:hidden flex mt-[15.91px] gap-[3.98px] justify-center absolute bottom-0 w-full p-2">
        {images &&
          Array.from({ length: images.length }, (value, index) =>
            index === activeImage ? (
              <img src="/assets/carousal-rectangle.svg" />
            ) : (
              <img
                src="/assets/carousal-circle.svg"
                onClick={() => setActiveImage(index)}
              />
            )
          )}
      </div>
    </div>
  );
};
