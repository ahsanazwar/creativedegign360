import {Container,Row,Col} from 'react-bootstrap';
import Image from 'next/image';
import Link from 'next/link';

export default function ServicesSection() {
    
    return(
    <>  
        <section className="services-section">
            <Container>
                <Row>
                    <Col xl={12}>
                        <p className="warning-text text-center">TOP SERVICES</p>
                        <h2 className="text-center">Choosing An Internet <br/> Marketing Company</h2>
                    </Col>
                    <Col xl={4}>
                        <div className="services-card">
                            <div className="img-wrap">
                                <Image src='/content-writing.png' alt='logo' width={65} height={65}/>
                            </div>
                            <h4>Content <br/> Writing</h4>
                            <p>Ligula mattis mollis felis euismod diam conubia facilisi quam efficitur senectus luctus.</p>
                            <div className="services-card-detail">
                                <h4>Content <br/> Writing</h4>
                                <p>Ligula mattis mollis felis euismod diam conubia facilisi quam efficitur senectus luctus.</p>
                                <Link href=""><a className='btn'>Learn More</a></Link>
                            </div>
                        </div>
                    </Col>
                    <Col xl={4}>
                        <div className="services-card">
                            <div className="img-wrap">
                                <Image src='/content-writing.png' alt='logo' width={65} height={65}/>
                            </div>
                            <h4>Content <br/> Writing</h4>
                            <p>Ligula mattis mollis felis euismod diam conubia facilisi quam efficitur senectus luctus.</p>
                            <div className="services-card-detail">
                                <h4>Content <br/> Writing</h4>
                                <p>Ligula mattis mollis felis euismod diam conubia facilisi quam efficitur senectus luctus.</p>
                                <Link href=""><a className='btn'>Learn More</a></Link>
                            </div>
                        </div>
                    </Col>
                    <Col xl={4}>
                        <div className="services-card">
                            <div className="img-wrap">
                                <Image src='/graphic-designer.png' alt='logo' width={65} height={65}/>
                            </div>
                            <h4>Graphic<br/>Designing</h4>
                            <p>Ligula mattis mollis felis euismod diam conubia facilisi quam efficitur senectus luctus.</p>
                            <div className="services-card-detail">
                                <h4>Graphic<br/>Designing</h4>
                                <p>Ligula mattis mollis felis euismod diam conubia facilisi quam efficitur senectus luctus.</p>
                                <Link href=""><a className='btn'>Learn More</a></Link>
                            </div>
                        </div>
                    </Col>
                    <Col xl={4}>
                        <div className="services-card">
                            <div className="img-wrap">
                                <Image src='/email-marketing.png' alt='logo' width={65} height={65}/>
                            </div>
                            <h4>Email <br/> Marketing</h4>
                            <p>Ligula mattis mollis felis euismod diam conubia facilisi quam efficitur senectus luctus.</p>
                            <div className="services-card-detail">
                                <h4>Email <br/> Marketing</h4>
                                <p>Ligula mattis mollis felis euismod diam conubia facilisi quam efficitur senectus luctus.</p>
                                <Link href=""><a className='btn'>Learn More</a></Link>
                            </div>
                        </div>
                    </Col>
                    <Col xl={4}>
                        <div className="services-card">
                            <div className="img-wrap">
                                <Image src='/web-design.png' alt='logo' width={65} height={65}/>
                            </div>
                            <h4>Web <br/> Designing</h4>
                            <p>Ligula mattis mollis felis euismod diam conubia facilisi quam efficitur senectus luctus.</p>
                            <div className="services-card-detail">
                                <h4>Web <br/> Designing</h4>
                                <p>Ligula mattis mollis felis euismod diam conubia facilisi quam efficitur senectus luctus.</p>
                                <Link href=""><a className='btn'>Learn More</a></Link>
                            </div>
                        </div>
                    </Col>
                    <Col xl={4}>
                        <div className="services-card">
                            <div className="img-wrap">
                                <Image src='/payperclick.png' alt='logo' width={65} height={65}/>
                            </div>
                            <h4>Pay Per<br/> Click</h4>
                            <p>Ligula mattis mollis felis euismod diam conubia facilisi quam efficitur senectus luctus.</p>
                            <div className="services-card-detail">
                                <h4>Pay Per<br/> Click</h4>
                                <p>Ligula mattis mollis felis euismod diam conubia facilisi quam efficitur senectus luctus.</p>
                                <Link href=""><a className='btn'>Learn More</a></Link>
                            </div>
                        </div>
                    </Col>
                    
                </Row>
            </Container>    
        </section>
    </>
    )
}