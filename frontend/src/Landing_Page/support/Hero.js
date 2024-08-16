import React from 'react'

function Hero() {
    return (
        <section className='container-fluid ' id='SupportHero'>
            <div className=' p-5 ' id='supportWraper'>
                <h4 style={{marginLeft:"-80px"}}>Support Portal</h4>
                <a href='' style={{ color: "white" }}>Track Tickets</a>
            </div>
            <div className='row p-5 m-3'>
            <div className='col-6 p-5 secrch-position'>
                <h1 className='fs-3 ml-5 mb-3'>Search for an answer or browser help topics to create a ticket</h1>
                <input placeholder='Eg. how do I activate F&O'></input><br></br>
                <br></br>
                <a href=''>Ticket account opening</a>
                <a href=''>Track segement activation</a>
                <a href=''>Intraday,margins</a>
                <a href=''>Kite user manual</a>
            </div>
            <div className='col-6 p-5 secrch-position-features '>
            <h1 className='fs-3'>Featured</h1>
            <ol>
                <li><a href=''>Current Takeovers and Delisting - January 2024</a></li>
                <li><a href=''>Latest intraday leverage - MIS & CO</a></li>
            </ol>
            </div>
            </div>
        </section>
    );
}

export default Hero;