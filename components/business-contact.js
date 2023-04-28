import Link from 'next/link';
import {Container,Row,Col} from 'react-bootstrap';

export default function BusinessContact(props) {

    return(
    <>  
        <section className="business-contact-section">
            <Container>
                <Row>
                    <Col xl={12}>
                        <h3 className="text-center">READY TO <span>GROW YOUR BUSINESS?</span></h3>
                        <p className="text-center">Contact us to work with a results-driven digital marketing agency</p>
                        <div className="btn-box-wrap">
                            <Link href=""><a className="btn-lg btn btn-secondary">GET FREE PROPOSAL</a></Link>
                            <p>OR</p>
                            <Link href=""><a className="btn-lg btn btn-secondary bg-transparent">CALL 866.908.4748</a></Link>
                        </div>
                    </Col>
                </Row>
            </Container>    
        </section>
    </>
    )
}