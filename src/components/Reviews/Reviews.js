import React from 'react';

import Carousel from 'react-bootstrap/Carousel';

import './Reviews.css';


function Reviews(props) {
    return (
        <div className="container">
            <div className="reviews">
                <h1>REVIEWS</h1>
                <div  className="review-content">
                    <div className="left-top">"</div>
                    <div className="right-bottom">"</div>
                    <Carousel
                    controls={false}
                    indicators={false}
                    interval= "2000"
                    >
                    <Carousel.Item className="review-details">
                        <div className="review-single">
                        <div className="image-container">
                        <img src={require('../../assets/images/myself 1.svg').default} alt="Self" className="container-image"/>
                                </div>
                <div className="review-data">
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum posuere ornare dolor nullam eu tristique sodales. Porttitor ornare tristique porttitor etiam massa volutpat ut pellentesque in. Eu convallis tellus viverra euismod. Et laoreet diam sit mauris vestibulum, adipiscing porttitor sit nec. Purus scelerisque scelerisque pellentesque adipiscing. Tortor, dui quam at lorem elementum vel non donec in. Mi amet consectetur vel faucibus orci. Tincidunt eu neque commodo quis lobortis mattis. Enim pretium sodales consectetur volutpat ornare faucibus nunc, sit duis. Libero nunc vivamus etiam lectus ut viverra.
                    </p>
                    <span>
                        - Kwame Frimpong -
                    </span>
                </div>
                        </div>
                    </Carousel.Item> 
                    <Carousel.Item className="review-details">
                        <div className="review-single">
                        <div className="image-container">
                        <img src={require('../../assets/images/demetrius.jpeg').default} alt="Self" className="container-image"/>
                                </div>
                <div className="review-data">
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum posuere ornare dolor nullam eu tristique sodales. Porttitor ornare tristique porttitor etiam massa volutpat ut pellentesque in. Eu convallis tellus viverra euismod. Et laoreet diam sit mauris vestibulum, adipiscing porttitor sit nec. Purus scelerisque scelerisque pellentesque adipiscing. Tortor, dui quam at lorem elementum vel non donec in. Mi amet consectetur vel faucibus orci. Tincidunt eu neque commodo quis lobortis mattis. Enim pretium sodales consectetur volutpat ornare faucibus nunc, sit duis. Libero nunc vivamus etiam lectus ut viverra.
                    </p>
                    <span>
                        - Demetrius Nana Kojo -
                    </span>
                </div>
                        </div>
                    </Carousel.Item> 
                    <Carousel.Item className="review-details">
                        <div className="review-single">
                        <div className="image-container">
                        <img src={require('../../assets/images/shasha.jpg').default} alt="Self" className="container-image"/>
                                </div>
                <div className="review-data">
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum posuere ornare dolor nullam eu tristique sodales. Porttitor ornare tristique porttitor etiam massa volutpat ut pellentesque in. Eu convallis tellus viverra euismod. Et laoreet diam sit mauris vestibulum, adipiscing porttitor sit nec. Purus scelerisque scelerisque pellentesque adipiscing. Tortor, dui quam at lorem elementum vel non donec in. Mi amet consectetur vel faucibus orci. Tincidunt eu neque commodo quis lobortis mattis. Enim pretium sodales consectetur volutpat ornare faucibus nunc, sit duis. Libero nunc vivamus etiam lectus ut viverra.
                    </p>
                    <span>
                        - Tony Blay Shasha -
                    </span>
                </div>
                        </div>
                    </Carousel.Item> 
                    <Carousel.Item className="review-details">
                        <div className="review-single">
                        <div className="image-container">
                        <img src={require('../../assets/images/rex-1.jpeg').default} alt="Self" className="container-image"/>
                                </div>
                <div className="review-data">
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum posuere ornare dolor nullam eu tristique sodales. Porttitor ornare tristique porttitor etiam massa volutpat ut pellentesque in. Eu convallis tellus viverra euismod. Et laoreet diam sit mauris vestibulum, adipiscing porttitor sit nec. Purus scelerisque scelerisque pellentesque adipiscing. Tortor, dui quam at lorem elementum vel non donec in. Mi amet consectetur vel faucibus orci. Tincidunt eu neque commodo quis lobortis mattis. Enim pretium sodales consectetur volutpat ornare faucibus nunc, sit duis. Libero nunc vivamus etiam lectus ut viverra.
                    </p>
                    <span>
                        - Rex Larye -
                    </span>
                </div>
                        </div>
                    </Carousel.Item>   
                    </Carousel>
                </div>
            </div>
        </div>
    );
}

export default Reviews;