import { CategoriesView, CategoryDrower, DuaView } from "@/components";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col lg:flex-row gap-[33px]">
      <div className="hidden lg:block w-[400px]">
        <button className="w-full rounded-tr-[10px] rounded-tl-[10px] p-[18px] bg-[#1FA45B] text-white">
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
      {/* categories */}
      <div className="flex-1">
        <DuaView />
      </div>
      {/* duas view */}
    </main>
  );
}
