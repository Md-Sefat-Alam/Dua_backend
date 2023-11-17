'use client'
import { useSearchParams } from "next/navigation";
import CategoryTop from "./CategoryTop";
import { Category } from "./DuasTypes";
import SubCategory from "./SubCategory";

type Props = { category: Category };

export default async function CategoryGroup({ category }: Props) {
  const searchParams = useSearchParams();

  const { cat_id } = category;
  const cat = searchParams.get("cat");

  return (
    <div className="group scroll-mt-4 style-Kalpurush" id="cat_1">
      <CategoryTop category={category} />
      {/* end root category */}
      {cat && Number(cat) === cat_id ? <SubCategory cat_id={cat_id} /> : <></>}
      {/* end sub Category */}
    </div>
  );
}
