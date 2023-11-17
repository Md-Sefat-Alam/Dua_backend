import { useSearchParams } from "next/navigation";
import Duas from "./Duas";

type Props = {};

export default async function DuaView({  }: Props) {

  return (
    <div
      id="scrollDua"
      className="w-full delay-1000 transition duration-1000 ease-linear font-[Inter] h-[calc(100vh-40px-80px)] overflow-x-auto scrollbar-thin"
    >
      {/* <div>
        <div className="bg-[#ebeef2] dark:bg-[#122337] z-[2] w-full flex-row py-5 items-center justify-between hidden xs:flex sm:flex">
          <div className="flex flex-row items-center">
            <img
              src="/assets/mobile/home/back.svg"
              className="h-4 cursor-pointer"
              alt=""
            />
            <p className=" text-[16px] text-lg ml-4 text-center dark:text-dark-text">
              Duas Page
            </p>
          </div>
          <img
            src="/assets/tab/home/settings.svg"
            className="cursor-pointer "
            alt=""
          />
        </div>
        <div className="flex flex-row justify-between mb-5 px-5 py-4 bg-white rounded-2lg items-center cursor-pointer dark:bg-dark-bg lg-min:hidden">
          <p className="flex gap-x-2  text-[16px] font-medium leading-[25px] dark:text-dark-text text-mss ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
            Dua's importance
          </p>
        </div>
      </div> */}
      <Duas />
    </div>
  );
}

