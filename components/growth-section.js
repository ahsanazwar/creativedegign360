import Link from 'next/link';
import {Container,Row,Col} from 'react-bootstrap';

export default function GrowthSection() {

    return(
    <>  
        <section className="growth-section">
            <Container>
                <Row>
                    <Col xl={12}>
                        <div className="text-center">
                            <h3>Thrive <span>Growth Insider</span></h3>
                            <p>Join over 3,000 subscribers who get fresh content from us on a weekly basis.</p>
                        </div>
                    </Col>
                    <Col xl={4} lg={4}>
                        <div className="growth-card">
                            <h5>AI Isn’t for Words Only: Bing Image Creator Tool</h5>
                            <p>APRIL 11, 2023</p>
                            <p>On March 21, 2023, Bing and Microsoft Edge took their artificial intelligence or...</p>
                            <Link href=""><a className="read-more-btn">Read More +</a></Link>
                        </div>
                    </Col>
                    <Col xl={4} lg={4}>
                        <div className="growth-card">
                            <h5>AI Isn’t for Words Only: Bing Image Creator Tool</h5>
                            <p>APRIL 11, 2023</p>
                            <p>On March 21, 2023, Bing and Microsoft Edge took their artificial intelligence or...</p>
                            <Link href=""><a className="read-more-btn">Read More +</a></Link>
                        </div>
                    </Col>
                    <Col xl={4} lg={4}>
                        <div className="growth-card">
                            <h5>AI Isn’t for Words Only: Bing Image Creator Tool</h5>
                            <p>APRIL 11, 2023</p>
                            <p>On March 21, 2023, Bing and Microsoft Edge took their artificial intelligence or...</p>
                            <Link href=""><a className="read-more-btn">Read More +</a></Link>
                        </div>
                    </Col>
                    
                </Row>
            </Container>    
        </section>
    </>
    )
}