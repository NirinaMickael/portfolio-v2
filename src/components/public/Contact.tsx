import React, { useContext, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { ITCurrentRoute } from "../../@core/model/ITData";

const Contact = ({editRoute} : ITCurrentRoute) => {
  const { ref , inView} = useInView({threshold:0.4});
  useEffect(()=>{
    if(inView){
      editRoute('Contact');
    }
  },[inView]);
  return (
    <div id="Contact" ref={ref} className="BaseWrapper h-screen w-screen">
      <h2 className="sectionTitle">Contact</h2>
    </div>
  );
};
export default Contact;
