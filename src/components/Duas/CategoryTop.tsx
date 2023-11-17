"use client";
import {
  ReadonlyURLSearchParams,
  usePathname,
  useRouter,
  useSearchParams,
} from "next/navigation";
import React, { useCallback } from "react";
import { Category } from "./DuasTypes";
import Image from "next/image";

type Props = { category: Category; cat: string | null };

export default function CategoryTop({ category, cat }: Props) {
  const { cat_name_en, no_of_subcat, no_of_dua, cat_icon, cat_id } = category;
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams);
      params.delete("dua");
      params.delete("subcat");
      params.set(name, value);
      return params.toString();
    },
    [searchParams]
  );

  return (
    <div
      onClick={() => {
        router.push(pathname + "?" + createQueryString("cat", cat_id + ""));
      }}
      className={`cursor-pointer flex justify-between items-center p-[10px] rounded-[10px] ${
        cat && Number(cat) === cat_id ? "bg-[#E8F0F5]" : "bg-white"
      }`}
    >
      <div className=" flex flex-row gap-x-4 items-center w-full h-18 px-3 rounded-xl">
        <div className="flex flex-row w-70 items-center xs:w-full sm:w-full md:w-full">
          <div
            className={`flex items-center p-[10px] rounded-[10px] ${
              cat && Number(cat) === cat_id ? "bg-[#fff]" : "bg-[#E8F0F5]"
            }`}
          >
            <Image
              src={`/assets/icons/${cat_icon}.svg`}
              alt="duar_gurutto"
              className="p-1"
              width={40}
              height={40}
            />
          </div>
          <div className="w-40 text-left ml-2 ">
            <p className="text-base text-black">{cat_name_en}</p>
            <p className=" text-xs mt-1 ">Subcategory: {no_of_subcat}</p>
          </div>
        </div>
        <div className="flex flex-row w-12 items-center xl:hidden">
          <div className="flex flex-col gap-y-1 justify-center items-center">
            <p className="text-base">{no_of_dua}</p>
            <p className="text-xs xs:text-[11px]">Duas</p>
          </div>
        </div>
      </div>
    </div>
  );
}
