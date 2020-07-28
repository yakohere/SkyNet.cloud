import React, { Component } from "react";
import Block from "../../components/Blocks/Block";
import styled from "styled-components";
import Logos from "../../components/icons/Logos/Logos";
import classes from "./Layout.module.css";

class Layout extends Component {
  componentDidMount() {
    console.log(this.props);
  }

  pushHandler = () => {
    this.props.history.push("/notes");
  };

  render() {
    return (
      <div>
        <img
          className={classes.Image}
          src="./assets/background.png"
          alt="new"
        />
        <Header> Sign in </Header>
        <Header2> SkyNet </Header2>
        <Header3> Keep your notes safe </Header3>
        <Block />
        <Block />
        <Button onClick={this.pushHandler}>
          <P>sign in</P>
        </Button>
        <NewP>or sign up with</NewP>
        <Logos />
      </div>
    );
  }
}

const NewP = styled.h3`
  position: fixed;
  width: 343px;
  height: 59px;
  left: 210px;
  top: 730px;

  font-family: Arsenal;
  font-style: normal;
  font-weight: normal;
  font-size: 30px;
  line-height: 38px;

  color: #acacac;
  @media (max-width: 500px) {
    width: 209px;
    height: 50%;
    left: 2px;
    top: 630px;
    font-size: 24px;
    line-height: 30px;
  }
`;

const P = styled.p`
  font-style: normal;
  font-weight: normal;
  font-size: 30px;
  line-height: 0px;
  display: block;
  box-sizing: border-box;
  width: 100%;

  color: #939393;

  @media (max-width: 500px) {
    left: 166px;
    top: 250px;

    font-size: 12px;
    line-height: 22px;
  }
`;

const Button = styled.button`
  position: fixed;

  width: 160px;
  height: 65px;
  left: 509px;
  top: 400px;
  box-sizing: border-box;
  display: flex;
  align-items: center;

  background: #d5d5d5;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
  :hover {
    background: #ffffff;
  }
  @media (max-width: 500px) {
    width: 20%;
    height: 26px;
    left: 145px;
    top: 354px;
  }
`;

const Header = styled.h1`
  position: fixed;
  text-align: center;
  width: 100%;
  height: 100%;
  left: -300px;
  top: 30px;
  font-style: normal;
  font-weight: normal;
  font-size: 70px;
  line-height: 129px;

  color: #ffffff;
  @media (max-width: 500px) {
    width: 75px;
    height: 36px;
    left: 150px;
    top: 167px;

    font-size: 18px;
    line-height: 33px;
  }
`;

const Header2 = styled.h1`
  position: fixed;
  width: 480px;
  height: 165px;
  left: 967px;
  top: 197px;

  font-family: Alfa Slab One;
  font-style: normal;
  font-weight: normal;
  font-size: 100px;
  line-height: 137px;

  color: #f8f1ff;

  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  @media (max-width: 500px) {
    width: 60%;
    height: 66px;
    left: 87px;
    top: 22px;
    font-size: 48px;
    line-height: 66px;
  }
`;

const Header3 = styled.h4`
  position: fixed;
  width: 394px;
  height: 36px;
  left: 990px;
  top: 340px;

  font-family: Alfa Slab One;
  font-style: normal;
  font-weight: normal;
  font-size: 30px;
  line-height: 41px;

  color: #d4acfd;

  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  @media (max-width: 500px) {
    width: 60%;
    height: 36px;
    left: 90px;
    top: 83px;
    font-size: 18px;
    line-height: 25px;
  }
`;

export default Layout;
