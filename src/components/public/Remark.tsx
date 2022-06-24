import React, {useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { ITCurrentRoute } from "../../@core/model/ITData";
import Form from "../../features/Form";
import {collection,query,orderBy,onSnapshot,addDoc,serverTimestamp} from 'firebase/firestore';
import { db } from "../../firebase";
import { IRemark } from "../../@core/model/ITData";
const fetchRemark = async()=>{
  try{
    await addDoc(collection(db,'portfolio'),{
      remark : "ok",
      status:"kjnd",
      username : "jqdnq"
    })
  }catch(err){
    console.log(err);
  }
}
const Reviews = ({ editRoute }: ITCurrentRoute) => {
  const { ref, inView } = useInView({ threshold: 0.4 });
  const [test, setTest] = useState([]);
  const [remark , setRemark] = useState<IRemark[]>([{id:2,username:"",status:"",remark:"sffs"}]);
  useEffect(() => {
    if (inView) {
      editRoute("Reviews");
    }
  }, [inView]);
  // useEffect(()=>{
  //   fetchRemark();
  // });

  const AddData = (data : IRemark[])=>{  
    setRemark(curr=>{
      return [...curr].concat(data)
    });
    console.log(remark);
  };
  return (
    <div id="Contact" ref={ref} className="BaseWrapper h-screen w-screen">
      <h2 className="sectionTitle">Reviews</h2>
      <div className="container-remarks flex">
          <Form addRemark ={(data : IRemark[])=>AddData(data)}/>
          <Form addRemark ={(data : IRemark[])=>AddData(data)}/>
      </div>
    </div>
  );
};
export default Reviews;