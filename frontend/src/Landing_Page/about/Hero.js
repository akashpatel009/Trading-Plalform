import React from 'react'

function Hero() {
    return (
        <div className='container'>
            <div className='row p-5 mb-5 mt-5'>
                <h1 className='fs-2 text-center'>We pioneered the discount broking model in India. <br></br>Now , we are breaking ground with our technology.</h1>
            </div>
            <div className='row p-5 mt-5 border-top text-muted ' style={{lineHeight:"1.8", fontSize:"1.2em"}}>
                <div className='col-6 p-5' >
                    <p>
                        We kick-started operations on the 15th of August, 2020 with the goal of breaking all bariers that traders and investers face in indaia in terms of cost, support and technology. We named the company Zerodha, a combiantion of Zero and "Rodha", the Sanskrit word barrier.</p>

                    <p>Today, our disruptive pricing models and in-house technology have made us the biggest stocks broker in india.</p>

                    <p>Over 1+ Crore clinets place millions of orders every day though our powerful ecosystem of investment platform, contributing over 15% of all Indian retail trading volumes.</p>
                </div>
                <div className='col-6 p-5'>
                    <p>In addition, we run a nimber of people open online education and communication intiatives to empower retail traders and investors.</p>

                    <p><a href='' style={{ textDecoration:"none"}}>Rainmatter</a>, our fintech fund and inculator, has invested in serval fintech startups with the goals of growing the Indians capital markets.</p>


                    <p> And yet, we are always up to something new every day. Catch up on the latest updates on our blog or see what 
                    the media is saying about us.  </p>
                </div>
            </div>
        </div>
    );
}

export default Hero;