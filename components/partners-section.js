import {Container,Row,Col} from 'react-bootstrap';
import Image from 'next/image';

export default function PartnersSection() {


      
    return(
    <>  
        <section className="partners-section">
            <Container>
                <Row>
                    <Col xl={12}>
                        <ul>
                            <li>
                                <Image src='/inc500.webp' alt='logo'
                                    width={111} height={91}
                                />
                            </li>
                            <li>
                                <Image src='/top-rated-seo-agency.webp' alt='logo'
                                    width={156} height={124}
                                />
                            </li>
                            <li>
                                <Image src='/PremierBadgeClickable.svg' alt='logo'
                                    width={140} height={140}
                                />
                            </li>
                            <li>
                                <Image src='/clutch.webp' alt='logo'
                                    width={157} height={68}
                                />
                            </li>
                            <li>
                                <Image src='/designrush.webp' alt='logo'
                                    width={110} height={134}
                                />
                            </li>
                        </ul>
                    </Col>
                </Row>
            </Container>
        </section>
    </>
    )
}