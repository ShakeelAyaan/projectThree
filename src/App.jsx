import {  Route,Routes, useNavigate} from 'react-router-dom'
import { Home } from './Pages/Home';
import  NewNavbar  from './Pages/NewNavbar';
import Footer from './Pages/Footer'
import AddToCard from './Pages/AddToCard';
import { Display } from './Pages/Display';
import './CSS/App.css'
import Login from './Pages/Login';
import SingIN from './Pages/SingIN';
import DisplayFetch from './Pages/DisplayFetch';
import Buynow from './Pages/Buynow';
import { AddToCardApi } from './Pages/AddToCardApi';
import AddToCardDisplya from './Pages/AddToCardDisplya';

const App = () => {

  function Science(){
  const Navigate = useNavigate()
    return <div>{Navigate('/') }</div>
  }   

  return (
          <div className='app'>
              <NewNavbar/>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/Display/:id' element={<Display />} />
                <Route path='/Displayfetch/:id' element={<DisplayFetch />} />
                <Route path='/Addtocard' element={<AddToCard />} />
                <Route path='/Addtocardapi' element={<AddToCardApi/>} />
                <Route path ='/Login' element={<Login />}/>
                <Route path='Login/SingIN' element={<SingIN />} />
                <Route path='Buynow' element={<Buynow />} />
                <Route path='AddToCardDisplya' element={<AddToCardDisplya />} />
                <Route path='*' element={<Science />}/>
            </Routes>
              <Footer/>
          </div>
          

  )
}

export default App;
// <Divider sx={{ marginTop: "9px", padding: "9px" }} />
