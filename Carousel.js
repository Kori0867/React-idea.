import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Carousel.css';

function Carousel() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          centerMode: false,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: false,
        }
      }
    ]
  };

  return (
    <div className="carousel-container">
      <h2>--Visitanos--</h2>
      <Slider {...settings}>
        <div className="carousel-item">
          <img src="https://www.techprintsac.com/wp-content/uploads/2015/10/Afinacio%CC%81nCarroBlogPost-OBD-II-780x431.png" alt="carousel item 1" />
        </div>
        <div className="carousel-item">
          <img src="https://iiammx.com/wp-content/uploads/2023/09/como-realizar-un-diagnostico-automotriz.jpg"  alt="carousel item 2"/>
        </div>
        <div className="carousel-item">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2QsHLMU31KSrEr_CiYpQSAqV11EaV4hXJ80Os1ioTcA&s"  alt="carousel item 3" />
        </div>
        
      </Slider>
    </div>
  );
}

export default Carousel;
