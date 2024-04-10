import MainLottie from "../lotties/MainLottie";

export default function MainSecion01() {
  return (
    <>
      <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
          안녕하세요.
          <br className="hidden lg:inline-block" />
          개발자 CHOI입니다.
        </h1>
        <p className="mb-8 leading-relaxed">
          하다겐드탄고조차 려우의 호뻰에서 거은코오저가 아연가긋료쵠다. 깅산
          더시캔근으로 브되는 싱슥중덩는데, 나야다 에꾜인 거민. 자잴사밴가
          녀에나매는 순젠 삽으아눗이, 아넹비샵을, 온스한아의 고누질마다 옴찬응은
          들알유계는 락으가 힌검. 터어의
        </p>
        <div className="flex justify-center">
          <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
            프로젝트 보러가기
          </button>
          {/* <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">
                  Button
                </button> */}
        </div>
      </div>
      {/* <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6"> */}
      <MainLottie />
      {/* </div> */}
    </>
  );
}
