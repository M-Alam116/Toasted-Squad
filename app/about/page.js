"use client";

import Image from "next/image";
import Link from "next/link";
function AboutUS() {
  return (
    <div className="">
      <div className="w-full aboutbg min-h-[300px] mt-[-5rem] px-[10px] flex items-center justify-center">
        <h1 className="text-[32px] font-[700] text-white mt-[3rem]">
          About Us
        </h1>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 place-items-center gap-[2rem] py-[4rem] px-[10px] w-full max-w-[1500px] mx-auto justify-center items-center">
        <div className="">
          <h2 className="text-[20px] font-[600] text-white">About</h2>
          <h3 className="text-[20px] font-[600] text-[#f44f24] mt-[-5px]">
            [Toasted Squad Studios]
          </h3>
        </div>
        <div className="">
          <Image src="/images/logo1.png" width={200} height={200} alt="" />
        </div>
      </div>

      <div className="flex flex-col justify-center items-center gap-[2rem] pt-[2rem] pb-[4rem] px-[10px]">
        <p className="text-[16px] font-[500] text-white opacity-90 text-center w-full md:w-[700px]">
          We draw inspiration from the retro game developers of the past to
          create an experience that captures the essence of old school gaming.
          Our team is passionate about bringing back the nostalgia with pixel
          art aesthetics, classic gameplay mechanics, and a touch of modern
          innovation
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-[1rem]">
          <input
            readOnly
            id="email"
            type="email"
            name="email"
            placeholder="Toastedsquadstudios@gmail.com"
            className="p-[10px] border-[1px] text-white border-white bg-transparent outline-none w-[300px]"
          />
          <Link
            href="https://mail.google.com/mail/u/0/?view=cm&to=toastedsquadstudios@gmail.com"
            target="_blank"
          >
            <button className="bg-[#f44f24] py-[12px] px-[25px] text-[14px] font-[500] text-white">
              Press contact
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default AboutUS;
