
import './App.css';
import Navigation from './comoponents/Navigationbar.component';
import Home from './comoponents/home.components';
import  Login  from './comoponents/login.component';
import Logout from './comoponents/logout.components';
import Signup from './comoponents/signup.component';
import Movieform from './comoponents/movieform.component';
import Movies from './comoponents/service/movies.component';
import Products from './comoponents/products.components';
import Product from './comoponents/product.component';
import Posts from './comoponents/posts.components';
import Admin from './comoponents/admin.component';
import { Route } from 'react-router-dom';
import { Routes } from 'react-router-dom';



function App() {
  
  return (
      <>
        
      <Navigation />
     
    
      <Routes>
      <Route path='/movies' element={<Movies/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/logout' element={<Logout/>}/>
      <Route path='/signup'element={<Signup/>}/>
      <Route path='/add-movie' element={<Movieform/>}/>
      <Route path='/Home' element={<Home/>}/>
      <Route path='/Product' element={<Product/>}/>
      <Route path='/Products/:id' element={<Products/>}/>
      <Route path='/Posts' element={<Posts/>}/>
      <Route path='/Admin' element={<Admin/>}/>
      
     
 
      </Routes>
     
      
     
       </>

  );
}

export default App;
