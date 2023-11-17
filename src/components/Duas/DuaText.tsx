'use client'
import React, { useCallback } from "react";
import { Dua } from "./DuasTypes";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

type Props = { item: Dua };

export default function DuaText({ item }: Props) {
  const { dua_id } = item;
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const dua = searchParams.get("dua");

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams);
      params.set(name, value);
      return params.toString();
    },
    [searchParams]
  );

  return (
    <p
      onClick={() => {
        router.push(pathname + "?" + createQueryString("dua", dua_id + ""));
      }}
      className={`${
        dua && Number(dua) === dua_id ? "text-[#1FA45B]" : ""
      } my-3 text-left  dark:text-gray-300 text-sm`}
    >
      {item?.dua_name_en}
    </p>
  );
}
