import Image from "next/image";
import Link from "next/link";

function Header() {
  return (
    <div className="grid grid-cols-2 py-[20px] px-[10px] w-full max-w-[1500px] mx-auto">
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
      <div className="flex justify-end lg:justify-around">
        <div className="hidden lg:flex items-center text-white text-[18px] font-[600] gap-[3rem]">
          <Link href="/">Home</Link>
          <Link href="/press">Press</Link>
          <Link href="/about">About Us</Link>
        </div>
        <button className="bg-[#f44f24] py-[8px] px-[25px] rounded-full text-[14px] font-[500] text-white">
          Play Now
        </button>
      </div>
    </div>
  );
}

export default Header;
