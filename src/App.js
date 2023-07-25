import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar';
import Home from './Components/Home';

import Products from './Components/Products'
import Contact from './Components/Contact';
import About from './Components/About';
// import Footer from './Components/Footer';
import MenItems from './Pages/MenItems';
import WomenItems from './Pages/WomenItems';
import MWShoes from './Pages/MWShoes';
import Login from './Components/Login';
import SignUp from './Components/SignUp'

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route  path='/' element={<Home />}/>
        <Route  path='/product' element={<Products />}/>
        <Route  path='/contact' element={<Contact />}/>
        <Route  path='/about' element={<About />}/>
        <Route  path='/MItems' element={<MenItems />}/>
        <Route  path='/WItems' element={<WomenItems />}/>
        <Route  path='/MWItems' element={<MWShoes />}/>
        <Route  path='/login' element={<Login />}/>
        <Route  path='/signup' element={<SignUp />}/>
      </Routes>
      {/* <Footer /> */}
    </>
  );
}

export default App;
