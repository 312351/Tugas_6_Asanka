'use client';
import { useRef, useEffect } from "react";
import Items from "./Atmo/Items";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

export default function Item_2() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const items = [
    { IdItem: "M1", ImgSrc: "/Sepatu-Sneaker-Mostro-OG-Unisex.avif", Nama: "Sepatu Sneaker Mostro Og unisex", HargaPertama: "1.899.000" },
    { IdItem: "M2", ImgSrc: "/Sepatu-Sneaker-Mostro-OG-Unisex (1).avif", Nama: "Sepatu Sneaker Mostro Og unisex", HargaPertama: "1.899.000" },
    { IdItem: "M3", ImgSrc: "/Sepatu-Sneaker-A$AP-ROCKY-x-PUMA-Mostro-OG-Unisex.avif", Nama: "Sepatu Sneaker A$AP ROCKY X PUMA Mostro OG Unisex", HargaPertama: "2.299.000" },
    { IdItem: "M4", ImgSrc: "/Sepatu-Mostro-Ecstasy.avif", Nama: "Sepatu-Mostro-Ecstasy", HargaPertama: "1.899.000 ", HargaPromo:"", Diskon:"40%"},
  ];

  const duplicatedItems = [...items, ...items, ...items];

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;
    container.scrollLeft = container.scrollWidth / 3;
  }, []);

  const handleScroll = () => {
    const container = scrollRef.current;
    if (!container) return;
    const third = container.scrollWidth / 3;
    if (container.scrollLeft < third * 0.5) {
      container.scrollLeft += third;
    } else if (container.scrollLeft > third * 1.5) {
      container.scrollLeft -= third;
    }
  };

  const scrollNext = () => {
    const container = scrollRef.current;
    if (container) container.scrollBy({ left: 300, behavior: "smooth" });
  };

  const scrollPrev = () => {
    const container = scrollRef.current;
    if (container) container.scrollBy({ left: -300, behavior: "smooth" });
  };

  return (
    <div className="w-full min-h-[5vh] bg-white relative">
      {/* Scroll container */}
      <div
        ref={scrollRef}
        className="w-full min-h-[5vh] py-[1vw] px-[2vw] gap-x-5 flex flex-row overflow-x-auto scrollbar-hide snap-x snap-mandatory"
        onScroll={handleScroll}
      >
        {duplicatedItems.map((item, index) => (
          <div key={`${item.IdItem}-${index}`} className="flex-shrink-0 w-[25vw] snap-center text-black">
            <Items
              IdItem={item.IdItem}
              ImgSrc={item.ImgSrc}
              Nama={item.Nama}
              HargaPertama={item.HargaPertama}
              HargaPromo={item.HargaPertama}
            />
          </div>
        ))}
      </div>

      {/* Gradient overlay (tidak bisa diklik) */}
      <div className="pointer-events-none absolute inset-0 flex justify-between">
        <div className="w-16 h-full bg-gradient-to-r from-white to-transparent"></div>
        <div className="w-16 h-full bg-gradient-to-l from-white to-transparent"></div>
      </div>

      {/* Tombol panah (klik bisa) */}
      <div className="absolute inset-0 flex justify-between items-center px-4 z-20 pointer-events-none">
        <button
          onClick={scrollPrev}
          className="bg-white rounded-full p-3 shadow pointer-events-auto"
        >
          <ArrowBackIosNewIcon />
        </button>
        <button
          onClick={scrollNext}
          className="bg-white rounded-full p-3 shadow pointer-events-auto"
        >
          <ArrowForwardIosIcon />
        </button>
      </div>
    </div>
  );
}
