'use client'
import { useSearchParams } from "next/navigation";
import CategoryTop from "./CategoryTop";
import { Category } from "./DuasTypes";
import SubCategory from "./SubCategory";

type Props = { category: Category };

export default function CategoryGroup({ category }: Props) {
  const searchParams = useSearchParams();

  const { cat_id } = category;
  const cat = searchParams.get("cat");

  return (
    <div className="scroll-mt-4" id={`cat_${cat_id}`}>
      <CategoryTop category={category} cat={cat} />
      {/* end root category */}
      {cat && Number(cat) === cat_id ? <SubCategory cat_id={cat_id} /> : <></>}
      {/* end sub Category */}
    </div>
  );
}
