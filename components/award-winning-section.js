import Image from 'next/image';
import Link from 'next/link';
import {Container,Row,Col} from 'react-bootstrap';

export default function AwardWinningSection() {

    return(
    <>  
        <section className="award-winning-section">
            <Container>
                <Row>
                    <Col xl={12}>
                        <div className="text-center">
                            <h3>Award-winning digital <span>marketing agency</span></h3>
                            <p>Thrive is a WordPress web design and SEO company with proven results.</p>
                            <span><Link href=""><a className="read-more-btn">Read More +</a></Link></span>
                            <div className="img-wrap">
                                <Image src='/awardimage2020.jpg' alt='logo' width={1110} height={147}/>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>    
        </section>
    </>
    )
}