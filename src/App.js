import React, { useState, useEffect } from "react";
import { Container, Clock, Hour, Minutes, Seconds } from "./style";
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

  return (
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
    </Container>
  );
}

export default App;
