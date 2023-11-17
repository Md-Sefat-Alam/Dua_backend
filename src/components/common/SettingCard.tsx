import React from "react";

export type isOpenType =
  | "Language Settings"
  | "General Settings"
  | "Font Settings"
  | "Appearance Settings"
  | undefined;

type Props = {
  title: isOpenType;
  icon: React.ReactNode;
  children: React.ReactNode;
  setIsOpen: React.Dispatch<React.SetStateAction<isOpenType>>;
  isOpen: isOpenType;
};

export default function SettingCard({
  icon,
  title,
  children,
  setIsOpen,
  isOpen,
}: Props) {
  const isSelected = isOpen === title;
  return (
    <div>
      <div
        onClick={() => {
          setIsOpen((prev) => (prev === title ? undefined : title));
        }}
        className={`flex items-center gap-[19px] pl-[14px] py-[9px] bg-[#F7F8FA] rounded-md select-none cursor-pointer ${
          isSelected ? "border-l-[5px] border-[#1FA45B]" : ""
        }`}
      >
        <div
          className={`w-[38px] h-[38px] rounded-full bg-[#E8F0F5] flex justify-center items-center ${
            isSelected ? "text-[#1FA45B]" : ""
          }`}
        >
          {icon}
        </div>
        <h3 className={`text-[16px] ${isSelected ? "text-[#1FA45B]" : ""}`}>
          {title}
        </h3>
      </div>
      {isSelected ? (
        <div className="px-[20px] pt-[32px] pb-[28px] border border-t-0 rounded-bl-[5px] rounded-br-[5px]  ">
          {children}
        </div>
      ) : (
        ""
      )}
    </div>
  );
}
