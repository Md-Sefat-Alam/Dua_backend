"use client";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useCallback } from "react";
import { SubCategory } from "./DuasTypes";

type Props = { sub_category: SubCategory };

export default function SubCategoryTop({ sub_category }: Props) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const { subcat_id, subcat_name_en } = sub_category;
  const subcat = searchParams.get("subcat");

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams);
      params.delete("dua");
      params.set(name, value);
      return params.toString();
    },
    [searchParams]
  );

  return (
    <p
      onClick={() => {
        router.push(
          pathname + "?" + createQueryString("subcat", subcat_id + "")
        );
      }}
      className={`${
        subcat && Number(subcat) === subcat_id ? "text-[#1FA45B]" : ""
      } cursor-pointer font-semibold text-left text-sm dark:text-dark-text xs:text-2xs style-Kalpurush`}
    >
      {subcat_name_en}
    </p>
  );
}
