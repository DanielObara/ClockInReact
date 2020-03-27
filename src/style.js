import styled from "styled-components";
import logo from "./logo.svg";
import clock from "./clock.png";
import Switch from "react-switch";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: ${props => (props.theme.change ? "#f9f9f9" : "#091921")};
`;

export const Clock = styled.div`
  background: url(${clock});
  display: flex;
  width: 350px;
  height: 350px;
  align-items: center;
  justify-content: center;
  background-size: cover;
  pointer-events: none;
  border: 4px solid #091921;
  position: absolute;
  border-radius: 50%;
  box-shadow: 0 -15px 15px rgba(255, 255, 255, 0.05),
    inset 0 -15px 15px rgba(255, 255, 255, 0.05),
    0 15px 15px rgba(0, 0, 0, 0.03), inset 0 15px 15px rgba(0, 0, 0, 0.03);

  &:before {
    content: "";
    position: absolute;
    width: 40px;
    height: 40px;
    background: url(${logo});
    background-color: ${props => (props.theme.change ? "#f9f9f9" : "#091921")};
    background-position: center center;
    background-repeat: no-repeat;
    border-radius: 50%;
    z-index: 10000;
  }

  .hr,
  .mn,
  .sc {
    display: flex;
    justify-content: center;
    border-radius: 50%;
  }
`;

export const Hour = styled.div`
  position: absolute;

  .hr {
    width: 160px;
    height: 160px;
    transform: rotateZ(${props => props.value});

    &:before {
      content: "";
      position: absolute;
      width: 8px;
      height: 80px;
      background: #ff105e;
      z-index: 10;
      border-radius: 6px 6px 0 0;
    }
  }
`;

export const Minutes = styled.div`
  position: absolute;

  .mn {
    width: 190px;
    height: 190px;
    transform: rotateZ(${props => props.value});
    &:before {
      content: "";
      position: absolute;
      width: 4px;
      height: 90px;
      background: ${props => (props.theme.change ? "#000" : "#fff")};
      z-index: 11;
      border-radius: 6px 6px 0 0;
    }
  }
`;

export const Seconds = styled.div`
  position: absolute;

  .sc {
    width: 230px;
    height: 230px;
    transform: rotateZ(${props => props.value});
    &:before {
      content: "";
      position: absolute;
      width: 2px;
      height: 150px;
      background: ${props => (props.theme.change ? "#000" : "#fff")};
      z-index: 12;
      border-radius: 6px 6px 0 0;
    }
  }
`;

export const ContainerButton = styled.div`
  display: flex;
  align-self: flex-start;
  margin-top: 80px;
  align-items: center;
  justify-content: center;
`;

export const SwitchButton = styled(Switch)`
  margin: 0 20px;
`;
