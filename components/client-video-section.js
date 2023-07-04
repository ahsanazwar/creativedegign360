
import React, { useState } from "react";
import Image from 'next/image';
import Link from 'next/link';
import {Container,Row,Col} from 'react-bootstrap';
import FsLightbox from "fslightbox-react";


export default function ClientVideoSection(props) {
    const [toggler, setToggler] = useState(false);
    const [toggler2, setToggler2] = useState(false);

    return(
    <>  
        <section className="client-video-section">
            <Container>
                <Row>
                    <Col xl={6} lg={6}>
                        <div className="client-video-box">
                            <Link href="">
                                <a>
                                    <Image src='/home-group-4865.png' alt='logo' width={780} height={382} onClick={() => setToggler(!toggler)}/>
                                    <FsLightbox
                                        key="video1"
                                        toggler={toggler}
                                        sources={[
                                            <iframe
                                                key="--5lHRSfLZg"
                                                src="//www.youtube.com/embed/--5lHRSfLZg?rel=0&amp;autoplay=1&mute=1"
                                                width="1920px"
                                                height="1080px"
                                                frameBorder="0"
                                                allow="autoplay; fullscreen"
                                                allowFullScreen
                                            />
                                        ]}
                                    />
                                </a>
                            </Link>
                            <div className="tagline">
                                <h3>&quot;The results speak for themselves&quot;</h3>
                            </div>
                            <div className="result-details">
                                <div className="client-result-txt">
                                    <div className="left-custom result-custom text-center">
                                        <p className="result_psntg">+664<sup>%</sup></p>
                                        <p>Organic Traffic</p>
                                    </div>
                                    <div className="result-custom text-center">
                                        <p className="result_psntg">+360<sup>%</sup></p>
                                        <p>Online Leads</p>
                                    </div>
                                </div>
                                <p>Thrive used SEO & PPC to increase the overall traffic to the new Farah website by +664%
                               and along with the new CRO focused Website were able to increase online leads by over +360%.</p>
                               <Link href="">
                                    <a>Read Farah’s Case Study »</a>
                                </Link>
                            </div>
                        </div>
                    </Col>
                    <Col xl={6} lg={6}>
                    <div className="client-video-box">
                            <Link href="">
                                <a>
                                    <Image src='/home-group-4865.png' alt='logo' width={780} height={382} onClick={() => setToggler2(!toggler2)}/>
                                    <FsLightbox
                                        toggler={toggler2}
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
                                </a>
                            </Link>
                            <div className="tagline">
                                <h3>&quot;The results speak for themselves&quot;</h3>
                            </div>
                            <div className="result-details">
                                <div className="client-result-txt">
                                    <div className="left-custom result-custom text-center">
                                        <p className="result_psntg">+664<sup>%</sup></p>
                                        <p>Organic Traffic</p>
                                    </div>
                                    <div className="result-custom text-center">
                                        <p className="result_psntg">+360<sup>%</sup></p>
                                        <p>Online Leads</p>
                                    </div>
                                </div>
                                <p>Thrive used SEO & PPC to increase the overall traffic to the new Farah website by +664%
                               and along with the new CRO focused Website were able to increase online leads by over +360%.</p>
                               <Link href="">
                                    <a>Read Farah’s Case Study »</a>
                                </Link>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>    
        </section>
    </>
    )
}