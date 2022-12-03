import React ,{useState, useEffect } from "react";
import { useMediaQuery } from "react-responsive";
import styled from "styled-components";
import { Logo } from "../logo/index.jsx";
import { Accessibility } from "./accessibility";
import { NavLinks } from "./navLinks";
import { DeviceSize } from "../responsive";
import { MobileNavLinks } from "./mobileNavLinks";
import './header.css'

const NavbarContainer = styled.div`
  width: 100%;
  height: 60px;
  box-shadow: 0 1px 3px rgba(15, 15, 15, 0.13);
  display: flex;
  align-items: center;
  padding: 0 1.5em;
  // background-color: #e7eeed;  
`;

const LeftSection = styled.div`
  display: flex;
`;

// return the nav bar content when sign in an sign up is implemented

// const MiddleSection = styled.div`
//     //   display: flex;
//     //   flex: 2;
//     //   height: 100%;
//     //   justify-content: center;
// `;

const RightSection = styled.div`
//   display: flex; for the sign in an sign up return when implemented
    display: flex;
  flex: 2;
  height: 100%;
  justify-content: right;
  `;


export default function Navbar(props) {
  const isMobile = useMediaQuery({ maxWidth: DeviceSize.mobile });
  const [position, setPosition] = useState(window.pageYOffset)
  //   const [visible, setVisible] = useState(true) 
  //   useEffect(()=> {
  //       const handleScroll = () => {
  //          let moving = window.pageYOffset
           
  //          setVisible(position > moving);
  //          setPosition(moving)
  //       };
  //       window.addEventListener("scroll", handleScroll);
  //       return(() => {
  //          window.removeEventListener("scroll", handleScroll);
  //       })
  //   })

  // const cls = visible ? "visible" : "hidden";

  return (
    <div className="header">
    <NavbarContainer className='ahmad'>
      <LeftSection href='/#intro'>
        <Logo />
      </LeftSection>
      {/* <MiddleSection><Accessibility /></MiddleSection> */}
      <RightSection>
        {!isMobile && !isMobile && <NavLinks />}
        {isMobile && <MobileNavLinks />}
      </RightSection>
    </NavbarContainer>
    </div>
  );
}