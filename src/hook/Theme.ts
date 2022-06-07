import React from "react";
import IThemeContext from "../@core/model/Theme";

const defaultState = {
    dark : false
}

const ThemeContext = React.createContext<IThemeContext>(defaultState);

export default ThemeContext;