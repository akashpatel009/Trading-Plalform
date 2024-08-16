import React from 'react'
import Hero from './Hero';
import RightSection from './RightSection';
import LeftSection from './LeftSection';
import Universe from './Universe';

function ProductsPage() {
  return (
    <>
      <Hero />
      <LeftSection imageURL="media/images/kite.png" productName="Kite" 
      productDesription="Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, nad more. Enjoy the kite exprience seamlessly on your Android and 
      ios devices." 
      tryDemo=""  
      learnMore="" 
      googolePlay="" 
      appStore="" />

<RightSection imageURL="media/images/console.png" productName="Console" 
      productDesription="The central dashboard for your Zerodha account. Dain insights into trades and investments with in-depth reports and visualisations."  
      learnMore="" 
      googolePlay="" 
      appStore=""/>

<LeftSection imageURL="media/images/coin.png" productName="Coin" 
      productDesription="Buy direct mutual funds online, comission-free, delivered directly to your Demat account. Enjoy the investment expreience on your Android and iOS devices." 
      tryDemo="" 
      learnMore="" 
      googolePlay="" 
      appStore="" />
<RightSection imageURL="media/images/kiteconnect.png" productName="Kite Connect API" 
      productDesription="Build powerful trading platforms and experience with our super simple HTTp/JSON. If you are a startup, build your investment app and shoecase it ti our ckientbase." 
      learnMore="" 
      googolePlay="" 
      appStore=""/>
<LeftSection imageURL="media/images/varsity.png" productName="Varsity mobile" 
      productDesription="An easy to grsap, collection of stocks market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go." 
      tryDemo=""  
      learnMore="" 
      googolePlay="" 
      appStore="" />
      <p className='text-center'>
            Want to know more about our technology stack? Check out Zerodha.tech blog.
      </p>
      <Universe />
    </>
  );
}

export default ProductsPage;