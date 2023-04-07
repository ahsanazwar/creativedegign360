import Link from 'next/link';
import Image from 'next/image';
import {Container,Row,Col} from 'react-bootstrap';

export default function ClientSection() {


      
    return(
    <>  
        <section className="client-section">
            <Container>
                <Row>
                    <Col xl={6} md={6}>
                        <Image src='/section image.webp' alt='logo' width={790} height={450}
                        />
                    </Col>
                    <Col xl={6} md={6}>
                        <div className="client-content">
                            <h4>An In-House Digital Marketing Agency With 125+ Team Members. 500+ Clients Nationwide.</h4>
                            <p>At OuterBox, we’re a full-service digital marketing agency offering the best in website design, SEO, paid search marketing, and more. Our teams work together, creating synergy in your marketing campaigns, helping your brand to get the most out of your website every day. We have the ability to market your website through visual appeal, best-practice user-experience design, and SEO expertise to bring traffic to your professional website & online marketing tool, and convert them into customers.</p>
                            <Link href=""><a className="btn-lg btn btn-secondary">Get an Estimate For Your Project » </a></Link>
                        </div>
                    </Col>
                </Row>
            </Container>    
        </section>
    </>
    )
}