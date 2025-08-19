import Image from "next/image";
import Announce from "./Shared/Modal/Announce";
import Nav1 from "./Shared/Nav/Nav1";
import EventMerder from "./Shared/Modal/EventMerdeka";
import Video from "./Shared/Modal/Video";
import Speedcats from "./Shared/Modal/Speedcats";
import Item1 from "./Shared/Modal/Item1Row";


export default function Home() {
  return (
    <div className=" w-full min-h-5 bg-white">
    <Announce/>
    <Nav1/>
    <EventMerder/>
    <Video/>
    <Speedcats/>
    <Item1/>
    </div>
  );
}
