import React from "react";
import MoodLogo from "../../public/projects/mood_logo.png";
import Mood from "../../public/projects/mood.png";
import Image from "next/image";

export default function PersonalPjt() {
  return (
    <section className="text-gray-600 body-font  min-h-screen">
      <div className="container px-5 py-8 mx-auto flex flex-col">
        <div className="lg:w-4/6 mx-auto">
          <div className="sm:w-1/3 text-center sm:pr-8 sm:py-8">
            {/* <div className=" rounded-full inline-flex items-center justify-center  text-gray-400">
                <Image alt="logo" src={MoodLogo} width={250} height={80} />
              </div> */}
            <div className="flex flex-col items-center text-center justify-center">
              <h2 className="font-medium title-font mt-4 text-gray-900 text-xl">
                오늘 하루 나의 감정일기
              </h2>
              <div className="w-12 h-1 bg-emerald-500 rounded mt-2 mb-4 hover:bg-emerald-700"></div>
            </div>
          </div>
          <div className="rounded-lg h-100 overflow-hidden">
            <Image
              className="rounded-t-xl"
              src={Mood}
              alt="cover image"
              width="100%"
              height="50%"
              layout="responsive"
              objectFit="fill"
              quality={100}
            />
          </div>
          <div className="flex flex-col sm:flex-row mt-10">
            <div className="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
              <p className="leading-relaxed text-sm mb-1">
                # 소개: 오늘 하루 고생한 나의 감정을 기록하는 다이어리 서비스
              </p>
              <p className="leading-relaxed text-sm mb-1">
                # 환경: 모바일에 최적화되어 있으며 추후 웹 관련 작업예정
              </p>
              <p className="leading-relaxed text-sm mb-1">
                # 기획 - 분석 - 설계 - 개발 - 배포 단계를 거쳐 작업을 진행
              </p>
              <p className="leading-relaxed text-sm mb-1 font-bold">
                # 기술스택: Vscode / React.js / TypeScript / Firebase
              </p>
              <a
                href="https://mood-diary-choiar.web.app/"
                target="_blank"
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "10px",
                  marginTop: "30px",
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
                <span className="text-white bg-emerald-400 border-0 w-full px-6 focus:outline-none hover:bg-emerald-600 rounded text-base py-3">
                  프로젝트 보러가기
                </span>
                {/* <span className="sm:text-base md:text-lg lg:text-1xl xl:text-2xl">
              상세내용 보러가기
            </span> */}
              </a>
              <br />
              {/* <a
                className="text-gray-500 inline-flex items-center mt-2"
                style={{ fontSize: "20px" }}
              >
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
                <a
                  className="font-bold"
                  style={{ margin: "0 0 0 15px" }}
                  href="https://mood-diary-choiar.web.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  프로젝트 보러가기
                </a>
              </a> */}
              <a
                href="https://docs.google.com/presentation/d/1g1kD6nH4oJnaJFULEEkZyLXJRpvz5y33/edit#slide=id.p1"
                target="_blank"
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "center",
                  // gap: "10px",
                  // marginTop: "10px",
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
                <span className="text-white bg-teal-500 border-0 w-full px-6 focus:outline-none hover:bg-teal-700 rounded text-base py-3">
                  기획서 보러가기
                </span>
                {/* <span className="sm:text-base md:text-lg lg:text-1xl xl:text-2xl">
              상세내용 보러가기
            </span> */}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
