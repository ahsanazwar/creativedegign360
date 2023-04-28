import Image from 'next/image';
import {Container,Row,Col} from 'react-bootstrap';

export default function RatingSection(props) {

    return(
    <>  
        <section className="rating-section">
            <Container>
                <Row className="justify-content-md-center">
                    <Col xl={3}>
                        <div className="rating-box">
                            <div>
                                <Image src='/google-reviews-stats-new.svg' alt='logo' width={130} height={55}/>
                            </div>
                            <div>
                                <Image src='/social-review-item-new.svg' alt='logo' width={100} height={25}/>
                            </div>
                            <p>150+ Reviews</p>
                        </div>
                    </Col>
                    <Col xl={3}>
                        <div className="rating-box">
                            <div>
                                <Image src='/clutch-reviews-stats-new.svg' alt='logo' width={130} height={55}/>
                            </div>
                            <div>
                                <Image src='/social-review-item-new.svg' alt='logo' width={100} height={25}/>
                            </div>
                            <p>150+ Reviews</p>
                        </div>
                    </Col>
                    <Col xl={3}>
                        <div className="rating-box">
                            <div>
                                <Image src='/new-up-city-icon-01.png' alt='logo' width={130} height={55}/>
                            </div>
                            <div>
                                <Image src='/social-review-item-new.svg' alt='logo' width={100} height={25}/>
                            </div>
                            <p>150+ Reviews</p>
                        </div>
                    </Col>
                </Row>
            </Container>    
        </section>
    </>
    )
}