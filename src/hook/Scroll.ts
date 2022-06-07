import React from "react";

import ITScrollContext from "../@core/model/Scroll";
 
const defaultState = {
    position : 0
}
const ScrollContext = React.createContext<ITScrollContext>(defaultState);

export default ScrollContext;