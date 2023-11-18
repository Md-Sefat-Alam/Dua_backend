import { SubCategory } from "./DuasTypes";
import SubCategoryContent from "./SubCategoryContent";

type Props = { cat_id: number };

export default async function SubCategory({ cat_id }: Props) {
  const sub_category: SubCategory[] = await getData(cat_id);
  return (
    <div className="ml-12 border-l-2 border-dotted my-2 border-primary">
      <div className="flex border-dotted flex-col justify-start items-start gap-y-2 ml-3 ">
        {/* end sub category 1 */}
        {sub_category?.map((item) => (
          <SubCategoryContent sub_category={item} />
        ))}
      </div>
    </div>
  );
}

async function getData(cat_id: number) {
  const res = await fetch(`http://localhost:3001/api/sub_category/${cat_id}`, {
    cache: "force-cache",
  });

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}
