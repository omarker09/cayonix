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
                <div className="text-white  w-full flex flex-col items-start h-full  gap-7">
                    <div className="flex flex-col gap-3">
                        <h1 className="text-white text-xl text-start md:text-2xl lg:text-4xl font-extrabold">ABOUT US</h1>
                        <div className="flex items-start flex-col gap-1">
                            <p className="text-gray-400 text-sm text-start">At Cayonix, our mission is to empower businesses and individuals to thrive in the digital landscape through innovative web design and development solutions. We are committed to delivering exceptional experiences that not only meet but exceed the expectations of our clients and their audiences.</p>
                        </div>
                        <div className="flex items-start flex-col gap-1">
                            <p className="text-gray-400 text-sm text-start">Driven by creativity, integrity, and a relentless pursuit of excellence, we strive to be at the forefront of technological advancement, constantly exploring new ideas and pushing the boundaries of what's possible. Our goal is to harness the power of the web to connect, inspire, and drive meaningful outcomes for our clients, enabling them to achieve their objectives and stand out in a competitive market.</p>
                        </div>
                        <div className="flex items-start flex-col gap-1">
                            <p className="text-gray-400 text-sm text-start">Above all, we are dedicated to building lasting partnerships based on trust, transparency, and mutual success. We believe that by working closely with our clients, understanding their unique needs, and providing personalized solutions, we can truly make a difference in their journey towards digital transformation.</p>
                        </div>
                    </div>
                    <div className="w-full">
                        <Image
                        alt="img"
                        src={Walpper1}
                        className="w-full md:w-[800px] h-96 object-cover rounded-xl cards-border-dark"
                        />
                    </div>
                    <div className="w-full">
                    <Faq/>
                    </div>
                </div>
            </div>
            <FooterComp />
        </div>
    );
};

export default Pricing;
