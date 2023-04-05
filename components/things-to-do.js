import {Container,Row,Col} from 'react-bootstrap';
import Image from 'next/image';

export default function thingsToDO() {
    return(
        <section className="things-to-do-section">
            <Container>
                <Row>
                    <Col xl={12}>
                        <div className="sections-heading">
                            <h2>Things you need <span>to do</span></h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim rhoncus nibh pretium platea neque.</p>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col xl={4} lg={4} md={12}>
                       <div className="things-to-do-box things-orange-box">
                            <div className="things-to-do-img">
                                <Image className="img-fluid" src="/things-todo-1.svg" alt="" width={47} height={48}/>
                            </div>
                            <h5>Sign Up</h5>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut.</p>
                       </div>
                    </Col>
                    <Col xl={4} lg={4} md={12}>
                        <div className="things-to-do-box things-blue-box">
                            <div className="things-to-do-img">
                                <Image className="img-fluid" src="/things-todo-2.svg" alt="" width={46} height={48}/>
                            </div>
                            <h5>Update Your Profile</h5>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Semper.</p>
                        </div>  
                    </Col>
                    <Col xl={4} lg={4} md={12}>
                        <div className="things-to-do-box things-yellow-box">
                            <div className="things-to-do-img">
                                <Image className="img-fluid" src="/things-todo-3.svg" alt="" width={41} height={48}/>
                            </div>
                            <h5>List Your Item</h5>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </div>   
                    </Col>
                </Row>
            </Container>
        </section>
    )
}