import Image from "next/image";
import React from "react";
import MakeNavIcon from "../common/MakeNavIcon";

type Props = {};

export default function Nav({}: Props) {
  return (
    <nav className="">
      <div className="xl:bg-white xl:rounded-[24px] xl:h-[calc(100vh-40px-40px)] flex flex-col xl:items-center xl:justify-between xl:w-[100px] xl:py-[31px]">
        <div className="hidden xl:block">
          <Image
            alt="icon"
            width={73}
            height={73}
            src={"/assets/icons/icon.svg"}
            className="cursor-pointer"
          />
        </div>
        {/* logo */}
        <div className="flex flex-row justify-evenly xl:flex-col gap-[27px]">
          <MakeNavIcon>
            <Image
              alt="icon"
              width={20}
              height={20}
              src={"/assets/icons/home.svg"}
            />
          </MakeNavIcon>

          <MakeNavIcon>
            <Image
              alt="icon"
              width={20}
              height={20}
              src={"/assets/icons/more.svg"}
            />
          </MakeNavIcon>

          <MakeNavIcon>
            <Image
              alt="icon"
              width={20}
              height={20}
              src={"/assets/icons/idea.svg"}
            />
          </MakeNavIcon>

          <MakeNavIcon>
            <Image
              alt="icon"
              width={20}
              height={20}
              src={"/assets/icons/save.svg"}
            />
          </MakeNavIcon>

          <MakeNavIcon className={'hidden xl:flex'}>
            <Image
              alt="icon"
              width={20}
              height={20}
              src={"/assets/icons/plusIcon.svg"}
            />
          </MakeNavIcon>

          <MakeNavIcon className={'hidden xl:flex'}>
            <Image
              alt="icon"
              width={20}
              height={20}
              src={"/assets/icons/chat.svg"}
            />
          </MakeNavIcon>

          <MakeNavIcon>
            <Image
              alt="icon"
              width={20}
              height={20}
              src={"/assets/icons/read.svg"}
            />
          </MakeNavIcon>
        </div>
        {/* menu */}
        <div className="hidden xl:flex w-[57px] h-[56px] rounded-[10px] bg-[#1FA45B] shadow-[0_4px_20px_0px_rgba(31,164,91,0.22)]  justify-center items-center">
          <Image
            alt="icon"
            width={24}
            height={24}
            src={"/assets/icons/donate.svg"}
            className="cursor-pointer"
          />
        </div>
        {/* donate */}
      </div>
    </nav>
  );
}
