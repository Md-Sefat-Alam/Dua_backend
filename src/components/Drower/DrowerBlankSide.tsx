'use client'
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React, { useCallback } from "react";

type Props = {};

export default function DrowerBlankSide({}: Props) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const mobile_view_d_l = searchParams.get("mobile_view_d_l");
  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams);
      params.set(name, value);
      params.delete('mobile_view_d_l')
      return params.toString();
    },
    [searchParams]
  );
  const handleOverlayClick = (e: any) => {
    // Close the drawer if the overlay is clicked
    if (e.target.classList.contains("drawer-overlay")) {
      if (mobile_view_d_l) {
        if (mobile_view_d_l === "true") {
          router.push(
            pathname + "?" + createQueryString("mobile_view_d_l", "false")
          );
        } else if (mobile_view_d_l === "false") {
          router.push(
            pathname + "?" + createQueryString("mobile_view_d_l", "true")
          );
        }
      } else {
        router.push(
          pathname + "?" + createQueryString("mobile_view_d_l", "true")
        );
      }
    }
  };

  return (
    <div
      className="absolute inset-0 bg-gray-800 opacity-60 drawer-overlay"
      onClick={handleOverlayClick}
    ></div>
  );
}
