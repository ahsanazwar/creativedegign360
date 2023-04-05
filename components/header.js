import {Container,Row,Col} from 'react-bootstrap';
import Image from 'next/image';
import Link from 'next/link';

export default function Header(props) {


    return(
        <header className={props.scrollEvent}>
            <div className="header-top">
                <Container>
                    <Row>
                        <Col xl={12}>
                            <div className="header-nav">
                                <div className="head-site-logo">
                                    <Link href="/">
                                        <a><Image src='/logo-final.webp' alt='logo'
                                            width={260} height={80}
                                        /></a>
                                    </Link>
                                </div>
                                <div className="header-right-nav">
                                    <p className='head-tel'>Need an Expert Team? <Link href="tel:1-866-647-9218"><a> 1-866-647-9218</a></Link></p>
                                    <div className="header-right-nav-content">
                                        <div className="header-right-nav-img">
                                            <Image src='/designrush (1).webp' alt='logo'
                                                    width={132} height={39}
                                            />
                                        </div>
                                        <div className="header-right-nav-img">
                                            <Image src='/inc-500.webp' alt='logo'
                                                    width={50} height={39}
                                            />
                                        </div>
                                        <div className="header-right-nav-img">
                                            <Image src='/google-partner.webp' alt='logo'
                                                    width={83} height={35}
                                            />
                                        </div>
                                        <Link href=""><a className="btn btn-secondary">Get a Free Quote</a></Link>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
            <div className="header-bottom">
                <Container>
                    <Row>
                        <Col xl={12}>
                        <nav className="header-naviagations">
                                <ul className="header-naviagations-list">
                                    <li>
                                        <Link href=""><a className="">Digital Marketing</a></Link>
                                        <ul className="header-dropdown">

                                            <li>
                                                <Link href="">
                                                    <a>search engine optimization</a>
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
                                    </li>

                                    <li>
                                        <Link href=""><a className="">Website Design & Development</a></Link>
                                        <ul className="header-dropdown">

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
                                    </li>
                                    <li>
                                        <Link href=""><a className="">Branding</a></Link>
                                        <ul className="header-dropdown">

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
                                    </li>
                                    <li>
                                        <Link href=""><a className="">Social Media Marketing</a></Link>
                                        <ul className="header-dropdown">

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
                                    </li>
                                    
                                </ul>
                            </nav>
                        </Col>
                    </Row>
                </Container>
            </div>
        </header>
    )
}
