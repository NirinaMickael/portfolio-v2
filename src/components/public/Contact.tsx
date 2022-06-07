import { motion, useAnimation } from "framer-motion";
import React, { useContext, useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { FadeOut, Item, Rounded } from "../../@core/data/variant";
import { ITCurrentRoute } from "../../@core/model/ITData";
import {CallMadeOutlined , Chat , Close} from '@mui/icons-material'
import Chats from "../../features/Chat";
const Data = [
  {
    id: 0,
    image: "/facebook.png",
  },
  {
    id: 1,
    image: "/whatapp.jpeg",
  },
  {
    id: 2,
    image: "/linkdin.png",
  },
  {
    id: 3,
    image: "/mail.png",
  },
];

const Contact = ({ editRoute }: ITCurrentRoute) => {
  const { ref, inView } = useInView({ threshold: 0.4 });
  const [chat , setChat] = useState<boolean>(false);
  const control = useAnimation();
  useEffect(() => {
    if (inView) {
      editRoute("Contact");
      control.start("visible");
    } else {
      control.start("hidden");
    }
  }, [inView]);

  const HandleClick = () => {
    setChat(!chat);
  }

  return (
    <div id="Contact" ref={ref} className="BaseWrapper h-screen w-screen">
      <h2 className="sectionTitle">Contact</h2>
      <motion.div
        variants={FadeOut}
        initial="hidden"
        animate={control}
        className="wrapperImage grid items-end justify-center bg-image h-full"
      >
        <div className="mycontact mt-8 p-3">
          <h1 className="border-b-2 w-full">Thank , for your visit</h1>
          <h3 className="mt-2 w-full">Contact me on</h3>
          <motion.div
            variants={Rounded}
            initial="hidden"
            animate={control}
            className="allcommunication flex gap-2 my-4 justify-center"
          >
            {Data.map((item: any, index: number) => {
              return (
                <motion.img
                  variants={Item}
                  src={item.image}
                  alt="no image"
                  className="w-full w-10 mx-2"
                />
              );
            })}
          </motion.div>
          <h3 className="mt-2 w-full">Or</h3>
          <motion.div className="button flex gap-x-8 my-4">
            <button 
              onClick={()=>HandleClick()}
            className=" btn-primary py-2 px-4 ">
              {" "}
              Chat me <Chat sx={{ fontSize: 20 }} />{" "}
            </button>
            <button className=" btn-secondary py-2 px-4 ">
              {" "}
              View resume <CallMadeOutlined sx={{ fontSize: 20 }} />{" "}
            </button>
          </motion.div>
        </div>
      </motion.div>
      {
        chat && (
          <Chats  close = {()=>HandleClick()}/>
        )
      }
    </div>
  );
};
export default Contact;
