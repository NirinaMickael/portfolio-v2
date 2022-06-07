import React from "react";

import { ITHeight } from "../@core/model/ITData";

const defaultState = {
    height : 0
}
const HeightContext = React.createContext<ITHeight>(defaultState);

export default HeightContext;