
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

const FoundComponent = ({ data, pathName }: any) => {
    const filtredData = data.filter((e: any) => {
        return e.title == pathName
    })
    return (
        <div className=" z-50 px-9 md:px-16 duration-300 vertical-sections-padding gap-5 flex flex-col md:flex-row w-full items-center justify-center ">
            {filtredData.map((e: any) => (
                <div className="w-full flex flex-col gap-7 bg-black z-50 vertical-sections-padding">
                    <div className="flex flex-col gap-3">
                        <h1 className="text-white text-xl text-start md:text-2xl lg:text-4xl font-extrabold">{e.title}</h1>
                        <div className="flex items-start flex-col gap-1">
                            <p className="text-gray-400 text-sm text-start">{e.description}</p>
                        </div>
                    </div>
                    <div className="flex items-start flex-col w-full justify-start gap-6 ">
                        <Image
                            src={e.img1}
                            alt="prj 1"
                            className="rounded-lg w-full sm:w-[700px] sm:h-[450px] object-cover cards-border-dark cursor-pointer"
                        />
                        <p className="text-gray-400 text-sm text-start">{e.description2}</p>
                        <Image
                            src={e.img2}
                            alt="prj 1"
                            className="rounded-lg w-full sm:w-[700px] sm:h-[550px] object-fill cards-border-dark cursor-pointer"
                        />
                        <div className=" flex items-start gap-2 justify-center">
                            <label className=" text-white">Check Live Preview</label>
                            <a className=" text-blue-500 underline" target="_blank" href={e.livePreview} >Click here</a>
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
