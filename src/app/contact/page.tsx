"use client";
import React from "react";
import "../globals.css";
import CodingGif from "../../../public/animation/gif/giphy.gif"
import Image from "next/image";
import { BsGrid1X2Fill } from "react-icons/bs";
import Navbar from "@/components/navbar";
import FooterComp from "@/components/footer";
import { HiOutlineMail } from "react-icons/hi";
import Anim1 from "../../../public/animation/lottie/anim1.json"

const Contact = () => {

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: Anim1,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    };
    return (
        <div className="flex flex-col justify-between h-full  bg-black">
            <Navbar />
            <div className=" z-50 px-9 md:px-16 duration-300 vertical-sections-padding gap-5  flex flex-col md:flex-row  items-start justify-center ">
                <div className="text-white  w-full flex flex-col items-start h-full  gap-4">
                    <div className="flex flex-col gap-3">
                        <h1 className="text-white text-xl md:text-2xl lg:text-5xl font-extrabold">Tell me about you.</h1>
                        <p className="text-gray-400 text-sm">Your journey is unique, and I'm here to listen. Whether you have a question, a project in mind, or simply want to say hello,</p>
                    </div>
                    <div className="flex items-start sm:items-center gap-3 flex-col sm:flex-row">
                        <span className="inputs-background-color inputs-border-color rounded-full flex items-center justify-center p-2">
                            <HiOutlineMail size={18} />
                        </span>
                        <h1 className="text-sm">Mail Me at :</h1>
                        <span className=" text-blue-400 text-sm">omarkerbouchedev@gmail.com</span>
                    </div>
                </div>
                <div className="w-full cards-border-dark rounded-lg flex flex-col items-start justify-center p-4 gap-4">
                    <div className="w-full flex flex-col gap-3">
                        <h1 className="flex items-center gap-2"><HiOutlineMail size={25} /> Send Us Message</h1>
                        <p className=" text-sm text-gray-400">If you have an idea just send me a message and i will reply to you on your email, please make sure that your email is real so i can relpy with no issue.</p>
                    </div>
                    <div className=" w-full flex flex-col gap-4">
                        <div className="flex items-center gap-4 justify-between">
                            <input className="w-full rounded-lg text-white inputs-background-color inputs-border-color focus-outline focus-outline" type="text" placeholder="Email*" />
                            <input className="w-full rounded-lg text-white inputs-background-color inputs-border-color focus-outline focus-outline" type="text" placeholder="Full Name*" />
                        </div>
                        <div className="w-full">
                            <textarea className=" resize-none w-full h-40 rounded-lg text-white inputs-background-color inputs-border-color focus-outline" name="text" placeholder="Your Message.."></textarea>
                        </div>
                        <div className="w-full">
                            <button className="py-2 px-5 bg-slate-400 rounded-lg text-white inputs-background-color inputs-border-color">Send</button>
                        </div>
                    </div>
                </div>
            </div>
            <FooterComp />
        </div>
    );
};

export default Contact;
