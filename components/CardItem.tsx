import Link from "next/link";
import { useRef } from "react";
import { ListIcon } from "./Icons";
import { CardItem } from "@/types/types";

export default function CardItem({
  image,
  id,
  altTitle,
  heading,
  subheading = "",
  hue,
  imageRounded = false,
  type,
}: CardItem) {
  const thumbnailRef = useRef<HTMLImageElement>(null);
  
  return (
    <div className="transition duration-300 p-2 cursor-pointer text-xs">
      {image && (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={`${image.slice(0, -13)}200x200bb.jpg`}
          alt={altTitle}
          ref={thumbnailRef}
          className={`h-44 w-full object-cover`}
          loading="lazy"
        />
      )}
      <div className="mt-3 grid grid-cols-12 gap-4 relative">
        <h3 className="text-sm col-span-10 font-bold truncate hover:underline">
          {heading}
        </h3>
        <div className="col-span-2 absolute top-0 right-[-6px] text-gray-400">
          <ListIcon />
        </div>
      </div>
      {subheading && (
        <p style={{ color: hue }} className={`font-bold truncate`}>
          {subheading}
        </p>
      )}
    </div>
  );
}
