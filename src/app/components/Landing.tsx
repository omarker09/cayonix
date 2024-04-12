"use client"
import { useEffect, useState } from "react";
import "../globals.css"
import ParticlesBackground from "./particles/ParticlesBackground";
import Navbar from "@/components/navbar";
import { useSelector, useDispatch } from "react-redux";
import { Switcher } from '@/lib/redux-toolkit/slices/particlesSwitcher';
import { RootState } from "@/lib/redux-toolkit/store";
export default function Landing() {
    const [activateTrans, setActivateTranst] = useState(false)
    const [showParticles, setSchowParticles] = useState(false)
    const selectValue = useSelector((state: RootState) => state.switcherParticles)

    useEffect(() => {
        console.log(selectValue);
        setActivateTranst(true)
    }, [])
    // <div class="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]"></div>
    // "absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"
    return (
        <div className="flex items-center justify-center bg-black flex-col gap-3 overflow-x-hidden ">
            <Navbar />
            <div className="flex flex-col px-5 items-center  landing-height  gap-6 z-0 justify-center overflow-hidden w-full inset-0  ">
                {selectValue && <ParticlesBackground />}
                
                <div>
                    <h1 className={activateTrans === true ? " text-3xl sm:text-5xl text-white text-center align-super font-semibold after-transt-right" : "text-3xl sm:text-5xl text-white text-center font-semibold before-transt-right"}>Collection of modern</h1>
                    <h1 className={activateTrans === true ? " text-3xl sm:text-5xl text-white text-center font-semibold after-transt-left" : " text-3xl sm:text-5xl text-white text-center font-semibold before-transt-left"}>snippets</h1>
                </div>
                <div>
                    <p className={activateTrans === true ? "landig-p-text text-sm sm:text-base text-center after-transt-right" : "landig-p-text text-sm sm:text-base text-center before-transt-right"}>Ready-to-use, simply copy and paste into your next</p>
                    <p className={activateTrans === true ? "landig-p-text text-sm sm:text-base text-center after-transt-left" : "landig-p-text text-sm sm:text-base text-center before-transt-left"}>project All snippets crafted with Tailwind CSS and Vanilla CSS for easy integration.</p>
                </div>
                <div className="flex items-center justify-center gap-5">
                    <button className={activateTrans === true ? " py-2 px-5 bg-white text-black rounded-sm after-transt-down" : " p-2 bg-blue-600 text-white rounded-md before-transt-down"}>Requst demo</button>
                    <button className={activateTrans === true ? " p-2  text-white rounded-md after-transt-down" : " p-2  text-white rounded-md before-transt-down"}>Contact US</button>
                </div>
            </div>

        </div>
    );
}