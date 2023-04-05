import Link from 'next/link';

export default function MainBanner() {


      
    return(
    <>  
        <section className="main-banner-section desktop-display-flex">
            <div className="main-banner-content">
                <h2>Helping Our Clients Drive <br/> Over $5.3B in Annual Revenue</h2>
                <h4>At OuterBox, we create winning SEO, paid search & digital marketing campaigns.</h4>
                <Link href=""><a className="btn-lg btn btn-secondary">Get Your Free Proposal » </a></Link>
            </div>
        </section>
    </>
    )
}