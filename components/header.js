import {Container,Row,Col} from 'react-bootstrap';
import Image from 'next/image';
import Link from 'next/link';

export default function Header(props) {


    return(
        <header className={props.scrollEvent}>
            <div className="header-social">
                <Container>
                    <Row>
                        <Col xl={12}>
                            <div className="header-social-wrapper">
                                <ul className="header-contact-items">
                                    <li>
                                        <div className="img-wrap">
                                            <Image src='/email-icon.png' alt='logo' width={27} height={27}/>
                                        </div>
                                        <Link href="mailto:Info@creative360pro.com">
                                            <a>Info@creative360pro.com</a>
                                        </Link>  
                                    </li>
                                    <li>
                                        <div className="img-wrap">
                                            <Image src='/mobile-icon.png' alt='logo' width={27} height={27}/>
                                        </div>
                                        <Link href="tel:+1 973-553-4078">
                                            <a>+1 973-553-4078</a>
                                        </Link>  
                                    </li>
                                    <li>
                                        <div className="img-wrap">
                                            <Image src='/phone-icon.png' alt='logo' width={27} height={27}/>
                                        </div>
                                        <Link href="tel:+1 609-526-8045">
                                            <a>+1 609-526-8045</a>
                                        </Link>  
                                    </li>
                                    
                                </ul>
                                <ul className="header-social-items">
                                    <li>
                                        <Link href="">
                                            <a>
                                                <div className="img-wrap">
                                                    <Image src='/fb.svg' alt='logo' width={21} height={21}/>
                                                </div>
                                            </a>
                                        </Link>  
                                    </li>
                                    <li>
                                        <Link href="">
                                            <a>
                                                <div className="img-wrap">
                                                    <Image src='/linkedin.svg' alt='logo' width={21} height={21}/>
                                                </div>
                                            </a>
                                        </Link>  
                                    </li>
                                    <li>
                                        <Link href="">
                                            <a>
                                                <div className="img-wrap">
                                                    <Image src='/insta.svg' alt='logo' width={21} height={21}/>
                                                </div>
                                            </a>
                                        </Link>  
                                    </li>
                                </ul>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
            <div className="header-top">
                <Container>
                    <Row>
                        <Col xl={12}>
                            <div className="header-nav">
                                <div className="head-site-logo">
                                    <Link href="/">
                                        <a><Image src='/main-logo.svg' alt='logo'
                                            width={195} height={80}
                                        /></a>
                                    </Link>
                                </div>
                                <nav className="header-naviagations">
                                     <ul className="header-naviagations-list">
                                    <li>
                                        <Link href=""><a className="">Home</a></Link>
                                        {/* <ul className="header-dropdown">

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
                                            
                                        </ul> */}
                                    </li>

                                    <li>
                                        <Link href=""><a className="">About</a></Link>
                                    </li>
                                    <li>
                                        <Link href=""><a className="">Services</a></Link>
                                    </li>
                                    <li>
                                        <Link href=""><a className="">Our Packages</a></Link>
                                    </li>
                                    <li>
                                        <Link href=""><a className="">Blogs</a></Link>
                                    </li>
                                    <li>
                                        <Link href=""><a className="">Contact us</a></Link>
                                    </li>
                                    
                                    </ul>
                                </nav>
                                <div className="header-right-nav">
                                    <Link href=""><a className='btn btn-warning'> Get A Free Quote</a></Link>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </header>
    )
}
