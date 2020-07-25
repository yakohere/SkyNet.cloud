import React from "react";
import classes from "./SideDrawer.module.css";
import styled from "styled-components";
//import { withRouter } from "react-router-dom";
import BackDrop from "../BackDrop/BackDrop";
import Aux from "../../containers/hoc/Aux/Aux";

const SideDrawer = (props) => {
  let attachedClasses = [classes.SideDrawer, classes.Close];

  if (props.openState) {
    attachedClasses = [classes.SideDrawer, classes.Open];
  }

  return (
    <Aux>
      <BackDrop show={props.openState} closing={props.closed} />

      <div className={attachedClasses.join(" ")}>
        <Input placeholder="Search"></Input>
        <Img2
          onClick={props.goBackButton}
          src="./assets/keyboard_backspace-24px.svg"
          alt="new"
        />
      </div>
    </Aux>
  );
};


const Input = styled.input`
  position: absolute;
  width: 441px;
  height: 61px;
  left: 23px;
  top: 30px;
  text-align: center;
  font-size: 25px;

  background: #faf4ff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
  @media (max-width: 500px) {
    width: 184px;
    height: 36px;
    left: 17px;
    top: 25px;
  }
  ::placeholder {
    text-align: center;
    position: absolute;
    width: 290px;
    height: 47px;
    left: 73px;
    top: 42px;
    

    font-family: Angkor;
    font-style: normal;
    font-weight: normal;
    font-size: 25px;
    line-height: 37px;

    color: #9b9b9b;
  }

`;

const Img2 = styled.img`
position: absolute;
width: 48px;
height: 45px;
left: 17px;
top: 839px; 
@media (max-width: 500px) {
  width: 31px;
  height: 34px;
  left: 21px;
  top: 754px;
}


:hover {
background: #ffffff;
}
`;

export default SideDrawer;
