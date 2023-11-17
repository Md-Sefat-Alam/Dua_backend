"use client";
import React, { useState } from "react";

interface DrawerProps {
  onClose?: () => void;
  children: React.ReactNode;
}

const SettingDrower = ({ onClose, children }: DrawerProps) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const closeDrawer = () => {
    setIsDrawerOpen(false);
    onClose && onClose();
  };

  const handleOverlayClick = (e: any) => {
    // Close the drawer if the overlay is clicked
    if (e.target.classList.contains("drawer-overlay")) {
      closeDrawer();
    }
  };

  return (
    <>
      <button
        onClick={() => {
          setIsDrawerOpen(true);
        }}
      >
        <img src="/assets/icons/settings_1.svg" />
      </button>
      {isDrawerOpen && (
        <div className="fixed inset-0 z-50 flex justify-between flex-row-reverse">
          <div
            className="absolute inset-0 bg-gray-800 opacity-60 drawer-overlay"
            onClick={handleOverlayClick}
          ></div>
          <div className="w-[350px] bg-white p-1 rounded-tl-[25px] rounded-bl-[25px] shadow-lg max-w-screen-md z-10 h-screen">
            {/* <button
              className="absolute top-4 right-4 text-gray-700 cursor-pointer"
              onClick={closeDrawer}
            >
              Close
            </button> */}
            {children}
          </div>
        </div>
      )}
    </>
  );
};

export default SettingDrower;
