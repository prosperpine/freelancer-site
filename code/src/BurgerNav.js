import React, {useState} from 'react';
import styled from 'styled-components';

const Menu = styled.section`
  display: none;
    @media (max-width: 668px) {
      display: flex; 
      flex-flow: column nowrap;
      background-color: #f6faf7;
      position: fixed;
      transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
      top: 0;
      right: 0;
      height: 100vh;
      width: 300px;
      padding-top: 3.5rem;
      transition: transform 0.3s ease-in-out;
    }
`;

const StyledLink = styled.a`
  text-decoration: none;
  &:focus, &:hover, &:visited, &:link, &:active {
    text-decoration: none;
  }
`;

const Page = styled.p`
  color: #303e27;
  font-family: 'Julius Sans One', sans-serif;
  text-decoration: none; 
  margin-top: 18px; 
  padding-left: 16px;  
`;

export const BurgerNav = ({open, setOpen}) => {

  return (
    <Menu open={open} setOpen={setOpen} >
      <StyledLink onClick={() => setOpen(!open)} href="#home">
        <Page>Home</Page>
      </StyledLink>
      <StyledLink onClick={() => setOpen(!open)}
       href="#about">
        <Page>About</Page>
      </StyledLink>
      <StyledLink onClick={() => setOpen(!open)} href="#services">
        <Page>Services</Page>
      </StyledLink>
      <StyledLink onClick={() => setOpen(!open)} href="#portfolio">
        <Page>Portfolio</Page>
      </StyledLink>
      <StyledLink onClick={() => setOpen(!open)} href="#contact">
        <Page>Contact</Page>
      </StyledLink>
      
    </Menu>
  )
}
