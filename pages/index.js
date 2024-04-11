import Head from "next/head";
import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import MainSection01 from "../components/home/mainSection01";
import MainSection00 from "../components/home/mainSection00";
import DefaultLayout from "../components/layout";

export default function Home() {
  return (
    <DefaultLayout>
      <Head>
        <title>MAIN</title>
        <meta name="Main Page" content="포트폴리오 메인 페이지입니다." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        {/* <section className="flex min-h-screen flex-col items-center justify-center text-gray-600 body-font"> */}
        <section
          style={{
            width: "74%",
            margin: "0 auto",
          }}
        >
          <MainSection00 />
        </section>
        <section className="flex  flex-col items-center justify-center text-gray-600 body-font">
          <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
            <MainSection01 />
          </div>
        </section>
      </main>
    </DefaultLayout>
  );
}
