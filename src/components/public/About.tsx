import React, { useContext, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { ITCurrentRoute } from "../../@core/model/ITData";

const About = ({editRoute} : ITCurrentRoute) => {
    const {ref,inView} = useInView({threshold:0.4});
    useEffect(()=>{
        if(inView){
            editRoute("About");
        }
    },[inView])
    return (
        <div  id="About" ref={ref} className="BaseWrapper h-screen w-screen">
            <h2 className="sectionTitle">About</h2>
        </div>
    )
}
export default About;
