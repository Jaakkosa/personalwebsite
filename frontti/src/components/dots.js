import React, { createContext } from 'react'
import ReactDOM from 'react-dom/client'
import '../index.css'
import { motion } from "framer-motion";
import {Welcome} from "./welcome.js"
import Kuva from "../images/DOTS.svg"

const Dots = () => {
    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min) + min);
      }
    const x = 0
    const y = 0
    const rotate = getRandomInt(-5,5)

    return(
        <motion.div
        animate= {{ x, y, rotate }}
        transition={{ type : "tween"}}>
    <img src={Kuva} className="Dots" >
    </img>
    </motion.div>
    )   
    }

export{Dots}