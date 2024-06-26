import DefaultLayout from "../layout";
import Head from "next/head";
import Image from "next/image";
import MoodLogo from "../public/projects/mood_logo.png";
import Mood from "../public/projects/mood.png";

export default function PersnalProject() {
  return (
    <DefaultLayout>
      <Head>
        <title>PERSNAL PROJECT</title>
        <meta
          name="Persnal Project Page"
          content="포트폴리오 개인프로젝트 페이지입니다."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className="text-gray-600 body-font  min-h-screen">
        <div className="container px-5 py-24 mx-auto flex flex-col">
          <div className="lg:w-4/6 mx-auto">
            <div className="rounded-lg h-100 overflow-hidden">
              <Image
                className="rounded-t-xl"
                src={Mood}
                alt="cover image"
                width="100%"
                height="70%"
                layout="responsive"
                objectFit="cover"
                quality={100}
              />
            </div>
            <div className="flex flex-col sm:flex-row mt-10">
              <div className="sm:w-1/3 text-center sm:pr-8 sm:py-8">
                <div className=" rounded-full inline-flex items-center justify-center  text-gray-400">
                  <Image alt="logo" src={MoodLogo} width={250} height={80} />
                </div>
                <div className="flex flex-col items-center text-center justify-center">
                  <h2 className="font-medium title-font mt-4 text-gray-900 text-lg">
                    오늘 하루 나의 감정일기
                  </h2>
                  <div className="w-12 h-1 bg-emerald-500 rounded mt-2 mb-4 hover:bg-emerald-700"></div>
                </div>
              </div>
              <div className="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
                <p className="leading-relaxed text-sm mb-1">
                  # 소개: 오늘 하루 고생한 나의 감정을 기록하는 다이어리 서비스
                </p>
                <p className="leading-relaxed text-sm mb-1">
                  # 환경: 모바일에 최적화되어 있으며 추후 웹 관련
                  작업예정입니다.
                </p>
                <p className="leading-relaxed text-sm mb-1">
                  # 기획 - 분석 - 설계 - 개발 - 배포 단계를 거쳐 작업을
                  진행하였습니다.
                </p>
                <p className="leading-relaxed text-sm mb-1 font-bold">
                  # 기술스택: Vscode / React.js / TypeScript / Firebase
                </p>
                <a
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
                    href="https://docs.google.com/presentation/d/1g1kD6nH4oJnaJFULEEkZyLXJRpvz5y33/edit#slide=id.p1"
                    target="_blank"
                    rel="noreferrer"
                  >
                    기획서 보러가기
                  </a>
                </a>
                <br />
                <a
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
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <section classNameName="text-gray-600 body-font min-h-screen">
        <div classNameName="container px-5 py-24 mx-auto flex flex-wrap">
          <h2 classNameName="sm:text-3xl text-2xl text-gray-900 font-medium title-font mb-2 md:w-2/5">
            오늘 하루 고생한 나의 감정을 기록하다 <br />
            <span classNameName="flex flex-row justify-end">
              <Image src={Mood} alt="mood-logo" width={300} height={100} />
            </span>
          </h2>
          <div classNameName="md:w-3/5 md:pl-6">
            <p
              classNameName="leading-relaxed text-base"
              style={{ fontSize: "18px" }}
            >
              # 소개: 오늘 하루 고생한 나의 감정을 기록하는 다이어리 서비스
            </p>
            <p
              classNameName="leading-relaxed text-base"
              style={{ fontSize: "18px" }}
            >
              # 환경: 모바일에 최적화되어 있으며 추후 웹 관련 작업예정입니다.
            </p>
            <p
              classNameName="leading-relaxed text-base"
              style={{ fontSize: "18px" }}
            >
              # 기획 - 분석 - 설계 - 개발 - 배포 단계를 거쳐 작업을
              진행하였습니다.
            </p>
            <p
              classNameName="leading-relaxed text-base"
              style={{ fontSize: "18px" }}
            >
              # 기술스택: Vscode / React.js / TypeScript / Firebase
            </p>
            <p
              classNameName="leading-relaxed text-base"
              style={{ fontSize: "18px" }}
            >
              # 운영: 주변 지인들에게 공유하고 피드백받으며 좀 더 나은 UI/UX
              작업을 진행중입니다.
            </p>
          </div>
        </div>
      </section> */}
    </DefaultLayout>
  );
}
