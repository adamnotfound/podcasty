import React from "react";
import DropdownMenu from "../Dropdown";
import { ListIcon, NavigateBack, NavigateFront } from "../Icons";
import DropdownActions from "./DropdownActions";
interface IProps {
  title: string;
  navigation?: boolean;
  swiperRef?: any;
  className?: string;
  currentView: string;
  changeView: Function;
}

const SectionHeader = ({
  title,
  navigation,
  swiperRef,
  className,
  currentView,
  changeView,
}: IProps) => {
  const [show, setShow] = React.useState(false);
  return (
    <div
      className={`pr-3 container  h-12 mt-2 flex flex-row justify-between border-b border-solid border-[#2e2e33]  ${className}`}
    >
      <h1
        className={`section-header-title mt-1 inline-block font-bold pt-1 pl-4 md:pl-5`}
      >
        {title}
      </h1>
      <div className="flex flex-row text-gray-400 mb-3 text-xs font-bold">
        {navigation && (
          <>
            <div
              className="hover:bg-gray-600 hover:text-white hover:rounded-full h-10 w-10 flex items-center justify-center"
              onClick={() => swiperRef.current?.slidePrev()}
            >
              <NavigateBack />
            </div>
            <div
              className="hover:bg-gray-600 hover:text-white hover:rounded-full h-10 w-10 flex items-center justify-center"
              onClick={() => swiperRef.current?.slideNext()}
            >
              <NavigateFront />
            </div>
          </>
        )}
        <div
          className="text-lg mt-1 mr-4 text-white flex items-center justify-center z-10"
          onClick={() => console.log("Show menu")}
        >
          <DropdownMenu show={show} setShow={setShow}>
            <DropdownActions
              currentView={currentView}
              changeView={changeView}
              closeMenu={() => setShow(false)}
            />
          </DropdownMenu>
        </div>
      </div>
    </div>
  );
};
export default SectionHeader;
