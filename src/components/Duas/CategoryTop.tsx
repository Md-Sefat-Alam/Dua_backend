"use client";
import {
  ReadonlyURLSearchParams,
  usePathname,
  useRouter,
  useSearchParams,
} from "next/navigation";
import React, { useCallback } from "react";
import { Category } from "./DuasTypes";

type Props = { category: Category };

export default function CategoryTop({ category }: Props) {
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
      className="cursor-pointer bg-white flex justify-between items-center mx-3 dark:bg-transparent my-2"
    >
      <div className="bg-icon-bg dark:bg-dark-bg-dark group-hover:bg-icon-bg dark:group-hover:bg-dark-bg-dark flex flex-row gap-x-4 items-center w-full h-18 px-3 rounded-xl group-hover:bg-icon-bg dark:group-hover:bg-dark-bg-dark">
        <div className="flex flex-row w-70 items-center xs:w-full sm:w-full md:w-full">
          <div className="bg-dua-bg dark:bg-dark-bg  flex rounded-lg items-center h-14 w-14 xs:w-12 xs:h-12">
            <img
              src={`/assets/icons/${cat_icon}.svg`}
              alt="duar_gurutto"
              className="p-3"
            />
          </div>
          <div className="w-40 text-left ml-2 ">
            <p className="text-base  style-kalpurush text-black style-inter-cat dark:text-dark-text sm:text-mss">
              {cat_name_en}
            </p>
            <p className="text-mute-grey text-xs mt-1 dark:text-dark-text xs:text-[11px] ">
              Subcategory: {no_of_subcat}
            </p>
          </div>
        </div>
        <div className="flex flex-row w-12 items-center xl:hidden">
          <div className="bg-devider w-0.1 mr-3 h-12 dark:hidden" />
          <div className="flex flex-col gap-y-1 justify-center items-center">
            <p className="text-base dark:text-dark-text xs:text-sm sm:text-mss">
              {no_of_dua}
            </p>
            <p className="text-mute-grey text-xs dark:text-dark-text xs:text-[11px]">
              Duas
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
