import React from 'react';

import { useHistory } from 'react-router';

import flyer from '../../assets/images/surface.svg';

import './flyer.css';
function Flyer(props) {
    const history=useHistory();
    return (
        <div className="flyer">
            <div className="container contain">
            <div className="flyer-details">
                <h1>Get Quality,Affordable<br/>& Reliable</h1>
                <p>Look no further, LAP|HOME got you covered <br/>invest and get the best you can imagine</p>
                <div onClick={()=>history.push("/categories")} className="flyer-btn" type="button">
                    <span>Welcome</span>
                </div>
            </div>
            <div className="flyer-image">
                <img src={flyer} alt="flyer"/>
            </div>
            </div>
        </div>
    );
}

export default Flyer;