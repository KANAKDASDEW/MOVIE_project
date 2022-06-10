import React from 'react';
const Product = (props) => {
    const handleClick =() =>{
        console.log(props)
       props.history.push('/products');

    }
    return ( 
        <button onClick={handleClick}>Save a product</button>
     );
}
 
export default Product;