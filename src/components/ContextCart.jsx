import React, { useContext } from 'react'
import Items from './Items'
import {CartContext} from './Cart'

function ContextCart() {
  const {item,clearCart}=useContext(CartContext);
  if(item.length===0)
  {
    return(
      <>
      <header>
      <div className="continue-shopping">
        <img src="./images/arrow.png" alt="arrow" className="arrow-icon"/>
        <h3>continue shopping</h3>
      </div> 
      <div className="cart-icon">
        <img src="./images/cart.png" alt="cart"/>
        <p>0</p>
      </div>
    </header>
    <section className="main-cart-section">
      <h1>Shopping Cart</h1>
      <p className="total-items">You Have <span className="total-items-count">0</span> Items In Shopping Cart</p>
      <div className="cart-items">
        <div className="cart-items-container">
        
        {
          item.map((curItem)=>{
            return <Items key={curItem.id} {...curItem}/>
          })
        }
          
        </div>
      </div>  
    </section>    
    </>
    )
  }
  return (
    <>
    <header>
      <div className="continue-shopping">
        <img src="./images/arrow.png" alt="arrow" className="arrow-icon"/>
        <h3>continue shopping</h3>
      </div> 
      <div className="cart-icon">
        <img src="./images/cart.png" alt="cart"/>
        <p>7</p>
      </div>
    </header>
    <section className="main-cart-section">
      <h1>Shopping Cart</h1>
      <p className="total-items">You Have <span className="total-items-count">7</span> Items In Shopping Cart</p>
      <div className="cart-items">
        <div className="cart-items-container">
        
        {
          item.map((curItem)=>{
            return <Items key={curItem.id} {...curItem}/>
          })
        }
          
        </div>
      </div>

      <div className="card-total">
        <h3>Cart Total : <span>2200rs</span></h3>
        <button>Checkout</button>
        <button className="clear-cart" onClick={clearCart}>Clear Cart</button>
      </div>
    </section>
    </>
  )
}

export default ContextCart