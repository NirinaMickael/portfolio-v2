import { motion, useAnimation } from "framer-motion";
import React from "react";
import { Close } from "@mui/icons-material";
import { Chat } from "../@core/data/variant";
const Chats = React.memo(({close} :{close : any}) => {
    return (
    <motion.div 
    variants={Chat}
    initial="hidden"
    animate="visible"
    className="chat">
      <div className="headerChat w-full border-b-2 border-black">
        <h3 className=" user m-1">You</h3>
        <Close
            onClick={close}
          style={{ position: "absolute", top: 0, right: 0, cursor: "pointer" }}
          className="m-1"
          sx={{ fontSize: 25 }}
        />
      </div>
      <div className="wrapperform w-full">

      </div>
    </motion.div>
  );
});
export default Chats;
