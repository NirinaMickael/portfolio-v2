import React, { memo, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import TypeWriter from "../../features/TypeWriter";
const Data = [
  {
    id:0,
    label:"c/c++"
  },
  {
    id:1,
    label:"Javascript"
  },
  {
    id:2,
    label:"Angular"
  },
  {
    id:3,
    label:"ReactTs/Js"
  },
  {
    id:4,
    label:"Node/Express"
  },
  {
    id:5,
    label:"NoSql(Mongodb)"
  },
]
const Portfolio = () => {
  const { ref, inView } = useInView({
    threshold: 1,
  });
  useEffect(() => {}, [inView]);
  return (
    <div
      id="Portfolio"
      ref={ref}
      className="BaseWrapper app flex h-screen w-screen"
    >
      <div className="wrapperTitle">
        <h1 className="gradient-text">
          Hi <span className="text-red">👋</span> ! I'm Mickael{" "}
        </h1>
        {inView && <TypeWriter />}
        <h3>
          Full stack web developer junior, freelancer, Code addict.
          <br /> Based in Madagascar.
        </h3>{" "}
        <h3>
          Since I have math skills and I know how to code, <br />I aim to become a
          data scientist and a good developer.
        </h3>
        <h4 className="text-s subSectionTitle">All Tech Stacks</h4>
        <div className="tech">
          {
            Data.map(e=>{
              return <div className=" btn py-1 px-2 my-2 text-xs mx-2 border-b-4 rounded">{e.label}</div>
            })
          }
        </div>
      </div>
    </div>
  );
};
export default memo(Portfolio);
