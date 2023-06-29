/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { useRef } from "react";
import { ListIcon } from "../Icons";
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
  duration,
  date,
}: CardItem) {
  const thumbnailRef = useRef<HTMLImageElement>(null);

  const PodcastCard = () => {
    return (
      <div className="transition duration-300 p-2 cursor-pointer text-xs">
        {image && (
          <div className="h-48 bg-gray-800 ">
            <img
              src={`${image.slice(0, -13)}200x200bb.jpg`}
              alt={altTitle}
              ref={thumbnailRef}
              className={`h-full w-full object-cover flex justify-center items-center`}
              loading="lazy"
            />
          </div>
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
  };
  const EpisodeCard = () => {
    function formatDuration(durationMs: number) {
      const durationSeconds = Math.floor(durationMs / 1000);
      const durationMinutes = Math.floor(durationSeconds / 60);
      const durationHours = Math.floor(durationMinutes / 60);

      if (durationSeconds < 60) {
        return `${durationSeconds}sec`;
      } else if (durationMinutes < 60) {
        return `${durationMinutes}min`;
      } else {
        const remainingMinutes = durationMinutes % 60;
        const hoursString = durationHours > 0 ? `${durationHours}h ` : "";
        return `${hoursString}${remainingMinutes}min`;
      }
    }
    function formatDate(dateStr: string) {
      const date = new Date(dateStr);
      return date.toLocaleDateString("default", {
        month: "short",
        day: "numeric",
      });
    }
    return (
      <div className="episode-card rounded-md transition duration-300 m-2 mb-1 cursor-pointer text-xs flex overflow-hidden relative">
        {image && (
          <div className="w-32 h-28 bg-gray-800">
            <img
              src={`${image.slice(0, -13)}200x200bb.jpg`}
              alt={altTitle}
              ref={thumbnailRef}
              style={{ minWidth: "100px" }}
              className={`h-full w-full object-cover flex justify-center items-center`}
              loading="lazy"
            />
          </div>
        )}

        <div className="w-64 p-3 flex flex-col justify-between">
          <div className="w-48">
            {subheading && (
              <p style={{ color: hue }} className={`truncate text-xs`}>
                {subheading}
              </p>
            )}

            <h3 className="text-xs pt-1  col-span-10 hover:underline">
              {heading}
            </h3>
          </div>

          <p className="text-gray-300 mt-3">
            <span className="mr-3">{formatDate(date)}</span>
            <span> {formatDuration(duration)}</span>
          </p>
        </div>
        <div
          style={{ fontSize: "130%" }}
          className="col-span-2 absolute top-3 right-1 text-gray-600"
        >
          <ListIcon />
        </div>
      </div>
    );
  };
  return type === "podcast" ? <PodcastCard /> : <EpisodeCard />;
}
