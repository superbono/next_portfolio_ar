import Lottie from "react-lottie-player";
import lottieJson from "/public/animation.json";

export default function MainLottie() {
  return (
    <Lottie
      loop
      animationData={lottieJson}
      play
      style={{ width: 270, height: 270 }}
    />
  );
}
