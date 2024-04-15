import React from "react";
import Container from "./container";

const SectionTitle = (props) => {
  return (
    <Container
      className={`flex w-full flex-col mt-8 ${
        props.align === "left" ? "" : "items-center justify-center text-center"
      }`}
    >
      <h5 className="font-bold text-lg mt-28 sm:text-xl md:text-2xl lg:text-3xl xl:text-3xl">
        H I S T O R Y 😀
        <span className="pl-4 text-emerald-500">
          {/* {projects.results.length} 건 */}
          (5년 6개월)
          <a
            href="https://forest-ermine-7eb.notion.site/C-A-R-E-E-R-H-I-S-T-O-R-Y-bf4438c00087450ea36a1657b66b98ba?pvs=4"
            target="_blank"
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              gap: "10px",
              marginTop: "10px",
              cursor: "pointer",
            }}
            rel="noreferrer"
          >
            {/* <svg
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
                d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
              />
            </svg> */}
            <span className="text-white font-medium bg-emerald-400 border-0 w-full px-6 focus:outline-none hover:bg-emerald-600 rounded text-base py-3">
              상세내용 보러가기
            </span>
            {/* <span className="sm:text-base md:text-lg lg:text-1xl xl:text-2xl">
              상세내용 보러가기
            </span> */}
          </a>
        </span>
      </h5>
    </Container>
  );
};

export default SectionTitle;
