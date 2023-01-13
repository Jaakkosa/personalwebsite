import './index.css'
import { Dots } from './components/dots';
import { FirstPage } from './components/firstPage';
import { Info } from './components/selitys';
import { useEffect, useRef } from 'react';
import { animate } from 'framer-motion';


const App = () => {
  
  const coords = { x: 0, y: 0 };
const circles = document.querySelectorAll(".ympyra");


circles.forEach(function (circle, index) {
  circle.x = 0;
  circle.y = 0;
 
});

window.addEventListener("mousemove", function(e){
  coords.x = e.clientX;
  coords.y = e.clientY;
  
});

function animateCircles() {
  
  let x = coords.x;
  let y = coords.y;
  
  circles.forEach(function (circle, index) {
    circle.style.left = x - 12 + "px";
    circle.style.top = y - 12 + "px";
    
    circle.style.scale = (circles.length - index) / circles.length;
    
    circle.x = x;
    circle.y = y;

    const nextCircle = circles[index + 1] || circles[0];
    x += (nextCircle.x - x) * 0.3;
    y += (nextCircle.y - y) * 0.3;
  });
 
  requestAnimationFrame(animateCircles);
}

animateCircles(); 



  return(
    <>
   <div className='body'>
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
    <FirstPage/>
    <Info elementti={document.getElementById('Info')}/>
 
 </div>
 </>
  ) 
  }

export default App


