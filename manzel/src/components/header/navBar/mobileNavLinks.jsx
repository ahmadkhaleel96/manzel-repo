import React, { useState } from "react";
import styled from "styled-components";
import { Accessibility } from "./accessibility";
import { MenuToggle } from "./menuToggle";

const NavLinksContainer = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
`;

const LinksWrapper = styled.ul`
  margin: 0;
  padding: 0;
  display: flex;
  height: 100%;
  list-style: none;
  background-color: #fff;
  width: 100%;
  flex-direction: column;
  position: fixed;
  top: 60px;
  left: 0;
  padding-top: 30px;
`;

const LinkItem = styled.li`
  width: 100%;
  padding: 0 1.1em;
  color: #222;
  font-weight: 500;
  font-size: 16px;
  display: flex;
  margin-bottom: 10px;
`;

const Link = styled.a`
  text-decoration: none;
  color: inherit;
  font-size: inherit;
`;

const Marginer = styled.div`
  height: 2em;
`;

export function MobileNavLinks(props) {
  const [isOpen, setOpen] = useState(false);

  return (
    <NavLinksContainer>
      <MenuToggle isOpen={isOpen} toggle={() => setOpen(!isOpen)} />
      {isOpen && (
        <LinksWrapper>
          <LinkItem>
            <Link href="/#intro" activeClass='active' to='intro' spy={true} smooth={true}>Home</Link>
          </LinkItem>
          <LinkItem>
            <Link href="/#vision">Vision</Link>
          </LinkItem>
          <LinkItem>
            <Link href="/#aboutUs">About Us</Link>
          </LinkItem>
          <LinkItem>
            <Link href="/#products">Products</Link>
          </LinkItem>
          <LinkItem>
          <Link href="/#why">Why VR?</Link>
        </LinkItem>
          <LinkItem>
          <Link href='/#team'>Meet the Team</Link>
          </LinkItem>
          <Marginer />
          {/* <Accessibility /> */}
        </LinksWrapper>
      )}
    </NavLinksContainer>
  );
}