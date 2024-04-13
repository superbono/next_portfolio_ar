import React from "react";
import Container from "./container";

const SectionTitle = (props) => {
  return (
    <Container
      className={`flex w-full flex-col mt-4 ${
        props.align === "left" ? "" : "items-center justify-center text-center"
      }`}
    >
      <h5 className="font-bold  mt-10 sm:text-base md:text-2xl lg:text-3xl xl:text-3xl">
        D E V E L O P E R H I S T O R Y 😀
        <span className="pl-4 text-blue-400">
          {/* {projects.results.length} 건 */}
          (5년 6개월)
          <a
            href="https://forest-ermine-7eb.notion.site/R-E-S-U-M-E-10649d7b7623429f9eb03c1a6088c99e"
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
                d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
              />
            </svg>
            <span className="sm:text-base md:text-lg lg:text-1xl xl:text-2xl">
              상세 보러가기
            </span>
          </a>
        </span>
      </h5>
    </Container>
  );
};

export default SectionTitle;
