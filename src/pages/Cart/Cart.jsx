import React from 'react'
import { useStore } from '../../store/store';
import { Products } from '../../data/productsData';

const Cart = () => {
 const {cart} = useStore();
 const CartItems = cart.map(id =>
    Products.find(product => id == product.productId)
 ) 
  return (
    <div className='px-36'>
      {CartItems.map(item => (
        <div className='flex'>
        <img src={item.images[0]} alt="" className='w-20 ' />
        <div>
        <p>{item.title}</p>
        <button className='p-2 bg-green-500 rounded-full'>+</button>
        <button className='p-2 bg-green-500 rounded-full'>-</button>
        
        </div>
      </div>
      ))}
    </div>
  )
}

export default Cart