import Image from "next/image";
import { CategoriesView, CategoryDrower } from "..";
import Duas from "./Duas";
import CategorySearchInput from "./CategorySearchInput";

type Props = {};

export default function DuaView({}: Props) {
  return (
    <div
      id="scrollDua"
      className="w-full delay-1000 transition duration-1000 ease-linear font-[Inter] h-[calc(100vh-40px-80px)] overflow-x-auto scrollbar-thin"
    >
      {/* ===============This is only for responsive mobile view=============== */}
      <div className="block lg:hidden relative">
        <CategoryDrower>
          <div className="block lg:hidden w-full">
            <button className="w-full rounded-tr-[25px]  p-[18px] bg-[#1FA45B] text-white">
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
        </CategoryDrower>
      </div>
      {/* ===============This is only for responsive mobile view================= */}
      <Duas />
    </div>
  );
}
