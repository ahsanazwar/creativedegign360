import Image from 'next/image';
import Link from 'next/link'
import {Container,Row,Col} from 'react-bootstrap';

export default function Footer() {
    return(
        <footer>
            <div className="main-footer">
                <Container>
                    <Row>
                        <Col xl={12} lg={12} md={12}>
                            <div className="footer-logo">
                                <Link href="/">
                                    <a>
                                        <Image className="img-fluid" src="/logo-final.webp" alt=""
                                        width={200} height={100}layout="fixed" objectFit="contain"
                                        />
                                    </a>
                                </Link>
                            </div>
                        </Col>
                    </Row>
                    <Row className="footer-navigation">
                        <Col xl={4} lg={4} md={4}>
                            <p className="footer-head"><Link href=""><a>Digital Marketing</a></Link></p>
                            <ul>
                                <li>
                                    <Link href="">
                                        <a>search engine optimization ho</a>
                                    </Link>    
                                </li>
                                <li>
                                    <Link href="">
                                        <a>search engine marketing</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="">
                                        <a>ppc and google ads</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="">
                                        <a>local seo</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="">
                                        <a>conversion rate optimization</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="">
                                        <a>email marketing</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="">
                                        <a>seo content writing</a>
                                    </Link>
                                </li>
                            </ul>
                        </Col>
                        <Col xl={3} lg={3} md={3}>
                            <p className="footer-head"><Link href=""><a>Website Design & Development</a></Link></p>
                            <ul>
                                <li>
                                    <Link href="">
                                        <a>custom wordpress website</a>
                                    </Link>    
                                </li>
                                <li>
                                    <Link href="">
                                        <a>business website</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="">
                                        <a>ecommerce website</a>
                                    </Link>
                                </li>
                            </ul>
                        </Col>
                        <Col xl={2} lg={2} md={2}>
                            <p className="footer-head"><Link href=""><a>Branding</a></Link></p>
                            <ul>
                                <li>
                                    <Link href="">
                                        <a>logo design</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="">
                                        <a>business profile design</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="">
                                        <a>flyer design</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="">
                                        <a>brochure design</a>
                                    </Link>
                                </li>                              
                            </ul>
                        </Col>
                        <Col xl={3} lg={3} md={3}>
                            <p className="footer-head"><Link href=""><a>Social Media Marketing</a></Link></p>
                            <ul>
                                <li>
                                    <Link href="">
                                        <a>social media management</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="">
                                        <a>social media advertisment</a>
                                    </Link>
                                </li>                             
                            </ul>
                        </Col>
                    </Row>
                </Container>
            </div>
            <div className="right-reserved">
                <p>Copyrights © 2016 - 2023 Creative Media. All Rights Reserved.</p>
            </div>
        </footer>
    )
}