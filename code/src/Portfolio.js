import React from 'react';
import styled from "styled-components";
import { PortfolioCard } from "./PortfolioCard";
import poems from "./poems.png";
import music from "./music.png"
import movies from "./movies.png"
import covid from "./covid.png"
import todowebapp from "./todowebapp.png"



export const Portfolio = () => {

  
  return(
<Main id="portfolio"> 
<h1>Some of the things I've done</h1>


<FeaturedProjects >

<Card>
<a href="https://fervent-shockley-4cb6df.netlify.app" target="_blank" rel="noopener noreferrer">

<ProjectCard>

<ToDoProject>
  <ProjectImageText>TO DO APP</ProjectImageText>
</ToDoProject>
<ProjectCardText><ProjectCardTextSpan>TO DO APP</ProjectCardTextSpan> Web app built in React using Redux.</ProjectCardText>
<Tags >
  <TagsText><TagsMark>HTML5</TagsMark></TagsText>
  <TagsText><TagsMark>CSS</TagsMark></TagsText>
  <TagsText><TagsMark>JavaScript</TagsMark></TagsText>
  <TagsText><TagsMark>React</TagsMark></TagsText>
  <TagsText><TagsMark>Redux</TagsMark></TagsText>
</Tags>
        </ProjectCard>
        </a> 
</Card>


      
<Card>
  <a href="https://github.com/prosperpine/covid-app" target="_blank" rel="noopener noreferrer">
<ProjectCard>

<CovidProject>
  <ProjectImageText>COVID-19 </ProjectImageText><ProjectImageText>COUNT-UP</ProjectImageText>
</CovidProject>
<ProjectCardText><ProjectCardTextSpan>COVID COUNT-UP</ProjectCardTextSpan> Web app built with React using a public API and
              hooks to give the latest numbers on Covid-19.</ProjectCardText>
<Tags >
  <TagsText><TagsMark>HTML5</TagsMark></TagsText>
  <TagsText><TagsMark>CSS</TagsMark></TagsText>
  <TagsText><TagsMark>JavaScript</TagsMark></TagsText>
  <TagsText><TagsMark>React</TagsMark></TagsText>
  <TagsText><TagsMark>Styled Components</TagsMark></TagsText>
  <TagsText><TagsMark>API:s</TagsMark></TagsText>


</Tags>
</ProjectCard>

</a> 
</Card>

  
</FeaturedProjects>
</Main>
  )
}

const Main = styled.div`
background-color: rgba(0, 0, 0, 0.8);

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
`

const FeaturedProjects = styled.div`
display: flex;
justify-content: center; 

@media (max-width: 668px) {
  flex-direction: column; 
  align-items: center; 
}
`
const Card= styled.div`
width: 40%;
@media (max-width: 668px) {
  width: 86%;
`


const ProjectCard = styled.div`
padding-top: 16px;
display: flex; 
flex-direction: column; 
justify-content: center; 
align-items: center; 
margin: 40px 40px;
border: 1px solid white; 
border-radius: 5px;
background-color: rgba(255, 255, 255, 0.8);
:hover {
  border: 2.4px solid white; 
}
`

const ProjectImageText = styled.p`
color: white;
font-family: 'Montserrat';
font-weight: bold;
font-size: 1.2rem;
text-align: center;
margin-bottom: 5px; 
`

const ProjectCardText = styled.p`
text-align: left;
font-family: 'Roboto',sans-serif;
margin: 12px;
color: black;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center; `

const ProjectCardTextSpan = styled.span`
color: black; 
font-weight: bold;
`
const Tags = styled.div`
text-align: left;
display: flex;
flex-wrap: wrap;
margin-top: 10px; 
`
const TagsText = styled.p`
font-size: 0.8rem;
line-height: 1em;
box-sizing: border-box;
padding: 14px 10px;
`

const TagsMark = styled.mark`
box-sizing: border-box;
    padding: 5px 10px;
    background-color: rgba(46, 49, 49, 1);
`

const ToDoProject = styled.div`
background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url(${todowebapp});
  padding: 4rem;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
`

const CovidProject = styled.div`
background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url(${covid});
  padding: 3rem;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
`


const PortfolioSection =styled.div`
box-sizing: border-box;
display: flex;
justify-content: center; 
padding-bottom: 50px;

`