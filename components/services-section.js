import Image from 'next/image';
import {Container,Row,Col} from 'react-bootstrap';

export default function ServicesSection() {


      
    return(
    <>  
        <section className="services-section">
            <Container>
                <Row>
                <Col xl={4}>
                        <div className="marketing-content">
                            <h3>WE HELP COMPANIES <span> INCREASE SALES & GROW ONLINE.</span></h3>
                            <p>
                            OuterBox is a digital marketing agency with 18+ years of experience and a team of more than 125. Our flagship services include SEO, paid search marketing, Google Ads management, website design, eCommerce development, CRO and email marketing. With all of our services under one roof, we’re able to provide a cohesive approach to your online marketing campaign, driving the digital marketing results you deserve.

                            Need a professional website? We’re the agency for you. Want to be #1 on Google for the keywords your customers search most often? We’ve got you covered. Is custom eCommerce functionality a problem your business has yet to solve? Our developers are on it.
                            </p>
                        </div>
                    </Col>
                    <Col xl={8}>
                        <ul className="services-box-items">
                            <li>                        
                                <Image src='/services1.jpg' alt='logo' width={100} height={97}/>
                                <p>Search Engine Optimization (SEO)</p>
                            </li>
                            <li>                        
                                <Image src='/services2.jpg' alt='logo' width={100} height={97}/>
                                <p>Search Engine Optimization (SEO)</p>
                            </li>
                            <li>                        
                                <Image src='/services3.jpg' alt='logo' width={100} height={97}/>
                                <p>Search Engine Optimization (SEO)</p>
                            </li>
                            <li>                        
                                <Image src='/services4.jpg' alt='logo' width={100} height={97}/>
                                <p>Search Engine Optimization (SEO)</p>
                            </li>
                            
                        </ul>
                    </Col>
                </Row>
            </Container>    
        </section>
    </>
    )
}