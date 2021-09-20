import React,{useState} from "react";

import {useHistory} from 'react-router-dom';

import { useCart,useDispatchCart } from "../../CartContext";
import CheckOutModal from "../../components/modal/checkout";

import "./Cart.css";

const CartItem = ({ d, index, handleRemove }) => {
  return (
    <div>
        <article className="container cart">
      <div className="cart-content">
        <div className="cart-image">
          <img src={d.image} className="db w-100" alt="hello" />
        </div>
        <div className="cart-details">
          <h1 className="f6 f5-ns fw6 lh-title black mv0">{d.title}</h1>
          <h2 className="f6 fw4 mt2 mb0 black-60">{d.name}</h2>
          <div className="cart-price">
            <span className="clip"><b>Price</b></span>
            <div className="ml0">
              $
              {d.price}.00
            </div>
          </div>
          <button className="cart-del" onClick={() => handleRemove(index)}>delete</button>
        </div>
      </div>
    </article>
    </div>
    
  );
};

export default function Store() {
  const [modalShow,setModalShow]=useState(false);
  const items = useCart();
  const dispatch = useDispatchCart();
  const history=useHistory();

  const redirect=()=>{
    setModalShow(false);
    history.push("/");
  }
  const handleRemove = (index) => {
    dispatch({ type: "REMOVE", index });
  };
  const reducer =((total,d)=> total + d.price) ;
  const totalPrice = items.reduce(reducer,0);
  if (items.length === 0) {
    return (
      <main className="container cart-empty">
        <p>Cart is empty</p>
      </main>
    );
  }
  return (
    <main className="container">
      <div className="cart-title">
        <h1>your cart</h1>
      </div>
      <div className="cart-data">
      {items.map((item, index) => (
        <CartItem
          handleRemove={handleRemove}
          key={index}
          d={item}
          index={index}
        />
      ))}
      </div>
      <div>
    <div className="cart-total">
          <h5>
        Total price:{" "}
        </h5>
        <h6>
          $
        {totalPrice}.00
        </h6>
        
      <div type="button"className="cart-check-out" onClick={()=>setModalShow(true)}>
        <span>Check Out</span>
      </div>
      <CheckOutModal show={modalShow} onHide={redirect}/>
          </div>
    </div>
    </main>
  );
}
