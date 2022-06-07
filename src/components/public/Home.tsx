import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import IconCard from "../../features/IconCard";
import TypeWriter from "../../features/TypeWriter";
import { ITCurrentRoute } from "../../@core/model/ITData";
const Portfolio = ( {editRoute} : ITCurrentRoute) => {
  const { ref, inView, entry } = useInView({
    threshold:1
  });
  useEffect(()=>{
    if(inView) {
    editRoute("Portfolio");
    }
  },[inView]);
  return (
    <div id="Portfolio" ref={ref} className="BaseWrapper flex h-screen w-screen">
      <div className="wrapperTitle">
        <h1 className="gradient-text">Hi <span className="text-red">👋</span> ! I'm Mickael </h1>
        {inView &&  (<TypeWriter />)}
        <h3>
          Full stack web developer junior, freelancer, Code addict.
          <br /> Based in Madagascar.
        </h3>{" "}
        <br />
        <IconCard />
      </div>
    </div>
  );
};
export default Portfolio;
