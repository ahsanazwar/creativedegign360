import {Container,Row,Col} from 'react-bootstrap';

export default function SectionHeading(props) {

    return(
    <>  
        <section className="section-heading">
            <Container>
                <Row>
                    <Col xl={12}>
                        <h3>{props.heading} <span>{props.headingInner}</span></h3>
                    </Col>
                </Row>
            </Container>    
        </section>
    </>
    )
}