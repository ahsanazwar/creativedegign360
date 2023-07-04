// import Image from 'next/image'
// import styles from '../styles/Home.module.css'
import Meta from '@components/meta';


import Header from '@components/header';
import Footer from '@components/footer';
import MainBanner from '@components/main-banner';
import AwardWinningSection from '@components/award-winning-section';
import GrowthSection from '@components/growth-section';
import ClientTestimonialSection from '@components/clients-testimonial';
import WhyChooseSection from '@components/why-choose-section';
import SectionHeading from '@components/section-heading';
import ClientVideoSection from '@components/client-video-section';
import OurCertificateSection from '@components/our-certificates';
import BusinessContact from '@components/business-contact';
import MarketingSection from '@components/marketing-section';
import WhoWeAre from '@components/who-we-are';
import BuildSection from '@components/build-section';
import PackagesSection from '@components/packages-section';
import ServicesSection from '@components/services-section';


export default function Home(props) {

  
  return (
    <div className="page-wrapper">
      <Meta
        pageTitle = 'Home'
      />


      <Header {...props}/>

        <main>
            <MainBanner bannerTitle = "RESULTS" innerTitlle = "DRIVEN" content = "DIGITAL MARKETING AGENCY."/>
            <AwardWinningSection/>
            <WhoWeAre/>
            <ServicesSection/>
            <BuildSection/>
            <WhyChooseSection/>
            <OurCertificateSection/>
            <BusinessContact/>
            <PackagesSection/>
        </main>
      
      {/* <Footer/> */}
    </div>
  )
}

