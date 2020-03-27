import React, { useState, useEffect } from "react";
import { ThemeProvider } from "styled-components";
import { FiSun, FiMoon } from "react-icons/fi";
import {
  Container,
  Clock,
  Hour,
  Minutes,
  Seconds,
  SwitchButton,
  ContainerButton
} from "./style";
import "./App.css";

function App() {
  const date = new Date();
  const [state, setState] = useState({
    hh: date.getHours() * 30,
    mn: date.getMinutes() * 6,
    ss: date.getSeconds() * 6
  });

  useEffect(() => {
    setTimeout(() => {
      setState({
        ...state,
        hh: date.getHours() * 30,
        mn: date.getMinutes() * 6,
        ss: date.getSeconds() * 6
      });
    }, 1000);
  });

  const [theme, setTheme] = useState({
    change: false
  });

  useEffect(() => {
    setTimeout(() => {
      setState({
        ...state,
        hh: date.getHours() * 30,
        mn: date.getMinutes() * 6,
        ss: date.getSeconds() * 6
      });
    }, 1000);
  }, [date, state]);

  const changeTheme = () => {
    setTheme({
      change: !theme.change
    });
  };

  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Clock>
          <Hour value={`${state.hh}deg`}>
            <div className="hr" id="hr"></div>
          </Hour>
          <Minutes value={`${state.mn}deg`}>
            <div className="mn" id="mn"></div>
          </Minutes>
          <Seconds value={`${state.ss}deg`}>
            <div className="sc" id="sc"></div>
          </Seconds>
        </Clock>

        <ContainerButton>
          <FiMoon color="#999" size={25} />

          <SwitchButton
            onChange={changeTheme}
            checked={theme.change}
            onColor="#86d3ff"
            onHandleColor="#2693e6"
            handleDiameter={30}
            uncheckedIcon={false}
            checkedIcon={false}
            boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
            activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
            height={20}
            width={48}
          />
          <FiSun color="#E9A72F" size={25} />
        </ContainerButton>
      </Container>
    </ThemeProvider>
  );
}

export default App;
