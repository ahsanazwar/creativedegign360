import Link from 'next/link';

export default function MainBanner(props) {


      
    return(
    <>  
        <section className="main-banner-section desktop-display-flex">
            <div className="main-banner-content">
                <h2>{props.bannerTitle} <span>{props.innerTitlle ?? ''}</span></h2>
                <h4>{props.content ?? ''}</h4>
                <Link href=""><a className="btn-lg btn btn-secondary">Get My Free Proposal » </a></Link>
            </div>
        </section>
    </>
    )
}