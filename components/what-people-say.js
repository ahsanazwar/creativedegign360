import React, {useState, useRef} from 'react';
import Image from 'next/image';
import {Container,Row,Col} from 'react-bootstrap';
import Slider from "react-slick";
import {SampleNextArrow,SamplePrevArrow} from '@functions/slider-arrows';


export default function WhatPeopleSay() {
    const sliderTestimonialText = {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
        arrows: true,
        infinite: false,
        swipe: false,
        fade: true,
        cssEase: 'linear',
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
      }
      const sliderTestimonialBox = {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
        arrows: false,
        infinite: false,
        swipe: false,
        fade: true,
        cssEase: 'linear',
        adaptiveHeight: true
      }
      const [nav1, setNav1] = useState();
      const [nav2, setNav2] = useState();
      const slider1 = useRef();
      const slider2 = useRef();
  return (
    <section className="what-people-section">
        <Container>
            <Row>
                <div className="testimonial-pattern">
                    <Image src="/testimonial-pattern.svg"
                    alt="" width={165} height={189}/>
                </div>
                {/* <img className="testimonial-pattern" src="testimonial-pattern.svg"/> */}
                <Col xl={6} lg={6} md={5}> 
                    <div className="sections-heading">
                        <h2>What people say<span>about Us.</span></h2>
                    </div>
                <Slider
                    className="testimonial-text-slider"
                    asNavFor={nav2}
                    ref={slider1 => setNav2(slider1)}
                    {...sliderTestimonialText}
                >
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Senectus a massa elementum sit congue blandit.</p>
                        <p>Lorem ipsum dolor sit amet</p>
                </Slider>
                </Col>
                <Col xl={6} lg={6} md={7}> 
                    <Slider
                        className="testimonial-box-slider"
                        asNavFor={nav1}
                        ref={slider2 => setNav2(slider2)}
                        {...sliderTestimonialBox}
                    >
                        <div>
                            <div className="testimonial-box-wrap">
                                <div  className="user-img"><Image src="/user.jpg" alt="" width={68} height={68}/></div>
                                <div className="testimonial-box">
                                    <p className="descrip-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nibh at volutpat morbi cras. At facilisi amet volutpat ut est quisque feugiat vitae.</p>
                                    <h6>Mike taylor</h6>
                                    <p className="place-text">Lahore, Pakistan</p>
                                </div>
                                <div className="testimonial-box testimonial-box-sec">
                                    <p className="descrip-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nibh at volutpat morbi cras. At facilisi amet volutpat ut est quisque feugiat vitae.</p>
                                    <h6>Chris Thomas</h6>
                                    <p className="place-text">CEO of Red Button</p>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="testimonial-box-wrap">
                                <div  className="user-img"><Image src="/user.jpg" alt="" width={68} height={68}/></div>
                                <div className="testimonial-box">
                                    <p className="descrip-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nibh at volutpat morbi cras. At facilisi amet volutpat ut est quisque feugiat vitae.</p>
                                    <h6>Chris Thomas</h6>
                                    <p className="place-text">CEO of Red Button</p>
                                </div>
                                <div className="testimonial-box testimonial-box-sec">
                                    <p className="descrip-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nibh at volutpat morbi cras. At facilisi amet volutpat ut est quisque feugiat vitae.</p>
                                    <h6>Mike taylor</h6>
                                    <p className="place-text">Lahore, Pakistan</p>
                                </div>
                            </div>
                        </div>
                    </Slider> 
                </Col>
            </Row>
        </Container>
    </section>  
  )
}
