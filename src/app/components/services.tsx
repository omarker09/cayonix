"use client";
import React from "react";
import "../globals.css";
import CodingGif from "../../../public/animation/gif/giphy.gif"
import Image from "next/image";
import { BsGrid1X2Fill } from "react-icons/bs";

const Services = () => {
    return (
        <div className=" z-50 px-9 md:px-16 duration-300  bg-black vertical-sections-padding">
            <div className="  h-full flex duration-300 flex-col items-start justify-center gap-6 w-full">
                <div className=" w-full flex flex-col gap-4">
                    <div className="flex items-center gap-4">
                        <span className="bg-white w-16  h-[2px]"></span>
                        <p className="text-sm text-gray-300">Services</p>
                    </div>
                    <div className="w-full">
                        <h1 className="text-2xl font-bold text-white">Our Services</h1>
                    </div>
                </div>
                <div className="w-full  items-center grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-5 justify-between">
                    <div className="box cursor-pointer flex flex-col justify-center items-center text-center p-5 gap-5 h-52 w-full duration-300 cards-border-dark rounded-md">
                        <span>
                            <BsGrid1X2Fill className=" text-xl md:text-3xl" />
                        </span>
                        <h2 className=" text-sm lg:text-base text-white">UI UX Design</h2>
                        <p className="text-gray-400 text-xs lg:text-sm"> Elevating digital experiences through intuitive user interfaces and seamless user interactions, optimizing usability and delighting users at every touchpoint.</p>
                    </div>
                    <div className="box  box-anim cursor-pointer flex flex-col justify-center items-center text-center p-5  gap-5 h-52 w-full duration-300 cards-border-dark rounded-md">
                        <span>
                            <BsGrid1X2Fill className=" text-xl md:text-3xl" />
                        </span>
                        <h2 className=" text-sm lg:text-base text-white">Full Stack Application</h2>
                        <p className="text-gray-400 text-xs lg:text-sm">Seamlessly integrated software solutions covering both front-end and back-end development,across all layers of your digital ecosystem.</p>
                    </div>
                    <div className="box cursor-pointer flex flex-col justify-center items-center text-center p-5 gap-5 h-52 w-full duration-300  cards-border-dark rounded-md">
                        <span>
                            <BsGrid1X2Fill className=" text-xl md:text-3xl" />
                        </span>
                        <h2 className=" text-sm lg:text-base text-white">Web Design</h2>
                        <p className=" text-gray-400 text-xs lg:text-sm">Crafting visually stunning and user-friendly websites tailored to your brand's identity, ensuring seamless navigation and engaging user experiences.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;
