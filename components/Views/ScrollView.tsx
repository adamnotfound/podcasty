import CardItem from "../CardItem";
import { Podcast, Episode } from "../../types/types";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/navigation";
import { Scrollbar } from "swiper";
import { ComponentType } from "react";

interface IProps {
  items: (Podcast | Episode)[];
  swiperRef: any;
}
const slidesPerView = 2;
const breakpoints = {
  640: {
    slidesPerView: 2,
    slidesPerGroup: 2,
  },
  768: {
    slidesPerView: 3,
    slidesPerGroup: 3,
  },
  1024: {
    slidesPerView: 5,
    slidesPerGroup: 5,
  },
  1280: {
    slidesPerView: 5,
    slidesPerGroup: 5,
  },
  1536: {
    slidesPerView: 5,
    slidesPerGroup: 5,
  },
};
const ScrollView: ComponentType<IProps> = ({ items, swiperRef }) => {
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
            <SwiperSlide key={i.trackId}>
              <CardItem
                key={i.trackId}
                id={i.trackId}
                heading={i.trackName}
                image={i.artworkUrl600}
                altTitle={i.trackName}
                subheading={i.collectionName}
                hue={i.hue}
                type={i.kind}
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
