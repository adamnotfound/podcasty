import CardItem from "./CardItem";
import { Podcast, Episode } from "../../types/types";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/navigation";
import { Scrollbar } from "swiper";
import { ComponentType } from "react";

interface IProps {
  items: (Podcast | Episode)[];
  type: string;
  swiperRef: any;
}

const ScrollView: ComponentType<IProps> = ({ items, swiperRef, type }) => {
  const slidesPerView = 2;
  const breakpoints = {
    640: {
      slidesPerView: type === "podcast" ? 2 : 1,
      slidesPerGroup: type === "podcast" ? 2 : 1,
    },
    768: {
      slidesPerView: type === "podcast" ? 3 : 1,
      slidesPerGroup: 3,
    },
    1024: {
      slidesPerView: type === "podcast" ? 5 : 2,
      slidesPerGroup: type === "podcast" ? 5 : 2,
    },
    1280: {
      slidesPerView: type === "podcast" ? 5 : 3,
      slidesPerGroup: type === "podcast" ? 5 : 3,
    },
    1536: {
      slidesPerView: type === "podcast" ? 5 : 3,
      slidesPerGroup: type === "podcast" ? 5 : 3,
    },
  };
  return (
    <div className="p-3 h-70">
      <Swiper
        spaceBetween={0}
        slidesPerView={slidesPerView}
        slidesPerGroup={slidesPerView}
        breakpoints={breakpoints}
        className="mb-5"
        modules={[Scrollbar]}
        onBeforeInit={(swiper) => {
          swiperRef.current = swiper;
        }}
        scrollbar={{
          hide: false,
          draggable: true,
        }}
      >
        {items.length > 0 ? (
          items?.map((i) => (
            <SwiperSlide className="pb-5" key={i.trackId}>
              <CardItem
                key={i.trackId}
                id={i.trackId}
                heading={i.trackName}
                image={i.artworkUrl600}
                altTitle={i.trackName}
                subheading={i.collectionName}
                hue={i.hue}
                type={i.kind}
                duration={i.trackTimeMillis}
                date={i.releaseDate}
              />
            </SwiperSlide>
          ))
        ) : (
          <p className="flex text-center flex-center justify-center items-center h-40">
            No results found
          </p>
        )}
      </Swiper>
    </div>
  );
};
export default ScrollView;
