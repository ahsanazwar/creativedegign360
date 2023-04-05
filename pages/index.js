// import Image from 'next/image'
// import styles from '../styles/Home.module.css'
import Meta from '@components/meta';


import Header from '@components/header';
import Footer from '@components/footer';
import MainBanner from '@components/main-banner';
import PartnersSection from '@components/partners-section';
import ClientSection from '@components/client-section';
import MarketingSection from '@components/marketing-section';
import ServicesSection from '@components/services-section';
import PlatformsPartners from '@components/platforms-partners';
import WhySection from '@components/why-creative';
import PopulerArtices from '@components/populer-articles';





export default function Home(props) {

  
  return (
    <div className="page-wrapper">
      <Meta
        pageTitle = 'Home'
      />


      <Header {...props}/>

        <main>
            <MainBanner/>
            <PartnersSection/>
            <ServicesSection/>
            <PlatformsPartners/>
            <ClientSection/>
            <PlatformsPartners/>
            <MarketingSection/>
            <WhySection/>
            <PopulerArtices/>
            <PartnersSection/>
        </main>
      
      <Footer/>
    </div>
  )
}
