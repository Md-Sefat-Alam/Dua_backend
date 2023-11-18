import DuaText from "./DuaText";
import { Dua } from "./DuasTypes";

type Props = { subcat_id: number; cat_id: number };

export default async function Dua({ subcat_id, cat_id }: Props) {
  const dua: Dua[] = await getDua(cat_id, subcat_id);
  console.log(dua);

  return (
    <div className="mt-2 cursor-pointer">
      {dua?.map((item) => (
        <div className="flex flex-row ">
          <img
            src="/assets/arrow/duaarrow.svg"
            className="-translate-y-1 mr-2"
            alt="dua"
          />
          <DuaText item={item} />
        </div>
      ))}
    </div>
  );
}

export async function getDua(cat_id: number, subcat_id: number) {
  const res = await fetch(
    `http://localhost:3001/api/dua/${cat_id}/${subcat_id}`,
    { cache: "force-cache" }
  );

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}
