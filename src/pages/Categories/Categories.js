import React from 'react';

import { useHistory } from 'react-router';

import Search from '../../components/Search/Search';

import CatHp from './Cat-Hp';
import CatApple from './CatApple';
import './Categories.css';
function Categories(props) {
    const history=useHistory();
    return (
        <div className="container">
            <div className="categories">
                <section className="categories-content">
                    <h1>Categories</h1>
                    <h2>hp laptops</h2>
                    <div className="cat-section-hp">
                        <CatHp/>
                    </div>
                            <div type="button" onClick={()=>history.push('/hp')} className="product-more">
                                <span>Load More</span>
                            </div>
                    <h2>MacBook</h2>
                    <div className="cat-section-apple">
                        <CatApple/>
                    </div>
                            <div type="button" onClick={()=>history.push("/apple")} className="product-more">
                                <span>Load More</span>
                            </div>
                </section>
            </div>
        </div>
    );
}

export default Categories;