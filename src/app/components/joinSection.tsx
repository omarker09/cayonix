"use client";
import React from "react";
import { SiFiverr } from "react-icons/si";
import { TbBrandUpwork } from "react-icons/tb";
import { FaGoogle } from "react-icons/fa";
import { IoLogoVercel } from "react-icons/io5";
import { SiNetlify } from "react-icons/si";

import "../globals.css";
import man from "../../../public/imgs/pepole/man.png";
import officeMan from "../../../public/imgs/pepole/office-man.png";
import girl from "../../../public/imgs/pepole/girl.png";
import Image from "next/image";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";


const JoinSection = () => {
  return (
    <div className=" z-50 px-16 relative flex items-center justify-center h-36 glass-borderless w-full ">
      <div className="flex items-center flex-col justify-center w-full">
        <p className="landig-p-text">used accross 1000+ client</p>
        <div className="flex items-center gap-10 justify-center w-full">
          <SiFiverr className=" text-gray-400" size={50}/>
          <TbBrandUpwork className=" text-gray-400" size={20}/>
          <FaGoogle className=" text-gray-400" size={20}/>
          <IoLogoVercel className=" text-gray-400" size={20}/>
          <SiNetlify className=" text-gray-400" size={20}/>
        </div>
      </div>
    </div>
  );
};

export default JoinSection;
