import logo from './logo.svg';
import './App.css';
import {Routes,Route} from "react-router-dom"
import { Home } from './Components/Home';
import { Product } from './Components/product';
import { ProductID } from './Components/productID';
import { Error } from './Components/errorPage';

function App() {
  return (
    <div className="App"> 
    {/* <Card/> */}
     <Routes>
       <Route path = "/" element = {<Home/>}/>
       <Route path = "/product" element = {<Product/>}/>
       <Route path = "/product/:id" element = {<ProductID/>}/>
       <Route path = "/error" element = {<Error/>}/>
     </Routes>
    </div>
  );
}

export default App;
