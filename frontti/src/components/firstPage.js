import React, { createContext } from 'react'
import ReactDOM from 'react-dom/client'
import '../index.css'
import { motion } from "framer-motion";
import {Welcome} from "./welcome.js"
import { ImJaakko } from './ImJaakko';
import { useState, } from 'react';
import { MyWork } from './myWork';
import { Dots } from './dots';
import { IkonitPaikalla } from './nonAnimatedheaderIcons';

const FirstPage = () => {
    const [hiText, sethiText] = useState(null)
    const [workButton,setworkButton] = useState(null)

  

   

    const muutahiText = () => {
        {setTimeout(function(){
          sethiText(<ImJaakko/>)
        }, 500)}
      }
      const muutaWorkButton = () => {
        {setTimeout(function(){
          setworkButton(<MyWork/>)
        }, 1500)}
      }
return (
    <div className='firstPageContainer'>
        <Dots/>
        {workButton}
      <IkonitPaikalla/>
        {hiText}
        {muutahiText()}
   {muutaWorkButton()}
        <Welcome/>
    </div>
)
}


export {FirstPage}