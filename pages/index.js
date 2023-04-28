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
import RatingSection from '@components/rating-section';


export default function Home(props) {

  
  return (
    <div className="page-wrapper">
      <Meta
        pageTitle = 'Home'
      />


      <Header {...props}/>

        <main>
            <MainBanner bannerTitle = "RESULTS" innerTitlle = "DRIVEN" content = "DIGITAL MARKETING AGENCY."/>
            <RatingSection/>
            <SectionHeading
              heading="Our Clients"
              headingInner="Get Results"
            />
            <ClientVideoSection/>
            <ClientTestimonialSection/>
            <SectionHeading
              heading="Why Choose Thrive For Your"
              headingInner="Digital Marketing Agency?"
            />
            <WhyChooseSection/>
            <AwardWinningSection/>
            <OurCertificateSection/>
            <GrowthSection/>
            <SectionHeading
              heading="Our"
              headingInner="Digital Marketing Expertise"
            />
            <MarketingSection/>
            <BusinessContact/>

        </main>
      
      <Footer/>
    </div>
  )
}

