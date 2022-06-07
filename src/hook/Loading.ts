import React from "react";
import { ITLoading } from "../@core/model/ITData";

const defaultValue = {
    isVisited : false
}

const LoadingContext = React.createContext<ITLoading>(defaultValue);

export default LoadingContext;