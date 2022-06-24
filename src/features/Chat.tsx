import { motion, useAnimation } from "framer-motion";
import React, { useEffect, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { Close } from "@mui/icons-material";
import { Chat } from "../@core/data/variant";
import { Message } from "../@core/data/Data";
import { IMessage } from "../@core/model/ITData";
interface IFormInput {
  message: string;
}

const Chats = React.memo(({ close }: { close: any }) => {
  const {
    register,
    handleSubmit,
    formState: { isValid },
  } = useForm<IFormInput>();
  const [allMessage, setMessage] = useState<IMessage[]>(Message);
  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    setMessage((current: IMessage[]) => [
      ...current,
      {
        id: current[current.length - 1].id,
        isOther: true,
        message: data.message,
      },
    ]);
  };

  useEffect(() => {}, []);
  return (
    <motion.div
      variants={Chat}
      initial="hidden"
      animate="visible"
      className="chat grid"
    >
      <div className="headerChat w-full border-b-2 border-black">
        <h3 className=" user m-1">You</h3>
        <Close
          onClick={close}
          style={{ position: "absolute", top: 0, right: 0, cursor: "pointer" }}
          className="m-1"
          sx={{ fontSize: 25 }}
        />
      </div>
      <div
        className="wrapperChat"
        style={{ gridTemplateRows: `repeat(${allMessage.length},12%)` }}
      >
        {allMessage.map((item: IMessage, index: number) => {
          return (
            <motion.h3
              variants={Chat}
              initial="hidden"
              animate="visible"
              className={`message p-2 w-64 text-xs ${
                item.isOther ? "other" : "own"
              }`}
            >
              {item.message}
            </motion.h3>
          );
        })}
      </div>
      <div className="wrapperform px-1">
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            {...register("message", { required: true, minLength: 5 })}
            className="w-56 py-2 outline-none px-2 text-xs"
            placeholder="typing......."
          />
          <button
            type="submit"
            className="w-2O bg-blue-500 hover:bg-blue-400 text-white  py-1 px-3 border-b-2 border-blue-700 hover:border-blue-500 rounded"
          >
            {" "}
            Send
          </button>
        </form>
      </div>
    </motion.div>
  );
});
export default Chats;
