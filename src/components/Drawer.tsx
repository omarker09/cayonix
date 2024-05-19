"use client"
import React, { useState, useEffect } from 'react'
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import { IoMdClose } from "react-icons/io";
import "../app/globals.css"
import Divider from './divider';
import { Switch } from "@/components/ui/switch"
import { useSelector, useDispatch } from "react-redux";
import { Switcher } from '@/lib/redux-toolkit/slices/particlesSwitcher';
import { RootState, AppDispatch } from "../lib/redux-toolkit/store/index"
import Link from 'next/link';

export default function Drawer({ activeDrawer, setActiveDrawer }: any) {
    const dispatch = useDispatch()
    const [switchValue, setSwitchValue] = useState<boolean>(false)
    const [currentScroll, setCurrentScroll] = useState(false);
    const selectValue = useSelector((state: RootState) => state.switcherParticles)

    function switchHandler() {
        if (switchValue === true) {
            setSwitchValue(false)
        } else if (switchValue === false) {
            setSwitchValue(true)
        }
        dispatch(Switcher(false));
    }
    return (
        <Sheet open={activeDrawer}>
            <div className='flex flex-col md:hidden'>
                <SheetContent className="w-[250px] bg-black flex flex-col justify-between ">
                    <div className='gap-7 flex flex-col'>
                        <SheetHeader>
                            <div className='w-full flex items-end justify-end pr-3'>
                                <button onClick={() => { setActiveDrawer(false) }} className='p-2 flex items-center  justify-center rounded-full cursor-pointer'>
                                    <IoMdClose size={25} className='text-white' />
                                </button>
                            </div>
                        </SheetHeader>
                        <div className='flex flex-col gap-2'>
                            <Link href={"/"} className=' text-white text-2xl font-bold'>HOME</Link>
                            <Divider className="divider-sections" />
                        </div>
                        <div className='flex flex-col gap-2'>
                            <Link href={"/about"} className=' text-white text-2xl font-bold'>ABOUT</Link>
                            <Divider className="divider-sections" />
                        </div>
                        <div className='flex flex-col gap-2'>
                            <Link href={"/ourprojects"} className=' text-white text-2xl font-bold'>PROJECTS</Link>
                            <Divider className="divider-sections" />
                        </div>
                        <div className='flex flex-col gap-2'>
                            <Link href={"/contact"} className=' text-white text-2xl font-bold'>Contact</Link>
                            <Divider className="divider-sections" />
                        </div>
                    </div>
                    <div className='flex flex-col gap-2'>
                        <div className='flex items-center justify-between w-full'>
                            <h1 className=' text-white text-lg font-bold'>Effects Trigger</h1>
                            <Switch checked={selectValue} className=' h-4 w-9' onClick={() => { switchHandler() }} />
                        </div>
                    </div>
                </SheetContent>
            </div>
        </Sheet>
    )
}
