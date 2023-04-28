import React, { useState } from "react";
import Image from 'next/image';
import Link from 'next/link';
import {Container,Row,Col} from 'react-bootstrap';
import FsLightbox from "fslightbox-react";
export default function WhyChooseSection() {
    const [toggler3, setToggler3] = useState(false);
    return(
    <>  
        <section className="why-choose-section">
            <Container>
                <Row>
                    <Col xl={12}>
                        <div>
                            <p>Thrive is a full-service digital marketing agency. We’ve been 
                            providing a wide range of services to clients of all industries since 2005.
                            Our digital marketing services include consulting and management options for a variety of online
                            marketing tactics including search engine optimization (SEO), pay-per-click (PPC) ads, Amazon store 
                            optimization, copywriting, conversion rate optimization (CRO), and more. We also offer expert web 
                            design and development services for both eCommerce and B2B companies. Don’t just partner with any 
                            digital marketing agency; work with a company you can trust.</p>
                        </div>
                    </Col>
                    <Col xl={7}>
                            <h6>AI Isn’t for Words Only: Bing Image Creator Tool</h6>
                            <p>You might have a website, but it isn’t doing your business much good if it isn’t
                            being picked up by the search engines. To make sure customers find your site online, 
                            we can take your online presence to the next level -- your website design, copywriting, keywords,
                            social media presence and more. Working with us, you get the most from your return on marketing investment.</p>
                            <p><b>Here are some reasons why:</b></p>
                    </Col>
                    <Col xl={5}>
                        <div className="img-wrap">
                            <Image src='/thrive-video-static-img-1-1.jpg' alt='logo' width={780} height={292} onClick={() => setToggler3(!toggler3)} />
                            <FsLightbox
                                        toggler={toggler3}
                                        sources={[
                                            <iframe
                                                key="0cWlf1BmUMw"
                                                src="//www.youtube.com/embed/0cWlf1BmUMw?rel=0&amp;autoplay=1&mute=1"
                                                width="1920px"
                                                height="1080px"
                                                frameBorder="0"
                                                allow="autoplay; fullscreen"
                                                allowFullScreen
                                            />
                                        ]}
                                    />
                        </div>
                    </Col>
                    <Col xl={3}>
                        <div className="testimonial-card">
                            <div className="testimonial-client-img marci-review"></div>
                            <p><span className="client-name">Marci Wiersma</span></p>
                            <p>Broker - About Roatan Real Estate</p>
                            <p className="highlighted-text">“They do everything they say...no BS”</p>
                            <p>
                                “Thrive is a much needed blessing and exceeded our expectations in every way. 
                                They are honest, straightforward, they take care of ALL your needs quickly, they are reliable,
                                you can count on them and most of all, they do everything they say they will do, no BS.”
                            </p>
                            <Link href=""><a className="read-more-btn">Read More +</a></Link>
                        </div>
                    </Col>
                    <Col xl={3}>
                        <div className="testimonial-card">
                            <div className="testimonial-client-img marci-review"></div>
                            <p><span className="client-name">Marci Wiersma</span></p>
                            <p>Broker - About Roatan Real Estate</p>
                            <p className="highlighted-text">“They do everything they say...no BS”</p>
                            <p>
                                “Thrive is a much needed blessing and exceeded our expectations in every way. 
                                They are honest, straightforward, they take care of ALL your needs quickly, they are reliable,
                                you can count on them and most of all, they do everything they say they will do, no BS.”
                            </p>
                            <Link href=""><a className="read-more-btn">Read More +</a></Link>
                        </div>
                    </Col>
                    <Col xl={3}>
                        <div className="testimonial-card">
                            <div className="testimonial-client-img marci-review"></div>
                            <p><span className="client-name">Marci Wiersma</span></p>
                            <p>Broker - About Roatan Real Estate</p>
                            <p className="highlighted-text">“They do everything they say...no BS”</p>
                            <p>
                                “Thrive is a much needed blessing and exceeded our expectations in every way. 
                                They are honest, straightforward, they take care of ALL your needs quickly, they are reliable,
                                you can count on them and most of all, they do everything they say they will do, no BS.”
                            </p>
                            <Link href=""><a className="read-more-btn">Read More +</a></Link>
                        </div>
                    </Col>
                    <Col xl={3}>
                        <div className="testimonial-card">
                            <div className="testimonial-client-img marci-review"></div>
                            <p><span className="client-name">Marci Wiersma</span></p>
                            <p>Broker - About Roatan Real Estate</p>
                            <p className="highlighted-text">“They do everything they say...no BS”</p>
                            <p>
                                “Thrive is a much needed blessing and exceeded our expectations in every way. 
                                They are honest, straightforward, they take care of ALL your needs quickly, they are reliable,
                                you can count on them and most of all, they do everything they say they will do, no BS.”
                            </p>
                            <Link href=""><a className="read-more-btn">Read More +</a></Link>
                        </div>
                    </Col>
                </Row>
            </Container>    
        </section>
    </>
    )
}