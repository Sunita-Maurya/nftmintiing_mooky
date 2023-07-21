import React, { useState } from "react";
import frame from "/public/assets/images/Frame.png";
// import logo from "../../../public/assets/images/mookylogo.png"
import logo from "/public/assets/images/mookylogo.png";
import { AiOutlineMenu } from "react-icons/ai";
import { GrReddit } from "react-icons/gr";
import { RiInstagramFill } from "react-icons/ri";
import { BsTwitter } from "react-icons/bs";
import { FaTelegramPlane } from "react-icons/fa";
import { BsDiscord } from "react-icons/bs";
import middleImage from "/public/assets/images/Component 3.png";
import Image from "next/image";
import Link from "next/link";
import { ConnectButton } from "@rainbow-me/rainbowkit";

const style = {
  navbarImage: `
    bg-[url('/assets/images/navbar.png')]
    bg-center
    bg-no-repeat
    flex
    justify-center
     pt-5
     py-3
     px-5
    `,
};

function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <>
      {/*------------------------------------------------- Navbar section----------------- */}
      <div className="relative  ">
        <div className={`${style.navbarImage} `}>
          <div className="relative flex md:hidden justify-center  items-center w-full ">
            <div className=" absolute left-0">
              <button
                onClick={() => setOpen(!open)}
                className="text-3xl font-extrabold text-white"
              >
                {/* <AiOutlineMenu /> */}
                {open ? (
                  <img src="/assets/images/close.png" alt="open" />
                ) : (
                  <img src="/assets/images/menuopen.png" alt="open" />
                )}
              </button>
            </div>
            <div className="">
              <a href="https://mooky.io/" target="_blank">
                <Image
                  src={logo}
                  alt="MOOKY"
                  width={200}
                  height={200}
                  className="wiggle "
                />
              </a>
            </div>
          </div>

          {/*------------------------ for desktop and tablets----------------------------- */}

          <div className="md:flex hidden justify-between xl:px-32 w-full container mx-auto">
            <div className="">
              <nav>
                <ul className="flex gap-5 ">
                  <a href="https://twitter.com/MOOKYcoin" target="blank">
                    <li className="icon-item transition duration-500 hover:scale-125">
                      <BsTwitter />
                    </li>
                  </a>
                  <a href="https://t.me/MOOKYTOKEN" target="blank">
                    <li className="icon-item transition duration-500 hover:scale-125">
                      <FaTelegramPlane />
                    </li>
                  </a>
                  <a href="https://www.reddit.com/r/MOOKYcoin/" target="blank">
                    <li className="icon-item transition duration-500 hover:scale-125">
                      <GrReddit />
                    </li>
                  </a>
                  <a
                    href="https://www.instagram.com/mookytroop/"
                    target="blank"
                  >
                    <li className="icon-item   rounded-lg transition duration-500 hover:scale-125 ">
                      <RiInstagramFill />
                    </li>
                  </a>
                  <a
                    href="https://discord.com/invite/xHZQMNztdG"
                    target="blank"
                  >
                    <li className="icon-item   rounded-lg transition duration-500 hover:scale-125 ">
                      <BsDiscord />
                    </li>
                  </a>
                </ul>
              </nav>
            </div>
            <div className=" ">
              <a href="https://mooky.io/" target="_blank">
                <Image
                  src={logo}
                  alt="MOOKY"
                  width={200}
                  height={200}
                  className="wiggle"
                />
              </a>
            </div>
            <div className="text-center">
              <ConnectButton />
            </div>
          </div>
        </div>
        {open ? (
          <div className=" absolute  z-[150] w-full h-[100vh] bg-[#00000088] pt-5 px-5 pb-12 text-right  flex flex-col justify-center items-center md:hidden">
            <ConnectButton />
            <div className="flex   justify-end  mt-2  ">
              <nav>
                <ul className="flex mt-10 gap-4 ">
                  <a
                    href="https://twitter.com/MOOKYcoin"
                    target="blank"
                    className="p-3 bg-[#EC8424] rounded-lg transition duration-500 hover:scale-125"
                  >
                    <li className="icon-item transition duration-500 hover:scale-125">
                      <BsTwitter />
                    </li>
                  </a>
                  <a
                    href="https://t.me/MOOKYTOKEN"
                    target="blank"
                    className="p-3 bg-[#EC8424] rounded-lg transition duration-500 hover:scale-125"
                  >
                    <li className="icon-item transition duration-500 hover:scale-125">
                      <FaTelegramPlane />
                    </li>
                  </a>
                  <a
                    href="https://www.reddit.com/r/MOOKYcoin/"
                    target="blank"
                    className="p-3 bg-[#EC8424] rounded-lg transition duration-500 hover:scale-125"
                  >
                    <li className="icon-item transition duration-500 hover:scale-125">
                      <GrReddit />
                    </li>
                  </a>
                  <a
                    href="https://www.instagram.com/mookytroop/"
                    target="blank"
                    className="p-3 bg-[#EC8424] rounded-lg transition duration-500 hover:scale-125"
                  >
                    <li className="icon-item   rounded-lg transition duration-500 hover:scale-125 ">
                      <RiInstagramFill />
                    </li>
                  </a>
                  <a
                    href="https://discord.com/invite/xHZQMNztdG"
                    target="blank"
                    className="p-3 bg-[#EC8424] rounded-lg transition duration-500 hover:scale-125"
                  >
                    <li className="icon-item   rounded-lg transition duration-500 hover:scale-125 ">
                      <BsDiscord />
                    </li>
                  </a>
                </ul>
              </nav>
            </div>
          </div>
        ) : null}
      </div>
    </>
  );
}

export default Navbar;
