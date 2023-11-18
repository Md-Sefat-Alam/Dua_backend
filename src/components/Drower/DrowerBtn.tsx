"use client";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React, { useCallback } from "react";

type Props = {};

export default function DrowerBtn({}: Props) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const mobile_view_d_l = searchParams.get("mobile_view_d_l");
  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams);
      params.set(name, value);
      return params.toString();
    },
    [searchParams]
  );
  return (
    <button
      onClick={() => {
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
      }}
    >
      <div className="w-full rounded-[10px] p-4 flex gap-2">
        <img src="/assets/icons/menu_icon.svg" height={24} width={24} />
        Dua's importance
      </div>
    </button>
  );
}
