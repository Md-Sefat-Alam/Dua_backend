"use client";
import Image from "next/image";
import React, { useState } from "react";
import SettingCard, { isOpenType } from "../common/SettingCard";

type Props = {};

export default function Settings({}: Props) {
  const [isOpen, setIsOpen] = useState<isOpenType>("Appearance Settings");
  return (
    <div>
      <div className="mb-[30px] flex justify-end">
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

        {/* <div
          id="dropdownAvatarName"
          className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600"
        >
          <div className="px-4 py-3 text-sm text-gray-900 dark:text-white">
            <div className="font-medium ">Pro User</div>
            <div className="truncate">name@flowbite.com</div>
          </div>
          <ul
            className="py-2 text-sm text-gray-700 dark:text-gray-200"
            aria-labelledby="dropdownInformdropdownAvatarNameButtonationButton"
          >
            <li>
              <a
                href="#"
                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                Dashboard
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                Settings
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                Earnings
              </a>
            </li>
          </ul>
          <div className="py-2">
            <a
              href="#"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
            >
              Sign out
            </a>
          </div>
        </div> */}
      </div>

      
      <div className="bg-white rounded-[24px] h-[calc(100vh-40px-40px-30px-45px)] border-[0.5px] border-[#E2E2E2]">
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
