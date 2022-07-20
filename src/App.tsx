import React, {useRef, useState } from "react";
import "./App.scss";
import { Header, Portfolio } from "./components";
import Contact from "./components/public/Contact";
import MyWork from "./components/public/Mywork";
import Reviews from "./components/public/Remark";
import Loading from "./features/Loading";
import LoadingContext from "./hook/Loading";
import ThemeContext from "./hook/Theme";

function App() {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);
  const [isVisited, setVisited] = useState<boolean>(false);
  const main = useRef(null);

  const toggleDark = () => {
    setIsDarkMode(!isDarkMode);
  };

  const handleVisitState = (state: boolean) => {
    setVisited(state);
  };

  return (
    <ThemeContext.Provider value={{ dark: isDarkMode, toggleDark: toggleDark }}>
      <LoadingContext.Provider
        value={{ isVisited: isVisited, setVisit: handleVisitState }}
      >
        <div ref={main} className="app h-screen w-screen ">
          {!isVisited && <Loading />}
          {isVisited && (
            <main>
              <header>
                <Header />
              </header>
              <section>
                <Portfolio />
                <MyWork />
                <Contact />
                <Reviews />
              </section>
            </main>
          )}
        </div>
      </LoadingContext.Provider>
    </ThemeContext.Provider>
  );
}

export default App;
