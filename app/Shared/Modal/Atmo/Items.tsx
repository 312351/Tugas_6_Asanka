import Image from "next/image";

type dataprops ={
    IdItem:string,
    ImgSrc:string,
    Nama:String,
    HargaPertama:String,
    HargaPromo?:String
}
export default function Items({IdItem,ImgSrc,Nama,HargaPertama,HargaPromo}:dataprops){
    return(
        <div
            key={IdItem}
            className="w-[25vw] flex-shrink-0 bg-white snap-center"
          >

                    <div className="w-full min-h-6 bg-slate-200">
                        <img src={ImgSrc} alt="" />
                    </div>
                    <div className="w-full min-h-[8vw] flex flex-row justify-between px-5">
                        <div className=" w-[75%] font-bold text-[5px] md:text-[6px] lg:text-[10px]">
                            <p>{Nama}</p>
                        </div>
                        <div className=" flex flex-col items-end text-[10px] ">
                            {HargaPromo && <p className="text-red-500">Rp.{HargaPromo}</p>}
                            <p className={HargaPromo ? "line-through text-gray-700 " : ""}>Rp.{HargaPertama}</p>
                        </div>
                    </div>
        </div>
    );
}