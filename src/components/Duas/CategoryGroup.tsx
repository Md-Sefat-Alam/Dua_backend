"use client";
import { useSearchParams } from "next/navigation";
import CategoryTop from "./CategoryTop";
import { Category } from "./DuasTypes";
import SubCategory from "./SubCategory";
import { useEffect } from "react";

type Props = { category: Category };

export default function CategoryGroup({ category }: Props) {
  const searchParams = useSearchParams();

  const { cat_id } = category;
  const cat = searchParams.get("cat");

  useEffect(() => {
    // Scroll to the element with the updated cat_id
    if (cat) {
      const element = document.getElementById(`cat_${cat}`);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [cat]);

  return (
    <div className="scroll-mt-4" id={`cat_${cat_id}`}>
      <CategoryTop category={category} cat={cat} />
      {/* end root category */}
      {cat && Number(cat) === cat_id ? <SubCategory cat_id={cat_id} /> : <></>}
      {/* end sub Category */}
    </div>
  );
}
