"use client";
import React, { useState } from "react";
import "../globals.css";
import CodingGif from "../../../public/animation/gif/giphy.gif"
import Image from "next/image";
import CircularProgress from '@mui/material/CircularProgress';
import Navbar from "@/components/navbar";
import FooterComp from "@/components/footer";
import { HiOutlineMail } from "react-icons/hi";
import Anim1 from "../../../public/animation/lottie/anim1.json"
import { MdDoneOutline } from "react-icons/md";
import { toast } from "sonner"
import { MdError } from "react-icons/md";
import Spinner from 'react-bootstrap/Spinner';

const Contact = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async () => {
        const validRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

        if (!name || !email || !message) {
            toast("You must fill all the inputs first.", { icon: <MdError className=" text-red-500"  size={20} /> });
            return;
        }

        if (!validRegex.test(email)) {
            toast("Email address is not valid.", { icon: <MdError className=" text-red-500"  size={20} /> });
            return;
        }

        setIsLoading(true);
        try {
            const response = await fetch("https://your-api-endpoint.com", {
                method: "POST",
                headers: { "Content-type": "application/json" },
                body: JSON.stringify({ name, email, message })
            });

            if (!response.ok) {
                throw new Error("Failed to send message");
            }

            toast("Your message has been sent.", { icon: <MdDoneOutline className=" text-green-500"  size={20} /> });
            setName("");
            setEmail("");
            setMessage("");
        } catch (error) {
            toast("Oops! Something went wrong.", { icon: <MdError className=" text-red-500"  size={20} /> });
        } finally {
            setIsLoading(false);
        }
    };
    return (
        <div className="flex flex-col justify-between h-full relative  bg-black">
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
                        <h1 className="text-sm">Mail Us Now</h1>
                        <a href="https://cayonix1@gmail.com" target="_blank" className="text-sm text-slate-300 underline cursor-pointer">cayonix1@gmail.com</a>
                    </div>
                </div>
                <div className="w-full cards-border-dark rounded-lg flex flex-col items-start justify-center p-4 gap-4">
                    <div className="w-full flex flex-col gap-3">
                        <h1 className="flex items-center gap-2"><HiOutlineMail size={25} /> Send Us Message</h1>
                        <p className=" text-sm text-gray-400">If you have an idea just send me a message and i will reply to you on your email, please make sure that your email is real so i can relpy with no issue.</p>
                    </div>
                    <div className=" w-full flex flex-col gap-4">
                        <div className="flex items-center gap-4 justify-between">
                            <input value={email} onChange={(e) => { setEmail(e.target.value) }} className="w-full rounded-lg text-white inputs-background-color inputs-border-color focus-outline" type="text" placeholder="Email*" />
                            <input value={name} onChange={(e) => { setName(e.target.value) }} className="w-full rounded-lg text-white inputs-background-color inputs-border-color focus-outline focus-outline" type="text" placeholder="Full Name*" />
                        </div>
                        <div className="w-full">
                            <textarea value={message} onChange={(e) => { setMessage(e.target.value) }} className=" resize-none w-full h-40 rounded-lg text-white inputs-background-color inputs-border-color focus-outline" name="text" placeholder="Your Message.."></textarea>
                        </div>
                        <div className="w-full">
                            <button onClick={() => { handleSubmit() }} className="py-2 px-5 bg-slate-400 rounded-lg text-white inputs-background-color inputs-border-color">{isLoading ? <CircularProgress size={15} />: "Send"}</button>
                        </div>
                    </div>
                </div>
            </div>
            <FooterComp />
        </div>
    );
};

export default Contact;
