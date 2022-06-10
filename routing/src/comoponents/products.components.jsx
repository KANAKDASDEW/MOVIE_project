import React  from 'react';
import { Link } from 'react-router-dom'
const Products = () => {
    return ( 
        <div>
            <ul>
               <li> <Link to ='/products/1'>Product 1</Link> </li> 
               <li> <Link to ='/products/2'>Product 1</Link> </li> 
               <li> <Link to ='/products/3'>Product 1</Link> </li> 
            </ul>
        </div>

     );
}
 
export default Products;