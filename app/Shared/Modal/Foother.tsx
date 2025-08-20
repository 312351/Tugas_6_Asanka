import Image from "next/image"
export default function Foother(){
    return(
        <footer className="w-full min-h-[75vh]">
            <div className="w-full h-full py-5 px-4 bg-black flex flex-col  lg:flex-row">
                <div className="w-full h-full flex-row">
                    

                
<div className="w-full h-[50%] flex flex-col">
<img src="./Puma.png" alt="" className="w-[15vw]" />
</div>

<div className="w-[75%] lg:flex flex-row gap-x-[1vw] hidden lg:block">
  <div className="w-[50%] min-h-[1vh] flex flex-col">
    <hr className="w-full border-2 flex flex-col" />
    <p className="font-bold">Dukungan</p>
    <div className="py-[1vw] px-5 flex flex-row justify-between">
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

  <div className="w-[50%] min-h-[1vh] flex flex-col">
    <hr className="w-full border-2 h-[2%] flex flex-col" />
    <p className="font-bold">Tentang Puma</p>
    <div className="py-[1vw] px-5 flex flex-row justify-between">
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
</div>

<div className=" w-[50%] flex flex-col gap-y-[5vh]">
    <div className="w-full px-16 flex flex-col">
        <p className="font-bold">Pendaftaran Email</p>
        <div className="w-full flex flex-col justify-center items-center">
        <input type="text" placeholder="Email" className="h-[6px] py-10 w-full"/>
        </div>
    </div>
</div>
                </div>
        </footer>
    )
}