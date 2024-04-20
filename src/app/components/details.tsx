"use client";
import React from "react";
import "../globals.css";
import DrawCube from "../../../public/animation/gif/giphy.gif"
import Image from "next/image";
import { FaCheck } from "react-icons/fa6";
import BugTester from "../../../public/imgs/svg/Software-tester.svg"
import CodingSVG from "../../../public/imgs/svg/Programing.png"

const Details = () => {
    return (
        <div className=" z-50 px-9 md:px-16 flex flex-col duration-300 overflow-hidden relative vertical-sections-padding gap-3 items-center bg-black justify-center h-auto  w-full ">
            <div className="flex w-full items-center gap-4">
                <span className="bg-white w-16  h-[2px]"></span>
                <p className="text-sm text-gray-300">Our Service Benefits</p>
            </div>
            <div className="w-full flex flex-wrap lg:flex-nowrap  duration-300 gap-4 h-full  items-center justify-between">
                <div className="  h-full flex duration-300 flex-col  items-start justify-start cards-border-dark p-5 rounded-md  gap-4 w-full">
                    <div className=" w-full flex items-start flex-col gap-4">
                        <div className="w-full">
                            <h1 className="  text-base sm:text-2xl font-bold text-white">Working with us</h1>
                        </div>
                    </div>
                    <div className="flex flex-col items-start gap-3">
                        <span className="flex items-center justify-center gap-3">
                            <FaCheck style={{ padding: 2 }} className=" rounded-full text-sm sm:text-lg bg-white text-black" />
                            <p className="text-gray-400 text-sm">Streamlined Development Process</p>
                        </span>
                        <span className="flex items-center justify-center gap-3">
                            <FaCheck style={{ padding: 2 }} className=" rounded-full text-sm sm:text-lg bg-white text-black" />
                            <p className="text-gray-400 text-sm">Cross-Platform Compatibility</p>
                        </span>
                        <span className="flex items-center justify-center gap-3">
                            <FaCheck style={{ padding: 2 }} className=" rounded-full text-sm sm:text-lg bg-white text-black" />
                            <p className="text-gray-400 text-sm">Data-Driven Insights</p>
                        </span>
                        <span className="flex items-center justify-center gap-3">
                            <FaCheck style={{ padding: 2 }} className=" rounded-full text-sm sm:text-lg bg-white text-black" />
                            <p className="text-gray-400 text-sm">Expert Guidance</p>
                        </span>
                    </div>
                    <div className="hidden lg:flex">
                        <button className=" py-2 px-5 bg-white text-black rounded-sm">See our Portfolio</button>
                    </div>
                    <div className="flex sm:hidden">
                        <button className=" py-2 px-5 bg-white text-black rounded-sm">See our Portfolio</button>
                    </div>
                </div>
                <div className="  h-full flex duration-300 flex-col  items-start justify-start cards-border-dark p-5 rounded-md  gap-4 w-full">
                    <div className=" w-full flex items-start flex-col gap-4">
                        <div className="w-full">
                            <h1 className="  text-base sm:text-2xl font-bold text-white">Project Performance</h1>
                        </div>
                    </div>
                    <div className="flex flex-col items-start gap-3">
                        <span className="flex items-center justify-center gap-3">
                            <FaCheck style={{ padding: 2 }} className=" rounded-full text-sm sm:text-lg bg-white text-black" />
                            <p className="text-gray-400 text-sm">Enhanced User Engagement</p>
                        </span>
                        <span className="flex items-center justify-center gap-3">
                            <FaCheck style={{ padding: 2 }} className=" rounded-full text-sm sm:text-lg bg-white text-black" />
                            <p className="text-gray-400 text-sm">Improved Brand Perception</p>
                        </span>
                        <span className="flex items-center justify-center gap-3">
                            <FaCheck style={{ padding: 2 }} className=" rounded-full text-sm sm:text-lg bg-white text-black" />
                            <p className="text-gray-400 text-sm">Boosted Conversion Rates</p>
                        </span>
                        <span className="flex items-center justify-center gap-3">
                            <FaCheck style={{ padding: 2 }} className=" rounded-full text-sm sm:text-lg bg-white text-black" />
                            <p className="text-gray-400 text-sm">Scalable Solutions</p>
                        </span>
                    </div>
                    <div className="hidden lg:flex">
                        <button className=" py-2 px-5 bg-white text-black rounded-sm">See our Portfolio</button>
                    </div>
                    <div className="flex sm:hidden">
                        <button className=" py-2 px-5 bg-white text-black rounded-sm">See our Portfolio</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Details;
