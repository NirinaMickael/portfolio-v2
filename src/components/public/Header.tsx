import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Item } from "../../@core/data/variant";
import { Links } from "../../@core/data/Data";
import { ITLink } from "../../@core/model/ITData";
import { HashLink as Link } from "react-router-hash-link";
import { useLocation, useNavigate } from "react-router-dom";
const Headerc = () => {
  // &#10005; &#9776;
  const button = useRef(null);
  const [DataLink, setDataLink] = useState<ITLink[]>(Links);
  const [showNav, setShowNav] = useState<boolean>(false);
  const [currentButton, setCurrentButton] = useState<string>("☰");
  const navigate = useNavigate();
  const location = useLocation();
  const handleToggleButton = () => {
    if(currentButton==='☰'){
      document.getElementById('Portfolio')?.scrollIntoView({behavior:'smooth'});
      navigate('/');
    }
    setCurrentButton(cur=>cur==='☰'?'✕':'☰')
    setShowNav(cu=>!cu);
  };
  useEffect(()=>{
    const hash = location.hash;
    let link = hash.split('#').pop() as string;
    const el = hash && document.getElementById(link);
    if(el){
      el.scrollIntoView({behavior:'smooth'});
    } 
  },[location.hash])
  const handleLink =(e:React.UIEvent<HTMLElement,UIEvent>)=>{
    setShowNav(cu=>false);
    setCurrentButton(cu=>'☰');
    let cur = (e.target as HTMLElement).innerHTML;
    setDataLink(current=>current.map((el,i)=>el.label===cur?{...el,isActive:true}:{...el,isActive:false}));
  }
  return (
    <>
      <div className="header w-screen">
        <h1>Portfolio</h1>
        <span
          ref={button}
          className=" buttonToggle"
          onClick={() => handleToggleButton()}
        >
          {currentButton}
        </span>
      </div>
      {showNav && (
      <div className="nav w-full md:x-auto">
          <p>kiku</p>
           <nav className="w-full">
            <ul
              // variants={Rounded}
              // initial="hidden"
              // animate={control}
              className="w-full  grid grid-cols-4 grid-rows-1"
            >
              {DataLink.map((data: ITLink,index:number) => {
                return (
                  <motion.li
                    variants={Item}
                    key={data.id}
                    className="text-center grid items-center"
                  >
                    <Link
                      to={`/#${data.label.replace(/\s+/g,'')}`}
                      className={`${data.isActive ? "active" : ""}`}
                      onClick={(e)=>handleLink(e)}
                    >
                      {data.label}
                    </Link>
                  </motion.li>
                );
              })}
            </ul>
          </nav> 
        </div>
      )}
    </>
  );
};
const Header = React.memo(Headerc);
export default Header;
