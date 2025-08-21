import Image from "next/image"
import Facebook from '@mui/icons-material/Facebook'
import Instagram from '@mui/icons-material/Instagram'
import Twitter from '@mui/icons-material/Twitter'
import Pinterest from "@mui/icons-material/Pinterest"
import Youtube from '@mui/icons-material/YouTube'
import ReactCountryFlag from "react-country-flag";
import { FaXTwitter } from 'react-icons/fa6';
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
export default function Foother(){
    return(
        <footer className="w-full min-h-[75vh] pb-[5vh] bg-black">
            <div className="w-full min-h-[100vh] md:min-h-[75vh] py-5 px-4 bg-black flex flex-col border-b-3">
                <div className="w-full min-h-[4] flex flex-row mb-[6vh]">

          <div className="w-full md:flex flex-col hidden md:block">
          <img src="./Puma.png" alt="" className="w-[5vw] " />
          </div>

<div className=" w-full md:w-[35%] min-h-[1] flex flex-col gap-y-4 text-white">
    <div className="w-full px-16 flex flex-col gap-y-4">
        <p className="font-bold">Pendaftaran Email</p>
        <div className="w-full flex flex-col justify-center items-center">
        <input type="text" placeholder="Email" className="h-[6px] py-10 w-full bg-black border-2 border-white pl-3"/>
        </div>
    </div>
  </div>
  </div>
    <div className="w-full h-[35vh] flex justify-between items-center text-white border-b-1">
      <div className="w-full h-[35vh] flex flex-col md:flex-row justify-between  text-white">
      <div className="w-full md:w-[75%] flex flex-col md:flex-row gap-x-5">

    <div className="w-full md:w-[25vw] sm:min-h-[15vh] md:h-[0] flex flex-col border-t-2 md:border-t-0 justify-center">
    
    <p className="font-bold hidden: md:block md:border-t-2 sm:border-t-0">Dukungan</p>
    <div className="py-[1vw] min-h-[5vh] px-5 lg:flex flex-row justify-between  hidden md:block">
      <span className="opacity-75 flex flex-col gap-1">
        <a href="#"><p>Pertanyaan Umum</p></a>
        <a href="#"><p>Hubungi Saya</p></a>
        <a href="#"><p>Profil Saya</p></a>
        <a href="#"><p>Pengirim</p></a>
        <a href="#"><p>Panduan Ukuran</p></a>
      </span>
      <span className="opacity-75 flex flex-col gap-1">
        <a href="#"><p>Pertanyaan Umum</p></a>
        <a href="#"><p>Hubungi Saya</p></a>
        <a href="#"><p>Profil Saya</p></a>
        <a href="#"><p>Pengirim</p></a>
        <a href="#"><p>Panduan Ukuran</p></a>
      </span>
    </div>
    </div>
    <div className="w-full md:w-[25vw] sm:min-h-[15vh] md:h-[0] flex flex-col border-t-2 md:border-t-0 justify-center">
    <p className="font-bold hidden: md:block md:border-t-2 sm:border-t-0">Dukungan</p>
    <div className="py-[1vw] min-h-[5vh] px-5 lg:flex flex-row justify-between  hidden md:block">
      <span className="opacity-75 flex flex-col gap-1">
        <a href="#"><p>Perusahaan</p></a>
        <a href="#"><p>Berita Perusahaan</p></a>
        <a href="#"><p>Pusat Siaran Pers</p></a>
      </span>
      <span className="opacity-75 flex flex-col gap-1">
        <a href="#"><p>Investor</p></a>
        <a href="#"><p>Sustainability</p></a>
        <a href="#"><p>Karrier</p></a>
      </span>
    </div>
    </div>




     

  </div>
        <div className="w-full md:w-[25%] flex flex-col gap-x-6 border-t-[1px]">
      <div className="w-full flex flex-col gap-y-2  justify-center">
       <p className="font-bold mt-3 hidden md:block">More Inspiration</p>
       <div className="w-full h-[15vh]  flex flex-row gap-x-8  justify-center items-center">
            <div className=" flex items-center justify-center">
                    <Facebook className="w-8 h-8" />
                  </div>
                  <div className="flex items-center justify-center">
                    <FaXTwitter className="w-8 h-8" />
                  </div>
                  <div className="flex items-center justify-center">
                    <Instagram className="w-8 h-8" />
                  </div>
                  <div className="flex items-center justify-center">
                    <Pinterest className="w-8 h-8" />
                  </div>
                  <div className="flex items-center justify-center">
                    <Youtube className="w-8 h-8" />
                  </div>
       </div>
       <div className="w-[90%] md:w-full h-[15vh] flex flex-col justify-center gap-y-2 border-t-2">
      
            <div className="  flex flex-row justify-start items-center">
                <img src="pumatrac-logo.svg" alt="" />
                <p className="uppercase">Trai with THE FASTEST</p>
            </div>
       </div> 
    </div>

  </div>
    </div>

      </div>
        </div>

        <div className="w-full min-h-[50vh] bg-black border-t-1 md:border-t-2">
        <div className="w-full min-h-[50vh] p-3 flex flex-col md:flex-row gap-3 items-center justify-between">
          <div className="w-[75%] md:w-[25vw] min-h-[10vh] border-2 flex flex-row items-center px-2 gap-x-2 group">
               <div className="flag flex flex-col h-[6vh] w-[8vw] rounded-full">
                  <div className="bg-[#E70011] h-full rounded-t-full"></div>
                  <div className="bg-[#FFFFFF] h-full rounded-b-full"></div>
               </div>
               <span className="w-full h-full flex  justify-between items-center">
                    <p className="font-bold uppercase">Indonesia</p>
                    <ArrowBackIosNewIcon 
                      className="transform -rotate-90 transition-transform duration-300 ease-in-out group-active::rotate-90 text-white"/>
                  </span>
          </div>
          <div className="w-full md:w-[50%] flex flex-col md:flex-row md:items-center justify-between ">
          <div className="w- flex flex-col gap-y-5 justify-between">
              <h3 className="font-bold">©PUMA Indonesia 2025</h3>
              <p >Gedung Dea Tower II LT.5 <br /> Unit 503Kawasan Mega Kuningan <br /> Jl. Mega Kuningan Barat Kav. E4.3 <br /> No.1-2 <br />Jakarta Selatan 12950</p>
              <h3 className=" font-bold">LAYANAN PENGADUAN KONSUMEN</h3>
              <h3 className=" font-bold">PT PUMA SPORTS INDONESIA</h3>
              <span className="flex flex-row"><h3 className="font-bold">Jam kerja</h3><p>:Senin hingga Jumat, 10.00 WIB - 18.00 WIB</p></span>
              <span className="flex flex-row"><h3 className="font-bold">Email</h3><p>:service@sea.puma.com</p></span>
              <span className="flex flex-row"><h3 className="font-bold">Telepon</h3><p>:+62 8001 4019 47 atau +6221 5096 0281</p></span>
              <h3 className=" uppercase font-bold">DIREKTORAT JENDERAL PERLINDUNGAN KONSUMEN DAN TERTIB NIAGA <br /> KEMENTERIAN PERDAGANGAN <br /> REPUBLIK INDONESIA | Telepon: 0853-1111-1010</h3>
          </div>
            <p className="opacity-75 whitespace-nowrap">Cap & Legal</p>
          </div>
          <div className="md:flex hidden md:block">
                <img src="./mastercard-card.svg" alt="" />
                <img src="./visa-card.svg" alt="" />
            </div>
        </div>
        </div>
        </footer>
    )
}