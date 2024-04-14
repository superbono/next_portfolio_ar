import style from "./404.module.css";
import Head from "next/head";
import Link from "next/link";
import Lottie from "react-lottie-player";
import lottieJson from "../public/404.json";

export default function NotFoundPage() {
  return (
    <section className={style.page_404}>
      <Head>
        <title>에러페이지</title>
        <meta name="Main Page" content="에러페이지입니다." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <div className="row">
          <div className="col-sm-12 ">
            <div className="col-sm-10 col-sm-offset-1  text-center">
              {/* <div className={style.four_zero_four_bg}>
                <h1 style={{ fontSize: "80px" }} className="text-center ">
                  404
                </h1>
              </div> */}
              <div className="contant_box_404">
                <Lottie
                  loop
                  animationData={lottieJson}
                  play
                  style={{ with: "500px", height: "350px" }}
                />
                {/* <h1 style={{ fontSize: "80px" }} className="text-center ">
                  404
                </h1>
                <h3 style={{ fontSize: "25px" }} className="h2">
                  페이지를 찾을 수 없습니다.
                </h3> */}

                <Link href="/">
                  <a
                    className={`text-white hover:text-white px-20 py-3 md:px-40 md:py-4 bg-gray-900 text-xs mt-4 md:mt-32 inline-block ${style.font}`}
                    style={{ borderRadius: "30px" }}
                  >
                    H O M E
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
