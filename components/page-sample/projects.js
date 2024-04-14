import DefaultLayout from "../layout";
import Head from "next/head";
import { TOKEN, DATABASE_ID } from "../../config";
import ProjectItem from "../projects/project-item";

export default function Projects({ projects }) {
  // console.log(projects);

  return (
    <DefaultLayout>
      <div className="flex flex-col items-center justify-center min-h-screen px-3 mb-10">
        <Head>
          <title>PROJECTS</title>
          <meta
            name="Projects Page"
            content="포트폴리오 프로젝트 페이지입니다."
          />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <h5 className="text-2xl font-bold sm:text-3xl mt-20">
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
              <span style={{ fontSize: "18px" }}>상세 보러가기</span>
            </a>
          </span>
        </h5>

        <div className="grid grid-cols-1 gap-8 p-12 m-4 md:grid-cols-2">
          {projects.results.map((item) => (
            <ProjectItem key={item.id} data={item} />
          ))}
        </div>
      </div>
    </DefaultLayout>
  );
}

// 빌드 타임에 호출
// export async function getStaticProps() {

// 각 요청 때마다 호출
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
