'use client';
import { useEffect, useRef, useState } from 'react';

export default function EventMerder() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalSlides = 2;

  useEffect(() => {
    const interval = setInterval(() => {
      if (!containerRef.current) return;

      const nextIndex = (currentIndex + 1) % totalSlides;
      const container = containerRef.current;
      const scrollAmount = container.clientWidth * nextIndex;

      container.scrollTo({
        left: scrollAmount,
        behavior: 'smooth',
      });

      setCurrentIndex(nextIndex);
    }, 10000); // 5 detik

    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <section className="w-full min-h-[15vh] bg-[#fff3] flex flex-col justify-center items-center pb-3">
      <div
        ref={containerRef}
        className="w-full overflow-x-auto scroll-smooth snap-x snap-mandatory flex gap-x-7 h-[15vh] scrollbar-hide"
      >
        <div className="snap-center shrink-0 w-full h-full flex flex-col justify-center items-center text-black bg-[#EFEFEF]">
          <h1 className="text-[3vh] font-bold text-center">
            Special Hari Kemerdekaan - Extra 35% OFF *
          </h1>
          <div className="flex font-normal flex-row text-[3vh] gap-x-5 mt-3 text-gray-500">
             <a href=""><h3 className=' underline '>Belanja Sekarang</h3></a>
            <div className="w-0.5 h-full bg-gray-500" />
            <a href=""><h3 className=' underline '>Pria</h3></a>
            <div className="w-0.5 h-full bg-gray-500" />
            <a href=""><h3 className=' underline '>Wanita</h3></a>
          </div>
        </div>

        <div className="snap-center shrink-0 w-full h-full flex flex-col justify-center items-center text-black bg-[#EFEFEF]">
          <h1 className="text-[3vh] font-bold text-center">
            FRESH STYLES - BUY 2 GET 20% OFF,BUY 3 GET30% OFF
          </h1>
          <div className="flex font-normal flex-row text-[3vh] gap-x-5 mt-3 text-gray-500">
             <a href=""><h3 className=' underline '>Belanja Sekarang</h3></a>
            <div className="w-0.5 h-full bg-gray-500" />
            <a href=""><h3 className=' underline '>Pria</h3></a>
            <div className="w-0.5 h-full bg-gray-500" />
            <a href=""><h3 className=' underline '>Wanita</h3></a>
          </div>
        </div>
      </div>

      <div className="mt-4 flex gap-2 hover:cursor-pointer">
        {[...Array(totalSlides)].map((_, index) => (
          <div
            key={index}
            className={`w-3 h-3 rounded-full ${
              index === currentIndex ? 'bg-black' : 'bg-gray-400'
            } transition-all duration-300`}
          ></div>
        ))}
      </div>
    </section>
  );
}
