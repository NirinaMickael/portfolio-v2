import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import IconCard from "../../features/IconCard";
import TypeWriter from "../../features/TypeWriter";
import PermContactCalendarIcon from "@mui/icons-material/PermContactCalendar";
import CallMadeIcon from "@mui/icons-material/CallMade";
import { ITCurrentRoute } from "../../@core/model/ITData";
const Home = ( {editRoute} : ITCurrentRoute) => {
  const { ref, inView, entry } = useInView({
    threshold:1
  });
  useEffect(()=>{
    if(inView) {
    editRoute("Home");
    }
  },[inView]);
  return (
    <div id="Home" ref={ref} className="BaseWrapper flex h-screen w-screen">
      <div className="wrapperTitle">
        <h1 className="gradient-text">Hi! I'm Mickael </h1>
        {inView &&  (<TypeWriter />)}
        <h3>
          Full stack web developer junior, freelancer, Code addict.
          <br /> Based in Madagascar.
        </h3>{" "}
        <br />
        <IconCard />
      </div>
      <div className="button flex gap-x-8">
        <button className=" btn-primary py-2 px-4 ">
          {" "}
          Contact me <PermContactCalendarIcon sx={{ fontSize: 20 }} />{" "}
        </button>
        <button className=" btn-secondary py-2 px-4 ">
          {" "}
          View resume <CallMadeIcon sx={{ fontSize: 20 }} />{" "}
        </button>
      </div>
    </div>
  );
};
export default Home;
