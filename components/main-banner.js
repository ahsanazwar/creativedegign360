import Link from 'next/link';
import {Container,Row,Col} from 'react-bootstrap';
import Image from 'next/image';
export default function MainBanner(props) {

    // var btnproposal =  !props.btnProposal? props.btnProposal:true;
    return(
    <>  
        <section className="main-banner-section">
            {/* <div className="main-banner-content"> */}
            <div className="banner-pattern"><Image src='/banner-pattern.svg' alt='logo' width={800} height={850}/></div>
            <Container>
                <Row className='justify-content-between'>
                    <Col xl={5}>
                        <p className='warning-bg-text'>Premium Services</p>
                        <h2>You&lsquo;ve got a business, we have got brilliant minds.</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus,
                        luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                        <Link href=""><a className='btn btn-warning'>Get A Free Quote</a></Link>
                    </Col>
                    <Col xl={5}>
                        <div className="banner-right-img">
                            <Image src='/banner-frame-img.svg' alt='logo' width={780} height={500}/>
                        </div>
                    </Col>
                    
                </Row>
            </Container>
                {/* {props.imgUrl? <img src={props.imgUrl ?? ''}/> : ''}
                <h3>{props.bannerTitle} <span>{props.innerTitlle ?? ''}</span></h3>
                <h4>{props.content ?? ''}</h4>
                {!props.btnProposal?<Link href=""><a className="btn-lg btn btn-secondary">Get My Free Proposal » </a></Link>:''} */}
            {/* </div> */}
        </section>
    </>
    )
}