import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { Item } from "../../@core/data/variant";
import { ITAction, ITCard, ITTecno } from "../../@core/model/ITData";

const Card = React.memo(({ card }: { card: ITCard }) => {
  return (
    <>
      <motion.div variants={Item} id={"card" + card.id} className="card">
        <div className="wrapperImage hidden md:grid">
          <img src={card.image} alt="dsdsd" className="md:h-80 h-full m-auto" />
        </div>
        <div className="description">
          <p className="md:text-center text-justify mx-1">{card.description}</p>
        </div>
        <div className="cardHover">
          <div className="wrapperIcon w-full flex p-2">
            {card.actions.map((item: ITAction, index) => {
              return (
                <button className=" btn py-2 px-4   mx-2 border-b-4 rounded">
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
                  className="w-10 mx-2"
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
