"use client";
import { useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import { Dua, DuaCategoryWise } from "../Duas/DuasTypes";
import Audio from "./Audio";

type Props = {};

export default function Duas({}: Props) {
  const searchParams = useSearchParams();
  const cat = searchParams.get("cat");
  const subcat = searchParams.get("subcat");
  const dua = searchParams.get("dua");
  const [duas, setDuas] = useState<DuaCategoryWise[]>();

  useEffect(() => {
    if (cat) {
      fetch(`http://localhost:3001/api/dua/${cat}`)
        .then((res) => res.json())
        .then((data: DuaCategoryWise[]) => {
          console.log(data);

          setDuas(data);
        });
    }
  }, [cat]);

  useEffect(() => {
    // Scroll to the element with the updated cat_id
    if (dua) {
      const element = document.getElementById(`dua_${dua}`);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else if (subcat) {
      const element = document.getElementById(`sec_${subcat}`);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else if (cat) {
      const element = document.getElementById("scrollDua");
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [cat, subcat, dua, duas]);

  return (
    <>
      {duas ? (
        duas?.map((item) => {
          const { cat_id, subcat_name_en, subcat_id } = item;
          return (
            <>
              <div
                id={`sec_${subcat_id}`}
                className="flex undefined mb-5 flex-row bg-white px-5 py-4 justify-start items-center rounded-[10px]"
              >
                <p className="text-[16px] font-medium leading-[25px] ">
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
                    className=" bg-white mb-5 rounded-[10px]"
                  >
                    <div className="p-6">
                      {dua_name_en ? (
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
                      ) : (
                        <></>
                      )}
                      <div className="flex flex-col justify-start items-start">
                        <div className="w-full">
                          {top_en ? (
                            <p className="text-[18px]  mt-5 text-justify leading-8 font-normal">
                              <span> {top_en}</span>
                            </p>
                          ) : (
                            <></>
                          )}
                          {dua_arabic ? (
                            <p
                              dir="rtl"
                              className="my-8 text-right leading-loose font-['me_quran'] text-[26px]"
                              style={{ wordSpacing: 8 }}
                            >
                              {dua_arabic}
                            </p>
                          ) : (
                            <></>
                          )}
                          {transliteration_en ? (
                            <p className="text-[18px] my-5 text-justify leading-8 italic">
                              <span
                                id="transliteration"
                                className="font-medium"
                              >
                                Transliteration:
                              </span>
                              <span> {transliteration_en}</span>
                            </p>
                          ) : (
                            <></>
                          )}
                          {translation_en ? (
                            <p
                              id="translation"
                              className="text-[18px]  my-5 text-justify font-normal"
                            >
                              <span className="font-medium text-[18px]">
                                Translation:
                              </span>
                              <span> {translation_en}</span>
                            </p>
                          ) : (
                            <></>
                          )}
                        </div>
                        {refference_en ? (
                          <div>
                            <p className="mt-5 font-normal text-[#1FA45B] text-[18px]">
                              Reference:
                            </p>
                            <div className="mt-1 font-normal text-[18px]">
                              <span>{refference_en}</span>
                            </div>
                          </div>
                        ) : (
                          <></>
                        )}
                      </div>
                    </div>
                    {/* end show content */}
                    <div>
                      <div className="flex flex-row items-center justify-between px-6">
                        <div className="py-4 flex flex-row items-center">
                          {audio ? <Audio audio={audio} /> : <></>}
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
