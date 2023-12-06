"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { BiMenu } from "react-icons/bi";
import { ImCross } from "react-icons/im";

function Header() {
  const menuRef = useRef(null);

  const toggleMenu = () => menuRef.current.classList.toggle("show__menu");

  return (
    <header className="grid grid-cols-2 py-[20px] px-[10px] w-full max-w-[1500px] mx-auto">
      <div className="">
        <Link href="/">
          <Image
            src="/images/logo.png"
            width={100}
            height={40}
            alt=""
            className="w-[100px] h-[40px] md:ml-[3rem]"
          />
        </Link>
      </div>
      <div className="flex items-center justify-end lg:justify-around relative">
        <div className="navigation" ref={menuRef} onClick={toggleMenu}>
          <div className="flex items-center text-white text-[18px] font-[600] gap-[3rem] menu">
            <Link href="/">Home</Link>
            <Link href="/press">Press</Link>
            <Link href="/about">About Us</Link>
            <ImCross className="w-4 h-4 cursor-pointer text-white ml-[10px] absolute top-[1rem] left-[1rem] lg:hidden" />
          </div>
        </div>
        <button className="bg-[#f44f24] py-[8px] px-[25px] rounded-full text-[14px] font-[500] text-white">
          Play Now
        </button>

        <span className="block lg:hidden" onClick={toggleMenu}>
          <BiMenu className="w-8 h-8 cursor-pointer text-white ml-[10px]" />
        </span>
      </div>
    </header>
  );
}

export default Header;
