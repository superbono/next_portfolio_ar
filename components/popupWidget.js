import React from "react";
import Link from "next/link";

const PopupWidget = () => {
  return (
    <div>
      <>
        <Link href="#">
          <a
            style={{ color: "#fff" }}
            className="fixed z-40 flex items-center text-white hover:text-white justify-center transition duration-300 bg-amber-500 rounded-full shadow-lg right-5 bottom-5 w-14 h-14 focus:outline-none hover:bg-amber-600 dark:bg-slate-800"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m4.5 15.75 7.5-7.5 7.5 7.5"
              />
            </svg>
          </a>
        </Link>
      </>
    </div>
  );
};

export default PopupWidget;
