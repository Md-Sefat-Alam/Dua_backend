import { CategoriesView, CategoryDrower, DuaView } from "@/components";
import CategorySearchInput from "@/components/DuaView/CategorySearchInput";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col lg:flex-row gap-[33px]">
      <div className="hidden lg:block w-[400px]">
        <button className="w-full rounded-tr-[10px] rounded-tl-[10px] p-[18px] bg-[#1FA45B] text-white">
          Categories
        </button>
        <div className="bg-white rounded-br-[10px] rounded-bl-[10px]">
          <CategorySearchInput />
          <div>
            <div className="mt-4">
              <CategoriesView />
            </div>
          </div>
        </div>
      </div>
      {/* categories */}
      <div className="flex-1">
        <DuaView />
      </div>
      {/* duas view */}
    </main>
  );
}
