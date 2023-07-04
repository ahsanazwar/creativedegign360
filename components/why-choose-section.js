import {Container,Row,Col} from 'react-bootstrap';
import Link from 'next/link';
import Image from 'next/image';

export default function WhyChooseSection() {
    
    return(
    <>  
        <section className="why-choose-section">
            <div className="why-pattern">
                <Image src='/why-section-pattern.png' alt='logo' width={92} height={200}/>
            </div>
            <Container>
                <Row className="align-items-center justify-content-around">
                    <Col xl={4}>
                        <p className='warning-text'>WHY CHOOSE US</p>
                        <h2>We are here for we always give you satisfaction.</h2>
                        <p>Pharetra ornare consequat ad ligula facilisis habitasse pretium sollicitudin natoque.
                        Ornare parturient hendrerit vulputate mi potenti per justo. </p>
                        <Link href=""><a className='btn btn-warning'>Learn More</a></Link>
                    </Col>
                    <Col xl={6}>
                        <ul className="why-choose-lists-content">
                            <li className="content-list-with-img">
                                <div className="img-wrap">
                                    <Image src='/certificate.png' alt='logo' width={80} height={80}/>
                                </div>
                                <div>
                                    <h5>Certified Professional & Expert</h5>
                                    <p>Ligula mattis mollis felis euismod diam conubia facilisi quam efficitur senectus luctus.</p>
                                </div>
                            </li>
                            <li className="content-list-with-img">
                                <div className="img-wrap">
                                    <Image src='/reliable.png' alt='logo' width={80} height={80}/>
                                </div>
                                <div>
                                    <h5>Were fast, Accurate & Reliable</h5>
                                    <p>Ligula mattis mollis felis euismod diam conubia facilisi quam efficitur senectus luctus.</p>
                                </div>
                            </li>
                            <li className="content-list-with-img">
                                <div className="img-wrap">
                                    <Image src='/support.png' alt='logo' width={80} height={80}/>
                                </div>
                                <div>
                                    <h5>24/7 Premium Support</h5>
                                    <p>Ligula mattis mollis felis euismod diam conubia facilisi quam efficitur senectus luctus.</p>
                                </div>
                            </li>
                            
                        </ul>
                    </Col>
                    
                </Row>
            </Container>    
        </section>
    </>
    )
}