import Image from "next/image";
import Announce from "./Shared/Modal/Announce";
import Nav1 from "./Shared/Nav/Nav1";
import EventMerder from "./Shared/Modal/EventMerdeka";
import Video from "./Shared/Modal/Video";
import Speedcats from "./Shared/Modal/Speedcats";
import Item1 from "./Shared/Modal/Item1Row";
import FenityXPuma from "./Shared/Modal/FenityXPuma";
import INHALE from "./Shared/Modal/INHALE";
import PumaxCar from "./Shared/Modal/PumaXCar";
import Video2 from "./Shared/Modal/Video2";
import Item2 from "./Shared/Modal/Mostro";
import Mostro from "./Shared/Modal/Mostro";
import Item_2 from "./Shared/Modal/Item2Row";
import PrimeSquare from "./Shared/Modal/Primesqueare";
import Statement from "./Shared/Modal/Statement";
import Item_3 from "./Shared/Modal/Item3Row";
import Velocity from "./Shared/Modal/Velocity";
import Foother from "./Shared/Modal/Foother";


export default function Home() {
  return (
    <div className=" w-full min-h-5 bg-white flex flex-col gap-5">
    <Announce/>
    <Nav1/>
    <EventMerder/>
    <Video/>
    <Speedcats/>
    <Item1/>
    <FenityXPuma/>
    <INHALE/>
    <PumaxCar/>
    <Video2/>
    <Mostro/>
    <Item_2/>
    <PrimeSquare/>
    <Statement/>
    <Item_3/>
    <Velocity/>
    <Foother/>
    </div>
  );
}
