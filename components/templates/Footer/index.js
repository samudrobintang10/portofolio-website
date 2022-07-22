import Image from "next/image";
import BintangEmail from "/public/images/bintang_email.svg";
import BintangTwitter from "/public/images/bintang_twitter.svg";
import BintangInstagram from "/public/images/bintang_instagram.svg";
import BintangLinkedin from "/public/images/bintang_linkedin.svg";

export default function Footer() {
  return (
    <div className="pt-6 pb-2 lg:py-10 bg-primary-brown border-t-[1px] border-black">
      <div className="grid lg:flex container-page lg:justify-between lg:flex-row-reverse gap-y-3 items-center justify-center">
        <div className="social-media flex gap-x-4">
          <Image src={BintangTwitter} />
          <Image src={BintangInstagram} />
          <Image src={BintangLinkedin} />
          <Image src={BintangEmail} />
        </div>
        <p className=" font-pangolin text-xs lg:text-base text-black font-normal text-center">
          @ 2022 Bintang Samudro
        </p>
      </div>
    </div>
  );
}
