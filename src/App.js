import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ShopCategory from './Pages/ShopCategory';
import Shop from './Pages/Shop';
import Product from './Pages/Product';
import Cart from './Pages/Cart';
import LoginSignup from './Pages/LoginSignup';
import Footer from './Components/Footer/Footer';
//import Hero from './Components/Hero/Hero';
import men_banner from './Components/assests/banner_mens.png'
import women_banner from './Components/assests/banner_women.png'
import kid_banner from './Components/assests/banner_kids.png'

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        
        <Routes>
          <Route path='/' element={<Shop />} />
          <Route path='/men' element={<ShopCategory banner={men_banner} category="men" />} />
          <Route path='/womens' element={<ShopCategory banner={women_banner}category="womens" />} />
          <Route path='/kids' element={<ShopCategory banner={kid_banner} category="kids" />} />
          <Route path='/product' element={<Product/>}>
          <Route path=':productId' element={<Product/>}/>
          </Route>
          <Route path='/cart' element={<Cart />} />
          <Route path='/login' element={<LoginSignup />} />
          
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
// import React from 'react';
// import MenCategory from './Components/MenCategory';
// import WomenCategory from './WomenCategory';
// import KidsCategory from './Components/KidsCategory';
// import ShopProvider from './Context/ShopContext'; // Ensure this path is correct

// const App = () => (
//   <ShopProvider>
//     <MenCategory banner="path/to/banner.jpg" />
//     <WomenCategory banner="path/to/banner.jpg" />
//     <KidsCategory banner="path/to/banner.jpg" />
//   </ShopProvider>
// );

// export default App;
