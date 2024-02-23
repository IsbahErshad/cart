import React, {useState} from 'react'
import a from './a.avif'
import bb from './bb.avif'
import c from './c.avif'

const Varieties = () => {
    const [count,setCount] =useState(0);
const increment=()=>
{
setCount(count +1);
};

const decrement =() =>
{
  if(count>=1)
  {
    setCount(count-1);
  }
}
    const products=
    [
        {
            id:1,
            name:' WHITESHOE',
            price:'$399',
            size:'XS,S',
            qty:30,
            imge:a
        },
        {
            id:2,
            name:'SPORTS SHOE',
            price:'$589',
            size:'M,L',
            qty:44,
            imge:bb
         },
        {
            id:3,
            name:'BLACK SHOE',
            price:'$299',
            size:'XS,S,M,L,XL',
            qty:26,
            imge:c
        }
    ];
  return (
    <>
    {products.map((product, index)=>(
        <div key={product.id}>
        <h3>Name:{product.name}</h3>
        <p>Price:{product.price}</p>
        <p>size:{product.size}</p>
        <p> availQuantity:{product.qty}</p>

        <p><img src={product.imge} alt='img' className='imgStyle' width="200px" heigth="300px"/></p>
        <button className='btn' onClick={increment}>+</button>          
          <button className='btn' onClick={decrement}>-</button>          
          <p>Quantity:{count}</p>
        </div>
    ))}
    </>
  );
};

export default Varieties
