import React from 'react'

function Stats() {
    return (  
        <div className='container p-3'>
            <div className='row p-5'>
                <div className='col-6 p-5'>
                    <h1 className='fs-2 mb-5'>Trust with confidence</h1>
                    <h2 className='fs-4 mb-5'>Customer-first always</h2>
                    <p className='text-muted'>That's why 1.3+ crore customers trust Zerodha with ₹3.5+ lakh corores worth of equality investments.</p>

                    <h2 className='fs-4'>No spam or gimmicks</h2>
                    <p className='text-muted'>No gimmicks,span "gamifiation", or annoying push notifactions.High quality apps tjat you use at your pace, the way you like.</p>

                     <h2 className='fs-4'>The Zerodha universe</h2>
                    <p className='text-muted'>Not just an app,but a whole ecosystem. Our investements in 30+ fintech startups offen you tailored services specific to you need.</p>

                    <h2 className='fs-5'>Do better with money</h2>
                    <p className='text-muted'>With initatives like Nudge and kill switch, we don't just faciliate transaction , but activity help you do better with your money.
                    </p>

                </div>
                <div className='col-6'>
                    <img src='media/images/ecosystem.png' style={{width:"90%"
                    }}></img>
                    <div className='text-center'>
                        <a href='' className='mx-5' style={{textDecoration:"none"}}>Explore our products <i className='fa  fa-long-arrow-right ' aria-hidden="true"></i></a>
                        <a href=''  style={{textDecoration:"none"}}>Try Kite doemo <i className='fa fa-long-arrow-right ' aria-hidden="true"></i></a>
                    </div>
                </div>
            </div>
        </div>
        
    );
}

export default  Stats;