import Head from "next/head";
import DefaultLayout from "../components/layout";

export default function Project() {
  return (
    <DefaultLayout>
      <Head>
        <title>PROJECT DETAIL</title>
        <meta
          name="Project Detail Page"
          content="포트폴리오 프로젝트 페이지입니다."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h2>Projects</h2>
      </main>
    </DefaultLayout>
  );
}
