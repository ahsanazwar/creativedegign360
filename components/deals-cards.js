import Image from 'next/image';
import Slider from "react-slick";
import { useEffect, useState } from 'react';
import Skeleton from 'react-loading-skeleton';
import {SampleNextArrow,SamplePrevArrow} from '@functions/slider-arrows';


  const settingsSliderImage = {
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    arrows: true,
    infinite: false,
    swipe: false,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
  }

export default function DealsCards(props){
    const [isLoading, setLoad] = useState(true);

    useEffect(()=>{
        setTimeout(()=>{
            setLoad(false);
        },2000)
    })

    return(
        <div className="deals-card">
            <div className="deas-img">
            {!isLoading?<Slider
                className="deals-image-slider"
                {...settingsSliderImage}
            >
                <Image className="img-fluid" src="/deal-1.jpg" 
                    alt="" width={356} height={290}
                />
                <Image className="img-fluid" src="/deal-1.jpg" alt="" width={356} height={290}/>
                <Image className="img-fluid" src="/deal-1.jpg" alt="" width={356} height={290}/>
            </Slider>: <Skeleton height={290}/>}
                <a className="btn btn-primary"><span>Book Now</span></a>
            </div>
            <div className="deals-content">
                <div className="deals-content-head">
                {!isLoading? <h5>{props.cardTitle}</h5> : <div><Skeleton  width={200} height={20} /></div>}
                {!isLoading? <div className="deals-rating"><p><span className="deals-star-img"><Image src="/star.svg" alt="" width={16} height={16}/></span> {props.rating}</p></div> : <Skeleton width={50} height={20}/>}
                </div>
                <div className="deals-content-footer">
                {!isLoading? <p className="deals-card-loc"><i className="icon-location-pin-grey"></i>{props.location}</p> : <Skeleton width={100} height={20}/>}
                    <div className="deals-price">
                    {!isLoading ? <p className="deals-actual-price"><strike>${props.actualPrice}</strike></p> : <Skeleton width={80} height={20}/>}
                    {!isLoading ? <p className="deals-discount-price">${props.discountedPrice}</p> : <Skeleton height={20}/>}
                    </div>
                </div>
            </div>
        </div>
    )
}