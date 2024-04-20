"use client"
import React, { useEffect, useState } from 'react';
import "../app/globals.css";
import Link from 'next/link';
import { Switch } from "@/components/ui/switch"
import { useSelector, useDispatch } from "react-redux";
import { Switcher } from '@/lib/redux-toolkit/slices/particlesSwitcher';
import { RootState, AppDispatch } from "../lib/redux-toolkit/store/index"
import Image from 'next/image';
import Logo1 from "../../public/imgs/logo/white-transparent.png"
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import Drawer from './Drawer';

function Navbar() {
  const [switchValue, setSwitchValue] = useState<boolean>(false)
  const [currentScroll, setCurrentScroll] = useState(false);
  const selectValue = useSelector((state: RootState) => state.switcherParticles)
  const [isActive, setIsActive] = useState(false);

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
      setCurrentScroll(windowScrollY >= 55);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Call handleScroll once initially

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div style={{ zIndex: 400 }} className={currentScroll ? 'py-3 px-9 md:px-16 z-50 duration-500 glass-borderless sticky top-0 w-full  flex items-center justify-between text-center cards-border-dark-bottom' : 'py-3 px-9 md:px-16 w-full z-50 duration-500 bg-transparent sticky top-0  flex items-center justify-between text-center '}>
      <Link href={"/"}>
        <Image
          alt='logo'
          src={Logo1}
          height={80}
          width={80}
          className='disable-select-drag'
        />
      </Link>
      <nav className=' items-center hidden md:flex gap-4'>
        <Link className='text-sm duration-300 hover:text-blue-400' href={"/about"}>About</Link>
        <Link className='text-sm duration-300 hover:text-blue-400' href={"/ourprojects"}>Our Projects</Link>
        <Link className='text-sm duration-300 hover:text-blue-400' href={"/"}>Articles</Link>
        <Link className='text-sm duration-300 hover:text-blue-400' href={"/"}>Pricing</Link>
        <Switch checked={selectValue} className=' h-4 w-9' onClick={() => { switchHandler() }} />
      </nav>
      <div className='flex items-center justify-center gap-3'>
        <Link href={"/contact"} className='hidden md:flex'>
          <button className='py-2 px-2 bg-white rounded-sm text-black'>Get Started</button>
        </Link>
        <div style={{ zIndex: 499 }} className=' flex items-center'>
          <button onClick={() => {setIsActive(!isActive)}} className='p-2 flex md:hidden items-center justify-center rounded-full cursor-pointer bg-white hover:bg-gray-400'>
            <HiOutlineMenuAlt4 size={25} className='text-black' />
          </button>
          <Drawer activeDrawer={isActive} setActiveDrawer={setIsActive} />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
