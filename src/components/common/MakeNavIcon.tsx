import React from "react";

type Props = { children: React.ReactNode; className?: string };

export default function MakeNavIcon({ children, className }: Props) {
  return (
    <div
      className={`w-[38px] h-[38px] bg-[#E8F0F5] rounded-full flex justify-center items-center cursor-pointer ${className}`}
    >
      {children}
    </div>
  );
}
