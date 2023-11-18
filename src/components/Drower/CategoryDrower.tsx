"use client";
import React, { useState } from "react";
import DrowerBtn from "./DrowerBtn";
import { useSearchParams } from "next/navigation";
import DrowerBlankSide from "./DrowerBlankSide";

interface DrawerProps {
  onClose?: () => void;
  children: React.ReactNode;
}

const SettingDrower = ({ onClose, children }: DrawerProps) => {
  const searchParams = useSearchParams();
  const mobile_view_d_l = searchParams.get("mobile_view_d_l");

  return (
    <>
      <DrowerBtn />
      {mobile_view_d_l === "true" ? (
        <div className="fixed inset-0 z-50 flex justify-between">
          <DrowerBlankSide />
          <div className="w-[350px] bg-white p-1 rounded-tr-[25px] rounded-br-[25px] shadow-lg max-w-screen-md z-10 h-screen">
            {children}
          </div>
        </div>
      ) : (
        <></>
      )}
    </>
  );
};

export default SettingDrower;
