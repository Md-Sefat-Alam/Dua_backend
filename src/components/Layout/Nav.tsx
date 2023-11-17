import Image from "next/image";
import React from "react";
import MakeNavIcon from "../common/MakeNavIcon";

type Props = {};

export default function Nav({}: Props) {
  return (
    <nav className="m-[40px]">
      <div className="bg-white rounded-[24px] h-[calc(100vh-40px-40px)] flex flex-col items-center justify-between w-[100px] py-[31px]">
        <div>
          <Image
            alt="icon"
            width={73}
            height={73}
            src={"/assets/icons/icon.svg"}
            className="cursor-pointer" 
          />
        </div>
        {/* logo */}
        <div className="flex flex-col gap-[27px]">
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

          <MakeNavIcon>
            <Image
              alt="icon"
              width={20}
              height={20}
              src={"/assets/icons/plusIcon.svg"}
            />
          </MakeNavIcon>

          <MakeNavIcon>
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
        <div className="w-[57px] h-[56px] rounded-[10px] bg-[#1FA45B] shadow-[0_4px_20px_0px_rgba(31,164,91,0.22)] flex justify-center items-center">
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
