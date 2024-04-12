"use client";
import React from "react";
import "../globals.css";
import CodingGif from "../../../public/animation/gif/giphy.gif"
import Image from "next/image";
import { BsGrid1X2Fill } from "react-icons/bs";

const Services = () => {
    return (
        <div className=" z-50 px-9 md:px-16 bg-black py-8">
            <div className="  h-full flex duration-300 flex-col items-start justify-center  gap-6 w-full">
                <div className=" w-full flex flex-col gap-4">
                    <div className="flex items-center gap-4">
                        <span className="bg-white w-16  h-[2px]"></span>
                        <p className="text-sm text-gray-300">Our Services</p>
                    </div>
                    <div className="w-full">
                        <h1 className="  text-2xl font-bold">Unlocking Your Services</h1>
                    </div>
                </div>
                <div className="w-full items-center flex gap-5 justify-between">
                    <div className="cursor-pointer flex flex-col justify-center items-center text-center p-5 gap-5 h-52 w-full duration-300 hover:bg-white text-white  hover:text-black cards-border-dark rounded-md">
                        <span>
                            <BsGrid1X2Fill className=" text-3xl" />
                        </span>
                        <h2>UI UX Design</h2>
                        <p className="text-gray-400 text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi consectetur, officia sapiente laboriosam suscipit nulla.</p>
                    </div>
                    <div className="cursor-pointer flex flex-col justify-center items-center text-center p-5 gap-5 h-52 w-full duration-300 hover:bg-white text-white  hover:text-black cards-border-dark rounded-md">
                        <span>
                            <BsGrid1X2Fill className=" text-3xl" />
                        </span>
                        <h2>UI UX Design</h2>
                        <p className="text-gray-400 text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi consectetur, officia sapiente laboriosam suscipit nulla.</p>
                    </div>
                    <div className="cursor-pointer flex flex-col justify-center items-center text-center p-5 gap-5 h-52 w-full duration-300 hover:bg-white text-white  hover:text-black cards-border-dark rounded-md">
                        <span>
                            <BsGrid1X2Fill className=" text-3xl" />
                        </span>
                        <h2>UI UX Design</h2>
                        <p className="text-gray-400 text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi consectetur, officia sapiente laboriosam suscipit nulla.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;
