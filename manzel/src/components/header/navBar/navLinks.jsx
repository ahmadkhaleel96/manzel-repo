import { getByAltText } from "@testing-library/react";
import React from "react";
import {useRef} from 'react';
import {link} from 'react-scroll';
import styled from "styled-components";

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
`;

const LinkItem = styled.li`
  height: 100%;
  padding: 0 1.1em;
  color: #222;
  font-weight: 500;
  font-size: 14px;
  align-items: center;
  justify-content: center;
  display: flex;
  border-top: 2px solid transparent;
  transition: all 220ms ease-in-out;
  &:hover {
    border-top: 2px solid #2ecc71;
  }
`;

const Link = styled.a`
  text-decoration: none;
  color: inherit;
  font-size: inherit;
`;

export function NavLinks(props) {


  return (
    <NavLinksContainer>
      <LinksWrapper>
        <LinkItem>
          <Link href="/#intro" activeClass='active' to='intro' spy={true} smooth={true}>Home</Link>
        </LinkItem>
        <LinkItem>
          <Link href="/#vision" to='vision' spy={true} smooth={true}>Vision</Link>
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
          <Link href="/#team">Meet the Team</Link>
        </LinkItem>
        </LinksWrapper>
    </NavLinksContainer>
  );
}