import {Container,Row,Col} from 'react-bootstrap';
import Link from 'next/link';
import Image from 'next/image';

export default function PackagesSection() {
    
    return(
    <>  
        <section className="packages-section">
            <Container>
                <Row>
                    <Col xl={4}>
                        <div className="packages-card">
                            <h4 className="package-title">Basic Plan</h4>
                            <p className="package-description">Imperdiet arcu lobortis litora tincidunt pede at penatibus lectus cursus.</p>
                            <div className="package-price-div"><sup>$</sup> <div className="package-price-wrap"><span className="package-price">49</span><span className="package-month">MONTHLY</span></div></div>
                            <p className="text-center"></p>
                            <ul>
                                <li>Laoreet luctus amet</li>
                                <li>Adipiscing quisque inceptos</li>
                                <li>Risus ac netus</li>
                                <li>Faucibus aptent pellentesque</li>
                                <li>Ornare dolor tincidunt</li>
                            </ul>
                            <Link href=""><a className='btn btn-warning'>GET STARTED</a></Link>
                            <p className="text-center">*Viverra ullamcorper consectetuer interdum mus adipiscing ultrices elit felis et leo</p>
                        </div>
                    </Col>
                    <Col xl={4}>
                        <div className="packages-card">
                            <h4 className="package-title">Standard Plan</h4>
                            <p className="package-description">Imperdiet arcu lobortis litora tincidunt pede at penatibus lectus cursus.</p>
                            <div className="package-price-div"><sup>$</sup> <div className="package-price-wrap"><span className="package-price">79</span><span className="package-month">MONTHLY</span></div></div>
                            <p className="text-center"></p>
                            <ul>
                                <li>Laoreet luctus amet</li>
                                <li>Adipiscing quisque inceptos</li>
                                <li>Risus ac netus</li>
                                <li>Faucibus aptent pellentesque</li>
                                <li>Ornare dolor tincidunt</li>
                            </ul>
                            <Link href=""><a className='btn btn-warning'>GET STARTED</a></Link>
                            <p className="text-center">*Viverra ullamcorper consectetuer interdum mus adipiscing ultrices elit felis et leo</p>
                        </div>
                    </Col>
                    <Col xl={4}>
                        <div className="packages-card">
                            <h4 className="package-title">Premium Plan</h4>
                            <p className="package-description">Imperdiet arcu lobortis litora tincidunt pede at penatibus lectus cursus.</p>
                            <div className="package-price-div"><sup>$</sup> <div className="package-price-wrap"><span className="package-price">129</span><span className="package-month">MONTHLY</span></div></div>
                            <p className="text-center"></p>
                            <ul>
                                <li>Laoreet luctus amet</li>
                                <li>Adipiscing quisque inceptos</li>
                                <li>Risus ac netus</li>
                                <li>Faucibus aptent pellentesque</li>
                                <li>Ornare dolor tincidunt</li>
                            </ul>
                            <Link href=""><a className='btn btn-warning'>GET STARTED</a></Link>
                            <p className="text-center">*Viverra ullamcorper consectetuer interdum mus adipiscing ultrices elit felis et leo</p>
                        </div>
                    </Col>
                </Row>
            </Container>    
        </section>
    </>
    )
}