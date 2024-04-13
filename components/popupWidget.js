import React from "react";
import Link from "next/link";

const PopupWidget = () => {
  return (
    <div>
      <>
        <Link href="#">
          <a
            style={{ color: "#fff" }}
            className="fixed z-40 flex items-center text-white hover:text-white justify-center transition duration-300 bg-amber-500 rounded-full shadow-lg right-5 bottom-5 w-14 h-14 focus:outline-none hover:bg-slate-950"
          >
            TOP
          </a>
        </Link>
      </>
    </div>
  );
};

export default PopupWidget;
