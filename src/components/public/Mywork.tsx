import { motion, useAnimation } from "framer-motion";
import  { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { Cards } from "../../@core/data/Data";
import {FadeOut } from "../../@core/data/variant";
import { ITCard } from "../../@core/model/ITData";
import { Card } from "../../Ui";

const MyWork = () => {
  const { ref, inView } = useInView({ threshold: 0.4 });
  const control = useAnimation();
  useEffect(() => {
    if (inView) {
      control.start("visible");
    } else {
      control.start("hidden");
    }
  }, [inView]);
  return (
    <div id="Mywork" ref={ref} className="BaseWrapper w-screen">
      <h2 className="sectionTitle">My Work</h2>
      <motion.div
        variants={FadeOut}
        initial="hidden"
        animate={control}
        className="wrapperCard m-3"
      >
        {Cards.map((item: ITCard, index: number) => {
          return <Card key={index} card={item}></Card>;
        })}
      </motion.div>
    </div>
  );
};
export default MyWork;
