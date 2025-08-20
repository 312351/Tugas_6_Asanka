type Colourprops ={
    BgColour : string,
    Text   : String;
}
export default function Button({BgColour,Text}:Colourprops){
    return(

        <div className="min-h-full z-0">
                <a href=""><button className={` py-3 px-6 ${BgColour} hover:opacity-75 text-[1vw] ${Text} font-bold`}>Belanja Sekarang</button></a>
        </div>
    );
}