import React,{useState} from 'react';

import { useDispatchCart } from '../../CartContext';
import Data from '../../Data';
import Search from '../../components/Search/Search';
import CartModal from '../../components/modal/CartModal';

import './Apple.css';
function Apple(props) {
    const [search,setSearch]=useState("");
    const dispatch = useDispatchCart();
    const [modalShow,setModalShow]=useState(false);

    const addToCart = (item) => {
    dispatch({ type: "ADD", item });
    };
    const filterData= Data.filter((item)=>item.id %2!==0);
    return (
        <div className="container">
            <div className="apple">
                <section className="apple-search">
                <div className="product-search">
                    <input type="text" className="search" onChange={(e)=>setSearch(e.target.value)} placeholder="Search..."/>
                </div>
                </section>
                <section className="apple-content">
                <h1>products</h1>
                <h2>MacBooks</h2>
                    {
                        filterData.filter((val)=>{
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
                </section>
            </div>
        </div>
    );
}

export default Apple;