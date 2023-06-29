import React from "react";

interface AProps {
  currentView: string;
  changeView: Function;
  closeMenu: Function;
}
const DropdownActions = ({ currentView, changeView, closeMenu }: AProps) => {
  const views = ["Scroll", "Grid"];
  React.useEffect(() => {
    return () => {};
  }, [currentView]);

  function changeLayout(view: string) {
    changeView(view);
    closeMenu();
  }

  return (
    <>
      {views.map((v) => {
        if (currentView !== v)
          return (
            <div
              key={v}
              onClick={() => changeLayout(v)}
              className="font-normal block px-4 py-2 hover:bg-black/[0.15] hover:cursor-pointer rounded m-2 text-sm"
            >
              Switch layout to {v}
            </div>
          );
      })}
    </>
  );
};

export default DropdownActions;
