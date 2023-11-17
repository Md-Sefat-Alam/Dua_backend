"use client";
import React, { useEffect, useRef, useState } from "react";

type Props = { audio: string };

export default function Audio({ audio }: Props) {
  const [isPlaying, setPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);
  const [currentTime, setCurrentTime] = useState(0);
  const [isLooping, setLooping] = useState(false);

  const togglePlay = () => {
    if (isPlaying) {
      audioRef.current?.pause();
    } else {
      audioRef.current?.play();
    }
    setPlaying(!isPlaying);
  };

  const handlePause = () => {
    setPlaying(false);
  };

  const handlePlay = () => {
    setPlaying(true);
  };

  const updateCurrentTime = () => {
    if (audioRef.current) {
      setCurrentTime(audioRef.current.currentTime);
    }
  };

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.addEventListener("timeupdate", updateCurrentTime);
    }

    return () => {
      if (audioRef.current) {
        audioRef.current.removeEventListener("timeupdate", updateCurrentTime);
      }
    };
  }, []);

  const formatTime = (time: number, isRemaining: boolean = false) => {
    const duration = audioRef.current?.duration || 0;
    const remainingTime = isRemaining ? duration - time : time;

    const minutes = Math.floor(remainingTime / 60);
    const seconds = Math.floor(remainingTime % 60);

    return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(
      2,
      "0"
    )}`;
  };

  return (
    <>
      <audio
        ref={audioRef}
        src={audio}
        onPlay={handlePlay}
        onPause={handlePause}
        loop={isLooping}
      />
      <div className="flex flex-row items-center">
        <img
          className="cursor-pointer"
          src={`/assets/others/${isPlaying ? "play" : "pause"}.svg`}
          alt=""
          onClick={togglePlay}
        />
      </div>
      <div
        className={`py-4 flex flex-row items-center transition-all delay-300 ease-linear ${
          isPlaying ? "visible" : "invisible"
        }`}
      >
        <div className="flex flex-row items-center ml-4">
          <input
            className=""
            type="range"
            min={0}
            max={audioRef.current?.duration || 0}
            value={currentTime}
            onChange={(e) => {
              if (audioRef.current) {
                audioRef.current.currentTime = parseFloat(e.target.value);
              }
            }}
            defaultValue="0"
            style={{ backgroundSize: "39.3067% 100%" }}
          />
        </div>
        <div className="w-20 flex justify-center">
          <p className="ml-2 text-mute-grey-200 text-sm dark:text-dark-text">
            {formatTime(currentTime, true)}
          </p>
        </div>
        <div
          onClick={() => {
            setLooping((prev) => !prev);
          }}
          className={`w-20 flex justify-center ${
            isLooping ? "bg-[#E8F0F5] p-1 rounded-md" : ""
          }`}
        >
          <img
            className="cursor-pointer w-8 false"
            alt="suffle"
            src="/assets/memorize/suffle.svg"
          />
        </div>
      </div>
    </>
  );
}
