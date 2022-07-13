import React, { useEffect, useState } from "react";
import Header from "./components/Header/Header";
import Game from "./components/Game/Game";
import GameInfo from "./components/GameInfo/GameInfo"
import Trailers from "./components/Trailers/Trailers"
import Form from "./components/Form/Form";
import { Route, Routes } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./styled-components/GlobalStyles";
import { darkTheme, lightTheme } from "./styled-components/Theme";

function App() {
  const [isChange, setIsChange] = useState("");
  const setColor = (color) => {
    localStorage.setItem("color", color);
  };
  const themeToggle = (e) => {
    setColor(e.target.value);
    setIsChange(localStorage.getItem("color"));
    localStorage.getItem("color");
  };
  useEffect(() => {
    setIsChange(localStorage.getItem("color"));
  }, []);
  const theme = isChange === "light" ? lightTheme : darkTheme;
  return (
    <div>
      <select
        onChange={themeToggle}
        defaultValue={localStorage.getItem("color")}
      >
        <option value="light">light</option>
        <option value="dark">dark</option>
      </select>
      <Header />
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Routes>
          <Route path="/" element={<Form />} />
          <Route path="game" element={<Game />} />
          <Route path="/gameinfo/:id" element={<GameInfo />} />
          <Route path="/trailers/:id" element={<Trailers />} />
        </Routes>
      </ThemeProvider>
    </div>
  );
}

export default App;
