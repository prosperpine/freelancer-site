import React from 'react';
import styled from "styled-components";
import hk from './hk.jpg';
import poems from "./poems.png";
import CookieConsent, { Cookies } from "react-cookie-consent";
import { HamburgerIcon } from './HamburgerIcon.js';

import github from './github.svg';
import linkedin from './linkedin.svg';
import profile from './profile.jpg';
import { Services } from './Services';
import { Portfolio } from './Portfolio';
import { Card } from './Card'


export const App = () => {
  return (
    <Background>

        <Navigation>
          <MenuLink href="#home">
            <p>Home</p>
          </MenuLink>
          <MenuLink href="#about">          
            <p>About</p>
          </MenuLink>        
          <MenuLink href="#services">
            <p>Services</p>
          </MenuLink>
          <MenuLink href="#portfolio"> 
            <p>Portfolio</p>
          </MenuLink>          
          <MenuLink href="#contact">
            <p>Contact</p>
          </MenuLink>
        </Navigation>
        <HamburgerIcon />


<FrontPage id="home">

<Title>josephine lam</Title>

<Subtitle>DEVELOPER - FREELANCER</Subtitle>   
<IconContainer>
<Icon href="https://www.linkedin.com/in/josephine-lam-180197198/" target="_blank">
              <img  src={linkedin} alt="linkedin-logo"></img>
            </Icon>
<Icon href="https://github.com/prosperpine" target="_blank">
              <img src={github} alt="github-logo"></img>

              </Icon>
</IconContainer>
</FrontPage>

<About id="about">
<AboutCard><ProfilePic src={profile}></ProfilePic><AboutTitle> Hi, I’m Josephine
</AboutTitle>
<AboutText>
I’m a freelancing front end developer based in Sweden. My mission is to get you the fresh and sleek-looking website that you or your business deserves! </AboutText><AboutText><br />
I create websites and web applications with both <Span>design</Span> and <Span>accessability</Span> in mind to make sure your brand will be available and appealing to all of your customers.
</AboutText><br /><AboutText>Do you already have design and hosting ready and just need someone to build the site for you?  Or are you a website newbie and don’t know anything about code, hosting or domains – either way, I can help!</AboutText></AboutCard>
</About>

 <Services />
 <Portfolio />



<Contact id="contact">
<h1>How to contact me</h1>
<a href="" 
>
<ContactIcon><i class="far fa-envelope"></i>
<ContactText>info@josephinelam.com</ContactText>

</ContactIcon>
</a>

<a href="https://www.linkedin.com/in/josephine-lam-180197198/" target="_blank">
<ContactIcon >
<i class="fab fa-linkedin"></i>  
<ContactText>connect through Linkedin</ContactText>        
  </ContactIcon>
  </a>


{/* <ContactIcon>
<i class="fas fa-phone-alt"></i>
</ContactIcon> */}



</Contact>

<Footer> 
  <FooterText> 
    <p>Copyright © 2021 Josephine Lam. All rights reserved.</p>
  </FooterText>
</Footer>

<CookieConsent
  location="bottom"
  buttonText="Got it!!"
  cookieName="myAwesomeCookieName"
  style={{ background: "rgba(46, 49, 49, 1)" }}
  buttonStyle={{ color: "#4e503b", fontSize: "10px" }}
  expires={150}
>
  This website uses cookies to enhance the user experience.{" "}
  {/* <span style={{ fontSize: "10px" }}>This bit of text is smaller :O</span> */}
</CookieConsent>


    </Background>
  )
}


const Background = styled.main`
background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.1)), url(${hk});
background-position: center;
background-repeat: no-repeat;
background-size: cover;
background-attachment: fixed;
height: 100%; 
width: 100%; 
`

const Navigation = styled.div`
background-color: rgba(0, 0, 0, 0.4);
display: flex; 
justify-content: flex-end; 
position: fixed;
top: 0; 
width: 100%; 
@media (max-width: 668px) {
  display: none; 

}
`
const MenuLink = styled.a`
padding-right: 20px; 
font-family: 'Montserrat', sans-serif;
font-weight: 200; 
font-size: 1.4rem; 
`

const FrontPage = styled.div`
display: flex; 
flex-direction: column; 
justify-content: center; 
align-items: center; 
height: 100vh; 
font-family: 'Montserrat', sans-serif;

` 
const Title = styled.h1`
font-size: 4.4rem; 
@media (max-width: 668px) {
  text-align:center;
  font-size: 3.2rem; 

}
`
const Subtitle = styled.h3`
margin-top: 20px; 
margin-bottom: 20px; 
font-size: 1.6rem; 
@media (max-width: 668px) {
  font-size: 1rem; 

}
`

const IconContainer = styled.div`
display: flex; 
`

const Icon=styled.a`
border: 2px solid white;
padding: 16px; 
border-radius: 50%;  
margin: 16px; 
@media (max-width: 668px) {
padding: 8px; 
}
`


const About = styled.div`
background-color: rgba(0, 0, 0, 0.8);
display: flex; 
justify-content: center; 
min-height: 100vh; 
box-sizing: border-box;
align-items: center;  
padding-top: 100px; 
padding-bottom: 100px; 
`

const AboutCard =styled.div`
width: 80%;
`
const AboutTitle = styled.h1`
margin-bottom: 20px; 
@media (max-width: 668px) {
  font-size: 1.6rem; 

}
`

const AboutText = styled.p`
font-size: 1.2rem; 
@media (max-width: 668px) {
  font-size: 1rem; 
}
`


const Span = styled.span`
font-weight: 800; 
`


const ProfilePic = styled.img`
width: 26%; 
height: auto;
border: 1px solid white; 
border-radius: 10px; 
float: left; 
margin-right: 30px; 
margin-bottom: 2px; 

`
const Contact = styled.div`
height: 100vh; 
flex-direction: column;
align-items: center;  
display: flex; 
padding-top: 100px; 
padding-bottom: 50px; 

@media (max-width: 668px) {
padding-bottom: 0; }
`
const ContactIcon = styled.div`
font-size: 1.4rem; 
display: flex; 
flex-direction: column; 
align-items: center; 
margin-top: 30px;
margin-bottom: 20px; 
 :hover {
  font-size: 1.8rem; 
}
`

const ContactText =styled.h6`
margin-top: 15px; `


const Footer =styled.div`
background-color: rgba(0, 0, 0, 0.8);
display: flex; 
justify-content: center; 
align-items: center; 
height: 100px; 
@media (max-width: 668px) {
  height: 60px; 
  padding: 20px; 
  font-size: 0.6rem; 
}
 `
const FooterText = styled.div`

`


