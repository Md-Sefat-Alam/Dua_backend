"use client";
import Image from "next/image";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React, { useCallback, useEffect } from "react";

type Props = {};

export default function SearchInput({}: Props) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const search = searchParams.get("search");
  const cat = searchParams.get("cat");
  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams);
      params.set(name, value);
      if (!value) {
        params.delete(name);
      }
      return params.toString();
    },
    [searchParams]
  );

  useEffect(() => {
    if (cat) {
    } else {
      router.push(pathname + "?" + createQueryString("cat", "1"));
    }
  }, []);

  return (
    <div className="hidden md:block relative rounded-md shadow-sm w-[371px]">
      <input
        type="text"
        name="search"
        id="search"
        className="block rounded-[10px] p-[4px] pl-[16px] placeholder:text-[#868686] focus:ring-[#F3F4F6] sm:text-sm font-[Inter] w-[371px] h-[44px] border-[0.5px] border-[#E2E2E2]"
        placeholder="Search by Dua Name"
        onChange={(e) => {
          console.log(e);

          router.push(
            pathname + "?" + createQueryString("search", e.target.value)
          );
        }}
        value={search || ""}
      />
      <div className="absolute inset-y-0 right-0 flex items-center justify-center ">
        <button
          id="searchicon"
          name="searchicon"
          className="border-0 bg-[#F3F4F6] rounded-[6px] focus:ring-2 focus:ring-inset sm:text-sm py-[6px] px-[15px] mt-[4px] mr-[4px] mb-[4px]"
        >
          <Image
            alt="icon"
            width={24}
            height={24}
            src={"/assets/icons/search.svg"}
          />
        </button>
      </div>
    </div>
  );
}
