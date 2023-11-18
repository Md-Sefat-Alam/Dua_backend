import CategoryGroup from "./CategoryGroup";
import { Category } from "./DuasTypes";

type Props = {};

export default async function CategoriesView({}: Props) {
  const category: Category[] = await getData();

  //   console.log(category);
  return (
    <div className="h-[calc(100vh-40px-40px-64px-60px)] lg:h-[calc(100vh-40px-40px-64px-60px-100px)] pb-4 overflow-y-auto scrollbar-thin">
      <div className="mt-4 px-[15px]">
        {category?.map((item) => (
          <CategoryGroup category={item} />
        ))}
      </div>
    </div>
  );
}

async function getData() {
  const res = await fetch("http://localhost:3001/api/category", {'cache': 'force-cache'});

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}
