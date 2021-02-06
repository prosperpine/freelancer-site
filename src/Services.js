import React, { useState } from 'react';
import {AnimateSharedLayout, motion} from 'framer-motion'
import styled from "styled-components";
import { Card } from "./Card"


export const Services = () => {

  const cards = [
    {
      title: "Build your website", 
      description: "I will build your website from your desired design or work out a design with you. Whether you need a static informative website or a dynamic site that you can update yourself, I will make sure that you get a website that suits your needs and brand.",
      icon: <i class="fas fa-laptop"></i>,
      bigicon: <i class="fas fa-palette"></i>,
    }, 
    {
      title: "Set it up", 
      description: "If you already have domain and hosting, that's great! But don't worry if you're not tech-savvy, I'll set the site up for you and teach you how to update content if that's what you want to do.",
      icon: <i class="far fa-play-circle"></i>,
      bigicon: <i class="fas fa-satellite-dish"></i>,
    }, 
    {
      title: "Update & care", 
      description: "All websites need touch-ups, refreshed design and new content added regularly. I'll keep your site healthy and fresh-looking when you don't have time or skill to do it!",
      icon: <i class="fas fa-hand-holding-heart"></i>,
      bigicon: <i class="fas fa-grin-hearts"></i>,
    }
  ];

  return (
<Main id="services">
<h1>This is what I can do for you</h1>

    <Section >
      {cards.map((card) => 
<ServiceSection>

  <Card value= {card.title}
  text ={card.description}
  icon ={card.icon}
  bigicon ={card.bigicon}/>

  </ServiceSection>
  )}
    </Section>
    </Main>

  )
}

const Main = styled.div`
text-align: center; 
padding-top: 100px; 
`


const Section = styled.div`
min-height: 100vh; 
box-sizing: border-box;
justify-content: center; 
align-items: center;  
display: flex; 
padding-bottom: 100px; 
@media (max-width: 668px) {
  flex-direction: column; 

`

const ServiceSection =styled.div`
box-sizing: border-box;
display: flex;
justify-content: center; 
padding-bottom: 50px;

}
`

