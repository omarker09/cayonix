"use client";
import React from "react";
import "../globals.css";
import Image from "next/image";
import Link from "next/link";
import Prj1 from "../../../public/imgs/projects/project-1.png"
import Prj2 from "../../../public/imgs/projects/project-2.png"
import Prj3 from "../../../public/imgs/projects/project-3.jpg"
import Prj4 from "../../../public/imgs/projects/project-4.png"

const OurProjects = () => {
    return (
        <div className="w-full px-9 md:px-16 flex flex-col gap-6 bg-black z-50 vertical-sections-padding">
            <div className="flex w-full items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                    <span className="bg-white w-16  h-[2px]  text-sm sm:text-base"></span>
                    <h1 className=" text-sm sm:text-base text-gray-300">Our Projects</h1>
                </div>
                <div>
                    <Link href="/ourprojects" className=" hover:underline text-sm sm:text-base">
                     See All
                    </Link>
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
    );
};

export default OurProjects;
