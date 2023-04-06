import Image from 'next/image';
import {Container,Row,Col} from 'react-bootstrap';

export default function PopulerArtices() {


      
    return(
    <>  
        <section className="populer-articles-section">
            <Container>
                <Row>
                    <Col xl={12}>
                        <h5 className="text-center">Popular Articles & Expert Guides</h5>
                    </Col>
                    <Col xl={4}>
                        <div className="populer-articles-box populer-blue" style={{ backgroundImage: 'url(ecommerce-website-features.png)'}}>
                            <h4>eCommerce Website Features</h4>
                            <p>The power of your eCommerce website often is behind the scenes. The ability to easily manage your content, 
                            run promotions, and keep content updated can determine your success. </p>
                        </div>
                    </Col>
                    <Col xl={4}>
                        <div className="populer-articles-box populer-green" style={{ backgroundImage: 'url(ecommerce-seo-guide.png)'}}>
                            <h4>eCommerce SEO Guide</h4>
                            <p>Commerce SEO is complex. With hundreds of categories, products, and landing pages,
                            where does an SEO campaign begin? Gain insights into our approach at making an SEO campaign successful.</p>
                        </div>
                    </Col>
                    <Col xl={4}>
                        <div className="populer-articles-box populer-orange" style={{ backgroundImage: 'url(seo-podcast-2.png)'}}>
                            <h4>Listen In: Search Authority Podcast</h4>
                            <p>Justin Smith (CEO) & Jason Dutt (President) discuss SEO and online marketing each week on Search Authority. Give it a listen!</p>
                        </div>
                    </Col>
                    <Col xl={4}>
                        <div className="populer-articles-box populer-orange" style={{ backgroundImage: 'url(website-pricing.png)'}}>
                            <h4>Website Pricing Guide: How Much Should a Website Project Cost?</h4>
                            <p>If youre looking to build a new website, youre probably wondering, How much does a new website cost? In this article well break it down!</p>
                        </div>
                    </Col>
                    <Col xl={4}>
                        <div className="populer-articles-box populer-blue" style={{ backgroundImage: 'url(ecommerce-website-features.png)'}}>
                            <h4>Is Guaranteed SEO Real? Learn the Truth.</h4>
                            <p>Some SEO companies will guarantee results, but what does that really mean and what does Google have to say about that? Dive into the world of 
                            guaranteed SEO rankings.</p>
                        </div>
                    </Col>
                    <Col xl={4}>
                        <div className="populer-articles-box populer-green" style={{ backgroundImage: 'url(seo-pricing-article.png)'}}>
                            <h4>SEO Pricing & Costs</h4>
                            <p>How much should SEO cost your business? In this pricing guide well get into the detail of SEO pricing and why agency prices can vary greatly.</p>
                        </div>
                    </Col>
                    
                </Row>
            </Container>    
        </section>
    </>
    )
}