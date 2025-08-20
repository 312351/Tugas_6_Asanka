import Button from "../Button/button";

export default function Velocity() {
  return (
    <section className="w-full min-h-[50vh] relative justify-center items-center flex flex-col gap-2">
      <div className="w-full h-full z-0">
        <img
          src="/png (3).avif"
          alt="Fenty X Puma Banner"
          className="w-full h-full object-cover object-center md:object-right hidden lg:block"
        />
        <img
          src="/png (4).avif"
          alt="Fenty X Puma Banner"
          className="w-full h-full object-cover object-center md:object-right lg:hidden"
        />
      </div>

      <div className="w-full min-h-[1] static lg:absolute inset-0 z-10 flex justify-center xl:justify-center lg:items-start  xl:items-center lg:px-12 ">
        <div className="uppercase flex flex-col gap-4 text-white text-center leading-1 p-0 m-0 lg:normal">
          <p className=" text-black lg:text-white text-[3vh] md:text-[2vh] lg:text-[6vh] xl:text-[8vh] font-bold leading-tight">Velocity 4</p>
            <p className=" text-black lg:text-white tracking-tight [word-pacing:1rem] text-[2vh] md:text-[2vh] lg:text-[4vh] xl:text-[3vh] leading-tight">THE WAY RUNNING SHOULD FEEL</p>
            <Button BgColour="bg-black lg:bg-white" Text="text-[8px] lg:text-[3vh] xl:text-[3vh] text-white lg:text-black" />
        </div>
      </div>
    </section>
  );
}
