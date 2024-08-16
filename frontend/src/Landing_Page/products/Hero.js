import React from 'react'

function Hero() {
    return (
        <div className='container text-center border-bottom mb-5'>
            <h1 className='mt-5'>Technology</h1>
            <h3 className=' text-muted mt-4 fs-4'>Sleek, modern and intutive trading platforms</h3>
            <p className='mt-5 mb-5 text-muted'>Check out our <a href='' style={{ textDecoration: "none" }}>investement offerings <i className='fa fa-long-arrow-right ' aria-hidden="true"></i></a> </p>
        </div>
    );
}

export default Hero;