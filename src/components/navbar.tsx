"use client"
import React, { useEffect, useState } from 'react';
import "../app/globals.css";
import Link from 'next/link';
import { Switch } from "@/components/ui/switch"
import { useSelector, useDispatch } from "react-redux";
import { Switcher } from '@/lib/redux-toolkit/slices/particlesSwitcher';
import {RootState, AppDispatch} from "../lib/redux-toolkit/store/index"

function Navbar() {
  const [switchValue,setSwitchValue] = useState<boolean>(false)
  const [currentScroll, setCurrentScroll] = useState(false);
  const selectValue = useSelector((state: RootState) => state.switcherParticles)
  const dispatch = useDispatch()

  function switchHandler() {
    if (switchValue === true) {
      setSwitchValue(false)
    } else if (switchValue === false) {
      setSwitchValue(true)
    }
    dispatch(Switcher(false));
  }

  useEffect(() => {
    const handleScroll = () => {
      const windowScrollY = window.scrollY;
      setCurrentScroll(windowScrollY >= 170);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Call handleScroll once initially

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div style={{zIndex: 1000}} className={currentScroll ? 'py-5 px-9 md:px-16 duration-300 glass-borderless fixed top-0 w-full  flex items-center justify-between text-center' : 'py-5 px-9 md:px-16 w-full duration-300 bg-transparent fixed top-0  flex items-center justify-between text-center'}>
      <div>
        <h1 className='text-white text-4xl'>Logo</h1>
      </div>
      <nav className='flex items-center hidden sm:flex gap-4'>
        <Link className='text-sm duration-300 hover:text-blue-400' href={"/"}>Overview</Link>
        <Link className='text-sm duration-300 hover:text-blue-400' href={"/"}>Legal Reaserch</Link>
        <Link className='text-sm duration-300 hover:text-blue-400' href={"/"}>Blog</Link>
        <Link className='text-sm duration-300 hover:text-blue-400' href={"/"}>Fund Agency</Link>
      </nav>
      <div className='flex items-center justify-center gap-3'>
        <Switch  onClick={() => {switchHandler()}}/>
        <button className='py-2 px-2 bg-white rounded-sm text-black'>Get Started</button>
      </div>
    </div>
  );
}

export default Navbar;
