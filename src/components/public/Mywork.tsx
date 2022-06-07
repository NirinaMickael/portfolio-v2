import { motion, useAnimation } from "framer-motion";
import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { Cards } from "../../@core/data/Data";
import { Item, FadeOut } from "../../@core/data/variant";
import { ITCard, ITCurrentRoute } from "../../@core/model/ITData";
import { Card } from "../../Ui";

const MyWork = ({ editRoute }: ITCurrentRoute) => {
  const { ref, inView } = useInView({ threshold: 0.4 });
  const control = useAnimation();
  useEffect(() => {
    if (inView) {
      editRoute("My work");
      control.start("visible");
    } else {
      control.start("hidden");
    }
  }, [inView]);
  return (
    <div id="MyWork" ref={ref} className="BaseWrapper h-screen w-screen">
      <h2 className="sectionTitle">My Work</h2>
      <motion.div
        variants={FadeOut}
        initial="hidden"
        animate={control}
        className="wrapperCard grid grid-cols-1 mt-1 md:mt-6 grid-rows-3 md:grid-rows-1 md:grid-cols-3 
         gap-y-2 md:gap-4 md:h-4/5"
      >
        {Cards.map((item: ITCard, index: number) => {
          return <Card key={index} card={item}></Card>;
        })}
      </motion.div>
    </div>
  );
};
export default MyWork;
