import React from "react";
import "../globals.css";
import CodingGif from "../../../public/animation/gif/giphy.gif"
import Image from "next/image";
import { BsGrid1X2Fill } from "react-icons/bs";
import Navbar from "@/components/navbar";
import FooterComp from "@/components/footer";
import { HiOutlineMail } from "react-icons/hi";
import Anim1 from "../../../public/animation/lottie/anim1.json"

import Prj1 from "../../../public/imgs/projects/project-1.png"
import Prj2 from "../../../public/imgs/projects/project-2.png"
import Prj3 from "../../../public/imgs/projects/project-3.jpg"
import Prj4 from "../../../public/imgs/projects/project-4.png"

import Link from "next/link";
const Page = () => {
    return (
        <div className="flex flex-col justify-between h-full  bg-black">
            <Navbar />
            <div className=" z-50 px-9 md:px-16 duration-300 vertical-sections-padding gap-5 cards-border-dark flex flex-col md:flex-row  items-start justify-center ">
                <div className="w-full flex flex-col gap-6 bg-black z-50 vertical-sections-padding">
                    <div className="flex w-full items-center justify-between gap-4">
                        <div className="flex items-center gap-4">
                            <span className="bg-white w-16  h-[2px]  text-sm sm:text-base"></span>
                            <h1 className=" text-sm sm:text-base text-gray-300">Our Projects</h1>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-center w-full justify-start gap-6 ">
                        <Image
                            src={Prj1}
                            alt="prj 1"
                            width={280}
                            height={280}
                            className="rounded-lg w-full sm:w-auto object-cover cards-border-dark cursor-pointer"
                        />
                        <Image
                            src={Prj2}
                            alt="prj 1"
                            width={280}
                            height={280}
                            className="rounded-lg w-full sm:w-auto object-cover cards-border-dark cursor-pointer"
                        />
                        <Image
                            src={Prj3}
                            alt="prj 1"
                            width={280}
                            height={280}
                            className="rounded-lg w-full sm:w-auto object-cover cards-border-dark cursor-pointer"
                        />
                        <Image
                            src={Prj4}
                            alt="prj 1"
                            width={280}
                            height={280}
                            className="rounded-lg w-full sm:w-auto object-cover cards-border-dark cursor-pointer"
                        />
                    </div>
                </div>
            </div>
            <FooterComp />
        </div>
    );
};

export default Page;
