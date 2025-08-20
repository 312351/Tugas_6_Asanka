'use client';
import { useRef, useState } from 'react';
import Play from '@mui/icons-material/PlayArrow';
import Pause from '@mui/icons-material/Pause';

export default function Video2() {
  const VideoRef = useRef<HTMLVideoElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(true); // autoplay
  const [isHovered, setIsHovered] = useState(false);

  const togglePlay = () => {
    if (!VideoRef.current) return;

    if (isPlaying) {
      VideoRef.current.pause();
      setIsPlaying(false);
    } else {
      VideoRef.current.play();
      setIsPlaying(true);
    }
  };

  return (
    <section
      className="w-full h-auto flex justify-center items-center relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <video
        ref={VideoRef}
        className="w-full min-h-[50vh] object-cover z-0"
        autoPlay
        muted
        loop
        playsInline
      >
        <source
          src="https://images.puma.com/video/fetch/f_auto,q_auto/https://videos.puma.net/videos/fn/~regional~VNM~others~25AW+-+Mostro~25AW_Ecom_SP_MOSTRO_Amelia-Gray-Film2_2000x694_15sec.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>

      {/* Toggle button hanya muncul saat hover */}
      {isHovered && (
        <div className="w-full h-full absolute z-10 inset-0 flex justify-center items-center">
          <div
            onClick={togglePlay}
            className="cursor-pointer p-4 rounded-full border-2 border-white bg-black bg-opacity-50 hover:bg-opacity-70 transition"
          >
            {isPlaying ? (
              <Pause className="!w-[5vw] !h-[5vw] text-white" />
            ) : (
              <Play className="!w-[5vw] !h-[5vw] text-white" />
            )}
          </div>
        </div>
      )}
    </section>
  );
}
