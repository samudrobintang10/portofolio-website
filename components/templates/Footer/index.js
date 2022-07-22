import Image from "next/image";
import BintangEmail from "/public/images/bintang_email.svg";
import BintangTwitter from "/public/images/bintang_twitter.svg";
import BintangInstagram from "/public/images/bintang_instagram.svg";
import BintangLinkedin from "/public/images/bintang_linkedin.svg";
import Link from "next/link";

export default function Footer() {
  return (
    <div className="pt-6 pb-2 lg:py-10 bg-primary-brown border-t-[1px] border-black">
      <div className="grid lg:flex container-page lg:justify-between lg:flex-row-reverse gap-y-3 items-center justify-center">
        <div className="social-media flex gap-x-4">
          <Link href={"https://twitter.com/samudro_bintang"} passHref>
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center"
            >
              <Image src={BintangTwitter} />
            </a>
          </Link>
          <Link href={"https://www.instagram.com/bintang_samudro/"} passHref>
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center"
            >
              <Image src={BintangInstagram} />
            </a>
          </Link>
          <Link href={"https://www.linkedin.com/in/bintang-samudro/"} passHref>
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center"
            >
              <Image src={BintangLinkedin} />
            </a>
          </Link>
          <Link href={"mailto: samudrobintang10@gmail.com"} passHref>
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center"
            >
              <Image src={BintangEmail} />
            </a>
          </Link>
        </div>
        <p className=" font-pangolin text-xs lg:text-base text-black font-normal text-center">
          @ 2022 Bintang Samudro
        </p>
      </div>
    </div>
  );
}
