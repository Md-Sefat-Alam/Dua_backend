import React from "react";

type Props = {};

export default function DuaView({}: Props) {
  return (
    <div
      id="scrollDua"
      className="w-full sm-max:overflow-y-auto scrl sm-max:pb-20
  md-min:h-[calc(100vh-100px)] md:pb-48 md-max:w-[98%] md-max:mx-auto
  lg:pb-6 lg:pt-24 lg:col-start-2
  xl-min:pb-8 xl:w-full
  md:pt-24 sm-max:px-2 delay-1000 transition duration-1000 ease-linear lg-min:w-[102%]
  }
  col-start-2 
  "
    >
      <div>
        <div className="bg-[#ebeef2] dark:bg-[#122337] z-[2] w-full flex-row py-5 items-center justify-between hidden xs:flex sm:flex">
          <div className="flex flex-row items-center">
            <img
              src="/assets/mobile/home/back.svg"
              className="h-4 cursor-pointer"
              alt=""
            />
            <p className=" text-title text-lg ml-4 text-center dark:text-dark-text">
              Duas Page
            </p>
          </div>
          <img
            src="/assets/tab/home/settings.svg"
            className="cursor-pointer "
            alt=""
          />
        </div>
        <div className="flex flex-row justify-between mb-5 px-5 py-4 bg-white rounded-2lg items-center cursor-pointer dark:bg-dark-bg lg-min:hidden">
          <p className="flex gap-x-2 style-Kalpurush text-title font-medium leading-[25px] dark:text-dark-text text-mss ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
            Dua's importance
          </p>
        </div>
      </div>
      <div
        id="sec_1"
        className="flex undefined mb-5 flex-row bg-white rounded-2lg px-5 py-4 justify-start items-center dark:bg-dark-bg"
      >
        <p className="text-title font-medium leading-[25px] dark:text-dark-text text-mss style-Kalpurush ">
          <span className="text-primary font-medium leading-[25px] text-mss style-Kalpurush">
            Section:
          </span>
          The servant is dependent on his Lord
        </p>
      </div>
      <div id="dua_2" className=" bg-white rounded-2lg mb-5 dark:bg-dark-bg">
        <div className="p-6">
          <div>
            <div className="flex flex-row justify-start items-center ">
              <img src="/assets/duacard.svg" alt="duacard" className="mr-3" />
              <p className="text-primary font-medium style-Kalpurush-dua-title">
                2. The servant is dependent on his Lord #2
              </p>
            </div>
          </div>
          <div className="flex flex-col justify-start items-start">
            <div className="w-full">
              <p
                className="style-Kalpurush style-inter dark:text-[#e4e4e4] mt-5 text-justify leading-8 font-normal"
                style={{ fontSize: 18 }}
              >
                <span>
                  {" "}
                  Prophet (ﷺ) used to say after every compulsory prayer, The
                  servant will ask his Lord for all of his religiously and
                  worldly needs, because the treasure of all things is in the
                  hands of Allah. Allah says (interpretation of the meaning):
                  “And there is not a thing but that with Us are its
                  depositories, and We do not send it down except according to a
                  known measure.” (Sura Al-Hijr 15:21) No one can withhold what
                  Allah gives; And, no one can give what he resists.
                </span>
              </p>
              <p
                dir="rtl"
                className="dark:text-[#e4e4e4] my-8 text-right leading-loose text-3xl"
                style={{ wordSpacing: 8, fontSize: 26, fontFamily: "me_quran" }}
              />
              <p>
                {" "}
                لَا إِلَهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيْكَ لَهُ، لَهُ
                الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ،
                اَللَّهُمَّ لَا مَانِعَ لِمَا أَعْطَيْتَ وَلَا مُعْطِيَ لِمَا
                مَنَعْتَ وَلَا يَنْفَعُ ذَا الْجَدِّ مِنْكَ الْجَدُّ
              </p>
              <p />
              <p
                className="style-Kalpurush style-inter dark:text-[#e4e4e4] my-5 text-justify leading-8 italic"
                style={{ fontSize: 18 }}
              >
                <span
                  id="transliteration"
                  className="style-Kalpurush style-Kalpurush-dua-title style-inter-dua-title font-medium"
                  style={{ fontSize: 18 }}
                >
                  Transliteration:
                </span>{" "}
                <span>
                  {" "}
                  Laa ilaaha illallahu wahdahu laa sharika lahu, lahul-mulku wa
                  lahul-hamdu wa huwa 'alaa kulli shay'in qadir. Allaahumma laa
                  maani'a limaa a'taita wa laa mu'tia limaa mana'ta wa laa
                  yanfa'u dhal-jaddi minka al-jaddu
                </span>
              </p>
              <p
                id="translation"
                className="style-Kalpurush style-inter dark:text-[#e4e4e4] my-5 text-title text-justify font-normal"
                style={{ fontSize: 18 }}
              >
                <span
                  className="style-Kalpurush style-Kalpurush-dua-title style-inter-dua-title font-medium"
                  style={{ fontSize: 18 }}
                >
                  Translation:
                </span>{" "}
                <span>
                  {" "}
                  There is none worthy of worship except Allah alone with no
                  partner or associate. He is the Dominion and to Him be all
                  praise, and He is able to do all things. O Allah, one can
                  withhold what You have given and none can give what You have
                  withheld, and no wealth or fortune can benefit anyone for from
                  You comes all wealth and fortune.
                </span>
              </p>
            </div>
            <div>
              <p
                className="mt-5 style-Kalpurush style-inter font-normal text-primary"
                style={{ fontSize: 18 }}
              >
                Reference:
              </p>
              <div
                className="mt-1 style-Kalpurush style-inter font-normal dark:text-dark-text"
                style={{ fontSize: 18 }}
              >
                <span> Bukhari: 844</span>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="flex flex-row items-center justify-between px-6">
            <div className="py-4 flex flex-row items-center xs:w-full xs:gap-x-4">
              <audio src="https://api.duaruqyah.com/duaaudiofinal/2.mp3" />
              <div className="flex flex-row items-center gap-x-3 xs:w-full">
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
              </div>
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
          <div
            className="rodal rodal-fade-leave"
            tabIndex={-1}
            style={{ display: "none", animationDuration: "300ms" }}
          >
            <div className="rodal-mask" />
            <div
              className="rodal-dialog rodal-zoom-leave"
              style={{
                width: 500,
                height: 490,
                animationDuration: "300ms",
                backgroundColor: "transparent",
                boxShadow: "none",
              }}
            >
              <div className="h-full border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-white bg-clip-padding rounded-2xl outline-none text-current dark:bg-dark-bg">
                <div className="text flex justify-between items-center px-6 pt-8">
                  <h5 className='text-lg font-bold  leading-5 text-gray-800" dark:text-dark-text'>
                    Favorite
                  </h5>
                </div>
                <div className="relative ">
                  <div className="flex justify-center items-start pb-6 xs:pb-0">
                    <div style={{ width: "87%" }}>
                      <div className="mt-5 pb-4">
                        <div className="block text-left font-medium text-base text-title mb-2 capitalize dark:text-dark-text xs:mb-3 xs:text-sm">
                          Folder Name
                        </div>
                        <div className="">
                          <div className="w-full">
                            <div className="relative">
                              <button
                                className="relative w-full cursor-default bg-white text-left focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm focus:outline-none focus:ring-1 focus:ring-primary px-6 py-3 border border-solid rounded-lg dark:bg-dark-bg-dark dark:border-none dark:focus:ring-1 dark:focus:ring-primary"
                                id="headlessui-listbox-button-:r8:"
                                type="button"
                                aria-haspopup="true"
                                aria-expanded="false"
                                data-headlessui-state=""
                              >
                                <span className="block truncate xs:text-sm">
                                  Favorite
                                </span>
                                <img
                                  className="absolute top-6 right-6 xs:top-4 sm:top-5 md:top-5"
                                  src="/assets/others/dropdown.svg"
                                  alt="dropdown"
                                />
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                      <label className="block">
                        <p className="text-left font-medium text-base leading-5 mb-2 xs:text-sm xs:mb-4 sm:mb-4">
                          Or,
                        </p>
                        <div className="mb-5">
                          <input
                            className="w-full h-12 px-4 py-4 border border-solid rounded-lg placeholder: placeholder:font-normal placeholder:text-sm placeholder:text-title placeholder:opacity-[.6] focus:outline-none focus:ring-1 focus:ring-primary dark:bg-dark-bg-dark dark:border-none dark:focus:ring-1 dark:focus:ring-primary dark:placeholder:text-[#dedede]"
                            type="text"
                            name="folder"
                            maxLength={15}
                            placeholder="Create New Bookmark Folder"
                          />
                        </div>
                      </label>
                      <label className="block">
                        <div className="mb-5">
                          <span className="block font-medium text-base text-title mb-[10px] text-left dark:text-dark-text xs:text-sm">
                            Change Folder Color
                          </span>
                          <div>
                            <div className="flex justify-between folder-grid">
                              <span className="bg-primary w-9 h-9 rounded-md flex justify-center items-center transition duration-75 delay-75 xs:w-7 xs:h-7">
                                <img
                                  src="/assets/popup/tickMark.svg"
                                  alt="tickMark"
                                />
                              </span>
                              <span className="bg-[#FFC107] w-9 h-9 rounded-md flex justify-center items-center xs:w-7 xs:h-7">
                                {" "}
                              </span>
                              <span className="bg-[#9C27B0] w-9 h-9 rounded-md flex justify-center items-center xs:w-7 xs:h-7">
                                {" "}
                              </span>
                              <span className="bg-[#2196F3] w-9 h-9 rounded-md flex justify-center items-center xs:w-7 xs:h-7">
                                {" "}
                              </span>
                              <span className="bg-[#E91E63] w-9 h-9 rounded-md flex justify-center items-center xs:w-7 xs:h-7">
                                {" "}
                              </span>
                              <span className="bg-[#3F51B5] w-9 h-9 rounded-md flex justify-center items-center xs:w-7 xs:h-7">
                                {" "}
                              </span>
                              <span className="bg-[#00BCD4] w-9 h-9 rounded-md flex justify-center items-center xs:w-7 xs:h-7">
                                {" "}
                              </span>
                              <span className="bg-[#8BC34A] w-9 h-9 rounded-md flex justify-center items-center xs:w-7 xs:h-7">
                                {" "}
                              </span>
                            </div>
                          </div>
                        </div>
                      </label>
                      <div className="w-full my-6">
                        <div className="grid float-right grid-cols-[160px,160px] gap-6 justify-items-end xs:grid-cols-[60px,50px] xs:pr-2 xs:pb-4 sm:gap-8 xs:gap-x-12">
                          <button
                            type="button"
                            className="w-40 h-11 inline-block bg-[#EDEDED] rounded-lg transition duration-150 ease-in-out font-medium text-base leading-5 text-[#6b6b6b] dark:bg-dark-bg-lite dark:text-gray-300 xs:bg-transparent xs:dark:bg-transparent xs:h-8 xs:w-fit "
                          >
                            Cancel
                          </button>
                          <button
                            type="button"
                            className="w-40 h-11 inline-block bg-primary rounded-lg transition duration-150 ease-in-out font-medium text-base leading-5 text-white xs:bg-transparent xs:text-primary xs:h-8 xs:w-fit"
                          >
                            Save
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="rodal rodal-fade-leave"
            tabIndex={-1}
            style={{ display: "none", animationDuration: "300ms" }}
          >
            <div className="rodal-mask" />
            <div
              className="rodal-dialog rodal-zoom-leave"
              style={{
                width: 500,
                height: 300,
                animationDuration: "300ms",
                backgroundColor: "transparent",
                boxShadow: "none",
              }}
            >
              <div className="bg-white dark:bg-dark-bg px-8 py-6 rounded-xl">
                <p className="text-start font-normal text-base leading-6 text-title dark:text-white">
                  Do you want to delete this dua from bookmark folder?
                </p>
                <div className="flex items-center justify-end mt-7 xs:flex-row">
                  <button
                    type="button"
                    className="w-40 h-11 inline-block bg-[#EDEDED] rounded-lg transition duration-150 ease-in-out font-medium text-base leading-5 text-[#6b6b6b] mr-6 dark:bg-gray-300 xs:bg-transparent xs:dark:bg-transparent"
                    data-bs-dismiss="modal"
                  >
                    Cancel
                  </button>
                  <button
                    type="button"
                    className="w-40 h-11 inline-block bg-[#FF3F3F] rounded-lg transition duration-150 ease-in-out ml-1 font-medium text-base leading-5 text-white xs:bg-transparent xs:text-red-500"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div
            className="rodal rodal-fade-leave"
            tabIndex={-1}
            style={{ display: "none", animationDuration: "300ms" }}
          >
            <div className="rodal-mask" />
            <div
              className="rodal-dialog rodal-zoom-leave"
              style={{
                width: 500,
                height: 410,
                animationDuration: "300ms",
                backgroundColor: "transparent",
                boxShadow: "none",
              }}
            >
              <div className="h-full border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-white bg-clip-padding rounded-2xl outline-none text-current dark:bg-dark-bg">
                <div className="text flex justify-between items-center px-6 pt-8">
                  <h5 className='text-lg font-bold  leading-5 text-gray-800" dark:text-dark-text'>
                    Choose Folder
                  </h5>
                </div>
                <div className="mx-8 pb-6 xs:pb-0">
                  <div className="mt-5 pb-4">
                    <div className="block text-left font-medium text-base text-title mb-2 capitalize dark:text-dark-text xs:mb-3 xs:text-sm">
                      Folder Name
                    </div>
                    <div className="">
                      <div className="w-full">
                        <div className="relative">
                          <button
                            className="relative w-full cursor-default bg-white text-left focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm focus:outline-none focus:ring-1 focus:ring-primary px-6 py-3 border border-solid rounded-lg dark:bg-dark-bg-dark dark:border-none dark:focus:ring-1 dark:focus:ring-primary"
                            id="headlessui-listbox-button-:r9:"
                            type="button"
                            aria-haspopup="true"
                            aria-expanded="false"
                            data-headlessui-state=""
                          >
                            <span className="block truncate xs:text-sm">
                              Favorite
                            </span>
                            <img
                              className="absolute top-6 right-6 xs:top-4 sm:top-5 md:top-5"
                              src="/assets/others/dropdown.svg"
                              alt="dropdown"
                            />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <label className="block">
                    <div className="mb-5">
                      <span className="block font-medium text-base text-title mb-4 text-left dark:text-dark-text xs:text-sm sm:text-sm sm:">
                        Or, Create New Plan
                      </span>
                      <input
                        className="w-full px-4 py-4 border border-solid rounded-lg placeholder:font-normal placeholder:text-sm placeholder:text-title placeholder:opacity-[.6] focus:outline-none focus:ring-1 focus:ring-primary text-sm xs:py-3 sm:py-3 dark:bg-dark-bg-dark dark:border-none dark:placeholder:text-[#96b2a4]"
                        type="text"
                        name="plan"
                        placeholder="Name of new plan"
                      />
                      <input
                        className="w-full px-4 py-4 border border-solid rounded-lg placeholder:font-normal placeholder:text-sm placeholder:text-title placeholder:opacity-[.6] focus:outline-none focus:ring-1 focus:ring-primary text-sm mt-4 xs:py-3 sm:py-3 dark:bg-dark-bg-dark dark:border-none dark:placeholder:text-[#96b2a4]"
                        type="number"
                        name="days"
                        min={1}
                        placeholder="Set number of days"
                      />
                    </div>
                  </label>
                  <div className="w-full my-6">
                    <div className="grid float-right grid-cols-[160px,160px] gap-6 justify-items-end xs:grid-cols-[60px,50px] xs:pr-2 xs:pb-4 sm:gap-8 xs:gap-x-12">
                      <button
                        type="button"
                        className="w-40 h-11 inline-block bg-[#EDEDED] rounded-lg transition duration-150 ease-in-out font-medium text-base leading-5 text-[#6b6b6b] dark:bg-dark-bg-lite dark:text-gray-300 xs:bg-transparent xs:dark:bg-transparent xs:h-8 xs:w-fit "
                      >
                        Cancel
                      </button>
                      <button
                        type="button"
                        className="w-40 h-11 inline-block bg-primary rounded-lg transition duration-150 ease-in-out font-medium text-base leading-5 text-white xs:bg-transparent xs:text-primary xs:h-8 xs:w-fit"
                      >
                        Save
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="rodal rodal-fade-leave"
            tabIndex={-1}
            style={{ display: "none", animationDuration: "300ms" }}
          >
            <div className="rodal-mask" />
            <div
              className="rodal-dialog rodal-zoom-leave"
              style={{
                width: 500,
                height: 370,
                animationDuration: "300ms",
                backgroundColor: "transparent",
                boxShadow: "none",
              }}
            >
              <div className="border-none shadow-lg relative flex flex-col w-full h-full pointer-events-auto bg-white bg-clip-padding rounded-2xl outline-none text-current dark:bg-dark-bg">
                <div className="text flex justify-between items-center px-6 pt-8">
                  <h5 className='text-lg font-bold  leading-5 text-gray-800" dark:text-dark-text'>
                    Share This Dua
                  </h5>
                </div>
                <div className="px-8 pb-6 xs:pb-3">
                  <label className="block">
                    <div className="mb-5">
                      <span className="block font-medium text-base text-title text-left dark:text-[#fff9] my-4">
                        Share With Social Media
                      </span>
                      <div className="grid grid-cols-5 gap-4 mt-2 xl:gap-x-0 2xl:gap-x-0 3xl:gap-x-2">
                        <button
                          aria-label="facebook"
                          className="react-share__ShareButton"
                          style={{
                            backgroundColor: "transparent",
                            border: "none",
                            padding: 0,
                            font: "inherit",
                            color: "inherit",
                            cursor: "pointer",
                          }}
                        >
                          <svg viewBox="0 0 64 64" width={32} height={32}>
                            <circle cx={32} cy={32} r={31} fill="#3b5998" />
                            <path
                              d="M34.1,47V33.3h4.6l0.7-5.3h-5.3v-3.4c0-1.5,0.4-2.6,2.6-2.6l2.8,0v-4.8c-0.5-0.1-2.2-0.2-4.1-0.2 c-4.1,0-6.9,2.5-6.9,7V28H24v5.3h4.6V47H34.1z"
                              fill="white"
                            />
                          </svg>
                        </button>
                        <button
                          aria-label="twitter"
                          className="react-share__ShareButton"
                          style={{
                            backgroundColor: "transparent",
                            border: "none",
                            padding: 0,
                            font: "inherit",
                            color: "inherit",
                            cursor: "pointer",
                          }}
                        >
                          <svg viewBox="0 0 64 64" width={32} height={32}>
                            <circle cx={32} cy={32} r={31} fill="#00aced" />
                            <path
                              d="M48,22.1c-1.2,0.5-2.4,0.9-3.8,1c1.4-0.8,2.4-2.1,2.9-3.6c-1.3,0.8-2.7,1.3-4.2,1.6 C41.7,19.8,40,19,38.2,19c-3.6,0-6.6,2.9-6.6,6.6c0,0.5,0.1,1,0.2,1.5c-5.5-0.3-10.3-2.9-13.5-6.9c-0.6,1-0.9,2.1-0.9,3.3 c0,2.3,1.2,4.3,2.9,5.5c-1.1,0-2.1-0.3-3-0.8c0,0,0,0.1,0,0.1c0,3.2,2.3,5.8,5.3,6.4c-0.6,0.1-1.1,0.2-1.7,0.2c-0.4,0-0.8,0-1.2-0.1 c0.8,2.6,3.3,4.5,6.1,4.6c-2.2,1.8-5.1,2.8-8.2,2.8c-0.5,0-1.1,0-1.6-0.1c2.9,1.9,6.4,2.9,10.1,2.9c12.1,0,18.7-10,18.7-18.7 c0-0.3,0-0.6,0-0.8C46,24.5,47.1,23.4,48,22.1z"
                              fill="white"
                            />
                          </svg>
                        </button>
                        <button
                          aria-label="telegram"
                          className="react-share__ShareButton"
                          style={{
                            backgroundColor: "transparent",
                            border: "none",
                            padding: 0,
                            font: "inherit",
                            color: "inherit",
                            cursor: "pointer",
                          }}
                        >
                          <svg viewBox="0 0 64 64" width={32} height={32}>
                            <circle cx={32} cy={32} r={31} fill="#37aee2" />
                            <path
                              d="m45.90873,15.44335c-0.6901,-0.0281 -1.37668,0.14048 -1.96142,0.41265c-0.84989,0.32661 -8.63939,3.33986 -16.5237,6.39174c-3.9685,1.53296 -7.93349,3.06593 -10.98537,4.24067c-3.05012,1.1765 -5.34694,2.05098 -5.4681,2.09312c-0.80775,0.28096 -1.89996,0.63566 -2.82712,1.72788c-0.23354,0.27218 -0.46884,0.62161 -0.58825,1.10275c-0.11941,0.48114 -0.06673,1.09222 0.16682,1.5716c0.46533,0.96052 1.25376,1.35737 2.18443,1.71383c3.09051,0.99037 6.28638,1.93508 8.93263,2.8236c0.97632,3.44171 1.91401,6.89571 2.84116,10.34268c0.30554,0.69185 0.97105,0.94823 1.65764,0.95525l-0.00351,0.03512c0,0 0.53908,0.05268 1.06412,-0.07375c0.52679,-0.12292 1.18879,-0.42846 1.79109,-0.99212c0.662,-0.62161 2.45836,-2.38812 3.47683,-3.38552l7.6736,5.66477l0.06146,0.03512c0,0 0.84989,0.59703 2.09312,0.68132c0.62161,0.04214 1.4399,-0.07726 2.14229,-0.59176c0.70766,-0.51626 1.1765,-1.34683 1.396,-2.29506c0.65673,-2.86224 5.00979,-23.57745 5.75257,-27.00686l-0.02107,0.08077c0.51977,-1.93157 0.32837,-3.70159 -0.87096,-4.74991c-0.60054,-0.52152 -1.2924,-0.7498 -1.98425,-0.77965l0,0.00176zm-0.2072,3.29069c0.04741,0.0439 0.0439,0.0439 0.00351,0.04741c-0.01229,-0.00351 0.14048,0.2072 -0.15804,1.32576l-0.01229,0.04214l-0.00878,0.03863c-0.75858,3.50668 -5.15554,24.40802 -5.74203,26.96472c-0.08077,0.34417 -0.11414,0.31959 -0.09482,0.29852c-0.1756,-0.02634 -0.50045,-0.16506 -0.52679,-0.1756l-13.13468,-9.70175c4.4988,-4.33199 9.09945,-8.25307 13.744,-12.43229c0.8218,-0.41265 0.68483,-1.68573 -0.29852,-1.70681c-1.04305,0.24584 -1.92279,0.99564 -2.8798,1.47502c-5.49971,3.2626 -11.11882,6.13186 -16.55882,9.49279c-2.792,-0.97105 -5.57873,-1.77704 -8.15298,-2.57601c2.2336,-0.89555 4.00889,-1.55579 5.75608,-2.23009c3.05188,-1.1765 7.01687,-2.7042 10.98537,-4.24067c7.94051,-3.06944 15.92667,-6.16346 16.62028,-6.43037l0.05619,-0.02283l0.05268,-0.02283c0.19316,-0.0878 0.30378,-0.09658 0.35471,-0.10009c0,0 -0.01756,-0.05795 -0.00351,-0.04566l-0.00176,0zm-20.91715,22.0638l2.16687,1.60145c-0.93418,0.91311 -1.81743,1.77353 -2.45485,2.38812l0.28798,-3.98957"
                              fill="white"
                            />
                          </svg>
                        </button>
                        <button
                          aria-label="tumblr"
                          className="react-share__ShareButton"
                          style={{
                            backgroundColor: "transparent",
                            border: "none",
                            padding: 0,
                            font: "inherit",
                            color: "inherit",
                            cursor: "pointer",
                          }}
                        >
                          <svg viewBox="0 0 64 64" width={32} height={32}>
                            <circle cx={32} cy={32} r={31} fill="#2c4762" />
                            <path
                              d="M39.2,41c-0.6,0.3-1.6,0.5-2.4,0.5c-2.4,0.1-2.9-1.7-2.9-3v-9.3h6v-4.5h-6V17c0,0-4.3,0-4.4,0 c-0.1,0-0.2,0.1-0.2,0.2c-0.3,2.3-1.4,6.4-5.9,8.1v3.9h3V39c0,3.4,2.5,8.1,9,8c2.2,0,4.7-1,5.2-1.8L39.2,41z"
                              fill="white"
                            />
                          </svg>
                        </button>
                        <button
                          aria-label="whatsapp"
                          className="react-share__ShareButton"
                          style={{
                            backgroundColor: "transparent",
                            border: "none",
                            padding: 0,
                            font: "inherit",
                            color: "inherit",
                            cursor: "pointer",
                          }}
                        >
                          <svg viewBox="0 0 64 64" width={32} height={32}>
                            <circle cx={32} cy={32} r={31} fill="#25D366" />
                            <path
                              d="m42.32286,33.93287c-0.5178,-0.2589 -3.04726,-1.49644 -3.52105,-1.66732c-0.4712,-0.17346 -0.81554,-0.2589 -1.15987,0.2589c-0.34175,0.51004 -1.33075,1.66474 -1.63108,2.00648c-0.30032,0.33658 -0.60064,0.36247 -1.11327,0.12945c-0.5178,-0.2589 -2.17994,-0.80259 -4.14759,-2.56312c-1.53269,-1.37217 -2.56312,-3.05503 -2.86603,-3.57283c-0.30033,-0.5178 -0.03366,-0.80259 0.22524,-1.06149c0.23301,-0.23301 0.5178,-0.59547 0.7767,-0.90616c0.25372,-0.31068 0.33657,-0.5178 0.51262,-0.85437c0.17088,-0.36246 0.08544,-0.64725 -0.04402,-0.90615c-0.12945,-0.2589 -1.15987,-2.79613 -1.58964,-3.80584c-0.41424,-1.00971 -0.84142,-0.88027 -1.15987,-0.88027c-0.29773,-0.02588 -0.64208,-0.02588 -0.98382,-0.02588c-0.34693,0 -0.90616,0.12945 -1.37736,0.62136c-0.4712,0.5178 -1.80194,1.76053 -1.80194,4.27186c0,2.51134 1.84596,4.945 2.10227,5.30747c0.2589,0.33657 3.63497,5.51458 8.80262,7.74113c1.23237,0.5178 2.1903,0.82848 2.94111,1.08738c1.23237,0.38836 2.35599,0.33657 3.24402,0.20712c0.99159,-0.15534 3.04985,-1.24272 3.47963,-2.45956c0.44013,-1.21683 0.44013,-2.22654 0.31068,-2.45955c-0.12945,-0.23301 -0.46601,-0.36247 -0.98382,-0.59548m-9.40068,12.84407l-0.02589,0c-3.05503,0 -6.08417,-0.82849 -8.72495,-2.38189l-0.62136,-0.37023l-6.47252,1.68286l1.73463,-6.29129l-0.41424,-0.64725c-1.70875,-2.71846 -2.6149,-5.85116 -2.6149,-9.07706c0,-9.39809 7.68934,-17.06155 17.15993,-17.06155c4.58253,0 8.88029,1.78642 12.11655,5.02268c3.23625,3.21036 5.02267,7.50812 5.02267,12.06476c-0.0078,9.3981 -7.69712,17.06155 -17.14699,17.06155m14.58906,-31.58846c-3.93529,-3.80584 -9.1133,-5.95471 -14.62789,-5.95471c-11.36055,0 -20.60848,9.2065 -20.61625,20.52564c0,3.61684 0.94757,7.14565 2.75211,10.26282l-2.92557,10.63564l10.93337,-2.85309c3.0136,1.63108 6.4052,2.4958 9.85634,2.49839l0.01037,0c11.36574,0 20.61884,-9.2091 20.62403,-20.53082c0,-5.48093 -2.14111,-10.64081 -6.03239,-14.51915"
                              fill="white"
                            />
                          </svg>
                        </button>
                        <button
                          aria-label="linkedin"
                          className="react-share__ShareButton"
                          style={{
                            backgroundColor: "transparent",
                            border: "none",
                            padding: 0,
                            font: "inherit",
                            color: "inherit",
                            cursor: "pointer",
                          }}
                        >
                          <svg viewBox="0 0 64 64" width={32} height={32}>
                            <circle cx={32} cy={32} r={31} fill="#007fb1" />
                            <path
                              d="M20.4,44h5.4V26.6h-5.4V44z M23.1,18c-1.7,0-3.1,1.4-3.1,3.1c0,1.7,1.4,3.1,3.1,3.1 c1.7,0,3.1-1.4,3.1-3.1C26.2,19.4,24.8,18,23.1,18z M39.5,26.2c-2.6,0-4.4,1.4-5.1,2.8h-0.1v-2.4h-5.2V44h5.4v-8.6 c0-2.3,0.4-4.5,3.2-4.5c2.8,0,2.8,2.6,2.8,4.6V44H46v-9.5C46,29.8,45,26.2,39.5,26.2z"
                              fill="white"
                            />
                          </svg>
                        </button>
                        <button
                          aria-label="reddit"
                          className="react-share__ShareButton"
                          style={{
                            backgroundColor: "transparent",
                            border: "none",
                            padding: 0,
                            font: "inherit",
                            color: "inherit",
                            cursor: "pointer",
                          }}
                        >
                          <svg viewBox="0 0 64 64" width={32} height={32}>
                            <circle cx={32} cy={32} r={31} fill="#ff4500" />
                            <path
                              d="m 52.8165,31.942362 c 0,-2.4803 -2.0264,-4.4965 -4.5169,-4.4965 -1.2155,0 -2.3171,0.4862 -3.128,1.2682 -3.077,-2.0247 -7.2403,-3.3133 -11.8507,-3.4782 l 2.5211,-7.9373 6.8272,1.5997 -0.0102,0.0986 c 0,2.0281 1.6575,3.6771 3.6958,3.6771 2.0366,0 3.6924,-1.649 3.6924,-3.6771 0,-2.0281 -1.6575,-3.6788 -3.6924,-3.6788 -1.564,0 -2.8968,0.9758 -3.4357,2.3443 l -7.3593,-1.7255 c -0.3213,-0.0782 -0.6477,0.1071 -0.748,0.4233 L 32,25.212062 c -4.8246,0.0578 -9.1953,1.3566 -12.41,3.4425 -0.8058,-0.7446 -1.8751,-1.2104 -3.0583,-1.2104 -2.4905,0 -4.5152,2.0179 -4.5152,4.4982 0,1.649 0.9061,3.0787 2.2389,3.8607 -0.0884,0.4794 -0.1462,0.9639 -0.1462,1.4569 0,6.6487 8.1736,12.0581 18.2223,12.0581 10.0487,0 18.224,-5.4094 18.224,-12.0581 0,-0.4658 -0.0493,-0.9248 -0.1275,-1.377 1.4144,-0.7599 2.3885,-2.2304 2.3885,-3.9406 z m -29.2808,3.0872 c 0,-1.4756 1.207,-2.6775 2.6894,-2.6775 1.4824,0 2.6877,1.2019 2.6877,2.6775 0,1.4756 -1.2053,2.6758 -2.6877,2.6758 -1.4824,0 -2.6894,-1.2002 -2.6894,-2.6758 z m 15.4037,7.9373 c -1.3549,1.3481 -3.4816,2.0043 -6.5008,2.0043 l -0.0221,-0.0051 -0.0221,0.0051 c -3.0209,0 -5.1476,-0.6562 -6.5008,-2.0043 -0.2465,-0.2448 -0.2465,-0.6443 0,-0.8891 0.2465,-0.2465 0.6477,-0.2465 0.8942,0 1.105,1.0999 2.9393,1.6337 5.6066,1.6337 l 0.0221,0.0051 0.0221,-0.0051 c 2.6673,0 4.5016,-0.5355 5.6066,-1.6354 0.2465,-0.2465 0.6477,-0.2448 0.8942,0 0.2465,0.2465 0.2465,0.6443 0,0.8908 z m -0.3213,-5.2615 c -1.4824,0 -2.6877,-1.2002 -2.6877,-2.6758 0,-1.4756 1.2053,-2.6775 2.6877,-2.6775 1.4824,0 2.6877,1.2019 2.6877,2.6775 0,1.4756 -1.2053,2.6758 -2.6877,2.6758 z"
                              fill="white"
                            />
                          </svg>
                        </button>
                        <button
                          aria-label="email"
                          className="react-share__ShareButton"
                          style={{
                            backgroundColor: "transparent",
                            border: "none",
                            padding: 0,
                            font: "inherit",
                            color: "inherit",
                            cursor: "pointer",
                          }}
                        >
                          <svg viewBox="0 0 64 64" width={32} height={32}>
                            <circle cx={32} cy={32} r={31} fill="#7f7f7f" />
                            <path
                              d="M17,22v20h30V22H17z M41.1,25L32,32.1L22.9,25H41.1z M20,39V26.6l12,9.3l12-9.3V39H20z"
                              fill="white"
                            />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </label>
                  <label className="block ">
                    <div className="mb-5">
                      <span className="block font-medium text-base text-title mb-4 text-left dark:text-dark-text xs:text-sm sm:text-sm">
                        Or, Copy Link
                      </span>
                      <div className="relative">
                        <input
                          id="shareLink"
                          className=" w-full px-4 py-4 border border-solid rounded-lg placeholder:font-normal placeholder:text-sm focus:outline-none focus:ring-1 focus:ring-primary font-normal text-sm leading-6 text-title dark:border-none dark:bg-dark-bg-dark dark:text-[#fff9] xs:py-3 xs:text-xs sm:py-3 md:py-3"
                          type="text"
                          name="plan"
                          defaultValue="https://duaruqyah.com/dua/2"
                        />
                        <img
                          className="absolute top-3 right-5 xs:top-2"
                          src="/assets/popup/copy.svg"
                          alt="copy"
                        />
                      </div>
                    </div>
                  </label>
                  <div className="w-full my-6">
                    <div className="grid float-right grid-cols-[160px,160px] gap-6 justify-items-end xs:grid-cols-[60px,50px] xs:pr-2 xs:pb-4 sm:gap-8 xs:gap-x-12">
                      <button
                        type="button"
                        className="w-40 h-11 inline-block bg-[#EDEDED] rounded-lg transition duration-150 ease-in-out font-medium text-base leading-5 text-[#6b6b6b] dark:bg-dark-bg-lite dark:text-gray-300 xs:bg-transparent xs:dark:bg-transparent xs:h-8 xs:w-fit "
                      >
                        Cancel
                      </button>
                      <button
                        type="button"
                        className="w-40 h-11 inline-block bg-primary rounded-lg transition duration-150 ease-in-out font-medium text-base leading-5 text-white xs:bg-transparent xs:text-primary xs:h-8 xs:w-fit"
                      >
                        Share
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="rodal rodal-fade-leave"
            tabIndex={-1}
            style={{ display: "none", animationDuration: "300ms" }}
          >
            <div className="rodal-mask" />
            <div
              className="rodal-dialog rodal-zoom-leave"
              style={{
                width: 500,
                height: 520,
                animationDuration: "300ms",
                backgroundColor: "transparent",
                boxShadow: "none",
              }}
            >
              <div className="shadow-lg relative flex flex-col w-full h-full pointer-events-auto bg-white bg-clip-padding rounded-2xl outline-none text-current dark:bg-dark-bg pb-6 xs:pb-0">
                <div className="text flex justify-between items-center px-6 pt-8">
                  <h5 className='text-lg font-bold  leading-5 text-gray-800" dark:text-dark-text'>
                    Report Us
                  </h5>
                </div>
                <div className="px-8 ">
                  <div className="text-left rounded-2xl mt-4 w-full">
                    <label>
                      <div className="mb-3 w-full">
                        <span className="block font-medium text-base text-title mb-2 capitalize dark:text-[#fff9]">
                          Email{" "}
                          <span className=" font-medium text-base text-[#FF3F3F]">
                            *
                          </span>
                        </span>
                        <input
                          className="bg-white w-full px-6 py-4 border border-solid rounded-lg placeholder: placeholder:font-normal placeholder:text-sm placeholder:text-title placeholder:opacity-[.6] focus:outline-none focus:ring-1 focus:ring-primary dark:placeholder:text-[#96a2b4] dark:bg-dark-bg-dark dark:border-none xs:px-4 xs:py-3 xs:text-sm xs:placeholder:text-sm xs:placeholder:opacity-[.6] xs:rounded-md"
                          type="email"
                          name="[object Object]"
                          placeholder="Enter Your Valid Email"
                        />
                      </div>
                    </label>
                    <label>
                      <span className="block font-medium text-base text-title mb-2 capitalize dark:text-[#fff9]">
                        Message{" "}
                        <span className=" font-medium text-base text-[#FF3F3F]">
                          *
                        </span>
                      </span>
                      <div className="mb-3">
                        <textarea
                          className="bg-white min-w-full px-4 py-4 border border-solid rounded-lg placeholder: placeholder:font-normal placeholder:text-sm placeholder:text-title placeholder:opacity-[.6] placeholder:-z-10 focus:outline-none focus:ring-1 focus:ring-primary dark:bg-dark-bg-dark dark:border-none dark:placeholder:text-[#96a2b4] "
                          name="[object Object]"
                          placeholder="Write the problems you found..."
                          defaultValue={""}
                        />
                      </div>
                    </label>
                    <div className="w-full my-6">
                      <div className="grid float-right grid-cols-[160px,160px] gap-6 justify-items-end xs:grid-cols-[60px,50px] xs:pr-2 xs:pb-4 sm:gap-8 xs:gap-x-12">
                        <button
                          type="button"
                          className="w-40 h-11 inline-block bg-[#EDEDED] rounded-lg transition duration-150 ease-in-out font-medium text-base leading-5 text-[#6b6b6b] dark:bg-dark-bg-lite dark:text-gray-300 xs:bg-transparent xs:dark:bg-transparent xs:h-8 xs:w-fit "
                        >
                          Cancel
                        </button>
                        <button
                          type="button"
                          className="w-40 h-11 inline-block bg-primary rounded-lg transition duration-150 ease-in-out font-medium text-base leading-5 text-white xs:bg-transparent xs:text-primary xs:h-8 xs:w-fit"
                        >
                          Submit
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
