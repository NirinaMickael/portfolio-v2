import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";

const About = () => {
    const {ref,inView} = useInView({threshold:0.4});
    useEffect(()=>{
    },[inView])
    return (
        <div  id="About" ref={ref} className="BaseWrapper h-screen w-screen">
            <h2 className="sectionTitle">About</h2>
        </div>
    )
}
export default About;
