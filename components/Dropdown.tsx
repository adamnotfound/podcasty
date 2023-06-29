import React, { useState } from "react";
import { ListIcon } from "./Icons";
interface Props {
  className?: string;
  children: any;
  show: boolean;
  setShow: Function;
}

function DropdownMenu({ className, children, show, setShow }: Props) {
  return (
    <div className={`relative z-50 ${className}`}>
      <div className="w-2 text-lg" onClick={(e) => setShow(!show)}>
        <ListIcon />
      </div>
      {show && (
        <div
          className="fixed inset-0 z-30"
          onClick={(e) => setShow(false)}
        ></div>
      )}
      <div
        className={`absolute right-0 z-50 text-white w-60 bg-gradient-to-r from-[#404080] to-[#6b4080] rounded-lg shadow-xl ${
          show ? "" : "hidden"
        }`}
      >
        {children}
      </div>
    </div>
  );
}

export default DropdownMenu;
