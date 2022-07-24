import { SwipeableDrawer } from "@mui/material";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import logoSmallLight from "/public/images/bintang-small-light.svg";
import BintangEmail from "/public/images/bintang_email.svg";
import BintangTwitter from "/public/images/bintang_twitter.svg";
import BintangInstagram from "/public/images/bintang_instagram.svg";
import BintangLinkedin from "/public/images/bintang_linkedin.svg";
import Link from "next/link";

export default function Sidebar() {
  const [openSidebar, setOpenSidebar] = useState(false);
  const toggleSidebar = (open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setOpenSidebar(open);
  };

  return (
    <div className="sidebar">
      <div className="lg:hidden">
        <FontAwesomeIcon
          icon={faBars}
          className=" text-2xl px-2"
          onClick={toggleSidebar(true)}
        />
      </div>
      <SwipeableDrawer
        anchor="left"
        open={openSidebar}
        onClose={toggleSidebar(false)}
        onOpen={toggleSidebar(true)}
        PaperProps={{
          sx: { width: "70%" },
          style: { backgroundColor: "transparent" },
          elevation: 0,
        }}
      >
        <div className="container-page py-6 bg-primary-main h-full rounded-tr-[24px]">
          <div className="grid gap-y-12">
            <div className="lg:hidden flex items-center justify-between">
              <Image
                src={logoSmallLight}
                width={35}
                height={35}
                alt="bintang-logo"
              />
              <FontAwesomeIcon
                icon={faTimes}
                className="text-3xl text-primary-light"
                onClick={toggleSidebar(false)}
              />
            </div>
            <div className="menu grid gap-y-6">
              <h3 className="font-bebasNeue font-normal text-5xl text-primary-light lg:text-center">
                HOME
              </h3>
              <h3 className="font-bebasNeue font-normal text-5xl text-primary-light lg:text-center">
                ABOUT ME
              </h3>
              <h3 className="font-bebasNeue font-normal text-5xl text-primary-light lg:text-center">
                MY THINGS
              </h3>
              <h3 className="font-bebasNeue font-normal text-5xl text-primary-light lg:text-center">
                CONTACT ME
              </h3>
            </div>
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
              <Link
                href={"https://www.instagram.com/bintang_samudro/"}
                passHref
              >
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center"
                >
                  <Image src={BintangInstagram} />
                </a>
              </Link>
              <Link
                href={"https://www.linkedin.com/in/bintang-samudro/"}
                passHref
              >
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
          </div>
        </div>
      </SwipeableDrawer>
    </div>
  );
}
