import { useCallback, useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import Form from "../../features/Form";
import { collection, addDoc, getDoc, doc } from "firebase/firestore";
import { db } from "../../firebase";
import { IRemark } from "../../@core/model/ITData";
import IconCard from "../../features/IconCard";

const col = "portfolio";
var remarkRef = collection(db, col);
const Reviews = () => {
  const { ref, inView } = useInView({ threshold: 0.4 });
  useEffect(() => {}, [inView]);
  const [isLoading,setLoading] = useState(false);
  const AddData = useCallback((data: IRemark) => {
    setLoading(true);
    (async()=>{
      try {
        await addDoc(remarkRef, data);
        setLoading(false);
      } catch (err) {
        console.log(err);
      }
    })();
  }, []);
  return (
    <div id="Remark" ref={ref} className="BaseWrapper h-screen w-screen">
      <h2 className="sectionTitle">Reviews</h2>
      <div className="container-remarks flex">
        <Form loading={isLoading} addRemark={(data: IRemark) => AddData(data)} />
      </div>
      <div className="w-42 grid justify-items-center">
        <IconCard />
      </div>
    </div>
  );
};
export default Reviews;
