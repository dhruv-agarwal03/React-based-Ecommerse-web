import { Route, Routes } from "react-router-dom";
import Header from "./customer/header";
import Home from "./customer/home";
import Products from "./customer/products";
import Basket from "./customer/basket";
import Register from "./customer/register";
import Login from "./customer/login";
import About from "./customer/about";
import Query from "./customer/query";
import Footer from "./customer/footer";

function App() {
  return (
   <div>
    <Header/>
    <Routes>
    <Route path="/" element={< Home/> }/>
    <Route path="/products/:id" element={< Products/> }/>
    <Route path="/products" element={< Products/> }/>
    <Route path="/basket" element={< Basket/> }/>
    <Route path="/register" element={< Register/> }/>
    <Route path="/login" element={< Login/> }/>
    <Route path="/about" element={< About/> }/>
    <Route path="/query" element={< Query/> }/>
      
    </Routes>
    <Footer/>
    
   </div>
  );
}

export default (App);
