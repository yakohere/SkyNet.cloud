import React from "react";
import styled from "styled-components";

const block = () => {
  return (
    <div>
      <Input1 placeholder="Email" />
      <Input2 placeholder="Password " />
    </div>
  );
};

const Input1 = styled.input`
  position: fixed;
  width: 520px;
  height: 68px;
  left: 336px;
  top: 221px;
  font-family: Angkor;
  font-style: normal;
  font-weight: normal;
  font-size: 25px;
  line-height: 55px;
  display: flex;
  align-items: center;
  box-sizing: border-box;

  color: #d8d8d8;

  background: #c286ff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 15px;
  text-align: center;
  ::placeholder {
    position: absolute;
    width: 382px;
    height: 42px;
    left: calc(50% - 382px / 2 - 165px);
    top: calc(50% - 42px / 2 - 199px);

    font-family: Angkor;
    font-style: normal;
    font-weight: normal;
    font-size: 25px;
    line-height: 55px;

    color: #d8d8d8;
  }
  @media (max-width: 500px) {
    .placeholder {
      font-size: 20px;
    }
    font-size: 20px;
    width: 68%;
    height: 45px;
    left: 55px;
    top: 214px;
  }
`;

const Input2 = styled.input`
  position: fixed;
  width: 520px;
  height: 68px;
  left: 336px;
  top: 308px;
  font-family: Angkor;
  font-style: normal;
  font-weight: normal;
  font-size: 25px;
  line-height: 55px;
  display: flex;
  align-items: center;
  box-sizing: border-box;

  color: #d8d8d8;

  background: #c286ff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 15px;
  text-align: center;
  ::placeholder {
    position: absolute;
    width: 382px;
    height: 42px;
    left: calc(50% - 382px / 2 - 165px);
    top: calc(50% - 42px / 2 - 199px);

    font-family: Angkor;
    font-style: normal;
    font-weight: normal;
    font-size: 25px;
    line-height: 55px;

    color: #d8d8d8;
  }
  @media (max-width: 500px) {
    .placeholder {
      font-size: 20px;
    }
    font-size: 20px;
    width: 68%;
    height: 45px;
    left: 55px;
    top: 279px;
  }
`;

export default block;
