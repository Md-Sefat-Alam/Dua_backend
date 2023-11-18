"use client";
import Image from "next/image";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React, { useCallback } from "react";

type Props = {};

export default function CategorySearchInput({}: Props) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const cat_search = searchParams.get("cat_search");
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
  return (
    <div className="">
      <div className="mx-3 pt-4">
        <label className="relative block w-full">
          <span className="absolute inset-y-0 left-0 flex items-center pl-4">
            <Image
              alt="icon"
              width={24}
              height={24}
              src={"/assets/icons/search.svg"}
            />
          </span>
          <input
            className="h-12 placeholder:text-mute-grey placeholder:text-sm border-[1px] block bg-white w-full rounded-md pl-12 shadow-sm focus:outline-none focus:border-primary focus:ring-primary focus:ring-1  
        sm:text-sm"
            placeholder="Search Categories"
            type="text"
            name="search"
            onChange={(e) => {
              console.log(e);

              router.push(
                pathname + "?" + createQueryString("cat_search", e.target.value)
              );
            }}
            value={cat_search || ""}
          />
        </label>
      </div>
    </div>
  );
}
