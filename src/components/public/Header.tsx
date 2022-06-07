import React, { useContext, useEffect, useRef, useState } from "react";
import ThemeContext from "../../hook/Theme";
import { motion, useAnimation } from "framer-motion";
import { Transition , Rounded, Item } from "../../@core/data/variant";
import { Links } from "../../@core/data/Data";
import { ITLink, ITSroll } from "../../@core/model/ITData";
import ScrollContext from "../../hook/Scroll";
import HeightContext from "../../hook/Height";


const Headerc = ({routeActive} : {routeActive : string}) => {
  // &#10005; &#9776;
  const button = useRef(null);
  const { dark, toggleDark } = useContext(ThemeContext);
  const { position, handleScroll } = useContext(ScrollContext);
  const { height } = useContext(HeightContext);
  const [DataLink, setDataLink] = useState<ITLink[]>(Links);
  const [showNav, setShowNav] = useState<boolean>(false);
  const [currentButton, setCurrentButton] = useState<string>("☰");
  const quarter = height / 4;
  const control = useAnimation();
  const handleClick = () => {
    toggleDark();
  };
  useEffect(() => {
    if (position > 0) {
      setShowNav(false);
      setCurrentButton("☰");
    }
  }, [position]);
  useEffect(()=>{
    if(showNav){
      control.start("visible");
    }else{
      control.start("hidden");
    }
  },[control,showNav]);
  const setScroll = (e: React.UIEvent<HTMLElement, UIEvent>) => {
    const currentLink = (e.target as HTMLElement).innerHTML;
    setShowNav(false);
    let scrollTo = 0;
    let index = 0;
    switch (currentLink) {
      case "Home":
        scrollTo = 0;
        index = 0;
        break;
      case "About":
        scrollTo = quarter * 1;
        index = 1;
        break;
      case "My work":
        scrollTo = quarter * 2;
        index = 2;
        break;
      case "Contact":
        scrollTo = quarter * 3;
        index = 3;
        break;
      default:
        break;
    }
    setDataLink((_Links: ITLink[]) => {
      return _Links.map<ITLink>((_item: ITLink) => {
        return _item.id === index
          ? { ..._item, isActive: true }
          : { ..._item, isActive: false };
      });
    });
    handleScroll(scrollTo);
  };
  const handleToggleButton = () => {
    setCurrentButton((current) => {
      return current === "☰" ? "✕" : "☰";
    });
    handleScroll(0);
    setShowNav((current) => !current);
  };


  return (
    <>
      <div
        className={`${position !== 0 ? "header w-screen" : "header w-screen"}`}
      >
        <h1>{routeActive}</h1>
        <span
          ref={button}
          className=" buttonToggle"
          onClick={() => handleToggleButton()}
        >
          {currentButton}
        </span>
      </div>
      {showNav && position == 0 && (
        <div className="nav w-full md:x-auto">
          <nav className="w-full">
            <motion.ul 
              variants={Rounded}
              initial="hidden"
              animate={control}
            className="w-full  grid grid-cols-4 grid-rows-1">
              {DataLink.map((data: ITLink) => {
                return (
                  <motion.li
                    variants={Item}
                    key={data.id}
                    className="text-center grid items-center"
                  >
                    <a
                      className={`${data.isActive ? "active" : ""}`}
                      onClick={(e) => setScroll(e)}
                    >
                      {data.label}
                    </a>
                  </motion.li>
                );
              })}
            </motion.ul>
          </nav>
        </div>
      )}
    </>
  );
};
const Header = React.memo(Headerc);
export default Header;
