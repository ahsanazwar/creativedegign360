import Image from 'next/image';
import Link from 'next/link';
import {Container,Row,Col} from 'react-bootstrap';

export default function OurCertificateSection() {

    return(
    <>  
        <section className="our-certificate-section">
            <Container>
                <Row className="justify-content-md-center">
                    <Col xl={5} className="border-right">
                        <h3>OUR <span>CERTIFICATIONS</span></h3>
                        <div className="thrive-industry-certifications">
                            <ul>
                                <li className="haslink">
                                    <Link href="https://thriveagency.com/google-vip-partner-agency/" target="_blank">
                                        <a className="new-googlebadge"></a>
                                    </Link>    
                                </li>
                                <li className="haslink">
                                    <Link href="http://www.yext.com/" target="_blank">
                                        <a className="new-yextbadge"></a>
                                    </Link>
                                </li>
                                <li className="haslink">
                                    <Link href="https://thriveagency.com/web-marketing-services/shopify-web-designers/" target="_blank">
                                        <a className="new-shopifybadge"></a>
                                    </Link>
                                </li>
                                <li className="haslink">
                                    <Link href="https://learninglab.about.ads.microsoft.com/certification/membership-directory/?searchtext=Thrive%20Internet%20Marketing" target="_blank">
                                        <a className="new-bingbadge">
                                        </a>
                                    </Link>
                                </li>
                                <li className="haslink">
                                    <Link href="https://www.franchise.org/suppliers/thrive-agency" target="_blank">
                                        <a className="new-ifabadge"></a>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </Col>
                    <Col xl={5}>
                        <h3><span>FEATURED</span> IN</h3>
                        <div className="thrive-industry-certifications">
                            <ul>
                                <li className="new-businessbadge"></li>
                                <li className="new-forbesbadge"></li>
                                <li className="new-huffingtonbadge"></li>
                                <li className="new-mozbadge"></li>
                                <li className="new-sejbadge"></li>
                                <li className="new-semrush"></li>
                            </ul>
                        </div>
                    </Col>
                </Row>
            </Container>    
        </section>
    </>
    )
}