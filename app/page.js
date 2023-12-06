import Image from "next/image";

export default function Home() {
  return (
    <div className="">
      {/*  ================= Hero Section =========== */}
      <div className="w-full homebg min-h-screen mt-[-5rem] px-[10px]">
        <div className="flex flex-col items-center justify-center py-[10rem] gap-[10px]">
          <Image src="/images/logo1.png" width={200} height={200} alt="" />
          <Image src="/images/logoText.png" width={200} height={200} alt="" />
          <p className="text-[16px] font-[400] text-white opacity-90 text-center w-full md:w-[700px] leading-[28px]">
            Fueled by the passion of gamers, We’re dedicated to creating the
            best gaming experience by drawing inspiration from old school games.
            Get ready to embark on a nostalgic journey filled with classic
            gameplay mechanics, pixel art aesthetics, and a touch of modern
            innovation. Join us as we pay homage to the games that shaped our
            love for gaming and create new experiences that capture the essence
            of the past. Let’s make gaming history together!
          </p>
        </div>
      </div>

      <div className="flex flex-col justify-center items-center mt-[-3rem] gap-[2rem] px-[10px]">
        <Image src="/images/home1.png" width={600} height={900} alt="" />
        <button className="bg-[#f44f24] py-[8px] px-[25px] rounded-[5px] text-[14px] font-[500] text-white">
          BUY NOW
        </button>
      </div>

      <div className="flex flex-col gap-[1rem] mx-auto justify-center items-center my-[3rem] px-[10px] w-full md:w-[700px]">
        <p className="text-[16px] font-[400] text-white text-center">
          Brace yourself for an extraordinary, heart-pounding adventure in the
          captivating world of Spellbound Survivors, a single-player
          action-roguelike game! Check it out on Steam for more!
        </p>
        <h1 className="text-[28px] font-[700] text-white text-center tracking-wide">
          AVAILABLE FOR:
        </h1>
        <Image
          src="/images/stream.png"
          width={150}
          height={50}
          alt=""
          className="w-[100px] h-[30px] md:w-[150px] md:h-[50px]"
        />
      </div>

      <div className="flex justify-center items-center px-[10px]">
        <Image src="/images/home2.png" width={900} height={400} alt="" />
      </div>

      <div className="flex flex-col gap-[1rem] px-[10px] my-[4rem] w-full max-w-[800px] mx-auto">
        <h1 className="text-[28px] font-[700] text-white tracking-wide">
          MEDIA
        </h1>
        <p className="text-[14px] font-[400] text-white tracking-wider">
          DOWNLOAD SCREENSHOTS, KEY ART. LOGOS, AND MORE
        </p>
        <button className="bg-[#f44f24] py-[8px] w-fit px-[25px] rounded-full text-[14px] font-[500] text-white">
          GO TO PRESSKIT
        </button>
      </div>
    </div>
  );
}
