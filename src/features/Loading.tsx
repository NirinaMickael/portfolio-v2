import React, { useContext, useEffect, useState} from "react";
import { motion, useAnimation } from "framer-motion";
import "./Loading.scss";
import LoadingContext from "../hook/Loading";
const container = {
  hidden:(j: any)=>({ opacity: 1, x: 0, y: 0}),
  show: (i: any)=> ({
    opacity: 1,
    x: 100,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      duration:33
    },
  }),
};

const  Loading = ( ) =>{
  const [counter, setCounter] = useState<number>(0);
  const controll = useAnimation();
  const { setVisit} = useContext(LoadingContext);
  sessionStorage.removeItem('visited');
  
  // ((visit)=>{
  //   visited(visit);
  // })(false);

  useEffect(() => {
    const increment = setTimeout(() => {
      setCounter((initial) => initial + 1);
    }, 50);
    if (counter % 5 === 0) controll.start("show");
    else controll.start("hidden");

    if (counter > 100) {
      clearTimeout(increment);
      sessionStorage.setItem('visited','true');
      const visit = sessionStorage.getItem('visited');
      setVisit(visit);
    };
  }, [counter]);
  
  return (
    <div className="container-loading h-screen " >
      <div className="loading">
        <div className="progressbar-container">
          <div className="progressbar" style={{ width: `${counter}%` }}>
            <small>{counter}%</small>
          </div>
        </div>
      </div>
      {/* <div className="container-bounce">
      <motion.div
        variants={container}
        custom={counter}
        initial="hidden"
        animate={controll}
        className="bounce"
      />
      </div> */}
    </div>
  );
}
export default Loading;