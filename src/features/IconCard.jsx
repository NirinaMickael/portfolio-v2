import React from "react";
import { GitHub, Facebook, LinkedIn, Instagram } from "@mui/icons-material";
import { motion } from "framer-motion";
import { Item, Rounded } from "../@core/data/variant";

export default function IconCard() {
  return (
    <motion.div className="icons"  variants={Rounded} initial="hidden" animate="visible">
      <motion.a href="Portfolio"  variants={Item} whileHover={{ scale: 1.5  }}>
        <GitHub sx={{ fontSize: 40 }}/>
      </motion.a>
      <motion.a href="Portfolio"  variants={Item}  whileHover={{ scale: 1.5  }}>
        <Facebook sx={{ fontSize: 40 }} />
      </motion.a>
      <motion.a href="Portfolio"  variants={Item} whileHover={{ scale: 1.5 }}>
        <LinkedIn sx={{ fontSize: 40 }} />
      </motion.a>
      <motion.a href="Portfolio"  variants={Item}  whileHover={{ scale: 1.5}}>
        <Instagram sx={{ fontSize: 40 }} />
      </motion.a>
    </motion.div>
  );
}
