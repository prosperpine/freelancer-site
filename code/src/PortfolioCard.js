import React, { useState } from 'react';
import styled from "styled-components";
import {AnimateSharedLayout, motion} from 'framer-motion'

export function PortfolioCard({value, text, icon, image}) {
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
</ExpandedCard>


:   

<NormalCard onClick={()=>setOpen(true)}
            layoutId="expandable-card"
            style={{
            background:{value}}}
          
                         >   

<NormalCardTitle layoutId="expandable-card-h">{value}</NormalCardTitle>
</NormalCard>

}

</AnimateSharedLayout>
</Main>
)
}
export default PortfolioCard;

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
  margin: 30px;
  border: 1px solid white; 
  background-color: rgba(0, 0, 0, 0.8);

  `  

const NormalCardTitle =styled(motion.h1)`
font-size: 18px;
  color:var(--fg);
  padding: 10px;
  text-align: center;`




const Image = styled.div`
max-width:100%;
max-height:100%;
object-fit: contain; 
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
  display: grid;
  place-items: center;
  `


  const ExpandedCardText = styled(motion.p)`
  width:300px;
  padding: 5px;
  place-self:  start center;`

  const ExpandedCardTitle = styled(motion.h2)`
  font-size: 27px;
  color:var(--fg);
  width: 300px;
  padding: 5px;
  place-self: end center;`