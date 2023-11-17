import React from "react";

type Props = { children: React.ReactNode };

export default function MakeNavIcon({ children }: Props) {
  return (
    <div className="w-[38px] h-[38px] bg-[#E8F0F5] rounded-full flex justify-center items-center cursor-pointer">
      {children}
    </div>
  );
}
