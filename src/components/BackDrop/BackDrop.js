import React from "react";
import styled from "styled-components";

const backDrop = (props) =>
  props.show ? <BackdropCss onClick={props.closing} /> : null;

const BackdropCss = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  z-index: 100;
  left: 0;
  top: 0;
  background-color: rgba(0, 0, 0, 0.5);
`;

export default backDrop;
