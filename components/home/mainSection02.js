import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function MainSection02() {
  useEffect(() => {
    AOS.init();
  });

  return (
    <section className="flex min-w-screen pt-20 pb-10 justify-center items-center">
      <div
        data-aos="fade-up"
        data-aos-easing="ease-out"
        data-aos-duration="1000"
        data-aos-once="true"
        data-aos-delay="800"
        className="text-bluePoint text-6xl font-bold"
      >
        <span>H E L L O</span>
        <span> W O R L D !</span>
      </div>
    </section>
  );
}
