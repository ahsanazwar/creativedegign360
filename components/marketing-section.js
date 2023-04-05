import Image from 'next/image';
import {Container,Row,Col} from 'react-bootstrap';

export default function MarketingSection() {


      
    return(
    <>  
        <section className="marketing-section">
            <Container>
                <Row>
                <Col xl={7}>
                        <div className="marketing-content">
                            <h3>We're a Full Service Digital Marketing Company</h3>
                            <p>
                            At OuterBox, we’re one of the nation’s leading digital marketing agencies. We’ve been crushing competitors since 2004, helping our clients dominate digital marketing. With more than 4.66 billion internet users and growing, we know your online image, reputation, and marketing strategy is more important than ever.

                            Since inception, we’ve built OuterBox’s name on eCommerce. We’ve been rated the #1 eCommerce SEO services provider in the world and have an in-house eCommerce website design team. The combination of design, development, and marketing under one roof allows us to create integrated marketing campaigns, making the most of every dollar you spend. As an award-winning web design company, we lead the industry in designing & developing custom websites that not only look amazing but focus on driving leads and sales.

                            Our search marketing team offers proven SEO services to rank your website at the top of Google and other major search engines. We deliver the best Shopify SEO services, know the ins and outs of WordPress SEO, and are the SEO consultant you want on your team. In our 18+ years in business, we’ve worked across industries, from B2B SEO campaigns to B2C. We coordinate SEO seamlessly with your paid search efforts, offering Google Ads management, social media ads management, and email marketing services.

                            With your entire digital marketing strategy working in harmony, the growth you’ve only dreamed of is possible.
                            </p>
                        </div>
                    </Col>
                    <Col xl={5}>
                        <Image src='/portfolio-image.webp' alt='logo' width={591} height={696}
                        />
                    </Col>
                </Row>
            </Container>    
        </section>
    </>
    )
}