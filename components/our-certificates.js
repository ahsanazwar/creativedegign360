import Image from 'next/image';
import Link from 'next/link';
import {Container,Row,Col} from 'react-bootstrap';
import Slider from "react-slick";
import {SampleNextArrow,SamplePrevArrow} from '@functions/slider-arrows';

export default function OurCertificateSection() {
    const sliderTestimonialText = {
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: false,
        arrows: true,
        infinite: true,
        swipe: true,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
      }

      const sliderTestimonialTextTwo = {
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: false,
        arrows: true,
        infinite: true,
        swipe: true,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
      }  

    return(
    <>  
        <section className="our-certificate-section">
            <Container>
                <Row className="justify-content-md-center">
                    <Col xl={5} className="border-right">
                        <h3>OUR <span>CERTIFICATIONS</span></h3>
                        <div className="thrive-industry-certifications">
                            <ul>
                                <Slider
                                    className="testimonial-text-slider"
                                    {...sliderTestimonialText}
                                >
                                    <li>
                                        <Image src='/google.png' alt='logo' width={185} height={80}/>
                                    </li>
                                    <li >
                                        <Image src='/ifa.png' alt='logo' width={185} height={80}/>
                                    </li>
                                    <li>
                                        <Image src='/microsof.png' alt='logo' width={185} height={80}/>
                                    </li>
                                    <li>
                                        <Image src='/shopify.png' alt='logo' width={185} height={80}/>
                                    </li>
                                    <li>
                                        <Image src='/yext-certified-partner.png' alt='logo' width={185} height={80}/>
                                    </li>
                                </Slider>
                            </ul>
                        </div>
                    </Col>
                    <Col xl={5}>
                        <h3><span>FEATURED</span> IN</h3>
                        <div className="thrive-industry-certifications">
                            <ul>
                                <Slider
                                    className="testimonial-text-slider"
                                    {...sliderTestimonialTextTwo}
                                >
                                    <li>
                                        <Image src='/business.png' alt='logo' width={185} height={80}/>
                                    </li>
                                    <li >
                                        <Image src='/moz.png' alt='logo' width={185} height={80}/>
                                    </li>
                                    <li>
                                        <Image src='/sej.png' alt='logo' width={185} height={80}/>
                                    </li>
                                    <li>
                                        <Image src='/semrush.png' alt='logo' width={185} height={80}/>
                                    </li>
                                    <li>
                                        <Image src='/the-hiffinger.png' alt='logo' width={185} height={80}/>
                                    </li>
                                </Slider>
                            </ul>
                        </div>
                    </Col>
                </Row>
            </Container>    
        </section>
    </>
    )
}