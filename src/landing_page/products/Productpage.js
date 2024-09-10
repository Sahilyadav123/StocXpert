import React from 'react'
import RightSection from './RightSection';
import Universe from './Universe';
import LeftSection from './LeftSection';
import Hero from './Hero';
function Productpage() {
    return (
        <>
            <Hero />
            <LeftSection
                imageURL="media/images/kite.png"
                productName="Investopedia"
                productDescription="Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the  experience seamlessly on your Android and iOS devices."
                tryDemo=""
                learnmore=""
                googlePlay=""
                appStore=""
            />
            <RightSection
            imageURL="media/images/console.png"
            productName="Console"
            productDescription="The central dashboard for your StocXpert account. Gain insights into your trades and investments with in-depth reports and visualisations."
            learnmore=""

            />
            <LeftSection
                imageURL="media/images/coin.png"
                productName="Coin"
                productDescription="Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices."
                learnmore=""
                googlePlay=""
                appStore=""
            />
            <RightSection 
            imageURL="media/images/kiteconnect.png"
            productName="Investopedia API"
            productDescription="Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase."
            tryDemo=""
            learnmore=""
            />
            <LeftSection
                imageURL="media/images/varsity.png"
                productName="Varsity mobile"
                productDescription="An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go.."
                tryDemo=""
                learnmore=""
                googlePlay=""
                appStore=""
            />
            <p className='text-center mt-5 pt-5 fs-5'>Want to know more about our technology stack? Check out the StocXpert.tech blog.</p>
            <Universe />

        </>
    );
}

export default Productpage;