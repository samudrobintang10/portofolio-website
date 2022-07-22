import Button from "../../elements/Button";
import Image from "next/image";
import BintangMain from "/public/images/bintang-main.jpg";

export default function Hero() {
  return (
    <div className="hero container-page grid gap-y-6 lg:flex lg:justify-between mb-16 lg:mb-36">
      <div className="cta sm:w-1/2">
        <div className="grid gap-y-1 lg:gap-y-3 mb-4 lg:mb-7">
          <h2 className=" font-pangolin text-[32px] lg:text-5xl font-normal text-black">
            Hello I Am
          </h2>
          <h2 className="font-pangolin text-4xl lg:text-6xl font-normal text-black">
            Bintang Samudro
          </h2>
        </div>
        <p className=" font-nunito font-normal text-xs leading-5 mb-6 lg:text-base">
          Final Year Student at University of Indonesia majoring in Information
          Systems. Adaptive to the new environment and enjoyable to get to know
          new things and are active in exploring new skills.
        </p>
        <Button placeholder="Let's Talk" />
      </div>
      <div className="image-bintang">
        <Image
          src={BintangMain}
          className="rounded-3xl border-8 border-black"
          width={312}
          height={291}
        />
      </div>
    </div>
  );
}
