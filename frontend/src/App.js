import Home from './Pages/Home';
import Product from './Pages/Product';
import './Pages/cart';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ShopCategory } from './Pages/ShopCategory';
import { LoginSignup } from './Pages/LoginSignup';

function App() {
  return (
    <div >
      <BrowserRouter>
        {/* Remove or wrap comments in curly braces */}
        <Navbar/>
        <Routes>
          <Route path ='/' element ={<Home/>}/>
          <Route path ='/mens' element ={<ShopCategory category ="men"/>}/>
          <Route path ='/womens' element ={<ShopCategory category ="women"/>}/>
          <Route path ='/kids' element ={<ShopCategory category ="kid"/>}/>
          <Route path ="/product" element ={<Product/>}/>
          <Route path =':productID' element ={<Product/>}/>
          <Route path ='/cart' element ={<cart/>}/>
          <Route path ='/Login' element ={<LoginSignup/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;