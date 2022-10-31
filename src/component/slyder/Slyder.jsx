import React from 'react'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { slyderImg } from '../../asstes/data/data';
import "./slyder.css"

const Slyder = () => {
    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        arrows:false,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 992,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              dots: false,
            }
          }
        ]
      };
  return (
    <Slider {...settings}>
        {slyderImg.map((item,index)=>{
            return(
                <div key={index} >
                    <div className="slyderImg">
                        <img src={item.img} alt="" />
                    </div>
                </div>
            )
        })}
    </Slider>
  )
}

export default Slyder