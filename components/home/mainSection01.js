// import MainLottie from "../lotties/MainLottie";
import Link from "next/link";
import Lottie from "react-lottie-player";
import lottieJson from "/public/animation.json";

export default function MainSecion01() {
  return (
    <>
      <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
        <div className=" mb-2 font-medium text-gray-900">
          <h1 className="title-font sm:text-4xl text-3xl">HELLO!</h1>
          <br className="hidden lg:inline-block" />
          <h2 style={{ fontSize: "20px" }}>프론트엔드 개발자 최아리입니다.</h2>
        </div>
        <p className="mb-3 leading-relaxed" style={{ fontSize: "14px" }}>
          지난 5년 6개월 동안 리즌디자인과 후이즈시스템등 프론트엔드 책임
          연구원과 선임 연구원으로 활동하였습니다. 프론트엔드 팀에서의 경험을
          통해 웹 개발 및 디자인 시스템 구축을 주도하며 업무를 성공적으로
          이행하였습니다. 프론트엔드 개발자로써 다양한 프로젝트를 경험하며 더
          나은 사용자 경험을 위해 최선을 다하고 있습니다. 프론트엔드 분야에서 더
          많은 성장을 이루고, 혁신적인 솔루션을 만들어내는 일에 보람을 느끼고
          노력하고 있습니다.
        </p>
        <div className="flex justify-center mt-4">
          <Link href="/projects">
            <a className="btn-project inline-flex text-white border-0 py-2 px-6 focus:outline-none hover:text-white rounded text-lg">
              프로젝트 보러가기
            </a>
          </Link>
          {/* <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">
                  Button
                </button> */}
        </div>
      </div>
      {/* <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6"> */}
      {/* <MainLottie /> */}
      <Lottie
        loop
        animationData={lottieJson}
        play
        style={{ width: 270, height: 270 }}
      />
      {/* </div> */}
    </>
  );
}
