import { useSearchParams } from "next/navigation";
import Dua from "./Dua";
import { SubCategory } from "./DuasTypes";
import SubCategoryTop from "./SubCategoryTop";

type Props = { sub_category: SubCategory };

export default function SubCategoryContent({ sub_category }: Props) {
  const searchParams = useSearchParams();

  const { subcat_id, cat_id } = sub_category;
  const subcat = searchParams.get("subcat");

  return (
    <div className="flex flex-row my-2">
      <div className="bg-[#1FA45B] -translate-x-4 mt-1.5 w-1.5 rounded-full h-1.5" />
      <div className="flex flex-col justify-start items-start">
        <SubCategoryTop sub_category={sub_category} />
        {subcat && Number(subcat) === subcat_id ? (
          <Dua cat_id={cat_id} subcat_id={subcat_id} />
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}
