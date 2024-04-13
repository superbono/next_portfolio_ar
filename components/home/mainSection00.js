import React from "react";
import Slider from "react-slick";
import Image from "next/image";
import htmlSrc from "../../public/icons/html.png";
import cssSrc from "../../public/icons/css.png";
import jsSrc from "../../public/icons/js.png";
import reactSrc from "../../public/icons/react.png";
import nextSrc from "../../public/icons/next.png";
import vueSrc from "../../public/icons/vue.png";
import nuxtSrc from "../../public/icons/nuxt.png";
import twSrc from "../../public/icons/tailwind.png";
import sassSrc from "../../public/icons/sass.png";
import storybookSrc from "../../public/icons/storybook.png";
import githubSrc from "../../public/icons/github.png";
import quasarSrc from "../../public/icons/quasar.png";
import vsSrc from "../../public/icons/vscode.png";
import DetailStack from "./detailStack";

export default function mainSection00() {
  const settings = {
    dots: false,
    className: "center",
    infinite: true,
    centerPadding: "20px",
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    slidesToShow: 10,
    swipeToSlide: true,
    afterChange: function (index) {
      // console.log(
      //   `Slider Changed to: ${index + 1}, background: #222; color: #bada55`
      // );
    },
  };
  return (
    <div id="rolling" className="slider-container pt-10 pb-20 ">
      <h1
        style={{ textAlign: "center" }}
        className="font-bold mb-10 mt-10   md:text-base lg:text-3xl xl:text-3xl"
      >
        프론트엔드 개발시에 사용했던 기술입니다.
      </h1>
      <Slider {...settings}>
        <div>
          <Image src={htmlSrc} alt="htlm" width={50} height={50} />
        </div>
        <div>
          <Image src={cssSrc} alt="css" width={50} height={50} />
        </div>
        <div>
          <Image src={sassSrc} alt="sass" width={50} height={50} />
        </div>
        <div>
          <Image src={twSrc} alt="tailwind" width={50} height={50} />
        </div>
        <div>
          <Image src={jsSrc} alt="js" width={50} height={50} />
        </div>
        <div>
          <Image src={vsSrc} alt="vscode" width={50} height={50} />
        </div>
        <div>
          <Image src={reactSrc} alt="react" width={50} height={50} />
        </div>
        <div>
          <Image src={nextSrc} alt="next" width={50} height={50} />
        </div>
        <div>
          <Image src={vueSrc} alt="vue" width={50} height={50} />
        </div>
        <div>
          <Image src={nuxtSrc} alt="nuxt" width={50} height={50} />
        </div>
        <div>
          <Image src={storybookSrc} alt="storybook" width={50} height={50} />
        </div>
        <div>
          <Image src={githubSrc} alt="github" width={50} height={50} />
        </div>
        <div>
          <Image src={quasarSrc} alt="quasar" width={50} height={50} />
        </div>
      </Slider>
      <DetailStack />
    </div>
  );
}
