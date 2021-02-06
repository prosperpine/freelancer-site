import React, { useState } from 'react';
import styled from "styled-components";
import {AnimateSharedLayout, motion} from 'framer-motion'

export function Card({value, text, icon, image, bigicon}) {
const [open,setOpen]=useState(false)



return (
  <Main>
      <AnimateSharedLayout>
{open?
  

  <ExpandedCard onClick={()=>setOpen(false)}
            layoutId="expandable-card"
           style={{background:value}}
          >
<ExpandedCardTitle
          className='expanded-card-h'
          layoutId="expandable-card-h">
 {value}</ExpandedCardTitle>
<ExpandedCardText>{text}</ExpandedCardText>
<BigIcon>{bigicon}</BigIcon>
</ExpandedCard>


:   

<NormalCard onClick={()=>setOpen(true)}
            layoutId="expandable-card"
            style={{background:value}}
      
                         >
<ServiceIcon>{icon}</ServiceIcon>
<NormalCardTitle layoutId="expandable-card-h">{value}</NormalCardTitle>
</NormalCard>

}

</AnimateSharedLayout>
</Main>
)
}
export default Card;

const Main = styled.main`
display: flex; 
justify-content: center; 
align-items: center; 
`

const NormalCard = styled(motion.div) `
width: 200px;
  height:200px;
 display: flex; 
 flex-direction: column; 
 justify-content: center; 
 align-items: center; 
  margin: 20px 40px;
  border: 1px solid white; 
  background-color: rgba(0, 0, 0, 0.8);
  :hover {
    border: 2.4px solid white; 
  }
  @media (max-width: 668px) {
margin: 20px 0 0 0; 
width: 300px;

  `
const NormalCardTitle =styled(motion.h1)`
font-size: 18px;
  color:var(--fg);
  padding: 10px;
  text-align: center;`


  const ServiceIcon = styled.div`
font-size: 3rem; 
padding-bottom: 20px; 
`

  const ExpandedCard = styled(motion.div)`
  top: 0;
  left: 0;
  right: 0;
  position: fixed;
  width: 100vw;
  height:100vh;
  z-index: 1;
  overflow: hidden;
  background-color: rgba(0, 0, 0, 0.9);
  display: flex;
  align-items: center;
  text-align: start; 
  flex-direction: column; 
  `


  const ExpandedCardText = styled(motion.p)`
  padding: 5px;
  @media (max-width: 668px) {
    padding: 30px; 
  
`
  const ExpandedCardTitle = styled(motion.h2)`
  font-size: 50px;
  color:var(--fg);
  padding: 50px 5px;
  @media (max-width: 668px) {
    font-size: 2rem; 
  `
const BigIcon = styled.div`
font-size: 4rem; 
padding: 50px; 
`
