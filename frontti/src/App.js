import './index.css'
import { motion } from "framer-motion";
import { useState, useEffect, useRef } from 'react';
import { Dots } from './components/dots';
import { FirstPage } from './components/firstPage';
import { Info } from './components/selitys';
import { Header } from './components/Header';


const App = () => {
document.title = "JaakkoSatuli"


  return(
    <>
   <div className='body'>
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />

    <FirstPage/>
    <Dots/>
    <Info elementti={document.getElementById('Info')}/>
 </div>
 </>
  ) 
  }

export default App


