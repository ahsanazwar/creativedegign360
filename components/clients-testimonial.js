import {Container,Row,Col} from 'react-bootstrap';

export default function ClientTestimonialSection() {

    return(
    <>  
        <section className="client-testimonial-section">
            <Container>
                <Row>
                    <Col xl={12}>
                        <div className="text-center">
                            <h3>What Our <span>Clients Are Saying</span></h3>
                        </div>
                    </Col>
                    <Col xl={4} lg={4}>
                        <div className="testimonial-card">
                            <div className="testimonial-client-img marci-review"></div>
                            <p><span className="client-name">Marci Wiersma</span></p>
                            <p>Broker - About Roatan Real Estate</p>
                            <p className="highlighted-text">“They do everything they say...no BS”</p>
                            <p>
                                “Thrive is a much needed blessing and exceeded our expectations in every way. 
                                They are honest, straightforward, they take care of ALL your needs quickly, they are reliable,
                                you can count on them and most of all, they do everything they say they will do, no BS.”
                            </p>
                        </div>
                    </Col>
                    <Col xl={4} lg={4}>
                        <div className="testimonial-card">
                            <div className="testimonial-client-img whitney-review"></div>
                            <p><span className="client-name">Whitney Wells Lewis</span></p>
                            <p>Practice Manager - PARC Urology</p>
                            <p className="highlighted-text">“These guys are incredible”</p>
                            <p>
                                “These guys are incredible. They&apos;ve helped us to grow our business and now the biggest problem we 
                                seem to come across is having too much business - which is the ideal problem to have. We are right 
                                where we wanted to be and Thrive made that possible. Thanks guys!”
                            </p>
                        </div>
                    </Col>
                    <Col xl={4} lg={4}>
                        <div className="testimonial-card">
                            <div className="testimonial-client-img chad-review"></div>
                            <p><span className="client-name">Chad Montgomery</span></p>
                            <p>CEO - Accurate Leak and Line</p>
                            <p className="highlighted-text">“Unrivaled customer support”</p>
                            <p>
                                “Working with the Thrive team has been a most pleasant experience! 
                                Their dedication and passion for what they do is exemplified by their unrivaled 
                                customer support and attentiveness to the specific needs of our business. We look 
                                forward to a long lasting and prosperous relationship!”
                            </p>
                        </div>
                    </Col>
                    
                </Row>
            </Container>    
        </section>
    </>
    )
}