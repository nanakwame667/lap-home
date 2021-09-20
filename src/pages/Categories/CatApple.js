import React,{useState} from 'react';

import { useDispatchCart } from '../../CartContext';
import Data from '../../Data';
import CartModal from '../../components/modal/CartModal';

function CatApple(props) {
    const [modalShow,setModalShow]=useState(false);
    const dispatch = useDispatchCart();
    const addToCart = (item) => {
    dispatch({ type: "ADD", item });
    };
    const filterData= Data.filter((item)=>item.id %2!==0);
    const sliceData= filterData.slice(0,3);
    return (
        <div>
            {
                        sliceData.map((d,i)=>{
                            console.log(d.image)
                            return (
                                <div className="product-details" key={i}>
                                    <div className="product-image">
                                        <img src={d.image} alt=""/>
                                    </div>
                                    <div className="product-data">
                                        <h1>{d.name}</h1>
                                        <p>{d.details}</p>
                                        <span>Price ${d.price}</span>
                                        <div className="product-cart" type="button" onClick={() => {
                                            addToCart(d)
                                            setModalShow(true)
                                            }}>
                                            <span>Add Cart</span>
                                        </div>
                                        <CartModal show={modalShow} onHide={()=>setModalShow(false)}/>
                                    </div>
                                </div>
                            )
                        })
                    }
        </div>
    );
}

export default CatApple;