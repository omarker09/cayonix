
"use client"
import React, { useEffect, useState } from "react";
import "../../globals.css";
import Image from "next/image";
import Link from "next/link";

import Navbar from "@/components/navbar";
import FooterComp from "@/components/footer";
import { usePathname } from 'next/navigation'
import list_of_projects from "../config/config";
import data from "../config/data";
import "../../../app/globals.css"

const FoundComponent = ({ data, pathName }: any) => {
    console.log(data, pathName);

    const filtredData = data.filter((e: any) => {
        return e.title == pathName
    })
    return (
        <div className=" z-50 px-9 md:px-16 duration-300 vertical-sections-padding gap-5 flex flex-col md:flex-row w-full items-center justify-center ">
            {filtredData.map((e: any) => (
                <div className="w-full flex flex-col gap-7 bg-black z-50 vertical-sections-padding">
                    <div className="flex flex-col gap-3">
                        <h1 className="text-white text-xl text-start md:text-2xl underline lg:text-4xl font-extrabold">{e.title}:</h1>
                    </div>
                    <div className="flex items-start flex-col w-full justify-start gap-6 ">
                        <Image
                            src={e.banner}
                            alt="prj 1"
                            className="rounded-lg w-full h-[550px]  object-cover cards-border-dark cursor-pointer"
                        />
                        <span className="divider-sections"></span>
                        <div className="flex gap-1 flex-col">
                            <h1 className="text-white text-xl text-start md:text-2xl lg:text-4xl font-extrabold">Website Vertical Lnadscape</h1>
                            <p className="text-gray-400 text-sm text-start">{e.description}</p>
                        </div>
                        <div className=" flex flex-col w-full h-full gap-8">
                            <Image
                                src={e.img4}
                                alt="prj 1"
                                className="rounded-lg w-[800px] h-full  object-cover cards-border-dark cursor-pointer"
                            />
                             <span className="divider-sections"></span>
                            <div className="flex gap-1 flex-col">
                                <h1 className="text-white text-xl text-start md:text-2xl lg:text-4xl font-extrabold">Details</h1>

                            </div>
                            <Image
                                src={e.img1}
                                alt="prj 1"
                                className="rounded-lg w-[800px] h-full  object-cover cards-border-dark cursor-pointer"
                            />
                            <Image
                                src={e.img2}
                                alt="prj 1"
                                className="rounded-lg w-[800px]  h-full  object-cover cards-border-dark cursor-pointer"
                            />
                            <Image
                                src={e.img3}
                                alt="prj 1"
                                className="rounded-lg w-[800px]  h-full  object-cover cards-border-dark cursor-pointer"
                            />
                        </div>
                        <span className="divider-sections"></span>
                        <div className=" flex items-start gap-2 justify-center">
                            <a className=" text-black bg-white p-3 rounded-lg" target="_blank" href={e.livePreview} >Live Preview</a>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

const NotFound = () => {
    return (
        <div className=" h-96 flex items-center justify-center">
            <h1>Project Not Found !!</h1>
        </div>
    )
}

const OurProjects = () => {
    const pathname = usePathname()
    const slicePath = pathname.slice(13, 1000)
    const [isFound, setIsFound] = useState<boolean>();
    useEffect(() => {
        if (list_of_projects.includes(slicePath)) {
            setIsFound(true)
        } else {
            setIsFound(false)
        }
    })
    return (
        <div className="flex flex-col justify-between h-full  bg-black">
            <Navbar />
            {isFound ? <FoundComponent data={data} pathName={slicePath} /> : <NotFound />}
            <FooterComp />
        </div>
    );
};

export default OurProjects;
