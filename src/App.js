import { Route, Routes } from 'react-router-dom';
import './App.css';

// .......NAVBAR COMPONENTS IMPORTS HERE.......

import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Products from './Components/Products'
import Contact from './Components/Contact';
import About from './Components/About';
import Login from './Components/Login';
import SignUp from './Components/SignUp'

// ......FILTER PAGES IMPORTS HERE........

import MenItems from './Pages/MenItems';
import WomenItems from './Pages/WomenItems';
import MWShoes from './Pages/MWShoes';
import MenShirts from './Pages/MenShirts'
import WomenShirts from './Pages/WomenShirts';
import MenJeans from './Pages/MenJeans';
import WmenJeans from './Pages/WmenJeans';





function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route  path='/' element={<Home />}/>
        <Route  path='/product' element={<Products />}/>
        <Route  path='/contact' element={<Contact />}/>
        <Route  path='/about' element={<About />}/>
        <Route  path='/login' element={<Login />}/>
        <Route  path='/signup' element={<SignUp />}/>


        {/* ...........ROUTES OF FILTER PAGES .............. */}

              
        <Route  path='/MItems' element={<MenItems />}/>
        <Route  path='/WItems' element={<WomenItems />}/>
        <Route  path='/MWItems' element={<MWShoes />}/>
        
        <Route  path='/menshirts' element={<MenShirts />}/>
        <Route  path='/womenshirts' element={<WomenShirts />}/>

        <Route  path='/menjeans' element={<MenJeans />}/>
        <Route  path='/womenjeans' element={<WmenJeans />} />
        {/* <Route  path='/MWItems' element={<MWShoes />}/> */}

      </Routes>
      {/* <Footer /> */}
    </>
  );
}

export default App;
