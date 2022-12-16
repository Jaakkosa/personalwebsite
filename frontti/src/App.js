import './index.css'
import { Dots } from './components/dots';
import { FirstPage } from './components/firstPage';
import { Info } from './components/selitys';


const App = () => {
document.title = "JaakkoSatuli"


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


