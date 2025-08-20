import Image from "next/image";

export default function PrimeSquare() {
  return (
    <section className="w-full min-h-[50vh] relative justify-center items-center flex flex-col gap-2">
      <div className="w-full h-full z-0">
        <Image
          src="/PrimeSquare-Puma.avif"
          alt="Prime Square Puma"
          width={1920}
          height={1080}
          className="w-full h-full object-cover object-center"
        />
      </div>
    </section>
  );
}
