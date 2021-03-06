import logoSmallDark from "/public/images/bintang-small-dark.svg";
import logoBigDark from "/public/images/bintang-big-dark.svg";
import Image from "next/image";
import Sidebar from "../../elements/Sidebar";

export default function MainHeader() {
  return (
    <div className="mainHeader container-page py-6 flex justify-between items-center lg:mb-16 mb-2">
      <div className="logo relative">
        <div className="lg:hidden grid items-center">
          <Image
            src={logoSmallDark}
            width={35}
            height={35}
            alt="bintang-logo"
          />
        </div>
        <div className="hidden lg:grid items-center">
          <Image src={logoBigDark} alt="bintang-logo" />
        </div>
      </div>
      <div className="menu">
        <Sidebar />
        <div className="hidden lg:flex lg:gap-x-5">
          <p className="text-lg text-primary-main font-nunito font-medium">
            Home
          </p>
          <p className="text-lg text-primary-main font-nunito font-medium">
            About Me
          </p>
          <p className="text-lg text-primary-main font-nunito font-medium">
            My Things
          </p>
          <p className="text-lg text-primary-main font-nunito font-medium">
            Contact Me
          </p>
        </div>
      </div>
    </div>
  );
}
