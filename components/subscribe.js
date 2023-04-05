
import Image from 'next/image';
import {Container,Row,Col,Button} from 'react-bootstrap';

export default function Footer() {
    return(
        <section className="subscribe-section">
            <Container>
                <Row>
                    <Col xl={12}>
                        <div className="subscribe-wrap">
                            <h2>Subscribe and get exclusive deals & offer</h2>
                            <form>
                                <input type="email" placeholder="Enter your mail"/>
                                <Button className="sub-btn" type="primary" shape="round" htmlType="submit"><span>Subscribe</span></Button>
                            </form>
                            <div className="sub-bottom-pattern">
                                <Image src="/sub-pattern1.svg" alt=""
                                width={480} height={324}
                                />
                            </div>
                            <div className="sub-top-pattern">
                                <Image src="/sub-pattern2.svg" alt=""
                                width={110} height={114}
                                />
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}