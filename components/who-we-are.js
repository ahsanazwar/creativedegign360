import Link from 'next/link';
import {Container,Row,Col} from 'react-bootstrap';
import Image from 'next/image';


export default function WhoWeAre() {

    return(
    <>  
        <section className="who-we-are">
            <Container>
                <Row className='align-items-center'>
                    <Col xl={6}>
                        <div>
                            <Image src='/whoweare.svg' alt='logo' width={760} height={540}/>
                        </div>
                    </Col>
                    <Col xl={5}>
                        <p className='warning-text'>WHO WE ARE</p>
                        <h2>Real people delivering real results.</h2>
                        <p>Pharetra ornare consequat ad ligula facilisis habitasse 
                           pretium sollicitudin natoque. Ornare parturient hendrerit vulputate
                           mi potenti per justo. </p>
                        <ul>
                            <li className="content-list-with-img">
                                <div className="img-wrap">
                                    <Image src='/marketing.png' alt='logo' width={50} height={50}/>
                                </div>
                                <div>
                                    <h5>Marketing Agency</h5>
                                    <p>Ligula mattis mollis felis euismod diam conubia facilisi quam efficitur senectus luctus.</p>
                                </div>
                            </li>
                            <li className="content-list-with-img">
                                <div className="img-wrap">
                                    <Image src='/seo.png' alt='logo' width={50} height={50}/>
                                </div>
                                <div>
                                    <h5>SEO Services</h5>
                                    <p>Ligula mattis mollis felis euismod diam conubia facilisi quam efficitur senectus luctus.</p>
                                </div>
                            </li>
                        </ul>   
                    </Col>
                    
                </Row>
            </Container>    
        </section>
    </>
    )
}