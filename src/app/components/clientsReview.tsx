"use client";
import React, { useState, useEffect } from "react";
import "../globals.css";
import Image from "next/image";
import Man from "../../../public/imgs/pepole/man.png"
import OfficeMan from "../../../public/imgs/pepole/office-man.png"
import Girl from "../../../public/imgs/pepole/office-man.png"




const data = [
    { id: 1, name: "John does", img: Man, content: "Working with Cayonix has been a game-changer for our business. Their attention to detail and commitment to understanding our needs resulted in a website that not only looks stunning but also drives significant engagement. Their team went above and beyond to deliver results that exceeded our expectations. Highly recommended!" },
    { id: 2, name: "Ron burgendy", img: OfficeMan, content: "We chose Cayonix for their reputation of delivering top-notch UI/UX design, and they did not disappoint. From the initial consultation to the final implementation, their team was responsive, attentive, and professional. They took the time to understand our target audience and delivered a design that resonated perfectly. We're thrilled with the outcome and look forward to future collaborations." },
    { id: 3, name: "Sara poauk", img: Girl, content: "We've had the pleasure of partnering with Cayonix on multiple projects, and each time they've delivered exceptional service. Their expertise in web design is evident in the quality of their work, but what truly sets them apart is their commitment to client satisfaction. They take the time to listen to our needs and offer innovative solutions that align with our goals. It's rare to find a team that combines talent with such a customer-focused approach. We couldn't be happier with the results." }
]

const ClientsReview = () => {

    return (
        <div className="px-9 md:px-16 vertical-sections-padding flex flex-col gap-4 z-50 bg-black">
            <div className="flex w-full items-center gap-4">
                <span className="bg-white w-16  h-[2px]"></span>
                <h1 className="text-xl text-gray-300">Our Clients Review</h1>
            </div>
            <div className=" w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 items-center justify-center overflow-x-hidden">
                {data.map((e) => (
                    <div key={e.id} className="h-full w-full rounded-md cards-border-dark p-6 items-center justify-start gap-4 flex flex-col">
                        <p className="text-gray-400 text-sm">{e.content}</p>
                        <span className="small-card-divider"></span>
                        <div className=" flex  items-center justify-start w-full">
                            <Image
                                src={e.img}
                                alt="man logo"
                                height={40}
                                width={40}
                            />
                            <div className="flex flex-col items-start">
                                <h1 className="text-base">{e.name}</h1>
                                <p className=" text-gray-400 text-sm">CEO of Absurd</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ClientsReview;
