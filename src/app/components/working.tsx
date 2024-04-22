"use client";
import React from "react";
import "../globals.css";
import DrawCube from "../../../public/animation/gif/giphy.gif"
import Image from "next/image";
import  Link  from "next/link";

const Working = () => {
    return (
        <div className=" z-50 px-9 md:px-16 vertical-sections-padding duration-300 relative flex items-center bg-black justify-center h-auto  w-full ">
            <div className="w-full flex flex-wrap lg:flex-nowrap duration-300 gap-4 h-full  items-center justify-between">
                <div className="  h-full flex duration-300 flex-col items-start justify-center  gap-4 w-full">
                    <div className=" w-full flex flex-col gap-4">
                        <div className="flex items-center gap-4">
                            <span className="bg-white w-16  h-[2px]"></span>
                            <p className="text-sm text-gray-300">Why Choose Us</p>
                        </div>
                        <div className="w-full">
                            <h1 className="  text-2xl font-bold text-white">Experiance</h1>
                        </div>
                    </div>
                    <div className="flex flex-col gap-2">
                        <p className="text-gray-400 text-sm">We bring a fresh perspective coupled with seasoned expertise to every project. Despite our relatively short tenure, our team has swiftly established a reputation for delivering innovative solutions and outstanding results. We leverage our collective knowledge and adaptability to meet the dynamic needs of our clients</p>
                        <p className="text-gray-400 text-sm">ensuring that each engagement is marked by excellence, efficiency, and a commitment to surpassing expectations</p>
                    </div>
                    <div className="hidden lg:flex">
                        <Link href="/ourprojects" className=" py-2 px-5 bg-white text-black rounded-sm">See our Portfolio</Link>
                    </div>
                    <div className="flex sm:hidden">
                        <Link href="/ourprojects" className=" py-2 px-5 bg-white text-black rounded-sm">See our Portfolio</Link>
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
                        <Link href="/ourprojects" className=" py-2 px-5 bg-white text-black rounded-sm">See our Portfolio</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Working;
