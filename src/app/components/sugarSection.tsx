import React from "react";
import "../globals.css";

type Props = {}

function SugarSection({ }: Props) {
    return (
        <div className=" h-64 w-full vertical-sections-padding-bottom bg-black z-50 hidden gap-4 sm:flex items-center justify-center px-9 md:px-16">
            <div className="box-anim bg-black w-full h-full px-0 rounded-md flex items-center justify-center">
                <div className="relative h-full w-full bg-black flex items-start sm:items-center justify-center gap-4 flex-col">
                    <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px]">
                    </div>
                    <h1 className=" text-lg sm:text-3xl text-white z-50">What You get</h1>
                    <div className="flex flex-col   ">
                        <p className=" text-gray-400 text-sm text-start sm:text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit.ditiis ea numquam, molestias voluptate, quam at! Repudiandae?</p>
                        <p className=" text-gray-400 text-sm text-start sm:text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit.ditiis.</p>
                    </div>
                    <button className='py-2 px-2 bg-white rounded-sm z-50 text-black'>Get Started</button>
                </div>

            </div>
        </div>
    )
}

export default SugarSection