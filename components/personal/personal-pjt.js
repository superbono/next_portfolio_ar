import React from "react";
import MoodLogo from "../../public/projects/mood_logo.png";
import Mood from "../../public/projects/mood.png";
import Image from "next/image";

export default function PersonalPjt() {
  return (
    <section className="text-gray-600 body-font  min-h-screen">
      <div className="container px-5 py-8 mx-auto flex flex-col">
        <div className="lg:w-4/6 mx-auto">
          <div className="sm:w-full text-center sm:pr-1 sm:py-8">
            {/* <div className=" rounded-full inline-flex items-center justify-center  text-gray-400">
                <Image alt="logo" src={MoodLogo} width={250} height={80} />
              </div> */}
            <div className="flex flex-col items-center text-center justify-center">
              <h2 className="font-medium title-font mb-4 mt-0 text-gray-900 sm:text-xl md:text-2xl lg:text-3xl xl:text-3xl">
                오늘 하루 나의 감정일기 💌
              </h2>
              {/* <div className="w-12 h-1 bg-emerald-500 rounded mt-2 mb-4 hover:bg-emerald-700"></div> */}
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
          <div className="flex flex-col sm:flex-row mt-0">
            <div className="sm:w-full sm:pl-8 sm:py-8 sm:border-t-0  mt-4 pt-4 sm:mt-0 text-center sm:text-left ">
              <p className="leading-relaxed text-sm mb-1">
                # 오늘 하루 고생한 나의 감정을 기록하는 다이어리
              </p>
              <p className="leading-relaxed text-sm mb-1">
                # 모바일에 최적화되어 있으며 추후 웹 관련 작업예정
              </p>
              <p className="leading-relaxed text-sm mb-1">
                # 기획-분석-설계-개발-배포 단계를 거쳐 작업을 진행
              </p>
              <p className="leading-relaxed mb-1 font-bold text-sm">
                # 기술스택: React.js & TypeScript & FireBase
              </p>
            </div>
          </div>
          <div className="flex justify-center items-center gap-2 flex-col md:flex-row mt-10">
            <a
              href="https://mood-diary-choiar.web.app/"
              target="_blank"
              rel="noreferrer"
            >
              <span className="text-white bg-emerald-400 border-0 w-full px-14 focus:outline-none hover:bg-emerald-600 rounded text-base py-3">
                프로젝트 보러가기
              </span>
            </a>
            <br />
            <a
              href="https://docs.google.com/presentation/d/1g1kD6nH4oJnaJFULEEkZyLXJRpvz5y33/edit#slide=id.p1"
              target="_blank"
              rel="noreferrer"
            >
              <span className="text-white bg-teal-500 border-0 w-full px-16 focus:outline-none hover:bg-teal-700 rounded text-base py-3">
                기획서 보러가기
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
