import Image from 'next/image';
import {Container,Row,Col} from 'react-bootstrap';

export default function WhySection() {

    return(
    <>  
        <section className="why-section">
            <Container>
                <Row>
                    <Col xl={12}>
                        <h3 className="text-center">Why OuterBox?</h3>
                    </Col>
                    <Col xl={4}>
                        <div className="why-box">
                            <div className="why-box-icon orange-icon dot-line1">
                                <Image src='/orange-graph.webp' alt='logo' width={49} height={51}/>
                            </div>
                            <h5>Results-Driven Marketing Creates Long Term Partnerships</h5>
                            <p>Relationships are built on trust, and collaboration toward a common goal. Everything we do at OuterBox is driven by one
                            goal: Delivering results to our clients. Whether its incoming leads or eCommerce sales, your bottom line is our bottom line.</p>
                        </div>
                    </Col>
                
                    <Col xl={4}>
                        <div className="why-box">
                            <div className="why-box-icon green-icon dot-line2">
                                <Image src='/green-lightbulb.webp' alt='logo' width={34} height={53}/>
                            </div>
                            <h5>Innovation Breeds New Ideas & Cutting-Edge Tactics</h5>    
                            <p>Online marketing, with a focus on eCommerce, is what we do. Since 2004, weve been leading the way with research, development, 
                            and implementation of sustainable strategies that drive business today, and preserve your online reputation for tomorrow.</p>
                        </div>
                    </Col>
                    
                    <Col xl={4}>
                        <div className="why-box">
                            <div className="why-box-icon blue-icon">
                                <Image src='/blue-trophy.webp' alt='logo' width={51} height={51}/>
                            </div>
                            <h5>Experience Delivers Proven Results & Winners</h5>
                            <p>As leaders in the online marketing and eCommerce website development space, we pool our experiences and knowledge base to your benefit.
                            When you work with OuterBox, you gain access to over 18+ years of focused, digital-only agency experience from over 125 employees. 
                            Try that with an in-house hire or freelancer.</p>
                        </div>
                    </Col>
                </Row>
            </Container>    
        </section>
    </>
    )
}