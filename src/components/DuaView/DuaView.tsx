import Image from "next/image";
import { CategoriesView, CategoryDrower } from "..";
import Duas from "./Duas";

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
              <div className="">
                <div className="mx-3 pt-4">
                  <label className="relative block w-full">
                    <span className="absolute inset-y-0 left-0 flex items-center pl-4">
                      <Image
                        alt="icon"
                        width={24}
                        height={24}
                        src={"/assets/icons/search.svg"}
                      />
                    </span>
                    <input
                      className="h-12 placeholder:text-mute-grey placeholder:text-sm border-[1px] block bg-white w-full rounded-md pl-12 shadow-sm focus:outline-none focus:border-primary focus:ring-primary focus:ring-1  
        sm:text-sm"
                      placeholder="Search Categories"
                      type="text"
                      name="search"
                    />
                  </label>
                </div>
              </div>
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
