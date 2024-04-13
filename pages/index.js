import Head from "next/head";
import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import RollingIconCentents from "../components/home/mainSection00";
import DefaultLayout from "../components/layout";
import IntroContent from "../components/home/hero";
import ProjectContentsCareer from "../components/home/sectionTitleCareer";
import PopupWidget from "../components/popupWidget";
import ProjectItem from "../components/projects/project-item";
import { TOKEN, DATABASE_ID } from "../config";
import PersnalProject from "../components/personal/personal-pjt";

export default function Home({ projects }) {
  return (
    <DefaultLayout>
      <Head>
        <title>MAIN</title>
        <meta name="Main Page" content="포트폴리오 메인 페이지입니다." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <IntroContent />
        {/* <MainSection03 /> */}
        {/* <MainSection02 /> */}
        {/* <section className="flex min-h-screen flex-col items-center justify-center text-gray-600 body-font"> */}
        <section
          style={{
            width: "90%",
            margin: "0 auto",
          }}
        >
          <RollingIconCentents />
        </section>
        <div id="projects">
          <ProjectContentsCareer />
          <h1 className="px-8 text-base font-bold md:text-lg lg:text-xl">
            👨‍👦‍👦 COMPANY
          </h1>
          <div className="grid grid-cols-1 gap-8 pt-0 pb-4 pl-4 pr-4 m-4 md:grid-cols-2">
            {projects.results.map((item) => (
              <ProjectItem key={item.id} data={item} />
            ))}
          </div>
          <h1 className="px-14 text-base mt-20 font-bold">👦🏻 PERSANL</h1>
          <PersnalProject />
        </div>
        {/* <section className="flex  flex-col items-center justify-center text-gray-600 body-font">
          <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
            <MainSection01 />
          </div>
        </section> */}
        {/* <Benefits data={benefitOne} /> */}
      </main>
      <PopupWidget />
    </DefaultLayout>
  );
}

export async function getServerSideProps() {
  const options = {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Notion-Version": "2022-02-22",
      "Content-Type": "application/json",
      Authorization: `Bearer ${TOKEN}`,
    },
    body: JSON.stringify({
      sorts: [
        {
          property: "No",
          direction: "ascending",
        },
      ],
      page_size: 100,
    }),
  };

  const res = await fetch(
    `https://api.notion.com/v1/databases/${DATABASE_ID}/query`,
    options
  );
  const projects = await res.json();
  const projectNames = projects.results.map(
    (item) => item.properties.No.rich_text[0].plain_text
  );
  // console.log(`projectNames : ${projectNames}`);
  return {
    props: { projects }, // will be passed to the page component as props
    // getStaticProps() 메소드를 사용한다면 revalidate 로 데이터 변경시 갱신가능!
    // revalidate: 1 // 데이터 변경이 있으면 갱신 1초 마다
  };
}
