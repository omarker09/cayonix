"use client";
import React from "react";
import "../globals.css";
import CodingGif from "../../../public/animation/gif/giphy.gif"
import Image from "next/image";
import { BsGrid1X2Fill } from "react-icons/bs";
import Navbar from "@/components/navbar";
import FooterComp from "@/components/footer";
import { HiOutlineMail } from "react-icons/hi";
import Walpper1 from "../../../public/imgs/wallper/photo-1555066932-e78dd8fb77bb.avif"
import Faq from "../components/faq";
import ScrollTop from "@/components/scrollTop";

const Pricing = () => {

    return (
        <div className="flex flex-col justify-between h-full  bg-black">
            <Navbar />
            <ScrollTop/>
            <div className=" z-50 px-9 md:px-16 duration-300 vertical-sections-padding gap-7 flex flex-col  items-start justify-center ">
                <h1>Pricing</h1>
            </div>
            <FooterComp />
        </div>
    );
};

export default Pricing;
