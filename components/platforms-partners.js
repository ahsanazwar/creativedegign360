import Slider from "react-slick";
import {Container,Row,Col} from 'react-bootstrap';
import {SampleNextArrow,SamplePrevArrow} from '@components/slider-arrows';
import Image from 'next/image';

export default function PlatformsPartners() {

    const sliderPlatformSlider = {
        slidesToShow: 4,
        slidesToScroll: 1,
        dots: false,
        arrows: true,
        infinite: true,
        swipe: false,
        variableWidth: true,
        autoplay: true,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
      }
      
    return(
    <>  
        <section className="platform-section">
            <Container>
                    <Row className="justify-content-center">
                        <Col xl={8}> 
                            <h4 className="text-center">We Partner With All Major Website Platforms</h4>
                            <Slider className="platform-slider" {...sliderPlatformSlider}>
                                <Image src='/shopify-logo.webp' alt='logo' width={175} height={50}/>
                                <Image src='/magento-logo.webp' alt='logo' width={175} height={50}/>
                                <Image src='/woocommerce-logo.jpg' alt='logo' width={175} height={50}/>
                                <Image src='/wordpress-logo.webp' alt='logo' width={175} height={50}/>
                                <Image src='/nopcommerce-logo.jpg' alt='logo' width={175} height={50}/>
                                <Image src='/sap-logo.webp' alt='logo' width={175} height={50}/>
                            </Slider>
                        </Col>
                    </Row>
            </Container>
        </section>
    </>
    )
}