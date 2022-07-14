import React, { memo, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import IconCard from "../../features/IconCard";
import TypeWriter from "../../features/TypeWriter";
const Portfolio = ( ) => {
  const { ref, inView } = useInView({
    threshold:1
  });
  useEffect(()=>{
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
export default memo(Portfolio);
