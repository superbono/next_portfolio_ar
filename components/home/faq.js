import React, { useState } from "react";

export default function FAQ() {
  const [openItemIndex, setOpenItemIndex] = useState(null);

  const handleItemClick = (index) => {
    setOpenItemIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <section className="sm:py-16 lg:py-20 min-h-full pt-36" id="faq">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
            Question ❕
          </h2>
          {/* <p className="max-w-xl mx-auto mt-4 text-base leading-relaxed text-gray-600">
            간단한 질의응답 페이지입니다.
          </p> */}
        </div>

        <div className="max-w-3xl mx-auto mt-8 space-y-4 md:mt-10">
          {[0, 1, 2, 3].map((index) => (
            <div
              key={index}
              className="transition-all rounded-xl duration-200 bg-white dark:bg-transparent border border-gray-200 shadow-lg dark:shadow-lg cursor-pointer hover:bg-gray-50"
            >
              <button
                type="button"
                className="flex items-center justify-between text-xs md:text-sm lg:text-lg w-full px-4 py-5 sm:p-6"
                onClick={() => handleItemClick(index)}
              >
                <span className="flex text-md font-medium text-black dark:text-white">
                  {index === openItemIndex ? "-" : "+"}{" "}
                  {index === 0 && "포트폴리오는 어떤 기술로 만들었나요?"}
                  {index === 1 && "개발자가 되고 싶었던 이유는 무엇인가요?"}
                  {index === 2 && "자신의 장·단점은 무엇인가요?"}
                  {index === 3 && "어떤 개발자가 되고 싶나요?"}
                </span>
                <svg
                  className={`w-6 h-6 text-gray-400 transform ${
                    index === openItemIndex ? "rotate-180" : ""
                  }`}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              <div
                className={`${
                  index === openItemIndex ? "" : "hidden"
                } px-4 pb-5 sm:px-6 sm:pb-6 text-xs md:text-sm lg:text-sm`}
              >
                <p>
                  {/* {index === openItemIndex ? "-" : "+"}{" "} */}
                  {index === 0 &&
                    "• 해당 포트폴리오는 JavaScript기반 React / Next / TypeScript기반으로 설계하였고 HTML와 CSS 프레임워크 Tailwind로 마크업과 스타일을 코드로 작성하고 UI를 보완하기 위해 lottie, slick, aos 등 라이브러리를 사용하였습니다. 버전관리는 git을 이용하였습니다. 반응형 같은 경우, 모바일, 태블릿, 데스크탑 대응하고 있고 사용자 개선(UX)을 위해 라이트/다크 모드를 적용하였습니다. 프론트엔드(웹사이트) 호스팅 플랫폼 Vercel을 이용하여 배포, 배포 자동화, 빌드, 호스팅을 진행하였습니다."}
                  {index === 1 &&
                    "• 개발자가 되고 싶었던 이유는 클라이언트 사용자가 웹 애플리케이션을 이용할 때 어떻게 개선하면 좋을지에 대한 이유가 가장 컸습니다. 개발자 직군 중에서도 프론트엔드 개발자로서 커리어를 쌓아가고 있는 이유도 연장선상에서 말씀드릴 수 있는데 사용자 개선 기반으로 창의적인 UI/UX를 구현할 수 있는 부분과 새로운 프레임워크, 라이브러리, 도구 등을 학습하고 적용함으로써 끊임없는 도전과 성장을 경험할 수 있는 부분도 매력적으로 느꼈습니다. 이전에 경험했던 디자인 및 기획적인 역량을 커뮤니케이션 시에 녹여내어 협업을 진행하는 데에 있어서도 개인적인 자극과 새로운 아이디어를 체감하고 반영하는 데에 있어 매력을 느끼고 있어 현재까지도 직무에 만족하며 커리어를 쌓고 있습니다."}
                  {index === 2 &&
                    "• 꼼꼼한 성격과 관찰력이라고 생각합니다. 다소 평범할 수 있지만, 저에게는 평범하지 않은 것이었습니다. 중·고등학교 때부터 꼼꼼한 성격을 인정받아 서기를 도맡아서 담당하였고, 성인이 되었을 때에는 대외활동에서 다양한 일을 진행했습니다. 프리랜서로 활동했던 시기에는 다양한 아이디어로 작품활동, 디자인작업을 진행하였는데 풍부한 관찰력으로 다양한 곳에서 인정받았고, 거기서 안주하지 않고 성장하기 위해 꾸준히 노력하고 있습니다."}
                  {index === 3 &&
                    "• 저는 사용자 경험을 개선하고 새로운 기술을 탐구하며 창의적으로 문제를 해결할 수 있는 창의적인 프론트엔드 개발자가 되고 싶습니다. 프론트엔드 개발은 사용자와 직접적으로 상호 작용하며 웹 애플리케이션의 외관과 동작을 정의하는 중요한 역할을 합니다. 이를 통해 사용자들에게 뛰어난 사용자 경험을 제공하고 기술적으로 흥미로운 문제를 해결할 수 있습니다. 또한, 프론트엔드 개발은 끊임없이 발전하고 있는 분야입니다. 새로운 기술과 도구를 학습하고 적용하는 과정에서 끊임없는 도전과 성장을 경험할 수 있습니다. 이러한 과정을 통해 자기 개발을 이루고 커리어를 발전시킬 수 있습니다. 더불어, 프론트엔드 개발자로서 다양한 분야와의 협업이 가능합니다. 디자이너, 백엔드 개발자, 제품 관리자 등과의 협업을 통해 팀의 목표를 달성하고 사용자들에게 가치 있는 제품을 제공할 수 있습니다. 종합하면, 저는 사용자 중심의 프론트엔드 개발자로서 사용자 경험을 개선하고 기술적인 도전에 뛰어들며 협업을 통해 팀의 성과를 이루는 개발자가 되고 싶습니다."}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* <p className="pb-8 text-xs md:text-sm sm:text-sm lg:text-base text-center text-gray-600 textbase mt-9 font-semibold">
          더 자세한 내용을 알고 싶으세요?
          <a
            href="https://forest-ermine-7eb.notion.site/R-E-S-U-M-E-10649d7b7623429f9eb03c1a6088c99e"
            target="_blank"
            title=""
            className="dark:hover:text-yellow-300 dark:text-gray-400 pl-2 font-medium text-blue-600 transition-all duration-200 hover:text-blue-700 focus:text-blue-700 hover:underline"
            rel="noreferrer"
          >
            자세한 내용 보러가기
          </a>
        </p> */}
      </div>
    </section>
  );
}
