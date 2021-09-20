import React,{useState} from 'react';

import { useHistory } from 'react-router';

import { useDispatchCart } from '../../CartContext';
import Data from '../../Data';
import CartModal from '../modal/CartModal';

import './Product.css';

function Product() {
    const [search,setSearch]=useState("");
    const dispatch = useDispatchCart();
    const [modalShow, setModalShow] = useState(false);
    const history=useHistory();
    const addToCart = (item) => {
    dispatch({ type: "ADD", item });
    };
    console.log(addToCart);
    const sliceData= Data.slice(0,3);
    return (
        <section className="container">
            <div className="product">
                <div className="product-search">
                    <input type="text" className="search" onChange={(e)=>setSearch(e.target.value)} placeholder="Search...."/>
                </div>
                <h1>products</h1>
                    {
                        sliceData.filter((val) => {
                            if(search === ""){
                                return val
                            }else if (val.name.toLocaleLowerCase().includes(search.toLocaleLowerCase())){
                                return val;
                            }else{
                                return null
                            } 
                        }).map((d,i)=>{
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
                    
                    <div className="product-more" type="button" onClick={()=>history.push('/categories')}>
                        <span>Load More</span>
                    </div>
            </div>
        </section>
    );
}

export default Product;