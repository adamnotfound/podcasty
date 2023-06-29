import React from "react";
import SectionHeader from "./SectionHeader";
import SwiperCore from "swiper";
import { Episode, Podcast } from "@/types/types";
import GridView from "../Views/GridView";
import ScrollView from "../Views/ScrollView";

interface SectionProps {
  title?: string;
  items: (Podcast | Episode)[];
  initialView?: string;
}

const SectionView = ({ title, items, initialView }: SectionProps) => {
  const _swiperRef = React.useRef<SwiperCore>();
  const [view, setView] = React.useState(initialView ? initialView : "Grid");
  const getView = () => {
    switch (view) {
      case "Grid":
        return <GridView items={items} />;
      case "Scroll":
        return <ScrollView items={items} swiperRef={_swiperRef} />;
      default:
        break;
    }
  };
  return (
    <>
      {title && (
        <SectionHeader
          title={title}
          navigation={view === "Scroll" ? true : false}
          swiperRef={_swiperRef}
          currentView={view}
          changeView={setView}
        />
      )}
      {getView()}
    </>
  );
};

export default SectionView;
