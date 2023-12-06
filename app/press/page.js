import Image from "next/image";

function Press() {
  return (
    <div className="">
      <div className="w-full aboutbg min-h-[300px] mt-[-5rem] px-[10px] flex items-center justify-center">
        <h1 className="text-[32px] font-[700] text-white mt-[3rem]">
          Press Kit
        </h1>
      </div>

      <div className="w-full max-w-[1500px] flex flex-col justify-center items-center mx-auto gap-[1rem] px-[10px] py-[4rem]">
        <div className="flex flex-col gap-[1rem] w-full md:w-[60%]">
          <h1 className="text-[20px] font-[600] text-[#f44f24]">
            *** Game release December 29, 2023***
          </h1>
          <h2 className="text-[20px] font-[600] text-white">
            [ToastedSquadStudios] ANNOUNCES, “[Spellbound Survivors ]”, A
            [Action Rouge-like] GAME.
          </h2>
          <p className="text-[16px] font-[500] text-white opacity-70">
            Welcome to the mesmerizing world of Spellbound Survivors, a
            single-player action-roguelike game! Embark on an epic adventure,
            conquer maps, acquire mighty powers, and gear up for an ultimate
            showdown with the formidable Overlord Wizard. Your destiny unfolds
            in this captivating journey!
          </p>
          <h1 className="text-[18px] font-[600] text-white">
            ToastedSquadStudios formally announces the stylized, adventurous
            [Rouge-like], [Spellbound Survivors], coming to Windows PC, this{" "}
          </h1>
          <h2 className="text-[18px] font-[600] text-[#f44f24]">
            [December 29, 2023].
          </h2>
          <p className="text-[16px] font-[500] text-white opacity-70">
            Spellbound Survivors promises more than just thrilling battles; it
            represents a system called {`"`}Legend Bar{`"`} that is required to
            keep an eye on.
          </p>

          <div className="">
            {/* <Image src="/images/home2.png" width={800} height={400} alt="" /> */}
            <div
              className="relative max-w-[900px] max-h-[500px] mx-auto"
              style={{ paddingBottom: "56.25%", height: 0, overflow: "hidden" }}
            >
              <iframe
                className="absolute top-0 left-0 w-full h-full"
                src="https://www.youtube.com/embed/5f7OUjCfS80"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <p className="text-[16px] font-[500] text-white opacity-70 w-full md:w-[60%] mt-[1rem]">
              This bar represents your progress As you survive through this
              enchanting realm, That will grant you access to the ultimate
              showdown. Where you{`'`}ll put all your skills and powers to the
              test against the overlord wizard.
            </p>
          </div>

          <div className="">
            <h1 className="text-[20px] font-[600] text-[#f44f24]">
              Key Features:
            </h1>
            <ul className="flex flex-col ml-[15px]">
              <li className="text-[16px] font-[500] text-white list-disc">
                Single-player
              </li>
              <li className="text-[16px] font-[500] text-white list-disc">
                Steam Achievements
              </li>
              <li className="text-[16px] font-[500] text-white list-disc">
                Full controller support
              </li>
              <li className="text-[16px] font-[500] text-white list-disc">
                Steam Cloud
              </li>
            </ul>
          </div>

          <div className="flex flex-col gap-[2rem]">
            <div className="flex flex-col lg:flex-row items-center gap-[2rem]">
              <Image src="/images/press1.png" width={400} height={250} alt="" />
              <Image src="/images/press2.png" width={400} height={250} alt="" />
            </div>
            <Image src="/images/home1.png" width={850} height={1000} alt="" />
            <div className="flex flex-col lg:flex-row items-center gap-[2rem]">
              <Image src="/images/press3.png" width={400} height={250} alt="" />
              <Image src="/images/press4.png" width={400} height={250} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Press;
