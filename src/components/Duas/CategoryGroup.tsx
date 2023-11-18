"use client";
import { useSearchParams } from "next/navigation";
import CategoryTop from "./CategoryTop";
import { Category } from "./DuasTypes";
import SubCategory from "./SubCategory";

type Props = { category: Category };

export default function CategoryGroup({ category }: Props) {
  const searchParams = useSearchParams();

  const { cat_id, cat_name_bn, cat_name_en } = category;
  const cat = searchParams.get("cat");
  const cat_search = searchParams.get("cat_search");

  if (
    (cat_search && cat_name_bn.toLocaleLowerCase().includes(cat_search)) ||
    (cat_search && cat_name_en.toLocaleLowerCase().includes(cat_search)) ||
    !cat_search
  ) {
    return (
      <div className="scroll-mt-4" id={`cat_${cat_id}`}>
        <CategoryTop category={category} cat={cat} />
        {/* end root category */}
        {cat && Number(cat) === cat_id ? (
          <SubCategory cat_id={cat_id} />
        ) : (
          <></>
        )}
        {/* end sub Category */}
      </div>
    );
  } else {
    return <></>;
  }
}
