import {useCallback, useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import Form from "../../features/Form";
import {collection,addDoc,getDoc, doc} from 'firebase/firestore';
import { db } from "../../firebase";
import { IRemark } from "../../@core/model/ITData";
const col = 'portfolio';
var remarkRef = collection(db,col);
const addRemark = async(data :IRemark)=>{
  try{
    await addDoc(remarkRef,data)
  }catch(err){
    console.log(err);
  }
}
const Reviews = () => {
  const { ref, inView } = useInView({ threshold: 0.4 });
  useEffect(() => {
  }, [inView]);
  const AddData = useCallback((data : IRemark)=>{ 
    console.log(data);
    addRemark(data);
  }, []);
  return (
    <div id="Remark" ref={ref} className="BaseWrapper h-screen w-screen">
      <h2 className="sectionTitle">Reviews</h2>
      <div className="container-remarks flex">
          <Form addRemark ={(data : IRemark)=>AddData(data)}/>
      </div>
    </div>
  );
};
export default Reviews;