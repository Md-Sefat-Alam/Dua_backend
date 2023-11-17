"use client";
import Image from "next/image";
import React, { useState } from "react";
import SettingCard, { isOpenType } from "../common/SettingCard";

type Props = {};

export default function Settings({}: Props) {
  const [isOpen, setIsOpen] = useState<isOpenType>("Appearance Settings");
  return (
    <div>
      <div className="mb-[30px] flex justify-end ">
        <button
          id="dropdownAvatarNameButton"
          data-dropdown-toggle="dropdownAvatarName"
          className="items-center text-sm pe-1 font-medium rounded-full hidden 2xl:flex"
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

      
      <div className="bg-white rounded-[24px] h-[calc(100vh-40px-40px-30px-45px)] ">
        <h3 className="text-[#393939] text-center text-[20px] font-[700] pt-[35px] pb-[10px]">
          Settings
        </h3>
        <div className="px-[20px] flex flex-col gap-[15px] mt-[15px] w-full ">
          <SettingCard
            icon={
              <Image
                alt="icon"
                width={24}
                height={24}
                src={"/assets/icons/language.svg"}
              />
            }
            title="Language Settings"
            setIsOpen={setIsOpen}
            isOpen={isOpen}
          >
            <div className="flex justify-between items-center">
              <h3 className="text-[#393939] text-center text-[20px] ">
                Night Mode
              </h3>
              <div className="flex items-center justify-center">
                <Image
                  alt="icon"
                  width={30}
                  height={16}
                  src={"/assets/icons/lightMode.svg"}
                />
              </div>
            </div>
          </SettingCard>
          <SettingCard
            icon={
              <Image
                alt="icon"
                width={24}
                height={24}
                src={"/assets/icons/settings.svg"}
              />
            }
            title="General Settings"
            setIsOpen={setIsOpen}
            isOpen={isOpen}
          >
            <div className="flex justify-between items-center">
              <h3 className="text-[#393939] text-center text-[20px] ">
                Night Mode
              </h3>
              <div className="flex items-center justify-center">
                <Image
                  alt="icon"
                  width={30}
                  height={16}
                  src={"/assets/icons/lightMode.svg"}
                />
              </div>
            </div>
          </SettingCard>
          <SettingCard
            icon={
              <Image
                alt="icon"
                width={24}
                height={24}
                src={"/assets/icons/more.svg"}
              />
            }
            title="Font Settings"
            setIsOpen={setIsOpen}
            isOpen={isOpen}
          >
            <div className="flex justify-between items-center">
              <h3 className="text-[#393939] text-center text-[20px] ">
                Night Mode
              </h3>
              <div className="flex items-center justify-center">
                <Image
                  alt="icon"
                  width={30}
                  height={16}
                  src={"/assets/icons/lightMode.svg"}
                />
              </div>
            </div>
          </SettingCard>
          <SettingCard
            icon={
              <Image
                alt="icon"
                width={24}
                height={24}
                src={"/assets/icons/more.svg"}
              />
            }
            title="Appearance Settings"
            setIsOpen={setIsOpen}
            isOpen={isOpen}
          >
            <div className="flex justify-between items-center">
              <h3 className="text-[#393939] text-center text-[16px] ">
                Night Mode
              </h3>
              <div className="flex items-center justify-center">
                <Image
                  alt="icon"
                  width={30}
                  height={16}
                  src={"/assets/icons/lightMode.svg"}
                />
              </div>
            </div>
          </SettingCard>
        </div>
      </div>
    </div>
  );
}
