import React, { createContext } from 'react'
import ReactDOM from 'react-dom/client'
import '../index.css'
import { useState } from 'react';
import { filterProps, motion } from "framer-motion";
import Naama from '../images/Naama.jpeg'
import { Lines } from './shootinglines';
const Info = (props) => {

const [viivat, setviivat] = useState(<Lines/>)


  const aika = 5000


setTimeout(function() {
    setviivat(<Lines/>)
  }, aika);



    return (
<div id="Info">
<h1 className='whoAmIOtsikko'> Who am I ? </h1>
<h1 className='technologiesOtsikko'> Technologies</h1>
<h3 className='aboutMe'>Enthusiastic, eager to learn new things and a creative thinker. I am an undergraduate student studying Computer Science at Aalto University. I share a passion for creating new things.
</h3>
<h3 className='aboutTechnologies'>Swift and IOS development<br></br> React<br></br> Node.js<br></br>Scala<br></br> basics of SQL<br></br> basics of Deno<br></br> basics of Docker</h3>
<h1 className='projektitOtsikko'>Projects</h1>
<img src={Naama} className="naamaKuva" ></img>
<div className='squareWarsEsittelyDiffi'>
<a href="https://github.com/Jaakkosa/SquarewarGIT" target="_blank" className='squareWarsLinkki'>
<h3 className="squareWarsOtsikko"> SquareWars </h3>
<h3 className="sqaurewarsprojektiEsittely">My first project outside university. I made a IOS application using swift.</h3>
</a>
</div>
<div className='personalWebsiteEsittelyDiffi'>
<a href="https://github.com/Jaakkosa" target="_blank" className='personalWebsiteLinkki'>
<h3 className="personalWebsiteOtsikko"> Personal website </h3>
<h3 className="personalWebsiteprojektiEsittely">This website. Made with React and Node.js.</h3>
</a>
</div>
{viivat}
</div >
    )
}

export {Info}