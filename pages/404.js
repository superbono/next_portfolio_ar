import style from "./404.module.css";
// import Head from "next/head";
import Link from "next/link";

export default function NotFoundPage() {
  return (
    <section className={style.page_404}>
      {/* <Head>
        <Link rel="preconnect" href="https://fonts.googleapis.com" />
        <Link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <Link
          href="https://fonts.googleapis.com/css2?family=Black+Han+Sans&family=Noto+Sans+KR:wght@100..900&display=swap"
          rel="stylesheet"
        />
      </Head> */}
      <div className={style.container} style={{ fontFamily: "Noto Sans KR" }}>
        <div className="row">
          <div className="col-sm-12 ">
            <div className="col-sm-10 col-sm-offset-1  text-center">
              <div className={style.four_zero_four_bg}>
                {/* <h1 style={{ fontSize: "80px" }} className="text-center ">
                  404
                </h1> */}
              </div>

              <div className="contant_box_404">
                <h1 style={{ fontSize: "80px" }} className="text-center ">
                  404
                </h1>
                <h3 style={{ fontSize: "25px" }} className="h2">
                  페이지를 찾을 수 없습니다.
                </h3>
                <Link href="/">
                  <a
                    className={[style.link_404, "hover:bg-green-400"].join(" ")}
                    style={{ borderRadius: "30px" }}
                  >
                    홈으로 이동하기
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
