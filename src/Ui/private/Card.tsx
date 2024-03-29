import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { Item } from "../../@core/data/variant";
import { ITAction, ITCard, ITTecno } from "../../@core/model/ITData";

const Card = React.memo(({ card }: { card: ITCard }) => {
  const navigate = (url:string)=>{
    window.open(url,'__blank','noopener,noreferrer');
  }
  return (
    <>
      <motion.div variants={Item} id={"card" + card.id} className="card">
        <div className="wrapperImage hidden md:grid">
          <img src={card.image} alt="dsdsd" className="m-auto" />
        </div>
        <div className="description">
          <p className="md:text-center md:text-base text-sm text-justify mx-1">{card.description}</p>
        </div>
        <div className="cardHover">
          <div className="wrapperIcon w-full flex p-2">
            {card.actions.map((item: ITAction, index) => {
              return (
                <button className=" btn py-1 px-2  text-xs  mx-2 border-b-4 rounded" onClick={()=>navigate(item.url)}>
                  {item.label}
                </button>
              );
            })}
          </div>
          <div className="wrapperTecno flex p-2 w-full justify-center">
            {card.tecno.map((item: ITTecno, index: number) => {
              return (
                <img
                  key={index}
                  src={item.image}
                  className="w-5 mx-2"
                  alt="no image"
                />
              );
            })}
          </div>
        </div>
      </motion.div>
    </>
  );
});

export default Card;
