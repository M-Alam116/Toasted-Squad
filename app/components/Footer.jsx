import Image from "next/image";
import Link from "next/link";

function Footer() {
  return (
    <div className="flex flex-col justify-center items-center py-[3rem] px-[10px] bg-[#151515]">
      <div className="">
        <Link href="/">
          <Image
            src="/images/logo.png"
            width={100}
            height={40}
            alt=""
            className="w-[100px] h-[40px]"
          />
        </Link>
      </div>
      <div className="flex items-center text-white text-[18px] font-[600] gap-[3rem] my-[3rem]">
        <Link href="/">Home</Link>
        <Link href="/press">Press</Link>
        <Link href="/about">About Us</Link>
      </div>
      <div className="flex items-center gap-[2rem]">
        <Link
          href="https://www.instagram.com/toasted_squad_studios?igshid=OGQ5ZDc2ODk2ZA%3D%3D"
          target="_blank"
        >
          <Image
            src="/images/insta.png"
            width={40}
            height={40}
            alt=""
            className="w-[40px] h-[40px]"
          />
        </Link>

        <Link href="https://www.youtube.com/@ToastedSquadStudios" target="_blank">
          <Image
            src="/images/yt.png"
            width={40}
            height={40}
            alt=""
            className="w-[40px] h-[40px]"
          />
        </Link>

        <Link href="https://twitter.com/toastedsquad?s=21" target="_blank">
          <Image
            src="/images/x.png"
            width={40}
            height={40}
            alt=""
            className="w-[40px] h-[40px]"
          />
        </Link>
      </div>

      <div className="w-[90%] h-[2px] flex mx-auto bg-white opacity-10 my-[2rem]" />
      <div className="text-[16px] font-[400] text-white">
        Copyright © {new Date().getFullYear()}. All rights reserved.
      </div>
    </div>
  );
}

export default Footer;
