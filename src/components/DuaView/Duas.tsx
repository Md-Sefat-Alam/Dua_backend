"use client";
import { useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import { Dua, DuaCategoryWise } from "../Duas/DuasTypes";

type Props = {};

export default function Duas({}: Props) {
  const searchParams = useSearchParams();
  const cat = searchParams.get("cat");
  const [dua, setDua] = useState<DuaCategoryWise[]>();

  useEffect(() => {
    if (cat) {
      fetch(`http://localhost:3001/api/dua/${cat}`)
        .then((res) => res.json())
        .then((data: DuaCategoryWise[]) => {
          console.log(data);

          setDua(data);
        });
    }
  }, [cat]);

  return (
    <>
      {dua ? (
        dua?.map((item) => {
          const { cat_id, subcat_name_en } = item;
          return (
            <>
              <div
                id={`sec_${cat_id}`}
                className="flex undefined mb-5 flex-row bg-white rounded-2lg px-5 py-4 justify-start items-center dark:bg-dark-bg"
              >
                <p className="text-[16px] font-medium leading-[25px] dark:text-dark-text text-mss  ">
                  <span className="text-[#1FA45B] font-medium leading-[25px] text-mss ">
                    Section:
                  </span>{" "}
                  {subcat_name_en}
                </p>
              </div>

              {item?.categories?.map((dua) => {
                const {
                  cat_id,
                  dua_id,
                  dua_name_bn,
                  dua_name_en,
                  id,
                  subcat_id,
                  top_bn,
                  top_en,
                  audio,
                  bottom_bn,
                  bottom_en,
                  clean_arabic,
                  dua_arabic,
                  dua_indopak,
                  refference_bn,
                  refference_en,
                  translation_bn,
                  translation_en,
                  transliteration_bn,
                  transliteration_en,
                } = dua;
                return (
                  <div
                    id={`dua_${dua_id}`}
                    className=" bg-white rounded-2lg mb-5 dark:bg-dark-bg"
                  >
                    <div className="p-6">
                      <div>
                        <div className="flex flex-row justify-start items-center ">
                          <img
                            src="/assets/duacard.svg"
                            alt="duacard"
                            className="mr-3"
                          />
                          <p className="text-[#1FA45B] font-medium -dua-title">
                            {dua_id}. {dua_name_en}
                          </p>
                        </div>
                      </div>
                      <div className="flex flex-col justify-start items-start">
                        <div className="w-full">
                          <p className="text-[18px]  mt-5 text-justify leading-8 font-normal">
                            <span> {top_en}</span>
                          </p>
                          <p
                            dir="rtl"
                            className="my-8 text-right leading-loose font-['me_quran'] text-[26px]"
                            style={{ wordSpacing: 8 }}
                          >
                            {" "}
                            {dua_arabic}
                          </p>
                          <p className="text-[18px] my-5 text-justify leading-8 italic">
                            <span id="transliteration" className="font-medium">
                              Transliteration:
                            </span>{" "}
                            <span> {transliteration_en}</span>
                          </p>
                          <p
                            id="translation"
                            className="text-[18px]  my-5 text-justify font-normal"
                          >
                            <span className="font-medium text-[18px]">
                              Translation:
                            </span>{" "}
                            <span> {translation_en}</span>
                          </p>
                        </div>
                        <div>
                          <p className="mt-5 font-normal text-[#1FA45B] text-[18px]">
                            Reference:
                          </p>
                          <div className="mt-1 font-normal text-[18px]">
                            <span>{refference_en}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* end show content */}
                    <div>
                      <div className="flex flex-row items-center justify-between px-6">
                        <div className="py-4 flex flex-row items-center xs:w-full xs:gap-x-4">
                          {/* <audio src="https://api.duaruqyah.com/duaaudiofinal/2.mp3" />
                          <div className="flex flex-row items-center gap-x-3 xs:w-full">
                            <img
                              className="cursor-pointer xs:w-8"
                              src="/assets/others/play.svg"
                              alt=""
                            />
                            <img
                              className="cursor-pointer xs:w-8"
                              src="/assets/others/pause.svg"
                              alt=""
                            />
                            <input
                              className=""
                              type="range"
                              min={0}
                              max={2429}
                              defaultValue="954.7593"
                              style={{ backgroundSize: "39.3067% 100%" }}
                            />
                          </div>
                          <div className="w-20 flex justify-center px-3">
                            <p className="ml-2 text-mute-grey-200 text-sm dark:text-dark-text">
                              00:14
                            </p>
                          </div>
                          <div className="w-20 flex justify-center">
                            <img
                              className="cursor-pointer w-8  false"
                              alt="suffle"
                              src="/assets/memorize/suffle.svg"
                            />
                          </div> */}
                        </div>
                        <div className="xs:hidden flex items-center flex-row justify-between py-6 gap-x-8 xs:gap-x-6">
                          <div id="copy" className="relative w-6">
                            <img
                              className="cursor-pointer"
                              src="/assets/others/copy.svg"
                              alt="copy"
                            />
                          </div>
                          <div id="bookmark" className="relative w-6">
                            <img
                              className="cursor-pointer" 
                              src="/assets/others/bookmark.svg"
                              alt="bookmark"
                            />
                          </div>
                          <div id="plan" className="relative w-6">
                            <img
                              className="cursor-pointer"
                              src="/assets/others/plan.svg"
                              alt="plan"
                            />
                          </div>
                          <div id="share" className="relative w-6">
                            <img
                              className="cursor-pointer"
                              src="/assets/others/share.svg"
                              alt="share"
                            />
                          </div>
                          <div id="report" className="relative w-6">
                            <img
                              className="cursor-pointer"
                              src="/assets/others/report.svg"
                              alt="report"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </>
          );
        })
      ) : (
        <div
          id="sec_1"
          className="flex w-full undefined mb-5 flex-row bg-white rounded-2lg px-5 py-4 justify-start items-center dark:bg-dark-bg"
        ></div>
      )}
    </>
  );
}

export async function getDua(cat_id: string | null) {
  if (cat_id) {
    const res = await fetch(`http://localhost:3001/api/dua/${cat_id}`);

    if (!res.ok) {
      // This will activate the closest `error.js` Error Boundary
      throw new Error("Failed to fetch data");
    }

    return res.json();
  } else {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Category Id can't be null");
  }
}
