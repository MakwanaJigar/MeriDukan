import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar';
import Home from './Components/Home';

import Products from './Components/Products'
import Contact from './Components/Contact';
import About from './Components/About';
import Footer from './Components/Footer';

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route  path='/' element={<Home />}/>
        <Route  path='/product' element={<Products />}/>
        <Route  path='/contact' element={<Contact />}/>
        <Route  path='/about' element={<About />}/>
      </Routes>
      {/* <Footer /> */}
    </>
  );
}

export default App;
