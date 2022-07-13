import React, {useCallback, useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { ITCurrentRoute } from "../../@core/model/ITData";
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
const getRemark = async () =>{
  // try{
  //   const docRef = doc(db,col)
  //   const docSnap = await getDoc(docRef)
  //   console.log(docSnap);
  // }catch(err){
  //   console.log(err)
  // }
}
const Reviews = ({ editRoute }: ITCurrentRoute) => {
  const { ref, inView } = useInView({ threshold: 0.4 });
  const [test, setTest] = useState([]);
  const [remark , setRemark] = useState<IRemark[]>([{id:-1,username:"",status:"",remark:""}]);
  useEffect(() => {
    if (inView) {
      editRoute("Reviews");
    }
  }, [inView]);
  // useEffect(()=>{
  //   fetchRemark();
  // },[remark]);
  // getRemark();
  const AddData = useCallback((data : IRemark)=>{ 
    console.log(data);
    addRemark(data);
    setRemark(currentRemark => [...currentRemark,data]);
  }, []);
  return (
    <div id="Contact" ref={ref} className="BaseWrapper h-screen w-screen">
      <h2 className="sectionTitle">Reviews</h2>
      {/* <Form addRemark ={(data : IRemark)=>AddData(data)}/> */}
      <div className="container-remarks flex">
          <Form addRemark ={(data : IRemark)=>AddData(data)}/>
          {/* <div className="allRemark card">
            {
              remark.map(item =>{
                  if(item.id != -1) return <div className="remark">
                    <p>{item.remark}</p>
                  </div>
              })
            }
          </div> */}
      </div>
    </div>
  );
};
export default Reviews;