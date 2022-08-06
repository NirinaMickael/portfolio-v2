import { motion, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { FadeOut, Item, Rounded } from "../../@core/data/variant";
import { CallMadeOutlined, Chat, Close } from "@mui/icons-material";
import Chats from "../../features/Chat";
import { useNavigate } from "react-router-dom";
const Data = [
  {
    id: 0,
    image: "/facebook.png",
    url: "https://www.facebook.com/roi.mickael",
  },
  {
    id: 1,
    image: "/linkdin.png",
    url: "https://www.linkedin.com/in/todisoa-nirina-mickael-7345b2227/",
  },
];

const Contact = () => {
  const { ref, inView } = useInView({ threshold: 0.4 });
  const [chat, setChat] = useState<boolean>(false);
  const control = useAnimation();
  const nav = useNavigate();
  useEffect(() => {
    if (inView) {
      control.start("visible");
    } else {
      control.start("hidden");
    }
  }, [inView]);

  const HandleClick = (label:string) => {
    if(label==="chat") {setChat(!chat);}
    else {window.open("https://www.nuc.us/EGVUwc1n",'__blank','noopener,noreferrer')}
  };
  const navigate = (url: string) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };
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
                  key={index}
                  variants={Item}
                  src={item.image}
                  alt="no image"
                  className="w-full w-10 mx-2"
                  onClick={() => navigate(item.url)}
                />
              );
            })}
          </motion.div>
          <h3 className="mt-2 w-full">Or</h3>
          <motion.div className="button flex gap-x-8 my-4">
            <button
              onClick={() => HandleClick("chat")}
              className=" btn-primary py-2 px-4 "
            >
              {" "}
              Chat me <Chat sx={{ fontSize: 20 }} />{" "}
            </button>
            <button
              className=" btn-secondary py-2 px-4 "
              onClick={() => HandleClick("resume")}
            >
              {" "}
              View resume <CallMadeOutlined sx={{ fontSize: 20 }} />{" "}
            </button>
          </motion.div>
        </div>
      </motion.div>
      {chat && <Chats close={() => HandleClick("chat")} />}
    </div>
  );
};
export default Contact;
