import React from "react";
import styled from "styled-components";
import ManzelLogo from "../../../assets/manzel_arch_boption3.png";
import './logo.css'

const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const LogoImg = styled.div`
  width: 65px;
  height: 40px;
  img {
    width: 100%;
    height: 100%;
  }
`;

const LogoText = styled.h2`
  font-size: 8px;
  margin: 0;
  color: #222;
  font-weight: 500;
  text-align:center

`;

export function Logo(props) {
  return (
    <LogoWrapper href='/#intro'>
      <LogoImg>
        <img src={ManzelLogo} alt="Greenland logo" className="logo"/>
      </LogoImg>
      <LogoText className="name">Manzel <div className="slogan">Architecural World with <br/>Arabic Identity</div></LogoText>
    </LogoWrapper>
  );
}