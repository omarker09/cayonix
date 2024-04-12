"use client";
import React from "react";
import "../globals.css";
import CodingGif from "../../../public/animation/gif/giphy.gif"
import Image from "next/image";

const Working = () => {
  return (
    <div className=" z-50 px-16 relative flex items-center bg-black justify-center h-96  w-full ">
        <div className="w-full flex h-full py-7 items-center justify-between">
            <div className="  h-full flex flex-col items-start justify-center  gap-4 w-full">
                <div className=" w-full flex flex-col gap-4">
                    <div className="flex items-center gap-4">
                        <span className="bg-white w-16  h-[2px]"></span>
                        <p className="text-sm text-gray-300">Why CHOOSE US</p>
                    </div>
                    <div className="w-full">
                        <h1 className=" w-96 text-2xl">We Are Working with 2</h1>
                        <h1 className=" text-white text-2xl">Years Of Experiance</h1>
                    </div>
                </div>
                <div>
                    <p className="text-gray-400 text-sm">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora, exercitationem maiores? Eius rem laborum illo. Nemo eos repellat ducimus hic voluptatum excepturi, ullam, totam nam animi dolorum fugiat officiis commodi.</p>
                </div>
                <div>
                    <button className=" py-2 px-5 bg-white text-black rounded-sm">See our Portfolio</button>
                </div>
            </div>
            <div className="  h-full w-full p-10">
                <Image
                alt="coding gif"
                src={CodingGif}
                className="h-full w-full rounded-lg disable-select-drag"
                />
            </div>
        </div>
    </div>
  );
};

export default Working;
