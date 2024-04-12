"use client";
import React from "react";
import "../globals.css";
import DrawCube from "../../../public/animation/gif/giphy.gif"
import Image from "next/image";

const Working = () => {
    return (
        <div className=" z-50 px-9 md:px-16 py-7 duration-300 relative flex items-center bg-black justify-center h-auto  w-full ">
            <div className="w-full flex flex-wrap lg:flex-nowrap duration-300 gap-4 h-full py-7 items-center justify-between">
                <div className="  h-full flex duration-300 flex-col items-start justify-center  gap-4 w-full">
                    <div className=" w-full flex flex-col gap-4">
                        <div className="flex items-center gap-4">
                            <span className="bg-white w-16  h-[2px]"></span>
                            <p className="text-sm text-gray-300">Why CHOOSE US</p>
                        </div>
                        <div className="w-full">
                            <h1 className="  text-2xl font-bold">We Are Working with 2</h1>
                            <h1 className=" text-white text-2xl font-bold">Years Of Experiance</h1>
                        </div>
                    </div>
                    <div>
                        <p className="text-gray-400 text-sm">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora, exercitationem maiores? Eius rem laborum illo. Nemo eos repellat ducimus hic voluptatum excepturi, ullam, totam nam animi dolorum fugiat officiis commodi.</p>
                    </div>
                    <div className="hidden lg:flex">
                        <button className=" py-2 px-5 bg-white text-black rounded-sm">See our Portfolio</button>
                    </div>
                    <div className="flex sm:hidden">
                        <button className=" py-2 px-5 bg-white text-black rounded-sm">See our Portfolio</button>
                    </div>
                </div>
                <div className=" hidden sm:flex flex-col items-start justify-start gap-4 h-full w-full py-0 ">
                    {/*
                        <Image
                        alt="coding gif"
                        src={DrawCube}
                        className="h-60 w-full object-fill rounded-lg disable-select-drag "
                    />
                    */}
                    <div className=" flex lg:hidden">
                        <button className=" py-2 px-5 bg-white text-black rounded-sm">See our Portfolio</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Working;
