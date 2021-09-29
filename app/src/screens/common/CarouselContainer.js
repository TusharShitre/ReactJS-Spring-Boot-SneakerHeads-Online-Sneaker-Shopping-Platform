import React from 'react';
import { Carousel } from 'react-bootstrap';

import banner1 from '../../assets/images/banner1.jpg';
import banner2 from '../../assets/images/banner2.jpg';
import banner3 from '../../assets/images/banner3.jpg';
import banner4 from '../../assets/images/banner4.jpg';
import banner5 from '../../assets/images/banner5.jpg';
import banner6 from '../../assets/images/banner6.jpg';

const CarouselContainer = () => {
    return (
        <Carousel fade={true} pause={false}>
  <Carousel.Item interval={0}>
    <img
      className="d-block w-100"
      src={banner1}
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>Nike</h3>
      <h2>AIR MAX 90 W ARCTIC PUNCH</h2>
      
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={2000}>
    <img
      className="d-block w-100"
      src={banner2}
      alt="Second slide"
    />
    <Carousel.Caption>
      <h3>Nike</h3>
  <h2>AIR JORDAN 7 ‘Paris Saint-Germain’</h2>
      
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={2000}>
    <img
      className="d-block w-100"
      src={banner3}
      alt="Third slide"
    />
    <Carousel.Caption>
      <h3>K-SWISS</h3>
      <h2> “WHY NOT” ZER0.3 COLOR</h2>
     
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={2000}>
    <img
      className="d-block w-100"
      src={banner4}
      alt="Third slide"
    />
    <Carousel.Caption>
      <h3>K-SWISS</h3>
      <h2> “WHY NOT” ZER0.3 COLOR</h2>
     
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={2000}>
    <img
      className="d-block w-100"
      src={banner5}
      alt="Third slide"
    />
    <Carousel.Caption>
      <h3>K-SWISS</h3>
      <h2> “WHY NOT” ZER0.3 COLOR</h2>
     
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={2000}>
    <img
      className="d-block w-100"
      src={banner6}
      alt="Third slide"
    />
    <Carousel.Caption>
      <h3>K-SWISS</h3>
      <h2> “WHY NOT” ZER0.3 COLOR</h2>
     
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
    )
}

export default CarouselContainer;