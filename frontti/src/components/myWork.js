import React, { createContext } from 'react'
import '../index.css'


const MyWork = () => {

    const Klikki = (e) => {
        window.scrollTo(
            0,
            document.getElementById('Info').offsetTop - 0,
            );
    }



    return(
       <button type='button' className='mywork' onClick={(e) => {Klikki()}}>
         <h1>my work</h1>

        </button>  
    )
    }
    
    export {MyWork}