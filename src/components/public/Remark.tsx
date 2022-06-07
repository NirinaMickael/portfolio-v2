import React, { useContext, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { ITCurrentRoute } from "../../@core/model/ITData";
const Reviews = ({ editRoute }: ITCurrentRoute) => {
  const { ref, inView } = useInView({ threshold: 0.4 });
  useEffect(() => {
    if (inView) {
      editRoute("Reviews");
    }
  }, [inView]);
  return (
    <div id="Contact" ref={ref} className="BaseWrapper h-screen w-screen">
      <h2 className="sectionTitle">Reviews</h2>
    </div>
  );
};
export default Reviews;