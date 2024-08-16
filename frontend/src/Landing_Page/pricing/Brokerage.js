import React from 'react'

function Brokerage() {
    return (
        <div className='container'>
            <div className='row p-5 mt-5 text-center border-top'>
                <div className='col-8 p-4'>
                    <a href='' style={{textDecoration:"none"}}><h3 className='fs-5  mb-5'>Brokerage calcualtor</h3></a>
                    <ul className='text-muted ' style={{textAlign:"left",lineHeight:"2.5", fontSize:"12px"}}>
                        <li>Call & Trade and RMS auto-squareoff:Additional charges of ₹50 + GST per order.</li>
                        <li>Digital contract note will be sent via e-mail.</li>
                        <li>Physical copies of contract notes, if require, shall be charged20 per constract note. Couier cahrges apply. ₹</li>
                        <li>For NRI account (non-PIS), 0.5% or ₹100 per executeed order for executed order equity (whichever is lower).</li>
                        <li>
                          For NRI account (PIS), 0% or ₹200 per executedorder for equity (whichever is lower).
                        </li>
                        <li>If th account is in debit balance, any order placed will be charged ₹40 per executed order instead of ₹20 per executed order.</li>
                    </ul>
                </div>
                <div className='col-4 p-4'>
                    <a href='' style={{textDecoration:"none"}}><h3 className='fs-5  mb-5'>List of chargers</h3></a>         
                </div>
            </div>
        </div>
    );
}

export default Brokerage;