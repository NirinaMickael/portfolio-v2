import React, { useCallback, useEffect, useRef, useState } from "react";
import "./App.scss";
import { Header, Portfolio, About } from "./components";
import Contact from "./components/public/Contact";
import MyWork from "./components/public/Mywork";
import Reviews from "./components/public/Remark";
import Loading from "./features/Loading";
import HeightContext from "./hook/Height";
import LoadingContext from "./hook/Loading";
import ScrollContext from "./hook/Scroll";
import ThemeContext from "./hook/Theme";

function App() {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);
  const [position, setPosition] = useState<number>(0);
  const [isVisited, setVisited] = useState<boolean>(false);
  const [_height, setHeight] = useState<number>(0);
  const [Route, setRoute] = useState<string>("Portfolio");
  const main = useRef(null);
  // const setVisited = useCallback((state: boolean) => {
  //   console.log(state);
  // }, []);
  const toggleDark = () => {
    setIsDarkMode(!isDarkMode);
  };

  const handleCurrentRoute = useCallback((current: string) => {
    setRoute(current);
  }, []);

  const handleScroll = (value: number) => {
    // console.log(value);
    setPosition(value);
  };

  const handleVisitState = (state: boolean) => {
    setVisited(state);
  };
  useEffect(() => {
    (main.current as unknown as HTMLElement).scrollTo(0, position);
    // console.log(position);
  }, [position]);

  useEffect(() => {
    setHeight((main.current as unknown as HTMLElement).scrollHeight);
  }, [_height, isVisited]);

  // handling scroll capture
  const CaptureScroll = useCallback(
    (e: React.UIEvent<HTMLElement, UIEvent>) => {
      const pos = (e.target as HTMLElement).scrollTop;
      setPosition(pos);
    },
    []
  );
  return (
    <ThemeContext.Provider value={{ dark: isDarkMode, toggleDark: toggleDark }}>
      <ScrollContext.Provider
        value={{ position: position, handleScroll: handleScroll }}
      >
        <LoadingContext.Provider
          value={{ isVisited: isVisited, setVisit: handleVisitState }}
        >
          <div
            ref={main}
            className="app h-screen w-screen "
            onScrollCapture={(e) => CaptureScroll(e)}
          >
            {!isVisited && <Loading />}
            {isVisited && (
              <main>
                <HeightContext.Provider value={{ height: _height }}>
                  <header>
                    <Header routeActive={Route} />
                  </header>
                  <section>
                    <Portfolio editRoute={(e: string) => handleCurrentRoute(e)} />
                    <About editRoute={(e: string) => handleCurrentRoute(e)} />
                    <MyWork editRoute={(e: string) => handleCurrentRoute(e)} />
                    <Contact editRoute={(e: string) => handleCurrentRoute(e)} />
                    <Reviews  editRoute={(e: string) => handleCurrentRoute(e)} />
                  </section>
                  <footer></footer>
                </HeightContext.Provider>
              </main>
            )}
          </div>
        </LoadingContext.Provider>
      </ScrollContext.Provider>
    </ThemeContext.Provider>
  );
}

export default App;
function current(current: any): any {
  throw new Error("Function not implemented.");
}
