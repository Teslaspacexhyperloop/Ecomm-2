// CarouselComponent.js
import React from 'react';
import { Carousel } from 'react-bootstrap';
import "../styles/Carousel.css";

const CarouselComponent = () => {
    return (
        <Carousel className='mycarousel'>
            <Carousel.Item>
                <img
                    className="d-block w-100 carousel-image"
                    src="/images/carousel7.jpg"
                    alt="First slide"
                />
                
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100 carousel-image"
                    src="/images/carousel2.jpg"
                    alt="Second slide"
                />
               
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100 carousel-image"
                    src="/images/carousel3.jpg"
                    alt="Third slide"
                />
               
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100 carousel-image"
                    src="/images/carousel6.jpg"
                    alt="Third slide"
                />
               
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100 carousel-image"
                    src="/images/carousel4.jpg"
                    alt="Third slide"
                />
               
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100 carousel-image"
                    src="/images/carousel5.jpg"
                    alt="Third slide"
                />
               
            </Carousel.Item>   
            <Carousel.Item>
                <img
                    className="d-block w-100 carousel-image"
                    src="/images/carousel1.jpg"
                    alt="First slide"
                />
                
            </Carousel.Item>         

        </Carousel>
    );
};

export default CarouselComponent;
