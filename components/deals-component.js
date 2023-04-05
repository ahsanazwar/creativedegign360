import {Container,Row,Col} from 'react-bootstrap';
import {SkeletonTheme} from 'react-loading-skeleton';
import DealsCards from '@components/deals-cards';



export default function DealsComponent() {

 
    return(
        <section className="deals-section">
        <SkeletonTheme>   
            <Container>
                <Row>
                    <Col xl={12}>
                        <div className="sections-heading">
                            <h2>Exclusive<span>deals & discounts</span></h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim rhoncus nibh pretium platea neque.</p>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col xl={3} lg={4} md={6} >
                        <DealsCards 
                            cardTitle = "Cars"
                            rating = "4.4"
                            location = "Karachi"
                            actualPrice = "150"
                            discountedPrice = "120"

                        />
                    </Col>

                    <Col xl={3} lg={4} md={6} >
                        <DealsCards 
                            cardTitle = "Cars"
                            rating = "4.4"
                            location = "Karachi"
                            actualPrice = "150"
                            discountedPrice = "120"

                        />
                    </Col>

                    <Col xl={3} lg={4} md={6} >
                        <DealsCards 
                            cardTitle = "Cars"
                            rating = "4.4"
                            location = "Karachi"
                            actualPrice = "150"
                            discountedPrice = "120"

                        />
                    </Col>

                    <Col xl={3} lg={4} md={6} >
                        <DealsCards 
                            cardTitle = "Cars"
                            rating = "4.4"
                            location = "Karachi"
                            actualPrice = "150"
                            discountedPrice = "120"

                        />
                    </Col>

                    
                    
                </Row>
            </Container>
        </SkeletonTheme>     
        </section>
    )
}