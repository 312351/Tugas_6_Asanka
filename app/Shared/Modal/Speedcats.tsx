import Button from "../Button/button";

export default function Spedcats() {
  return (
    <section className="w-full min-h-[50vh] text-black py-[1vw]">
      <div className="w-full h-[50vh] flex justify-center items-center">
        <div className="flex flex-col items-center justify-center text-center space-y-[0.5vw]">
          <h1 className="uppercase font-bold text-[4vw] leading-tight m-0 p-0">SpeedCat</h1>
          <h3 className="uppercase text-[1.5vw] leading-tight m-0 p-0">Fast And Fearless</h3>
          <Button />
        </div>
      </div>
    </section>
  );
}
