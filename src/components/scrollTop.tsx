"use client"

import React, { useEffect, useState } from 'react'
import "../app/globals.css"
import { FaArrowUp } from "react-icons/fa";

function ScrollTop(props: any) {
  const [isAbove, setIsAbove] = useState(false);

  function handleScrollClick() {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    })
  }
  useEffect(() => {
    const Yaxis = 150;

    const handleScrollY = () => {
      const windowY = window.scrollY;
      setIsAbove(windowY >= Yaxis)
    };

    window.addEventListener("scroll", handleScrollY);
    handleScrollY();

    return () => {
      window.removeEventListener("scroll", handleScrollY);
    }
  }, [])
  const classCondition = isAbove ? `fixed bottom-10 -translate-x-4 duration-300 right-5 flex items-center justify-center bg-black hover:bg-gray-900 h-12 w-12 p-3 rounded-full cursor-pointer cards-border-dark` : `fixed bottom-7 flex items-center justify-center cursor-pointer translate-x-52 duration-300 right-7 bg-white h-12 w-12 p-3 rounded-full`;

  return (
    <button onClick={() => { handleScrollClick() }} style={{ zIndex: 70 }} className={classCondition}>
      <FaArrowUp className='text-white' />
    </button>
  )
}

export default ScrollTop