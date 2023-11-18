import Image from "next/image";
import React from "react";
import { SettingDrower, Settings } from "..";
import SearchInput from "./SearchInput";

type Props = {};

export default function Search({}: Props) {
  return (
    <div className="flex justify-between items-center mb-[27px] ">
      <div className="flex gap-4 items-center">
        <div className="block xl:hidden">
          <Image
            alt="icon"
            width={73}
            height={73}
            src={"/assets/icons/icon.svg"}
            className="cursor-pointer"
          />
        </div>
        <h3 className="text-[24px] font-[Inter,sans-serif]">Dua Page</h3>
      </div>
      <div className="gap-6 flex">
        <SearchInput />

        {/* when 2xl hide this */}
        <div className="flex gap-2 2xl:hidden">
          <SettingDrower>
            <Settings />
          </SettingDrower>
          <button
            id="dropdownAvatarNameButton"
            data-dropdown-toggle="dropdownAvatarName"
            className="flex items-center text-sm pe-1 font-medium rounded-full"
            type="button"
          >
            <span className="sr-only">Open user menu</span>
            <Image
              alt="icon"
              width={45}
              height={45}
              src={"/assets/icons/profileIcon.svg"}
            />

            <svg
              className="w-2.5 h-2.5 ms-3"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 10 6"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m1 1 4 4 4-4"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
