import Image from 'next/image';
import Link from 'next/link';
import {Container,Row,Col} from 'react-bootstrap';

export default function MarketingSection(props) {

    return(
    <>  
        <section className="marketing-section">
            <Container>
                <Row>
                    <Col xl={4} lg={4}>
                        <ul>
                            <li className="marketing-img"><Image src='/m1.png' alt='logo' width={69} height={65}/></li>
                            <li className="marketing-content">
                                <Link href=""><a> <h5>SEARCH ENGINE OPTIMIZATION SEO</h5></a></Link>
                                <p>
                                    Through careful keyword research and white hat practices, we can help 
                                    you achieve high rankings in the major search engines.
                                </p>
                            </li>
                        </ul>
                    </Col>
                    <Col xl={4} lg={4}>
                        <ul>
                            <li className="marketing-img"><Image src='/m2.png' alt='logo' width={69} height={65}/></li>
                            <li className="marketing-content">
                                <Link href=""><a> <h5>SEARCH ENGINE OPTIMIZATION SEO</h5></a></Link>
                                <p>
                                    Through careful keyword research and white hat practices, we can help 
                                    you achieve high rankings in the major search engines.
                                </p>
                            </li>
                        </ul>
                    </Col>
                    <Col xl={4} lg={4}>
                        <ul>
                            <li className="marketing-img"><Image src='/m3.png' alt='logo' width={69} height={65}/></li>
                            <li className="marketing-content">
                                <Link href=""><a> <h5>WEBSITE DESIGN & DEVELOPMENT </h5></a></Link>
                                <p>
                                    Through careful keyword research and white hat practices, we can help 
                                    you achieve high rankings in the major search engines.
                                </p>
                            </li>
                        </ul>
                    </Col>
                </Row>
                <Row>
                    <Col xl={4} lg={4}>
                        <ul>
                            <li className="marketing-img"><Image src='/m4.png' alt='logo' width={69} height={65}/></li>
                            <li className="marketing-content">
                                <Link href=""><a> <h5>PAY PER CLICK – PPC </h5></a></Link>
                                <p>
                                    Through careful keyword research and white hat practices, we can help 
                                    you achieve high rankings in the major search engines.
                                </p>
                            </li>
                        </ul>
                    </Col>
                    <Col xl={4} lg={4}>
                        <ul>
                            <li className="marketing-img"><Image src='/m5.png' alt='logo' width={69} height={65}/></li>
                            <li className="marketing-content">
                                <Link href=""><a> <h5>VIDEO PRODUCTION </h5></a></Link>
                                <p>
                                    Through careful keyword research and white hat practices, we can help 
                                    you achieve high rankings in the major search engines.
                                </p>
                            </li>
                        </ul>
                    </Col>
                    <Col xl={4} lg={4}>
                        <ul>
                            <li className="marketing-img"><Image src='/m6.png' alt='logo' width={69} height={65}/></li>
                            <li className="marketing-content">
                                <Link href=""><a> <h5>CONTENT WRITING </h5></a></Link>
                                <p>
                                    Through careful keyword research and white hat practices, we can help 
                                    you achieve high rankings in the major search engines.
                                </p>
                            </li>
                        </ul>
                    </Col>
                </Row>
                <Row>
                    <Col xl={4} lg={4}>
                        <ul>
                            <li className="marketing-img"><Image src='/m7.png' alt='logo' width={69} height={65}/></li>
                            <li className="marketing-content">
                                <Link href=""><a> <h5>REPUTATION MANAGEMENT </h5></a></Link>
                                <p>
                                    Through careful keyword research and white hat practices, we can help 
                                    you achieve high rankings in the major search engines.
                                </p>
                            </li>
                        </ul>
                    </Col>
                    <Col xl={4} lg={4}>
                        <ul>
                            <li className="marketing-img"><Image src='/m8.png' alt='logo' width={69} height={65}/></li>
                            <li className="marketing-content">
                                <Link href=""><a> <h5>CONVERSION OPTIMIZATION </h5></a></Link>
                                <p>
                                    Through careful keyword research and white hat practices, we can help 
                                    you achieve high rankings in the major search engines.
                                </p>
                            </li>
                        </ul>
                    </Col>
                    <Col xl={4} lg={4}>
                        <ul>
                            <li className="marketing-img"><Image src='/m9.png' alt='logo' width={69} height={65}/></li>
                            <li className="marketing-content">
                                <Link href=""><a> <h5>AMAZON MARKETING </h5></a></Link>
                                <p>
                                    Through careful keyword research and white hat practices, we can help 
                                    you achieve high rankings in the major search engines.
                                </p>
                            </li>
                        </ul>
                    </Col>
                </Row>
            </Container>    
        </section>
    </>
    )
}