import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Transition } from "../@core/data/variant";
import { useForm } from "react-hook-form";
import { IRemark } from "../@core/model/ITData";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

const CircularIndeterminate = () => {
  return (
    <Box>
      <CircularProgress />
    </Box>
  );
};
var data: IRemark[] = [
  {
    id: 1,
    username: "nirina",
    status: "ok",
    remark: "mld,",
  },
];

const schema = yup.object({
  remark: yup.string().required().max(200).min(5),
  status: yup.string().required(),
  username: yup.string().required().min(5),
});
export default function Form({
  addRemark,
  loading,
}: {
  addRemark: any;
  loading: boolean;
}) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IRemark>({
    resolver: yupResolver(schema),
  });
  const onSubmit = handleSubmit((data) => {
    addRemark(data);
  });
  return (
    <motion.div
      className="wrapper-form"
      variants={Transition}
      initial="hidden"
      animate="visible"
    >
      <form onSubmit={onSubmit}>
        <div className="status">
          <input
            type="text"
            id="status"
            className="inputNeomorphic"
            placeholder="Your status(Developer,.........)"
            {...register("status")}
          />
          <small> {errors.status?.message}</small>
        </div>
        <div className="Name">
          <input
            type="text"
            id="Name"
            className="inputNeomorphic"
            placeholder="Username"
            {...register("username")}
          />
          <small> {errors.username?.message}</small>
        </div>
        <div className="Remark">
          <textarea
            id="remark"
            {...register("remark")}
            placeholder="Your remark"
          ></textarea>
          <small> {errors.remark?.message}</small>
        </div>
        <div className="button w-full">
          <button type="submit" className="buttonNeomorphic p-2 w-full">
            {loading && <CircularIndeterminate />}
            <span className="py-2">Envoyer</span>
          </button>
        </div>
      </form>
    </motion.div>
  );
}
